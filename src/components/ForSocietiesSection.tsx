import React, { useState } from 'react';
import { Building2, ShieldCheck, Trophy, Users, CheckCircle2, ArrowRight, Loader2, Calendar, Phone, Mail } from 'lucide-react';

export const ForSocietiesSection: React.FC = () => {
  const [societyName, setSocietyName] = useState('');
  const [representativeName, setRepresentativeName] = useState('');
  const [roleInCommittee, setRoleInCommittee] = useState('RWA Committee Member');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [flatCount, setFlatCount] = useState('1000');
  const [locationArea, setLocationArea] = useState('Bengaluru');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!societyName || !representativeName || !phone) {
      setErrorMsg('Please fill in society name, representative name, and phone number.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/society-partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          societyName,
          representativeName,
          roleInCommittee,
          phone,
          email,
          flatCount,
          locationArea,
          notes,
        }),
      });

      const data = await res.json();
      if (data.success && data.inquiry) {
        setSubmittedInquiry(data.inquiry);
      } else {
        setErrorMsg(data.error || 'Failed to submit partnership request.');
      }
    } catch (err) {
      setErrorMsg('Network error submitting request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="atfit-for-societies" className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Hero */}
        <div className="bg-gradient-to-r from-teal-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-teal-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-bold border border-teal-700">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>For RWA & Society Managing Committees</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Transform Your Clubhouse & Grounds Into an Active Kids' Skill Academy
            </h1>
            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
              Partner your residential complex with ATFIT. We bring background-verified coaches in swimming, football, chess, karate, and fine arts directly into your building — with <strong>zero upfront cost to the society</strong>.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-teal-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Cost to RWA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Police Clearance Verification</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Automated Slot Management</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-teal-950/80 p-6 rounded-2xl border border-teal-800 space-y-3">
            <h3 className="text-sm font-bold text-amber-300">Why Housing Committees Partner With Us:</h3>
            <ul className="space-y-2 text-xs text-teal-100">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Maximized utilization of existing clubhouse halls, swimming pools, and sports turfs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Public QR ID badge scanning ensures only verified instructors enter society premises.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Parents book Rs. 99 trials and monthly memberships seamlessly online without RWA phone calls.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Form & Pitch Deck Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pitch Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-950">
              How the ATFIT Society Partnership Works
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-teal-100 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-teal-900 font-extrabold text-sm">
                  <span className="w-6 h-6 bg-teal-100 text-teal-900 rounded-lg flex items-center justify-center text-xs">1</span>
                  <span>Facility Inspection & Capacity Mapping</span>
                </div>
                <p className="text-xs text-slate-600 pl-8">
                  Our team assesses your clubhouse hall, sports lawn, pool, and courts to set ideal batch sizes and safety parameters.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-teal-100 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-teal-900 font-extrabold text-sm">
                  <span className="w-6 h-6 bg-teal-100 text-teal-900 rounded-lg flex items-center justify-center text-xs">2</span>
                  <span>Coach Verification & Badge Issuance</span>
                </div>
                <p className="text-xs text-slate-600 pl-8">
                  We assign top-rated freelance coaches with police verification, background check certificates, and QR ID cards.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-teal-100 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-teal-900 font-extrabold text-sm">
                  <span className="w-6 h-6 bg-teal-100 text-teal-900 rounded-lg flex items-center justify-center text-xs">3</span>
                  <span>Digital Launch & Resident Onboarding</span>
                </div>
                <p className="text-xs text-slate-600 pl-8">
                  Your society is listed on ATFIT. Residents discover coaches, book Rs. 99 trials, and manage subscriptions seamlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-teal-200 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-slate-950">Partner Your Society</h3>
                <p className="text-xs text-slate-500">Request a 15-minute briefing and partnership deck for your committee.</p>
              </div>

              {submittedInquiry ? (
                <div className="space-y-4 text-center py-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Partnership Request Received!</h3>
                  <p className="text-xs text-slate-600">
                    An ATFIT Partnership Lead will contact <strong>{submittedInquiry.representativeName}</strong> at {submittedInquiry.phone} to share the society onboarding deck.
                  </p>
                  <button
                    onClick={() => setSubmittedInquiry(null)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2 rounded-xl"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs">
                  {errorMsg && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Housing Society Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prestige Shantiniketan / Sobha Royal Pavilion"
                      value={societyName}
                      onChange={(e) => setSocietyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Representative Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mr. Yashwant"
                        value={representativeName}
                        onChange={(e) => setRepresentativeName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Role in Committee</label>
                      <select
                        value={roleInCommittee}
                        onChange={(e) => setRoleInCommittee(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-900 focus:bg-white focus:outline-teal-600"
                      >
                        <option value="RWA President">RWA President / Secretary</option>
                        <option value="Sports Committee Member">Sports & Facilities Head</option>
                        <option value="Resident Parent">Resident Parent Representative</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
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

                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="committee@society.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Number of Apartments / Flats</label>
                      <input
                        type="number"
                        placeholder="e.g. 1200"
                        value={flatCount}
                        onChange={(e) => setFlatCount(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-800 block mb-1">Location Area / City</label>
                      <input
                        type="text"
                        placeholder="e.g. Whitefield, Bengaluru"
                        value={locationArea}
                        onChange={(e) => setLocationArea(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Comments / Notes</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Interested in swimming and chess coaching for our clubhouse..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
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
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Committee Partnership Briefing</span>
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
