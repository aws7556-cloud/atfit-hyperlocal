import React, { useState } from 'react';
import { CategoryType } from '../types';
import { ShieldCheck, UserCheck, QrCode, Wallet, Building2, CheckCircle2, ArrowRight, Loader2, Award, FileText } from 'lucide-react';

export const ForCoachesSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState<CategoryType>('Sports');
  const [subCategory, setSubCategory] = useState('Football');
  const [experienceYears, setExperienceYears] = useState('5');
  const [preferredSocieties, setPreferredSocieties] = useState('Prestige Shantiniketan, Whitefield');
  const [certificationsDetail, setCertificationsDetail] = useState('');

  const [loading, setLoading] = useState(false);
  const [submittedApp, setSubmittedApp] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCoachApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !subCategory) {
      setErrorMsg('Please fill in your full name, email, phone, and activity specialty.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/coach-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          category,
          subCategory,
          experienceYears,
          preferredSocieties,
          certificationsDetail,
        }),
      });

      const data = await res.json();
      if (data.success && data.application) {
        setSubmittedApp(data.application);
      } else {
        setErrorMsg(data.error || 'Failed to submit application.');
      }
    } catch (err) {
      // LocalStorage / static fallback
      const mockApp = {
        id: `APP-${Math.floor(100 + Math.random() * 900)}`,
        fullName,
        email,
        phone,
        category,
        subCategory,
        experienceYears,
        preferredSocieties,
        certificationsDetail,
        status: 'Under Review',
        appliedAt: new Date().toLocaleDateString(),
      };

      try {
        const savedApps = localStorage.getItem('atfit_applications');
        const appsList = savedApps ? JSON.parse(savedApps) : [];
        appsList.push(mockApp);
        localStorage.setItem('atfit_applications', JSON.stringify(appsList));
      } catch (storageErr) {
        console.error('Failed to save application to LocalStorage', storageErr);
      }

      setSubmittedApp(mockApp);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="atfit-for-coaches" className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-900 text-xs font-bold">
              <UserCheck className="w-4 h-4 text-teal-700" />
              <span>Coach Recruitment Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Teach Inside Top Housing Societies. Zero Travel Hassle. Guaranteed Monthly Payouts.
            </h1>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Are you a certified freelance coach in sports, fitness, chess, martial arts, or creative arts? Join ATFIT to get assigned to high-density residential societies near your home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-teal-100 space-y-1 shadow-2xs">
                <Wallet className="w-5 h-5 text-teal-700" />
                <h4 className="text-xs font-bold text-slate-950">Guaranteed Monthly Payouts</h4>
                <p className="text-[11px] text-slate-500">Weekly or monthly direct bank deposits.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-teal-100 space-y-1 shadow-2xs">
                <Building2 className="w-5 h-5 text-teal-700" />
                <h4 className="text-xs font-bold text-slate-950">Zero Travel Fatigue</h4>
                <p className="text-[11px] text-slate-500">Coach kids right inside your neighborhood.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-teal-100 space-y-1 shadow-2xs">
                <QrCode className="w-5 h-5 text-amber-600" />
                <h4 className="text-xs font-bold text-slate-950">Physical QR ID Badge</h4>
                <p className="text-[11px] text-slate-500">Get a verified public profile & badge.</p>
              </div>
            </div>

          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border-2 border-teal-200 p-6 sm:p-8 shadow-xl space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-extrabold text-slate-950">Apply as an ATFIT Coach</h3>
                <p className="text-xs text-slate-500">Submit your credentials for background verification.</p>
              </div>

              {submittedApp ? (
                /* Status Under Review Pass */
                <div className="space-y-5 text-center py-4">
                  <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto border-2 border-amber-300">
                    <ShieldCheck className="w-10 h-10" />
                  </div>

                  <div className="space-y-1">
                    <span className="bg-amber-400 text-teal-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      STATUS: UNDER REVIEW
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-950 pt-2">
                      Application Submitted!
                    </h3>
                    <p className="text-xs text-slate-600">
                      Application Reference ID: <strong className="font-mono text-teal-900">{submittedApp.id}</strong>
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-teal-100 text-left space-y-2 text-xs text-slate-700">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-semibold text-slate-500">Applicant:</span>
                      <span className="font-bold text-slate-900">{submittedApp.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-semibold text-slate-500">Category:</span>
                      <span className="font-bold text-teal-900">{submittedApp.category} ({submittedApp.subCategory})</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-semibold text-slate-500">Preferred Area:</span>
                      <span className="font-bold text-slate-900">{submittedApp.preferredSocieties}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-500">Verification Stage:</span>
                      <span className="font-bold text-amber-700">Aadhaar & Police Clearance Audit</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 italic">
                    Once approved by admin, you will receive your unique QR-linked verification badge and society schedule.
                  </p>

                  <button
                    onClick={() => setSubmittedApp(null)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-xl transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleCoachApply} className="space-y-4 text-xs">
                  
                  {errorMsg && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sensei Deepak Verma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="coach@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Skill Category *</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as CategoryType)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-teal-950 focus:bg-white focus:outline-teal-600 cursor-pointer"
                      >
                        <option value="Sports">Sports Classes</option>
                        <option value="Dance">Dance Classes</option>
                        <option value="Fitness">Gymnastics & Fitness Classes</option>
                        <option value="Other">Other Classes</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Activity Specialty *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Karate Black Belt / Chess"
                        value={subCategory}
                        onChange={(e) => setSubCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Coaching Experience (Years)</label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Preferred Societies / Area</label>
                      <input
                        type="text"
                        placeholder="e.g. Whitefield, Sarjapur"
                        value={preferredSocieties}
                        onChange={(e) => setPreferredSocieties(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Certifications & ID Proof Summary</label>
                    <textarea
                      rows={2}
                      placeholder="Mention your license details, state championships, or degree..."
                      value={certificationsDetail}
                      onChange={(e) => setCertificationsDetail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application for Verification</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
