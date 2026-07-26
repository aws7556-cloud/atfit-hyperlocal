import React, { useState } from 'react';
import { NavTab, CategoryType } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CurriculumExplorer } from './components/CurriculumExplorer';
import { BrowseCoachesSection } from './components/BrowseCoachesSection';
import { VerificationLookup } from './components/VerificationLookup';
import { PricingSection } from './components/PricingSection';
import { ForCoachesSection } from './components/ForCoachesSection';
import { ForSocietiesSection } from './components/ForSocietiesSection';
import { DashboardSection } from './components/DashboardSection';
import { AdminPanelSection } from './components/AdminPanelSection';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedSociety, setSelectedSociety] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSelectCategoryFromHero = (category: CategoryType) => {
    setSelectedCategory(category);
    setActiveTab('browse-coaches');
  };

  return (
    <div id="atfit-app-root" className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-teal-700 selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedSociety={selectedSociety}
        setSelectedSociety={setSelectedSociety}
      />

      {/* Main View Area */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: HOME */}
          {activeTab === 'home' && (
            <motion.div
              key="tab-home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <HeroSection
                setActiveTab={setActiveTab}
                onSelectCategory={handleSelectCategoryFromHero}
                selectedSociety={selectedSociety}
                setSelectedSociety={setSelectedSociety}
              />

              <HowItWorksSection setActiveTab={setActiveTab} />

              <CurriculumExplorer
                onSelectClass={(className, category) => {
                  setSelectedCategory(category);
                  setSearchQuery(className);
                  setActiveTab('browse-coaches');
                }}
                setActiveTab={setActiveTab}
              />

              <div className="pt-4">
                <BrowseCoachesSection
                  selectedSociety={selectedSociety}
                  setSelectedSociety={setSelectedSociety}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  setActiveTab={setActiveTab}
                />
              </div>

              <PricingSection setActiveTab={setActiveTab} />
            </motion.div>
          )}

          {/* TAB 2: HOW IT WORKS */}
          {activeTab === 'how-it-works' && (
            <motion.div
              key="tab-how-it-works"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <HowItWorksSection setActiveTab={setActiveTab} />
              <PricingSection setActiveTab={setActiveTab} />
            </motion.div>
          )}

          {/* TAB 3: BROWSE COACHES */}
          {activeTab === 'browse-coaches' && (
            <motion.div
              key="tab-browse-coaches"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <BrowseCoachesSection
                selectedSociety={selectedSociety}
                setSelectedSociety={setSelectedSociety}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setActiveTab={setActiveTab}
              />
            </motion.div>
          )}

          {/* TAB 4: VERIFICATION LOOKUP */}
          {activeTab === 'verification-lookup' && (
            <motion.div
              key="tab-verification-lookup"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <VerificationLookup />
            </motion.div>
          )}

          {/* TAB 5: PRICING */}
          {activeTab === 'pricing' && (
            <motion.div
              key="tab-pricing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <PricingSection setActiveTab={setActiveTab} />
            </motion.div>
          )}

          {/* TAB 6: FOR COACHES */}
          {activeTab === 'for-coaches' && (
            <motion.div
              key="tab-for-coaches"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <ForCoachesSection />
            </motion.div>
          )}

          {/* TAB 7: FOR SOCIETIES */}
          {activeTab === 'for-societies' && (
            <motion.div
              key="tab-for-societies"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <ForSocietiesSection />
            </motion.div>
          )}

          {/* TAB 8: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <motion.div
              key="tab-dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <DashboardSection setActiveTab={setActiveTab} />
            </motion.div>
          )}

          {/* TAB 9: ADMIN */}
          {activeTab === 'admin' && (
            <motion.div
              key="tab-admin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <AdminPanelSection setActiveTab={setActiveTab} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
