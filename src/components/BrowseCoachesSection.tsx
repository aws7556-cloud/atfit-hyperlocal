import React, { useState } from 'react';
import { Coach, CategoryType, NavTab, TrialBooking } from '../types';
import { INITIAL_COACHES, POPULAR_SOCIETIES } from '../data';
import { CoachProfileModal } from './CoachProfileModal';
import { TrialBookingModal } from './TrialBookingModal';
import { ShieldCheck, Search, Filter, MapPin, Star, Calendar, Clock, Ticket, CheckCircle2, UserCheck, QrCode, ArrowRight } from 'lucide-react';

interface BrowseCoachesProps {
  selectedSociety: string;
  setSelectedSociety: (soc: string) => void;
  selectedCategory: CategoryType | 'All';
  setSelectedCategory: (cat: CategoryType | 'All') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setActiveTab: (tab: NavTab) => void;
}

export const BrowseCoachesSection: React.FC<BrowseCoachesProps> = ({
  selectedSociety,
  setSelectedSociety,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  setActiveTab,
}) => {
  const [coaches] = useState<Coach[]>(() => {
    const saved = localStorage.getItem('atfit_coaches');
    return saved ? JSON.parse(saved) : INITIAL_COACHES;
  });
  
  const [inspectCoach, setInspectCoach] = useState<Coach | null>(null);
  const [bookingCoach, setBookingCoach] = useState<{ coach: Coach; slot: string } | null>(null);

  // Filter logic
  const filteredCoaches = coaches.filter((coach) => {
    // Category match
    if (selectedCategory !== 'All' && coach.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }
    // Society match
    if (selectedSociety !== 'All' && !coach.assignedSocieties.some(s => s.toLowerCase() === selectedSociety.toLowerCase())) {
      return false;
    }
    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = coach.name.toLowerCase().includes(q);
      const matchSub = coach.subCategory.toLowerCase().includes(q);
      const matchTitle = coach.title.toLowerCase().includes(q);
      const matchSoc = coach.assignedSocieties.some(s => s.toLowerCase().includes(q));
      if (!matchName && !matchSub && !matchTitle && !matchSoc) return false;
    }
    return true;
  });

  const categoriesList: (CategoryType | 'All')[] = ['All', 'Sports', 'Dance', 'Fitness', 'Other'];

  return (
    <section id="atfit-browse-coaches" className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-teal-100 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-teal-100 text-teal-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-teal-200">
                100% Background Checked
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs font-bold text-amber-700">Flat Rs. 99 Trial Session</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Verified Society Coaches Near You
            </h1>
            <p className="text-xs text-slate-600">
              Browse background-verified freelance coaches operating directly inside apartment buildings across Bengaluru.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-teal-100 shadow-2xs text-xs font-semibold text-slate-700 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-teal-700" />
            <span>Showing <strong>{filteredCoaches.length}</strong> verified coaches</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-2xl border border-teal-100 shadow-2xs space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search by coach name, activity (Chess, Swim, Karate) or society..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-teal-600"
              />
            </div>

            {/* Society Filter */}
            <div className="md:col-span-4 relative">
              <MapPin className="w-4 h-4 text-teal-700 absolute left-3 top-3" />
              <select
                value={selectedSociety}
                onChange={(e) => setSelectedSociety(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-teal-950 focus:bg-white focus:outline-teal-600 cursor-pointer"
              >
                <option value="All">Filter by Society: All Societies</option>
                {POPULAR_SOCIETIES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name} ({s.area})
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button */}
            <div className="md:col-span-3 flex justify-end">
              {(selectedCategory !== 'All' || selectedSociety !== 'All' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedSociety('All');
                    setSearchQuery('');
                  }}
                  className="text-xs text-rose-600 hover:text-rose-800 font-semibold underline"
                >
                  Reset All Filters
                </button>
              )}
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase shrink-0 mr-1">
              Categories:
            </span>
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Activities' : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Coaches Grid */}
        {filteredCoaches.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-teal-100 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto">
              <Filter className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">No Verified Coaches Found</h3>
              <p className="text-xs text-slate-500">
                Try switching the housing society filter to "All Societies" or clearing your search term.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedSociety('All');
                setSearchQuery('');
              }}
              className="bg-teal-700 text-white text-xs font-bold px-4 py-2 rounded-xl"
            >
              Show All Coaches
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoaches.map((coach) => (
              <div
                key={coach.id}
                className="bg-white rounded-3xl border border-teal-100 overflow-hidden shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Image + Badges */}
                  <div className="relative aspect-16/9 bg-slate-100 overflow-hidden">
                    <img
                      src={coach.actionPhotos[0] || coach.avatarUrl}
                      alt={coach.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 bg-teal-900/90 backdrop-blur-xs text-amber-300 text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-teal-700">
                      {coach.category} • {coach.subCategory}
                    </div>

                    {/* QR Code / Badge ID */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-teal-950 text-[10px] font-bold px-2 py-0.5 rounded-md border border-teal-200 flex items-center gap-1 shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                      <span>{coach.badgeCode}</span>
                    </div>

                    {/* Overlay Price Badge */}
                    <div className="absolute bottom-3 right-3 bg-amber-500 text-teal-950 text-xs font-black px-2.5 py-1 rounded-lg shadow-sm">
                      Trial: Rs. 99
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-5 space-y-4">
                    
                    {/* Avatar & Name */}
                    <div className="flex items-start gap-3">
                      <img
                        src={coach.avatarUrl}
                        alt={coach.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-xl object-cover border-2 border-teal-100 shrink-0"
                      />
                      <div className="space-y-0.5 min-w-0">
                        <div className="flex items-center gap-1">
                          <h3 className="text-base font-extrabold text-slate-950 truncate">
                            {coach.name}
                          </h3>
                          <span title="Background Checked"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /></span>
                        </div>
                        <p className="text-xs text-teal-800 font-semibold truncate">{coach.title}</p>
                      </div>
                    </div>

                    {/* Rating & Exp */}
                    <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-1 font-bold text-amber-600">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{coach.rating}</span>
                        <span className="text-slate-400 font-normal">({coach.reviewsCount})</span>
                      </div>
                      <span className="font-semibold text-slate-700">
                        {coach.experienceYears} yrs experience
                      </span>
                    </div>

                    {/* Assigned Societies */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Assigned Residential Buildings:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {coach.assignedSocieties.map((s) => (
                          <span
                            key={s}
                            className="bg-teal-50/80 text-teal-900 border border-teal-200/80 text-[11px] font-semibold px-2 py-0.5 rounded-md"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Available Schedule Preview */}
                    <div className="text-xs text-slate-600 space-y-1 pt-1 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <Clock className="w-3.5 h-3.5 text-teal-700" />
                        <span>Next Slot: {coach.availableSlots[0]?.day} ({coach.availableSlots[0]?.time})</span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Footer Buttons */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setInspectCoach(coach)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer text-center"
                  >
                    View Bio & QR
                  </button>
                  <button
                    onClick={() => setBookingCoach({
                      coach,
                      slot: `${coach.availableSlots[0]?.day || 'Mon & Wed'} (${coach.availableSlots[0]?.time || '04:30 PM'})`,
                    })}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-teal-950 text-xs font-extrabold py-2.5 rounded-xl transition-colors cursor-pointer text-center shadow-xs"
                  >
                    Book Rs. 99 Trial
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modals */}
      <CoachProfileModal
        coach={inspectCoach}
        onClose={() => setInspectCoach(null)}
        onBookTrial={(coach, slot) => {
          setInspectCoach(null);
          setBookingCoach({ coach, slot });
        }}
      />

      <TrialBookingModal
        coach={bookingCoach?.coach || null}
        selectedSlot={bookingCoach?.slot || ''}
        defaultSociety={selectedSociety}
        onClose={() => setBookingCoach(null)}
        onSuccess={() => {
          // Keep open to show confirmation pass
        }}
      />

    </section>
  );
};
