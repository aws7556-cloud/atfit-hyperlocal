import React from 'react';
import { NavTab } from '../types';
import { HOW_IT_WORKS_STEPS } from '../data';
import { MapPin, Ticket, CalendarCheck, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

interface HowItWorksProps {
  setActiveTab: (tab: NavTab) => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ setActiveTab }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return <MapPin className="w-6 h-6 text-teal-700" />;
      case 'Ticket': return <Ticket className="w-6 h-6 text-amber-600" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-emerald-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-800" />;
      default: return <Sparkles className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <section id="atfit-how-it-works" className="py-16 bg-white border-y border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
            Simple, Visual & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            How ATFIT Works For Parents
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            From discovering verified coaches near your building to booking a trial and subscribing monthly — all without a phone call or WhatsApp forward.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-slate-50 p-6 rounded-2xl border border-teal-100 space-y-4 hover:border-teal-300 transition-all shadow-2xs relative flex flex-col justify-between"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-teal-800/20 font-mono">
                  {step.step}
                </span>
                <div className="p-3 bg-white rounded-xl shadow-2xs border border-teal-100">
                  {getIcon(step.icon)}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-slate-950">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx === 1 && (
                <div className="pt-2">
                  <span className="inline-block bg-amber-500 text-teal-950 text-[10px] font-extrabold px-2.5 py-1 rounded-md">
                    Rs. 99 Flat Trial Rate
                  </span>
                </div>
              )}
              {idx === 3 && (
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('verification-lookup')}
                    className="text-[11px] font-bold text-teal-800 hover:underline flex items-center gap-1"
                  >
                    <span>Try QR Lookup Tool</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Layer Callout Card */}
        <div className="bg-gradient-to-r from-teal-900 to-teal-950 text-white p-8 rounded-3xl shadow-lg border border-teal-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                The Trust Layer for Housing Societies
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Every Coach Undergoes Background Check, Identity Verification & Skill Audits
            </h3>
            <p className="text-xs text-teal-100/90 leading-relaxed">
              Before stepping into your society clubhouse or sports lawn, coaches must pass police verification, ID document validation, reference checks, and a live skill demo.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
            <button
              onClick={() => setActiveTab('browse-coaches')}
              className="bg-amber-500 hover:bg-amber-600 text-teal-950 font-bold text-xs px-5 py-3 rounded-xl transition-all text-center shadow-xs"
            >
              Find Coaches in My Society
            </button>
            <button
              onClick={() => setActiveTab('verification-lookup')}
              className="bg-teal-800/80 hover:bg-teal-800 text-teal-100 font-semibold text-xs px-5 py-3 rounded-xl border border-teal-700 transition-all text-center"
            >
              Verify Coach QR Code
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
