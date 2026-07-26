import React, { useState } from 'react';
import { NavTab } from '../types';
import { INITIAL_COACHES } from '../data';
import { User, Wallet, Calendar, ShieldCheck, MapPin, QrCode, CheckCircle2, Ticket, PauseCircle, PlayCircle, Settings, Clock, ArrowRight } from 'lucide-react';

interface DashboardSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({ setActiveTab }) => {
  const [roleMode, setRoleMode] = useState<'parent' | 'coach'>('parent');
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="atfit-dashboard" className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Role Switcher Banner */}
        <div className="bg-white p-4 rounded-3xl border border-teal-100 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-100 text-teal-800 rounded-xl flex items-center justify-center font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-slate-950">Account Dashboard</h1>
              <p className="text-xs text-slate-500">Manage memberships, schedule slots, and verified QR badges</p>
            </div>
          </div>

          <div className="bg-slate-100 p-1 rounded-2xl flex items-center gap-1 border border-slate-200">
            <button
              onClick={() => setRoleMode('parent')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                roleMode === 'parent'
                  ? 'bg-teal-700 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Parent Account
            </button>
            <button
              onClick={() => setRoleMode('coach')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                roleMode === 'coach'
                  ? 'bg-teal-700 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Coach Portal View
            </button>
          </div>
        </div>

        {roleMode === 'parent' ? (
          /* PARENT DASHBOARD VIEW */
          <div className="space-y-6">
            
            {/* Active Membership Status Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-teal-100 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                      isPaused ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    }`}>
                      {isPaused ? 'MEMBERSHIP PAUSED' : 'ACTIVE SUBSCRIPTION'}
                    </span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs font-bold text-teal-900">Prestige Shantiniketan</span>
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-950">
                    Aarav Rao — Standard Monthly Membership (Chess)
                  </h2>
                </div>

                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer self-start sm:self-auto ${
                    isPaused
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
                  }`}
                >
                  {isPaused ? <PlayCircle className="w-4 h-4" /> : <PauseCircle className="w-4 h-4" />}
                  <span>{isPaused ? 'Resume Subscription' : 'Pause Subscription'}</span>
                </button>
              </div>

              {/* Membership Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-semibold block">Monthly Plan Fee:</span>
                  <span className="text-lg font-black text-slate-900">Rs. 699 / month</span>
                  <span className="text-[10px] text-slate-400 block">Renews on Aug 15, 2026</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-semibold block">Assigned Coach:</span>
                  <span className="text-base font-extrabold text-teal-900 block">Rohan Sharma (FIDE Master)</span>
                  <span className="text-[10px] text-emerald-600 font-bold block">✓ Physical QR Badge Verified</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-semibold block">Weekly Class Slot:</span>
                  <span className="text-base font-extrabold text-slate-900 block">Mon & Wed @ 04:30 PM</span>
                  <span className="text-[10px] text-slate-500 block">Clubhouse Block B Hall</span>
                </div>
              </div>
            </div>

            {/* Trial Sessions History */}
            <div className="bg-white p-6 rounded-3xl border border-teal-100 space-y-4 shadow-xs">
              <h3 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
                <Ticket className="w-5 h-5 text-amber-600" />
                <span>Booked Trial Sessions & Pass Receipts</span>
              </h3>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-400 text-teal-950 text-[10px] font-black px-2 py-0.5 rounded">
                      PASS ID: TB-9012
                    </span>
                    <span className="font-bold text-slate-900">Rs. 99 Flat Trial</span>
                  </div>
                  <h4 className="font-bold text-slate-900">Chess Intro Session — Rohan Sharma</h4>
                  <p className="text-slate-500">Prestige Shantiniketan • Mon & Wed 04:30 PM</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('verification-lookup')}
                    className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    Verify Coach Badge
                  </button>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* COACH PORTAL VIEW */
          <div className="space-y-6">
            
            <div className="bg-teal-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-teal-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-teal-800 pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={INITIAL_COACHES[0].avatarUrl}
                    alt="Rohan Sharma"
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-400/30">
                        {INITIAL_COACHES[0].badgeCode}
                      </span>
                      <span className="bg-amber-400 text-teal-950 text-[10px] font-black px-2 py-0.5 rounded">
                        ACTIVE COACH
                      </span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-white">{INITIAL_COACHES[0].name}</h2>
                    <p className="text-xs text-teal-200">{INITIAL_COACHES[0].title}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('verification-lookup')}
                  className="bg-amber-500 hover:bg-amber-600 text-teal-950 font-black text-xs px-4 py-2.5 rounded-xl transition-all shadow-xs flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Public QR Verification Badge</span>
                </button>
              </div>

              {/* Payout & Class Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-teal-950 p-4 rounded-2xl border border-teal-800 space-y-1">
                  <span className="text-teal-300 font-semibold block">Monthly Payout Summary:</span>
                  <span className="text-2xl font-black text-amber-400">Rs. 24,800</span>
                  <span className="text-[10px] text-teal-400 block">Direct bank deposit on 1st of month</span>
                </div>

                <div className="bg-teal-950 p-4 rounded-2xl border border-teal-800 space-y-1">
                  <span className="text-teal-300 font-semibold block">Active Society Assignments:</span>
                  <span className="text-lg font-bold text-white block">3 Residential Complexes</span>
                  <span className="text-[10px] text-teal-300 block">Prestige Shantiniketan, Palm Meadows, Adarsh</span>
                </div>

                <div className="bg-teal-950 p-4 rounded-2xl border border-teal-800 space-y-1">
                  <span className="text-teal-300 font-semibold block">Total Enrolled Kids:</span>
                  <span className="text-2xl font-black text-white">19 Children</span>
                  <span className="text-[10px] text-emerald-400 font-bold block">4.92 ★ Average Rating</span>
                </div>
              </div>
            </div>

            {/* Upcoming Schedule */}
            <div className="bg-white p-6 rounded-3xl border border-teal-100 space-y-4 shadow-xs">
              <h3 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-teal-700" />
                <span>Today's Assigned Society Batches</span>
              </h3>

              <div className="space-y-3">
                {INITIAL_COACHES[0].availableSlots.map((slot) => (
                  <div key={slot.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-teal-700" />
                        <span className="font-bold text-teal-950">{slot.society}</span>
                      </div>
                      <span className="font-semibold text-slate-700 block">{slot.day} • {slot.time}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="bg-teal-100 text-teal-900 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-teal-200">
                        {slot.bookedKids} / {slot.maxKids} Kids Enrolled
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
