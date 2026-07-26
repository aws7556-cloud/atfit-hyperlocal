import React from 'react';
import { NavTab } from '../types';
import { CheckCircle2, Ticket, Sparkles, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ setActiveTab }) => {
  return (
    <section id="atfit-pricing" className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1.5 rounded-full border border-teal-200">
            Clear & Flexible Society Pricing
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Start With a Rs. 99 Trial, Upgrade Monthly
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Try a 1-on-1 or small group coaching session inside your apartment complex for just Rs. 99. No lengthy lock-in contracts.
          </p>
        </div>

        {/* Trial Feature Highlight Box */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-teal-950 p-6 sm:p-8 rounded-3xl shadow-md border border-amber-400 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-teal-950 text-amber-300 text-[11px] font-extrabold px-3 py-1 rounded-full">
              <Ticket className="w-3.5 h-3.5 text-amber-400" />
              <span>FLAT ONE-TIME TRIAL SESSION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-teal-950 tracking-tight">
              Rs. 99 One-Time Trial Pass
            </h2>
            <p className="text-xs sm:text-sm text-teal-950/90 leading-relaxed font-medium">
              Pick your preferred activity (Chess, Swimming, Football, Karate, Painting), select your society's clubhouse slot, and experience the coaching quality before subscribing.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center">
            <button
              onClick={() => setActiveTab('browse-coaches')}
              className="w-full sm:w-auto bg-teal-950 hover:bg-teal-900 text-amber-400 font-extrabold text-xs px-6 py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Trial Pass (Rs. 99)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Monthly Membership Comparison Cards */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-slate-950">
              Monthly Society Membership Tiers
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Flexible recurring plans managed easily from your parent account. Pause or cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* TIER 1: STARTER */}
            <div className="bg-white p-6 rounded-3xl border border-teal-100 shadow-2xs space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Starter Tier</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-950">Rs. 399</span>
                    <span className="text-xs font-semibold text-slate-500">/ month</span>
                  </div>
                  <p className="text-xs text-slate-600 pt-1">Ideal for beginners starting a single skill habit.</p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span><strong>1 session / week</strong> inside society</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Single activity category</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Dedicated assigned coach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Monthly progress report card</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('browse-coaches')}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer text-center"
              >
                Choose Starter Plan
              </button>
            </div>

            {/* TIER 2: STANDARD (MOST POPULAR) */}
            <div className="bg-teal-900 text-white p-6 sm:p-8 rounded-3xl border-2 border-amber-400 shadow-xl space-y-6 flex flex-col justify-between relative scale-102">
              
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-teal-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                ★ MOST POPULAR AMONG PARENTS
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block">Standard Tier</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-amber-400">Rs. 699</span>
                    <span className="text-xs font-semibold text-teal-200">/ month</span>
                  </div>
                  <p className="text-xs text-teal-100 pt-1">Recommended for consistent skill progression & practice.</p>
                </div>

                <div className="border-t border-teal-800 pt-4 space-y-3 text-xs text-teal-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>2 sessions / week</strong> inside society</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Priority slot scheduling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Single activity category</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Free session rescheduling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Physical QR verified ID badge badge audit</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('browse-coaches')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-teal-950 font-black text-xs py-3.5 rounded-xl transition-all cursor-pointer text-center shadow-md"
              >
                Get Standard Plan
              </button>
            </div>

            {/* TIER 3: PREMIUM */}
            <div className="bg-white p-6 rounded-3xl border border-teal-100 shadow-2xs space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Premium Tier</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-950">Rs. 999</span>
                    <span className="text-xs font-semibold text-slate-500">/ month</span>
                  </div>
                  <p className="text-xs text-slate-600 pt-1">For multi-sport / dual-activity enthusiasts.</p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span><strong>3 sessions / week</strong> or dual category</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Access across <strong>2 activity categories</strong> (e.g. Swim + Chess)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>VIP scheduling & tournament prep</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Direct coach consultation</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('browse-coaches')}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer text-center"
              >
                Choose Premium Plan
              </button>
            </div>

          </div>
        </div>

        {/* FAQs Box */}
        <div className="bg-white p-8 rounded-3xl border border-teal-100 space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-700" />
            <h3 className="text-lg font-bold text-slate-950">Frequently Asked Membership Questions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900">Can I pause my subscription during school exams or holidays?</h4>
              <p className="text-slate-600 leading-relaxed">
                Yes! Parents can pause or resume memberships anytime directly from their account dashboard with zero penalty fee.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900">Where are classes held in my society?</h4>
              <p className="text-slate-600 leading-relaxed">
                Coaches utilize your residential society’s existing clubhouse hall, swimming pool, badminton court, or sports lawn depending on the activity.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900">How do I verify the coach before my child attends?</h4>
              <p className="text-slate-600 leading-relaxed">
                Every approved coach wears an ATFIT ID card printed with a QR badge. Scan it using our site’s QR Verification Lookup tool to view live status.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900">What payment methods are supported?</h4>
              <p className="text-slate-600 leading-relaxed">
                We accept all standard Indian payment gateways including Google Pay, PhonePe, Paytm, UPI, credit cards, and netbanking.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
