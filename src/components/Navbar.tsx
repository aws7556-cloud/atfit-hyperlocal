import React from 'react';
import { NavTab } from '../types';
import { POPULAR_SOCIETIES } from '../data';
import { ShieldCheck, MapPin, LayoutDashboard, ShieldAlert, Menu, X, ArrowRight, Bell } from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  selectedSociety: string;
  setSelectedSociety: (socName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedSociety,
  setSelectedSociety,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header id="atfit-navbar" className="sticky top-0 z-50 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EADFCB] shadow-2xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#0B192C] text-[#E0D5C1] text-[11px] py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 bg-[#C5A059] text-[#0B192C] font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase">
          GUARANTEED SAFETY
        </span>
        <span>Book a trial session inside your residential society clubhouse or grounds for just <strong className="text-white">Rs. 99</strong></span>
        <button
          onClick={() => setActiveTab('browse-coaches')}
          className="underline hover:text-[#C5A059] ml-1 font-semibold flex items-center gap-0.5 cursor-pointer"
        >
          Book Trial <ArrowRight className="w-3 h-3 inline" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 bg-[#0B192C] rounded-xl flex items-center justify-center text-white shadow-xs border border-[#C5A059]/30">
              <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif font-extrabold tracking-tight text-[#0B192C] block leading-none">
                  ATFIT
                </span>
                <span className="bg-[#C5A059]/15 text-[#8C6B27] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#C5A059]/30 uppercase tracking-widest">
                  VERIFIED
                </span>
              </div>
              <span className="text-[10px] uppercase font-medium tracking-widest text-[#64748B] block mt-0.5">
                HYPERLOCAL SKILL MARKETPLACE
              </span>
            </div>
          </div>

          {/* Society Selector Dropdown */}
          <div className="hidden lg:flex items-center gap-2 bg-white px-3.5 py-2 rounded-full border border-[#E2D6C0] text-xs shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span className="text-[#0B192C] font-semibold shrink-0">Society:</span>
            <select
              value={selectedSociety}
              onChange={(e) => setSelectedSociety(e.target.value)}
              className="bg-transparent text-[#0B192C] font-bold focus:outline-none cursor-pointer pr-1"
            >
              <option value="All">All Societies (Bengaluru)</option>
              {POPULAR_SOCIETIES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name} ({s.area})
                </option>
              ))}
            </select>
          </div>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-[#334155]">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'home' ? 'bg-[#0B192C] text-white font-bold shadow-2xs' : 'hover:text-[#0B192C] hover:bg-white/80'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('how-it-works')}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'how-it-works' ? 'bg-[#0B192C] text-white font-bold shadow-2xs' : 'hover:text-[#0B192C] hover:bg-white/80'
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => setActiveTab('browse-coaches')}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'browse-coaches' ? 'bg-[#0B192C] text-white font-bold shadow-2xs' : 'hover:text-[#0B192C] hover:bg-white/80'
              }`}
            >
              Find Coaches
            </button>
            <button
              onClick={() => setActiveTab('verification-lookup')}
              className={`px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'verification-lookup' ? 'bg-[#C5A059] text-white font-bold shadow-2xs' : 'text-[#8C6B27] bg-[#C5A059]/10 hover:bg-[#C5A059]/20'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              QR Verification
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'pricing' ? 'bg-[#0B192C] text-white font-bold shadow-2xs' : 'hover:text-[#0B192C] hover:bg-white/80'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setActiveTab('for-coaches')}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'for-coaches' ? 'bg-[#0B192C] text-white font-bold shadow-2xs' : 'hover:text-[#0B192C] hover:bg-white/80'
              }`}
            >
              For Coaches
            </button>
            <button
              onClick={() => setActiveTab('for-societies')}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'for-societies' ? 'bg-[#0B192C] text-white font-bold shadow-2xs' : 'hover:text-[#0B192C] hover:bg-white/80'
              }`}
            >
              For Societies
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 text-[#0B192C] text-xs font-semibold rounded-full border border-[#E2D6C0] transition-all cursor-pointer"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('admin')}
              className="hidden xl:flex items-center gap-1 px-3 py-2 bg-[#0B192C]/5 text-[#0B192C] hover:bg-[#0B192C]/10 text-xs font-semibold rounded-full border border-[#0B192C]/20 transition-all cursor-pointer"
              title="Internal Admin Audit Portal"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Admin</span>
            </button>

            <button
              onClick={() => setActiveTab('browse-coaches')}
              className="px-5 py-2.5 bg-[#0B192C] hover:bg-[#11243E] text-white font-bold text-xs rounded-full shadow-sm transition-all flex items-center gap-2 cursor-pointer border border-[#C5A059]/40"
            >
              <span className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
              <span>Book Trial</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-white rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#EADFCB] px-4 py-4 space-y-3 text-sm font-semibold text-slate-800">
          <div className="bg-white p-3 rounded-2xl border border-[#E2D6C0] mb-2">
            <label className="text-xs text-[#0B192C] font-bold block mb-1">Select Housing Society:</label>
            <select
              value={selectedSociety}
              onChange={(e) => {
                setSelectedSociety(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#FBF9F5] border border-[#E2D6C0] rounded-xl p-2 text-xs font-bold text-[#0B192C]"
            >
              <option value="All">All Societies (Bengaluru)</option>
              {POPULAR_SOCIETIES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name} ({s.area})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 hover:bg-white rounded-xl flex items-center justify-between"
          >
            <span>Home Overview</span>
          </button>
          <button
            onClick={() => { setActiveTab('how-it-works'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 hover:bg-white rounded-xl"
          >
            How It Works
          </button>
          <button
            onClick={() => { setActiveTab('browse-coaches'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 hover:bg-white rounded-xl"
          >
            Find Coaches
          </button>
          <button
            onClick={() => { setActiveTab('verification-lookup'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 bg-[#0B192C] text-white rounded-xl flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>QR Verification Lookup</span>
          </button>
          <button
            onClick={() => { setActiveTab('pricing'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 hover:bg-white rounded-xl"
          >
            Pricing & Memberships
          </button>
          <button
            onClick={() => { setActiveTab('for-coaches'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 hover:bg-white rounded-xl"
          >
            For Coaches (Apply)
          </button>
          <button
            onClick={() => { setActiveTab('for-societies'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 hover:bg-white rounded-xl"
          >
            For Society Committees
          </button>
          <button
            onClick={() => { setActiveTab('dashboard'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 hover:bg-white rounded-xl flex items-center gap-2"
          >
            <LayoutDashboard className="w-4 h-4 text-[#C5A059]" />
            <span>Account Dashboard</span>
          </button>
          <button
            onClick={() => { setActiveTab('admin'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 bg-[#0B192C]/10 text-[#0B192C] rounded-xl flex items-center gap-2"
          >
            <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
            <span>Admin Control Panel</span>
          </button>
        </div>
      )}
    </header>
  );
};

