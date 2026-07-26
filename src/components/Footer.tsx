import React from 'react';
import { NavTab } from '../types';
import { ShieldCheck, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer id="atfit-footer" className="bg-[#0B192C] text-slate-300 text-xs border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white border border-[#C5A059]/40">
                <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
              </div>
              <span className="text-2xl font-serif font-extrabold text-white tracking-tight">ATFIT</span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              A hyperlocal verified skill-coaching marketplace for children, delivered inside residential society clubhouses, gyms, and sports lawns across Bengaluru.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-semibold text-[#E2D6C0] bg-white/5 p-3 rounded-2xl border border-[#C5A059]/30 max-w-sm">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>100% Background Checked, Police Audited & QR Verified</span>
            </div>
          </div>

          {/* Nav Links Col 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-widest text-[#C5A059]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('how-it-works')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('browse-coaches')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Find Verified Coaches
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('verification-lookup')} className="hover:text-[#C5A059] transition-colors text-[#C5A059] font-bold flex items-center gap-1 cursor-pointer">
                  <span>QR Code Verification Lookup</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('pricing')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Pricing & Membership Tiers
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Links Col 2 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-widest text-[#C5A059]">
              Stakeholders & Support
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <button onClick={() => setActiveTab('for-coaches')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  For Freelance Coaches (Apply to Join)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('for-societies')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  For Housing Society RWAs / Committees
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('dashboard')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Parent / Coach Account Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('admin')} className="hover:text-[#C5A059] transition-colors text-slate-500 cursor-pointer">
                  Internal Admin Audit Panel
                </button>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>support@atfit.in</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>WhatsApp Helpline: +91 98765 43210</span>
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} ATFIT Skill-Coaching Technologies. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Building trusted neighbourhood skill hubs for children</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

