import React, { useState } from 'react';
import { NavTab, CategoryType } from '../types';
import { CATEGORY_TILES, POPULAR_SOCIETIES, INITIAL_COACHES } from '../data';
import { ShieldCheck, Search, MapPin, ArrowRight, CheckCircle2, UserCheck, Shield, Award, QrCode, Star, Sparkles, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectCategory: (category: CategoryType) => void;
  selectedSociety: string;
  setSelectedSociety: (soc: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  setActiveTab,
  onSelectCategory,
  selectedSociety,
  setSelectedSociety,
}) => {
  const [societySearch, setSocietySearch] = useState('');
  const [activitySearch, setActivitySearch] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (societySearch.trim()) {
      setSelectedSociety(societySearch.trim());
    }
    setActiveTab('browse-coaches');
  };

  return (
    <div id="atfit-hero-container" className="space-y-20 pb-16">
      
      {/* SECTION 1: HERO TOP WITH FULL BACKGROUND */}
      <section className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11, 25, 44, 0.45), rgba(251, 249, 245, 0.95)), url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-8 pt-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif italic font-normal text-slate-950 tracking-tight leading-[1.1]">
              Every Child Deserves an Extraordinary Coach.
            </h1>
            <p className="text-base sm:text-xl text-slate-800 max-w-2xl mx-auto font-normal leading-relaxed">
              Discover trusted, verified coaches within your own community. Book a trial in minutes and help your child learn, play, and grow with confidence.
            </p>
          </motion.div>

          {/* FLOATING SEARCH BAR */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSearchSubmit}
            className="bg-white/90 backdrop-blur-md p-2.5 sm:p-3 rounded-full border border-[#E2D6C0] shadow-2xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="flex-1 flex items-center gap-2 px-4 py-2 w-full sm:border-r border-[#EADFCB]">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
              <input
                type="text"
                placeholder="Search Your Society..."
                value={societySearch}
                onChange={(e) => setSocietySearch(e.target.value)}
                className="w-full text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-500 bg-transparent focus:outline-none"
              />
            </div>

            <div className="flex-1 flex items-center gap-2 px-4 py-2 w-full">
              <Search className="w-4 h-4 text-[#C5A059] shrink-0" />
              <input
                type="text"
                placeholder="Activity (e.g. Ballet / Soccer / Chess)"
                value={activitySearch}
                onChange={(e) => setActivitySearch(e.target.value)}
                className="w-full text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-500 bg-transparent focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#0B192C] hover:bg-[#15273F] text-white text-xs font-bold px-8 py-3.5 rounded-full transition-all shadow-md cursor-pointer shrink-0 border border-[#C5A059]/40 flex items-center justify-center gap-2"
            >
              <span>Find a Coach</span>
            </button>
          </motion.form>

          {/* POPULAR SOCIETIES QUICK TAGS */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-700 pt-2">
            <span className="font-semibold text-slate-900">Top Gated Communities:</span>
            {POPULAR_SOCIETIES.slice(0, 4).map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setSelectedSociety(s.name);
                  setActiveTab('browse-coaches');
                }}
                className="bg-white/80 hover:bg-white text-[#0B192C] border border-[#EADFCB] px-3 py-1 rounded-full text-[11px] font-medium transition-all shadow-2xs"
              >
                {s.name}
              </button>
            ))}
          </div>

          <div className="pt-8 text-center">
            <span className="text-[10px] tracking-widest text-slate-500 uppercase font-serif">
              THE ATFIT EXPERIENCE
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE GOLD STANDARD OF CHILD SAFETY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F6F1E9] p-8 sm:p-14 rounded-3xl border border-[#E7DCC8] space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] tracking-widest font-extrabold text-[#8C6B27] uppercase">
                UNCOMPROMISING SECURITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#0B192C] leading-tight">
                The Gold Standard of Child Safety
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Every coach undergoes a rigorous 5-layer screening process. We prioritize your child's security as much as their skill development, ensuring peace of mind within your gated haven.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="bg-white p-6 rounded-2xl border border-[#E2D6C0] shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FBF9F5] rounded-full border border-[#EADFCB] flex items-center justify-center text-[#0B192C]">
                  <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <div className="text-2xl font-serif font-extrabold text-[#0B192C]">99.8%</div>
                  <div className="text-[10px] tracking-widest text-[#64748B] uppercase font-bold">
                    ELITE SAFETY RATING
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 SAFETY PILLARS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-4 border-t border-[#E2D6C0]">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E2D6C0] flex items-center justify-center text-[#0B192C]">
                <Shield className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h4 className="text-xs font-serif font-bold text-[#0B192C]">Police Verified</h4>
              <p className="text-[11px] text-slate-500 leading-snug">Comprehensive national criminal clearance.</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E2D6C0] flex items-center justify-center text-[#0B192C]">
                <UserCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h4 className="text-xs font-serif font-bold text-[#0B192C]">Biometric ID</h4>
              <p className="text-[11px] text-slate-500 leading-snug">Advanced government ID & face match audit.</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E2D6C0] flex items-center justify-center text-[#0B192C]">
                <Award className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h4 className="text-xs font-serif font-bold text-[#0B192C]">Vetted Pedagogy</h4>
              <p className="text-[11px] text-slate-500 leading-snug">Exhaustive professional certification check.</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E2D6C0] flex items-center justify-center text-[#0B192C]">
                <QrCode className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h4 className="text-xs font-serif font-bold text-[#0B192C]">Secure Entry</h4>
              <p className="text-[11px] text-slate-500 leading-snug">Proprietary QR attendance & exit systems.</p>
            </div>

            <div className="space-y-2 col-span-2 sm:col-span-1">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E2D6C0] flex items-center justify-center text-[#0B192C]">
                <Star className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h4 className="text-xs font-serif font-bold text-[#0B192C]">Peer Approved</h4>
              <p className="text-[11px] text-slate-500 leading-snug">Vetted by the most discerning society parents.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: DISCOVER THEIR PASSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <div className="space-y-2 max-w-xl mx-auto">
          <span className="text-[10px] tracking-widest font-extrabold text-[#8C6B27] uppercase">
            THE CURRICULUM
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0B192C]">
            Discover Their Passion
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            From athletic excellence to artistic mastery, curated for the modern resident.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div
            onClick={() => { onSelectCategory('Sports'); setActiveTab('browse-coaches'); }}
            className="bg-white p-6 rounded-2xl border border-[#E2D6C0] hover:border-[#C5A059] transition-all cursor-pointer space-y-3 group shadow-2xs hover:shadow-md"
          >
            <div className="w-12 h-12 bg-[#FBF9F5] rounded-full mx-auto flex items-center justify-center border border-[#EADFCB]">
              <Award className="w-5 h-5 text-[#0B192C]" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#0B192C] group-hover:text-[#C5A059] transition-colors">
              Sports Classes
            </h3>
            <span className="text-[10px] tracking-widest text-slate-400 font-semibold block uppercase">
              15 Sport Skills
            </span>
          </div>

          <div
            onClick={() => { onSelectCategory('Dance'); setActiveTab('browse-coaches'); }}
            className="bg-white p-6 rounded-2xl border border-[#E2D6C0] hover:border-[#C5A059] transition-all cursor-pointer space-y-3 group shadow-2xs hover:shadow-md"
          >
            <div className="w-12 h-12 bg-[#FBF9F5] rounded-full mx-auto flex items-center justify-center border border-[#EADFCB]">
              <Sparkles className="w-5 h-5 text-[#0B192C]" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#0B192C] group-hover:text-[#C5A059] transition-colors">
              Dance Classes
            </h3>
            <span className="text-[10px] tracking-widest text-slate-400 font-semibold block uppercase">
              11 Dance Styles
            </span>
          </div>

          <div
            onClick={() => { onSelectCategory('Fitness'); setActiveTab('browse-coaches'); }}
            className="bg-white p-6 rounded-2xl border border-[#E2D6C0] hover:border-[#C5A059] transition-all cursor-pointer space-y-3 group shadow-2xs hover:shadow-md"
          >
            <div className="w-12 h-12 bg-[#FBF9F5] rounded-full mx-auto flex items-center justify-center border border-[#EADFCB]">
              <Award className="w-5 h-5 text-[#0B192C]" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#0B192C] group-hover:text-[#C5A059] transition-colors">
              Gymnastics & Fitness
            </h3>
            <span className="text-[10px] tracking-widest text-slate-400 font-semibold block uppercase">
              11 Fit Disciplines
            </span>
          </div>

          <div
            onClick={() => { onSelectCategory('Other'); setActiveTab('browse-coaches'); }}
            className="bg-white p-6 rounded-2xl border border-[#E2D6C0] hover:border-[#C5A059] transition-all cursor-pointer space-y-3 group shadow-2xs hover:shadow-md"
          >
            <div className="w-12 h-12 bg-[#FBF9F5] rounded-full mx-auto flex items-center justify-center border border-[#EADFCB]">
              <ShieldCheck className="w-5 h-5 text-[#0B192C]" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#0B192C] group-hover:text-[#C5A059] transition-colors">
              Other Creative Classes
            </h3>
            <span className="text-[10px] tracking-widest text-slate-400 font-semibold block uppercase">
              15 Art & Logic Skills
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 4: ELITE COMMUNITY MENTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADFCB] pb-4">
          <div>
            <span className="text-[10px] tracking-widest font-extrabold text-[#8C6B27] uppercase">
              CURATED TALENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0B192C]">
              Elite Community Mentors
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Certified professionals who excel in pedagogy and performance, right in your neighborhood.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('browse-coaches')}
            className="text-xs font-semibold text-[#0B192C] hover:text-[#C5A059] flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>View All Professionals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_COACHES.slice(0, 3).map((coach) => (
            <div
              key={coach.id}
              className="bg-white rounded-3xl border border-[#E2D6C0] overflow-hidden shadow-xs hover:shadow-lg transition-all space-y-4 p-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Image */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={coach.avatarUrl}
                    alt={coach.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-[#0B192C] border border-[#EADFCB] flex items-center gap-1.5 shadow-2xs">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                    <span>VERIFIED PROFESSIONAL</span>
                  </div>
                </div>

                {/* Name & Rating */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif font-bold text-[#0B192C]">{coach.name}</h3>
                  <div className="flex items-center gap-1 bg-[#FBF9F5] px-2 py-0.5 rounded-full border border-[#EADFCB] text-[11px] font-bold text-[#0B192C]">
                    <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
                    <span>{coach.rating}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic font-serif">
                  {coach.subCategory} • {coach.experienceYears} Years Exp.
                </p>

                {/* Certification Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {coach.certifications.slice(0, 3).map((cert, idx) => (
                    <span key={idx} className="bg-[#FBF9F5] text-[#0B192C] text-[10px] font-semibold px-2 py-0.5 rounded border border-[#EADFCB]">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <button
                onClick={() => setActiveTab('browse-coaches')}
                className="w-full bg-[#0B192C] hover:bg-[#15273F] text-white text-xs font-bold py-3 rounded-full transition-all border border-[#C5A059]/30 shadow-2xs cursor-pointer"
              >
                Secure a Trial
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

