export type CategoryType = 'Sports' | 'Fitness' | 'Mind Games' | 'Arts';

export type CoachStatus = 'Active' | 'Under Review' | 'Suspended';

export type NavTab = 
  | 'home' 
  | 'how-it-works' 
  | 'browse-coaches' 
  | 'verification-lookup' 
  | 'pricing' 
  | 'for-coaches' 
  | 'for-societies' 
  | 'dashboard' 
  | 'admin';

export interface TimeSlot {
  id: string;
  day: string; // e.g. "Mon, Wed, Fri"
  time: string; // e.g. "04:30 PM - 05:30 PM"
  society: string;
  maxKids: number;
  bookedKids: number;
}

export interface Coach {
  id: string; // e.g. "ATFIT-101"
  name: string;
  title: string;
  category: CategoryType;
  subCategory: string; // e.g. "Chess", "Swimming", "Football", "Karate", "Pottery"
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  verifiedSince: string;
  status: CoachStatus;
  avatarUrl: string;
  actionPhotos: string[];
  bio: string;
  certifications: string[];
  assignedSocieties: string[];
  availableSlots: TimeSlot[];
  trialPrice: number; // 99
  monthlyPriceStarter: number; // 399
  monthlyPriceStandard: number; // 699
  monthlyPricePremium: number; // 999
  badgeCode: string;
}

export interface HousingSociety {
  id: string;
  name: string;
  area: string;
  city: string;
  apartmentsCount: number;
  amenities: string[];
  activeCoachesCount: number;
  imageUrl: string;
}

export interface TrialBooking {
  id: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  childName: string;
  childAge: number;
  societyName: string;
  coachId: string;
  coachName: string;
  activity: string;
  selectedSlot: string;
  amountPaid: number;
  paymentStatus: 'Completed' | 'Pending';
  bookingDate: string;
}

export interface CoachApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  category: CategoryType;
  subCategory: string;
  experienceYears: number;
  preferredSocieties: string;
  certificationsDetail: string;
  status: 'Under Review' | 'Active' | 'Rejected';
  appliedAt: string;
}

export interface SocietyInquiry {
  id: string;
  societyName: string;
  representativeName: string;
  roleInCommittee: string; // e.g. "RWA President", "Sports Committee Member"
  phone: string;
  email: string;
  flatCount: number;
  locationArea: string;
  notes: string;
  createdAt: string;
}
