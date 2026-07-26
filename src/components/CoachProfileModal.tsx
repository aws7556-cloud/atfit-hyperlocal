import React, { useState } from 'react';
import { Coach } from '../types';
import { ShieldCheck, Star, Calendar, Clock, MapPin, CheckCircle2, QrCode, X, ArrowRight, Award, Shield, HeartPulse } from 'lucide-react';

interface CoachProfileModalProps {
  coach: Coach | null;
  onClose: () => void;
  onBookTrial: (coach: Coach, slot: string) => void;
}

export const CoachProfileModal: React.FC<CoachProfileModalProps> = ({
  coach,
  onClose,
  onBookTrial,
}) => {
  if (!coach) return null;

  const [selectedSlot, setSelectedSlot] = useState<string>(
    coach.availableSlots[0]?.time ? `${coach.availableSlots[0].day} (${coach.availableSlots[0].time})` : 'Mon & Wed 04:30 PM'
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FBF9F5] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#E2D6C0] shadow-2xl relative">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 bg-white/90 hover:bg-white text-[#0B192C] rounded-full flex items-center justify-center transition-all border border-[#E2D6C0] shadow-md cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10 space-y-8">
          
          {/* HEADER SECTION */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-widest font-extrabold text-[#C5A059] uppercase bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/30">
                THE MASTERCLASS SERIES
              </span>
              <span className="text-[10px] tracking-widest text-[#64748B] font-bold uppercase">
                ID: {coach.badgeCode}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8 space-y-4">
                <h1 className="text-4xl sm:text-6xl font-serif text-[#0B192C] tracking-tight">
                  {coach.name}.
                </h1>
                <p className="text-base text-slate-700 font-serif italic leading-relaxed">
                  "{coach.bio}"
                </p>

                {/* STATS HIGHLIGHT ROW */}
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E2D6C0]">
                  <div>
                    <div className="text-2xl font-serif font-bold text-[#0B192C]">500+</div>
                    <div className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">ELITE PUPILS</div>
                  </div>
                  <div className="h-8 w-px bg-[#E2D6C0]" />
                  <div>
                    <div className="text-2xl font-serif font-bold text-[#0B192C]">{coach.experienceYears}Y</div>
                    <div className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">TENURE</div>
                  </div>
                  <div className="h-8 w-px bg-[#E2D6C0]" />
                  <div>
                    <div className="flex items-center gap-1 text-2xl font-serif font-bold text-[#0B192C]">
                      <Star className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
                      <span>{coach.rating}</span>
                    </div>
                    <div className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">PEER REVIEWED</div>
                  </div>
                </div>
              </div>

              {/* COACH PHOTO SHOWCASE */}
              <div className="lg:col-span-4 relative">
                <div className="aspect-3/4 rounded-2xl overflow-hidden border border-[#E2D6C0] shadow-md relative bg-slate-100">
                  <img
                    src={coach.avatarUrl}
                    alt={coach.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B192C]/90 backdrop-blur-xs text-white text-[9px] font-bold px-2.5 py-1 rounded-full border border-[#C5A059]/40 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                    <span>AVAILABLE FOR SESSIONS</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* TWO COLUMN CONTENT & TRIAL BOOKING */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: PHILOSOPHY & ACCREDITATION */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* ASSIGNED SOCIETIES */}
              <div className="bg-white p-5 rounded-2xl border border-[#E2D6C0] space-y-2">
                <span className="text-[11px] font-bold text-[#0B192C] uppercase tracking-wider block">
                  Active Assigned Societies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {coach.assignedSocieties.map((soc) => (
                    <span key={soc} className="inline-flex items-center gap-1 bg-[#FBF9F5] text-[#0B192C] border border-[#E2D6C0] px-3 py-1 rounded-full text-xs font-semibold">
                      <MapPin className="w-3 h-3 text-[#C5A059]" />
                      {soc}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACCREDITATION & SAFETY CARDS */}
              <div className="space-y-4">
                <h3 className="text-sm font-serif font-bold text-[#0B192C] tracking-wider uppercase">
                  Accreditation & Safety Audit
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-4 rounded-xl border border-[#E2D6C0] space-y-2">
                    <Award className="w-5 h-5 text-[#C5A059]" />
                    <h4 className="text-xs font-bold text-[#0B192C]">Elite Certification</h4>
                    <p className="text-[10px] text-slate-500 leading-tight">Verified pedigree and state-level credentials.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E2D6C0] space-y-2">
                    <Shield className="w-5 h-5 text-[#C5A059]" />
                    <h4 className="text-xs font-bold text-[#0B192C]">Background Verified</h4>
                    <p className="text-[10px] text-slate-500 leading-tight">100% Police clear & biometric matched.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E2D6C0] space-y-2">
                    <HeartPulse className="w-5 h-5 text-[#C5A059]" />
                    <h4 className="text-xs font-bold text-[#0B192C]">Care & First Aid</h4>
                    <p className="text-[10px] text-slate-500 leading-tight">Sports trauma & pediatric CPR certified.</p>
                  </div>
                </div>
              </div>

              {/* ACTION PHOTOS */}
              {coach.actionPhotos.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-serif font-bold text-[#0B192C] tracking-wider uppercase">
                    Session Moments inside Society
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {coach.actionPhotos.map((photo, i) => (
                      <img
                        key={i}
                        src={photo}
                        alt={`Session ${i+1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-36 object-cover rounded-2xl border border-[#E2D6C0]"
                      />
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: FLOATING TRIAL BOOKING WIDGET */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-3xl border border-[#E2D6C0] shadow-lg space-y-6 sticky top-24">
                
                <div className="space-y-1 pb-4 border-b border-[#EADFCB]">
                  <span className="text-[10px] tracking-widest font-extrabold text-[#C5A059] uppercase block">
                    INTRODUCTORY ASSESSMENT
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-serif font-bold text-[#0B192C]">Trial Session</h3>
                    <span className="text-2xl font-serif font-extrabold text-[#0B192C]">Rs. 99</span>
                  </div>
                  <p className="text-xs text-slate-500">45 Minutes • Equipment Provided</p>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-[#0B192C] uppercase tracking-wider block">
                    Select Available Time Slot:
                  </label>
                  
                  <div className="space-y-2">
                    {coach.availableSlots.map((slot) => {
                      const slotLabel = `${slot.day} (${slot.time}) — ${slot.society}`;
                      const isSelected = selectedSlot === slotLabel;
                      return (
                        <div
                          key={slot.id}
                          onClick={() => setSelectedSlot(slotLabel)}
                          className={`p-3.5 rounded-2xl border cursor-pointer text-xs transition-all ${
                            isSelected
                              ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-sm'
                              : 'bg-[#FBF9F5] text-[#0B192C] border-[#E2D6C0] hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between font-bold">
                            <span>{slot.day} • {slot.time}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
                              {slot.maxKids - slot.bookedKids} slots left
                            </span>
                          </div>
                          <div className={`text-[11px] mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                            {slot.society}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => onBookTrial(coach, selectedSlot)}
                  className="w-full bg-[#0B192C] hover:bg-[#15273F] text-white text-xs font-bold py-4 rounded-full transition-all border border-[#C5A059]/40 shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>RESERVE ASSESSMENT (Rs. 99)</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </button>

                <div className="space-y-2 text-[11px] text-slate-500 pt-2 border-t border-[#EADFCB]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Includes Custom Skill Assessment Report</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Instant Digital Gate Pass Generated</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

