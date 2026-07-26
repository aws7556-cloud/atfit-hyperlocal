import express from "express";
import path from "path";
import http from "http";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { INITIAL_COACHES, POPULAR_SOCIETIES } from "./src/data";
import { Coach, TrialBooking, CoachApplication, SocietyInquiry } from "./src/types";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;
  const httpServer = http.createServer(app);

  app.use(express.json());

  // In-memory data storage (simulating database for trial bookings, coach applications, inquiries)
  let coachesData: Coach[] = [...INITIAL_COACHES];
  let trialBookings: TrialBooking[] = [
    {
      id: "TB-9012",
      parentName: "Siddharth Rao",
      parentPhone: "+91 98765 43210",
      parentEmail: "siddharth.rao@example.com",
      childName: "Aarav Rao",
      childAge: 8,
      societyName: "Prestige Shantiniketan",
      coachId: "ATFIT-101",
      coachName: "Rohan Sharma",
      activity: "Chess",
      selectedSlot: "Mon & Wed 04:30 PM - 05:30 PM",
      amountPaid: 99,
      paymentStatus: "Completed",
      bookingDate: new Date().toLocaleDateString(),
    },
  ];

  let coachApplications: CoachApplication[] = [
    {
      id: "APP-501",
      fullName: "Karan Malhotra",
      email: "karan.skate@example.com",
      phone: "+91 91234 56789",
      category: "Sports",
      subCategory: "Skating",
      experienceYears: 4,
      preferredSocieties: "Palm Meadows, Adarsh Palm Retreat",
      certificationsDetail: "State Level Roller Skating Champion & Certified Trainer",
      status: "Under Review",
      appliedAt: new Date().toLocaleDateString(),
    },
  ];

  let societyInquiries: SocietyInquiry[] = [];

  // Lazy Gemini Client
  function getGeminiClient() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: { "User-Agent": "atfit-app" },
      },
    });
  }

  // API 1: Health check
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      service: "ATFIT Hyperlocal Skill Coaching API",
      timestamp: new Date().toISOString(),
    });
  });

  // API 2: Get Societies list
  app.get("/api/societies", (_req, res) => {
    res.json({
      success: true,
      societies: POPULAR_SOCIETIES,
    });
  });

  // API 3: Get Coaches with filtering
  app.get("/api/coaches", (req, res) => {
    const { category, society, search } = req.query;

    let filtered = coachesData.filter((c) => c.status === "Active");

    if (category && category !== "All") {
      filtered = filtered.filter(
        (c) => c.category.toLowerCase() === (category as string).toLowerCase()
      );
    }

    if (society && society !== "All") {
      filtered = filtered.filter((c) =>
        c.assignedSocieties.some(
          (s) => s.toLowerCase() === (society as string).toLowerCase()
        )
      );
    }

    if (search) {
      const q = (search as string).toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.subCategory.toLowerCase().includes(q) ||
          c.title.toLowerCase().includes(q) ||
          c.assignedSocieties.some((s) => s.toLowerCase().includes(q))
      );
    }

    res.json({
      success: true,
      count: filtered.length,
      coaches: filtered,
    });
  });

  // API 4: Get Coach by ID
  app.get("/api/coaches/:id", (req, res) => {
    const coach = coachesData.find(
      (c) => c.id.toLowerCase() === req.params.id.toLowerCase()
    );
    if (!coach) {
      res.status(404).json({ success: false, error: "Coach not found" });
      return;
    }
    res.json({ success: true, coach });
  });

  // API 5: Verification Lookup Tool (Public QR / Code search)
  app.get("/api/verify-coach", (req, res) => {
    const code = (req.query.code as string || "").trim().toUpperCase();
    if (!code) {
      res.status(400).json({ error: "Please provide a Coach ID or QR code" });
      return;
    }

    const coach = coachesData.find(
      (c) => c.id.toUpperCase() === code || c.badgeCode.toUpperCase() === code || c.name.toUpperCase().includes(code)
    );

    if (!coach) {
      res.json({
        found: false,
        message: `No verified ATFIT coach record matches ID: "${code}". Please check the badge code printed on the physical ID card.`,
      });
      return;
    }

    res.json({
      found: true,
      verificationRecord: {
        id: coach.id,
        badgeCode: coach.badgeCode,
        fullName: coach.name,
        title: coach.title,
        category: coach.category,
        subCategory: coach.subCategory,
        verifiedSince: coach.verifiedSince,
        status: coach.status,
        avatarUrl: coach.avatarUrl,
        certifications: coach.certifications,
        assignedSocieties: coach.assignedSocieties,
        isPoliceVerified: true,
        isAadhaarVerified: true,
        isSkillEvaluated: true,
      },
    });
  });

  // API 6: Book Trial Session (Rs. 99)
  app.post("/api/trials/book", (req, res) => {
    const {
      parentName,
      parentPhone,
      parentEmail,
      childName,
      childAge,
      societyName,
      coachId,
      selectedSlot,
    } = req.body;

    if (!parentName || !parentPhone || !childName || !societyName || !coachId) {
      res.status(400).json({ error: "Missing required booking details." });
      return;
    }

    const coach = coachesData.find((c) => c.id === coachId);
    if (!coach) {
      res.status(404).json({ error: "Coach not found." });
      return;
    }

    const newBooking: TrialBooking = {
      id: `TB-${Math.floor(1000 + Math.random() * 9000)}`,
      parentName,
      parentPhone,
      parentEmail: parentEmail || `${parentName.toLowerCase().replace(/\s+/g, '')}@example.com`,
      childName,
      childAge: Number(childAge) || 7,
      societyName,
      coachId: coach.id,
      coachName: coach.name,
      activity: coach.subCategory,
      selectedSlot: selectedSlot || "Mon & Wed 04:30 PM",
      amountPaid: 99,
      paymentStatus: "Completed",
      bookingDate: new Date().toLocaleDateString(),
    };

    trialBookings.unshift(newBooking);

    res.json({
      success: true,
      message: "Trial Session Booked Successfully!",
      booking: newBooking,
      instructions: `Your trial pass has been generated. Coach ${coach.name} will meet ${childName} at ${societyName}'s clubhouse/ground for the slot: ${newBooking.selectedSlot}.`,
    });
  });

  // API 7: Coach Onboarding Application
  app.post("/api/coach-apply", (req, res) => {
    const {
      fullName,
      email,
      phone,
      category,
      subCategory,
      experienceYears,
      preferredSocieties,
      certificationsDetail,
    } = req.body;

    if (!fullName || !email || !phone || !category || !subCategory) {
      res.status(400).json({ error: "Please fill out all required fields." });
      return;
    }

    const application: CoachApplication = {
      id: `APP-${Math.floor(100 + Math.random() * 900)}`,
      fullName,
      email,
      phone,
      category,
      subCategory,
      experienceYears: Number(experienceYears) || 3,
      preferredSocieties: preferredSocieties || "Whitefield societies",
      certificationsDetail: certificationsDetail || "State level experience",
      status: "Under Review",
      appliedAt: new Date().toLocaleDateString(),
    };

    coachApplications.unshift(application);

    res.json({
      success: true,
      message: "Application submitted! Our background check team will contact you within 24 hours.",
      application,
    });
  });

  // API 8: Society Partnership Inquiry
  app.post("/api/society-partner", (req, res) => {
    const {
      societyName,
      representativeName,
      roleInCommittee,
      phone,
      email,
      flatCount,
      locationArea,
      notes,
    } = req.body;

    if (!societyName || !representativeName || !phone) {
      res.status(400).json({ error: "Society name, representative name, and phone are required." });
      return;
    }

    const inquiry: SocietyInquiry = {
      id: `SOC-${Math.floor(100 + Math.random() * 900)}`,
      societyName,
      representativeName,
      roleInCommittee: roleInCommittee || "RWA Member",
      phone,
      email: email || "committee@society.com",
      flatCount: Number(flatCount) || 500,
      locationArea: locationArea || "Bengaluru",
      notes: notes || "Interested in launch deck",
      createdAt: new Date().toLocaleDateString(),
    };

    societyInquiries.unshift(inquiry);

    res.json({
      success: true,
      message: "Thank you! An ATFIT Partnership Lead will schedule a 15-minute briefing with your society committee.",
      inquiry,
    });
  });

  // API 9: Admin endpoints (View all data & toggle coach active/suspended status)
  app.get("/api/admin/overview", (_req, res) => {
    res.json({
      coaches: coachesData,
      trialBookings,
      coachApplications,
      societyInquiries,
    });
  });

  app.post("/api/admin/toggle-coach-status", (req, res) => {
    const { coachId, newStatus } = req.body;
    const coach = coachesData.find((c) => c.id === coachId);
    if (!coach) {
      res.status(404).json({ error: "Coach not found" });
      return;
    }

    coach.status = newStatus as 'Active' | 'Under Review' | 'Suspended';
    res.json({ success: true, coach });
  });

  app.post("/api/admin/approve-application", (req, res) => {
    const { appId } = req.body;
    const appRecord = coachApplications.find((a) => a.id === appId);
    if (!appRecord) {
      res.status(404).json({ error: "Application not found" });
      return;
    }

    appRecord.status = "Active";

    // Create new active coach from approved application
    const newCoach: Coach = {
      id: `ATFIT-${Math.floor(107 + Math.random() * 80)}`,
      name: appRecord.fullName,
      title: `Certified ${appRecord.subCategory} Coach`,
      category: appRecord.category,
      subCategory: appRecord.subCategory,
      experienceYears: appRecord.experienceYears,
      rating: 5.0,
      reviewsCount: 1,
      verifiedSince: new Date().toLocaleDateString(),
      status: "Active",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      actionPhotos: [
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
      ],
      bio: `Newly verified ATFIT coach for ${appRecord.subCategory} with ${appRecord.experienceYears} years experience.`,
      certifications: [appRecord.certificationsDetail, "Background Verification Complete"],
      assignedSocieties: appRecord.preferredSocieties.split(",").map((s) => s.trim()),
      availableSlots: [
        {
          id: `s-new`,
          day: "Mon & Wed",
          time: "05:00 PM - 06:00 PM",
          society: appRecord.preferredSocieties.split(",")[0] || "Prestige Shantiniketan",
          maxKids: 8,
          bookedKids: 0,
        },
      ],
      trialPrice: 99,
      monthlyPriceStarter: 399,
      monthlyPriceStandard: 699,
      monthlyPricePremium: 999,
      badgeCode: `ATFIT-${Math.floor(107 + Math.random() * 80)}`,
    };

    coachesData.push(newCoach);

    res.json({ success: true, message: "Application approved and coach activated!", newCoach });
  });

  // API 10: Gemini AI Activity Recommender
  app.post("/api/ai/recommend", async (req, res) => {
    try {
      const { childAge, interests, societyName } = req.body;
      const ai = getGeminiClient();

      if (!ai) {
        res.json({
          success: true,
          recommendation: `Based on an age of ${childAge || 8} and interest in ${interests || "active sports"} at ${societyName || "your housing society"}, we recommend trying Swimming for water safety and Chess for strategic focus. Both coaches are active in your clubhouse!`,
        });
        return;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Suggest 2 ideal skill-coaching activities for a ${childAge || 7} year old child interested in "${interests || "sports and creative arts"}" living in residential society "${societyName || "Prestige Shantiniketan"}". Keep response friendly, parent-oriented, concise (under 120 words).`,
        config: {
          systemInstruction: "You are ATFIT's expert child development and activity coach advisor.",
          temperature: 0.7,
        },
      });

      res.json({
        success: true,
        recommendation: response.text || "Recommended activities: Swimming and Chess.",
      });
    } catch (err: any) {
      console.error("AI recommend error:", err);
      res.json({
        success: true,
        recommendation: `We recommend trying our Swim & Aqua Safety or Youth Chess classes tailored for age ${req.body.childAge || 8}.`,
      });
    }
  });

  // Vite middleware for dev / static serve for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: { server: httpServer }
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  let currentPort = PORT;

  const startListening = (port: number) => {
    httpServer.listen(port, "0.0.0.0", () => {
      console.log(`ATFIT Server running on http://localhost:${port}`);
    });
  };

  httpServer.on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${currentPort} is already in use.`);
      currentPort++;
      console.log(`Trying to start server on port ${currentPort}...`);
      startListening(currentPort);
    } else {
      console.error("Server listener encountered an error:", err);
    }
  });

  startListening(currentPort);
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
