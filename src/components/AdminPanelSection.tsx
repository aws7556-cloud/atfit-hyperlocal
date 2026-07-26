import React, { useState, useEffect } from 'react';
import { Coach, CoachStatus, NavTab } from '../types';
import { ShieldCheck, ShieldAlert, CheckCircle2, XCircle, AlertTriangle, UserCheck, RefreshCw, QrCode } from 'lucide-react';
import { INITIAL_COACHES } from '../data';

// Helper to initialize/get admin data from LocalStorage if server fails
const getLocalStorageAdminData = () => {
  let coaches = localStorage.getItem('atfit_coaches');
  if (!coaches) {
    localStorage.setItem('atfit_coaches', JSON.stringify(INITIAL_COACHES));
    coaches = JSON.stringify(INITIAL_COACHES);
  }

  let bookings = localStorage.getItem('atfit_bookings');
  if (!bookings) {
    const defaultBooking = [
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
      }
    ];
    localStorage.setItem('atfit_bookings', JSON.stringify(defaultBooking));
    bookings = JSON.stringify(defaultBooking);
  }

  let applications = localStorage.getItem('atfit_applications');
  if (!applications) {
    const defaultApplications = [
      {
        id: "APP-501",
        fullName: "Karan Malhotra",
        email: "karan.skate@example.com",
        phone: "+91 91234 56789",
        category: "Fitness",
        subCategory: "Skating & Balance",
        experienceYears: 4,
        preferredSocieties: "Palm Meadows, Adarsh Palm Retreat",
        certificationsDetail: "State Level Roller Skating Champion & Certified Trainer",
        status: "Under Review",
        appliedAt: new Date().toLocaleDateString(),
      }
    ];
    localStorage.setItem('atfit_applications', JSON.stringify(defaultApplications));
    applications = JSON.stringify(defaultApplications);
  }

  let inquiries = localStorage.getItem('atfit_inquiries');
  if (!inquiries) {
    localStorage.setItem('atfit_inquiries', JSON.stringify([]));
    inquiries = JSON.stringify([]);
  }

  const coachesList = JSON.parse(coaches);
  const bookingsList = JSON.parse(bookings);
  const applicationsList = JSON.parse(applications);
  const inquiriesList = JSON.parse(inquiries);

  const totalTrialBookings = bookingsList.length;
  const revenueGenerated = bookingsList.reduce((sum: number, b: any) => sum + b.amountPaid, 0);

  return {
    success: true,
    stats: {
      totalCoaches: coachesList.length,
      activeCoaches: coachesList.filter((c: any) => c.status === "Active").length,
      totalTrialBookings,
      revenueGenerated,
      totalApplications: applicationsList.length,
      pendingApplications: applicationsList.filter((a: any) => a.status === "Under Review").length,
    },
    coaches: coachesList,
    bookings: bookingsList,
    applications: applicationsList,
    societyInquiries: inquiriesList,
  };
};

const toggleCoachStatusInLocalStorage = (coachId: string, newStatus: CoachStatus) => {
  const data = getLocalStorageAdminData();
  const updatedCoaches = data.coaches.map((c: any) => {
    if (c.id === coachId) {
      return { ...c, status: newStatus };
    }
    return c;
  });
  localStorage.setItem('atfit_coaches', JSON.stringify(updatedCoaches));
};

const approveApplicationInLocalStorage = (appId: string) => {
  const data = getLocalStorageAdminData();
  const appRecord = data.applications.find((a: any) => a.id === appId);
  if (!appRecord) return;

  const updatedApps = data.applications.map((a: any) => {
    if (a.id === appId) {
      return { ...a, status: 'Approved' };
    }
    return a;
  });
  localStorage.setItem('atfit_applications', JSON.stringify(updatedApps));

  // Add new coach
  const newCoach = {
    id: `ATFIT-${Math.floor(107 + Math.random() * 80)}`,
    name: appRecord.fullName,
    title: `${appRecord.subCategory} Specialist`,
    category: appRecord.category,
    subCategory: appRecord.subCategory,
    rating: 4.8,
    reviewsCount: 0,
    experienceYears: appRecord.experienceYears,
    verifiedSince: new Date().toLocaleDateString(),
    status: 'Active',
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    actionPhotos: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
    ],
    bio: `Newly verified ATFIT coach for ${appRecord.subCategory} with ${appRecord.experienceYears} years experience.`,
    certifications: [appRecord.certificationsDetail, "Background Verification Complete"],
    assignedSocieties: appRecord.preferredSocieties.split(",").map((s: string) => s.trim()),
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

  const updatedCoaches = [...data.coaches, newCoach];
  localStorage.setItem('atfit_coaches', JSON.stringify(updatedCoaches));
};

interface AdminPanelSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

export const AdminPanelSection: React.FC<AdminPanelSectionProps> = ({ setActiveTab }) => {
  const [adminData, setAdminData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [statusMsg, setStatusMsg] = useState('');

  const fetchAdminOverview = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/overview');
      const data = await res.json();
      setAdminData(data);
    } catch (err) {
      // LocalStorage / static fallback
      const data = getLocalStorageAdminData();
      setAdminData(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminOverview();
  }, []);

  const handleToggleCoachStatus = async (coachId: string, currentStatus: CoachStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Suspended' : 'Active';
    try {
      const res = await fetch('/api/admin/toggle-coach-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ coachId, newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setStatusMsg(`Coach ${coachId} status changed to ${newStatus}. Public QR Verification page reflects this instantly!`);
        fetchAdminOverview();
      }
    } catch (err) {
      // LocalStorage / static fallback
      toggleCoachStatusInLocalStorage(coachId, newStatus);
      setStatusMsg(`Coach ${coachId} status changed to ${newStatus} (Saved Locally). Public QR Verification page reflects this instantly!`);
      fetchAdminOverview();
    }
  };

  const handleApproveApplication = async (appId: string) => {
    try {
      const res = await fetch('/api/admin/approve-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ appId }),
      });
      const data = await res.json();
      if (data.success) {
        setStatusMsg(`Application ${appId} approved! New active coach created with QR badge.`);
        fetchAdminOverview();
      }
    } catch (err) {
      // LocalStorage / static fallback
      approveApplicationInLocalStorage(appId);
      setStatusMsg(`Application ${appId} approved! New active coach created with QR badge (Saved Locally).`);
      fetchAdminOverview();
    }
  };

  return (
    <section id="atfit-admin-panel" className="py-12 bg-slate-900 text-white min-h-screen border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header */}
        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-500/20 text-rose-400 rounded-xl flex items-center justify-center font-bold border border-rose-500/30">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-rose-500/20 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded border border-rose-500/30">
                  INTERNAL ADMIN
                </span>
                <span className="text-xs text-slate-400">Background Audit Room</span>
              </div>
              <h1 className="text-xl font-extrabold text-white">Coach Verification & Society Management</h1>
            </div>
          </div>

          <button
            onClick={fetchAdminOverview}
            className="bg-slate-900 hover:bg-slate-800 text-teal-300 border border-slate-700 text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Audit Records</span>
          </button>
        </div>

        {statusMsg && (
          <div className="bg-amber-950/80 border border-amber-500 text-amber-200 text-xs p-4 rounded-2xl flex items-center justify-between">
            <span>{statusMsg}</span>
            <button onClick={() => setStatusMsg('')} className="font-bold underline text-amber-400">Dismiss</button>
          </div>
        )}

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-slate-400 font-semibold block">Total Active Coaches:</span>
            <span className="text-2xl font-black text-emerald-400">
              {adminData?.coaches?.filter((c: any) => c.status === 'Active').length || 0}
            </span>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-slate-400 font-semibold block">Pending Applications:</span>
            <span className="text-2xl font-black text-amber-400">
              {adminData?.coachApplications?.filter((a: any) => a.status === 'Under Review').length || 0}
            </span>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-slate-400 font-semibold block">Trial Bookings (Rs. 99):</span>
            <span className="text-2xl font-black text-teal-300">
              {adminData?.trialBookings?.length || 0}
            </span>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-slate-400 font-semibold block">Society Committee Leads:</span>
            <span className="text-2xl font-black text-white">
              {adminData?.societyInquiries?.length || 0}
            </span>
          </div>
        </div>

        {/* SECTION 1: Active Coaches Verification Toggle */}
        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Active Coaches & Status Controls (Instant Public QR Reflection)</span>
            </h3>
            <span className="text-xs text-slate-400">Toggle status to test public verification lookup</span>
          </div>

          <div className="space-y-3">
            {adminData?.coaches?.map((coach: Coach) => (
              <div key={coach.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <img
                    src={coach.avatarUrl}
                    alt={coach.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover border border-slate-700"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-amber-400 font-bold">{coach.id}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        coach.status === 'Active' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}>
                        {coach.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-white">{coach.name} ({coach.subCategory})</h4>
                    <p className="text-slate-400">{coach.assignedSocieties.join(', ')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveTab('verification-lookup');
                    }}
                    className="bg-slate-800 hover:bg-slate-700 text-teal-300 px-3 py-2 rounded-xl transition-colors font-semibold"
                  >
                    Test QR Lookup
                  </button>

                  <button
                    onClick={() => handleToggleCoachStatus(coach.id, coach.status)}
                    className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
                      coach.status === 'Active'
                        ? 'bg-rose-900/80 hover:bg-rose-900 text-rose-200 border border-rose-700'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    {coach.status === 'Active' ? 'Mark Suspended' : 'Set Active'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Pending Applications Approval */}
        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-base font-extrabold text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-amber-400" />
            <span>Pending Coach Applications (Background Check Pipeline)</span>
          </h3>

          {adminData?.coachApplications?.length === 0 ? (
            <p className="text-xs text-slate-500">No pending coach applications.</p>
          ) : (
            <div className="space-y-3">
              {adminData?.coachApplications?.map((app: any) => (
                <div key={app.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-amber-400 font-bold">{app.id}</span>
                      <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded">
                        {app.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-white">{app.fullName} — {app.category} ({app.subCategory})</h4>
                    <p className="text-slate-400">Preferred: {app.preferredSocieties} • Phone: {app.phone}</p>
                    <p className="text-slate-300 italic">{app.certificationsDetail}</p>
                  </div>

                  {app.status === 'Under Review' && (
                    <button
                      onClick={() => handleApproveApplication(app.id)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl transition-colors shrink-0"
                    >
                      Approve & Issue QR Badge
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
