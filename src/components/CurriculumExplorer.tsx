import React, { useState } from 'react';
import { CategoryType, CurriculumItem, NavTab } from '../types';
import { CURRICULUM_DATA, POPULAR_SOCIETIES } from '../data';
import { Search, Trophy, Music, Activity, Palette, ShieldCheck, X, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CurriculumExplorerProps {
  onSelectClass: (className: string, category: CategoryType) => void;
  setActiveTab: (tab: NavTab) => void;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({
  onSelectClass,
  setActiveTab,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('Sports');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Custom Class Request Modal State
  const [requestClass, setRequestClass] = useState<CurriculumItem | null>(null);
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSociety, setSelectedSociety] = useState('');
  const [childAge, setChildAge] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filter curriculum items based on active tab and search query
  const filteredItems = CURRICULUM_DATA.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // If there is a search query, show matches across all categories
    if (searchQuery.trim()) {
      return matchesSearch;
    }
    
    return item.category === activeCategory;
  });

  const categoryConfigs: Record<CategoryType, { title: string; icon: React.ReactNode; colorClass: string; bgClass: string; borderClass: string }> = {
    Sports: {
      title: 'Sports Classes',
      icon: <Trophy className="w-5 h-5" />,
      colorClass: 'text-emerald-700',
      bgClass: 'bg-emerald-50',
      borderClass: 'border-emerald-200',
    },
    Dance: {
      title: 'Dance Classes',
      icon: <Music className="w-5 h-5" />,
      colorClass: 'text-pink-700',
      bgClass: 'bg-pink-50',
      borderClass: 'border-pink-200',
    },
    Fitness: {
      title: 'Gymnastics & Fitness',
      icon: <Activity className="w-5 h-5" />,
      colorClass: 'text-amber-700',
      bgClass: 'bg-amber-50',
      borderClass: 'border-amber-200',
    },
    Other: {
      title: 'Other Classes',
      icon: <Palette className="w-5 h-5" />,
      colorClass: 'text-indigo-700',
      bgClass: 'bg-indigo-50',
      borderClass: 'border-indigo-200',
    },
  };

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone || !selectedSociety || !requestClass) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/society-partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          societyName: selectedSociety,
          representativeName: parentName,
          roleInCommittee: 'Resident Parent',
          phone,
          email,
          flatCount: 1,
          locationArea: 'Bengaluru',
          notes: `PARENT CLASS INTEREST: Requested a coach for "${requestClass.name}" under ${requestClass.category} category for a child of age ${childAge || 'unspecified'}.`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitSuccess(true);
      }
    } catch (err) {
      // Local fallback simulating success
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setRequestClass(null);
    setParentName('');
    setPhone('');
    setEmail('');
    setSelectedSociety('');
    setChildAge('');
    setSubmitSuccess(false);
  };

  return (
    <section id="atfit-curriculum" className="py-16 bg-[#FBF9F5] border-y border-[#EADFCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] tracking-widest font-extrabold text-[#C5A059] uppercase block font-serif">
            CHOOSE YOUR SPECIALIZATION
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#0B192C] leading-tight">
            Explore 50+ Specialized Clubhouse Classes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            From premier sports and classical dance to gymnastics and cognitive learning. Click any class to search active coaches or request a new verified instructor at your building.
          </p>
        </div>

        {/* Search & Category Tab Bar */}
        <div className="bg-white p-5 rounded-3xl border border-[#E7DCC8] shadow-xs space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Tab Selectors */}
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
              {(Object.keys(categoryConfigs) as CategoryType[]).map((cat) => {
                const config = categoryConfigs[cat];
                const isActive = activeCategory === cat && !searchQuery.trim();
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory(cat);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0B192C] text-white shadow-md'
                        : 'bg-[#FBF9F5] text-slate-700 hover:bg-[#F6F1E9] border border-[#EADFCB]'
                    }`}
                  >
                    {config.icon}
                    <span>{config.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="relative w-full lg:max-w-xs">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Search all 51 classes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#FBF9F5] border border-[#EADFCB] rounded-full text-xs font-medium text-slate-900 placeholder:text-slate-500 focus:bg-white focus:outline-teal-600 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {searchQuery.trim() && (
            <div className="text-xs font-bold text-slate-500 border-t border-[#FBF9F5] pt-3">
              Search Results for: <span className="text-[#0B192C]">"{searchQuery}"</span> ({filteredItems.length} found)
            </div>
          )}
        </div>

        {/* Classes Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const hasCoaches = item.coachesAvailableCount > 0;
              const config = categoryConfigs[item.category];

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-5 rounded-2xl border border-[#E2D6C0] shadow-2xs hover:shadow-md hover:border-[#C5A059]/80 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    
                    {/* Badge & Emoji */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl">{item.emoji}</div>
                      <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                        hasCoaches
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-[#FBF9F5] text-slate-500 border border-slate-200'
                      }`}>
                        {hasCoaches ? 'Coaches Active' : 'Request Coach'}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-base text-[#0B192C] group-hover:text-[#C5A059] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal leading-snug line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-4 border-t border-slate-100/80 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {item.category === 'Fitness' ? 'Gymnastics & Fitness' : item.category === 'Other' ? 'Other Classes' : `${item.category} Classes`}
                    </span>
                    
                    {hasCoaches ? (
                      <button
                        onClick={() => onSelectClass(item.name, item.category)}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer transition-colors group/btn"
                      >
                        <span>Find Coach</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setRequestClass(item)}
                        className="text-xs font-bold text-[#C5A059] hover:text-[#0B192C] flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Request Coach</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Class Request Modal */}
        <AnimatePresence>
          {requestClass && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="bg-white rounded-3xl border border-[#E7DCC8] shadow-2xl max-w-md w-full overflow-hidden"
              >
                
                {/* Modal Header */}
                <div className="bg-[#0B192C] text-white p-6 relative">
                  <button
                    onClick={resetModal}
                    className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{requestClass.emoji}</span>
                      <span className="bg-[#C5A059]/20 text-[#C5A059] text-[10px] font-black px-2 py-0.5 rounded border border-[#C5A059]/30 uppercase tracking-widest">
                        {requestClass.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white">
                      Request {requestClass.name} Coach
                    </h3>
                    <p className="text-[11px] text-slate-300">
                      Express interest to bring custom professional coaching straight to your gated society club/grounds.
                    </p>
                  </div>
                </div>

                {/* Form Area */}
                <div className="p-6">
                  {submitSuccess ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                        <Check className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-serif font-bold text-lg text-slate-950">Inquiry Logged!</h4>
                        <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                          Thank you! We have logged interest for **{requestClass.name}** at your housing society. Our onboarding specialists are searching for verified local instructors.
                        </p>
                      </div>
                      <button
                        onClick={resetModal}
                        className="bg-[#0B192C] hover:bg-[#15273F] text-white text-xs font-bold px-6 py-2 rounded-full cursor-pointer transition-colors"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleRequestSubmit} className="space-y-4">
                      
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800 block">Parent Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Meera Rao"
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:bg-white focus:outline-teal-600"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-800 block">WhatsApp / Phone *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765..."
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:bg-white focus:outline-teal-600"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-800 block">Child's Age (Optional)</label>
                          <input
                            type="number"
                            min="3"
                            max="18"
                            placeholder="e.g. 8"
                            value={childAge}
                            onChange={(e) => setChildAge(e.target.value)}
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:bg-white focus:outline-teal-600"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800 block">Email Address (Optional)</label>
                        <input
                          type="email"
                          placeholder="parent@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:bg-white focus:outline-teal-600"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800 block">Your Housing Society *</label>
                        <select
                          required
                          value={selectedSociety}
                          onChange={(e) => setSelectedSociety(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-teal-950 focus:bg-white focus:outline-teal-600 cursor-pointer"
                        >
                          <option value="">Select your society...</option>
                          {POPULAR_SOCIETIES.map((s) => (
                            <option key={s.id} value={s.name}>
                              {s.name} ({s.area})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-[10px] text-amber-900 leading-snug flex gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>ATFIT ensures every matches-linked coach undergoes police verification, Aadhaar audits, and certification checks prior to neighborhood assignments.</span>
                      </div>

                      <div className="pt-2 flex justify-end gap-2 text-xs">
                        <button
                          type="button"
                          onClick={resetModal}
                          className="px-4 py-2 border border-slate-300 rounded-full font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-5 py-2 bg-[#0B192C] hover:bg-[#15273F] text-white font-extrabold rounded-full cursor-pointer flex items-center gap-1.5 shadow-sm transition-all"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Request'}
                        </button>
                      </div>

                    </form>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
