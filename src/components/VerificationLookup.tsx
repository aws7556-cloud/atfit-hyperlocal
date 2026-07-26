import React, { useState, useEffect } from 'react';
import { ShieldCheck, Search, QrCode, CheckCircle2, AlertTriangle, User, Calendar, MapPin, Award, ExternalLink, RefreshCw } from 'lucide-react';

interface VerificationLookupProps {
  initialCode?: string;
}

export const VerificationLookup: React.FC<VerificationLookupProps> = ({ initialCode }) => {
  const [searchCode, setSearchCode] = useState(initialCode || 'ATFIT-101');
  const [loading, setLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  const fetchVerification = async (codeToSearch: string) => {
    if (!codeToSearch.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const res = await fetch(`/api/verify-coach?code=${encodeURIComponent(codeToSearch.trim())}`);
      const data = await res.json();
      setVerificationResult(data);
    } catch (err) {
      setVerificationResult({ found: false, message: 'Server communication error.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialCode) {
      fetchVerification(initialCode);
    } else {
      fetchVerification('ATFIT-101');
    }
  }, [initialCode]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchVerification(searchCode);
  };

  return (
    <section id="atfit-verification-lookup" className="py-12 bg-slate-900 text-white min-h-screen border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950 border border-teal-800 text-teal-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Public Trust & Safety Infrastructure</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Coach Verification & QR Code Audit
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Scan the QR badge on any ATFIT coach's physical ID card or enter their unique Coach ID below to verify background clearance, identity, and active society authorization.
          </p>
        </div>

        {/* Code Input Box */}
        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
          <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <QrCode className="w-5 h-5 text-amber-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Enter Coach ID (e.g. ATFIT-101, ATFIT-102, ATFIT-105)..."
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-2xl font-mono text-sm text-amber-300 uppercase tracking-wider placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-amber-500 hover:bg-amber-600 text-teal-950 font-black text-xs px-6 py-3.5 rounded-2xl transition-all cursor-pointer shrink-0 flex items-center justify-center gap-2 shadow-sm"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
              <span>Verify ID Status</span>
            </button>
          </form>

          {/* Quick Test Samples */}
          <div className="flex items-center gap-2 text-xs text-slate-400 pt-1 flex-wrap">
            <span className="font-semibold text-slate-300">Quick Test Badges:</span>
            {['ATFIT-101', 'ATFIT-102', 'ATFIT-105', 'ATFIT-999'].map((code) => (
              <button
                key={code}
                onClick={() => {
                  setSearchCode(code);
                  fetchVerification(code);
                }}
                className="bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700 px-2.5 py-1 rounded-lg font-mono text-[11px] transition-colors"
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Verification Result Card */}
        {searched && (
          <div>
            {verificationResult?.found ? (
              <div className="bg-slate-950 rounded-3xl border-2 border-emerald-500/80 overflow-hidden shadow-2xl relative">
                
                {/* Status Bar */}
                <div className={`p-4 flex items-center justify-between text-xs font-bold ${
                  verificationResult.verificationRecord.status === 'Active'
                    ? 'bg-emerald-950/90 text-emerald-300 border-b border-emerald-800'
                    : 'bg-rose-950/90 text-rose-300 border-b border-rose-800'
                }`}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="uppercase tracking-wider">
                      VERIFIED ATFIT COACH RECORD FOUND
                    </span>
                  </div>
                  <span className="bg-emerald-500 text-slate-950 font-black px-3 py-1 rounded-full text-[11px]">
                    STATUS: {verificationResult.verificationRecord.status.toUpperCase()}
                  </span>
                </div>

                {/* Profile Grid */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Photo & QR Badge */}
                  <div className="md:col-span-4 text-center space-y-3">
                    <div className="relative inline-block">
                      <img
                        src={verificationResult.verificationRecord.avatarUrl}
                        alt={verificationResult.verificationRecord.fullName}
                        referrerPolicy="no-referrer"
                        className="w-32 h-32 rounded-3xl object-cover border-4 border-emerald-500 mx-auto shadow-md"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-md">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 text-center space-y-1 font-mono text-xs">
                      <span className="text-slate-400 block text-[10px]">SCANNABLE QR BADGE CODE</span>
                      <span className="text-amber-400 font-bold text-sm tracking-widest">
                        {verificationResult.verificationRecord.badgeCode}
                      </span>
                    </div>
                  </div>

                  {/* Information Details */}
                  <div className="md:col-span-8 space-y-4">
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded">
                          {verificationResult.verificationRecord.category}
                        </span>
                        <span className="text-xs text-slate-400">
                          Verified Since: <strong className="text-slate-200">{verificationResult.verificationRecord.verifiedSince}</strong>
                        </span>
                      </div>
                      <h2 className="text-2xl font-extrabold text-white">
                        {verificationResult.verificationRecord.fullName}
                      </h2>
                      <p className="text-xs text-emerald-400 font-medium">
                        {verificationResult.verificationRecord.title}
                      </p>
                    </div>

                    {/* Trust Seals */}
                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800 text-[11px] font-semibold text-slate-300">
                      <div className="flex items-center gap-1.5 bg-slate-900 p-2 rounded-xl">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Police Clear</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900 p-2 rounded-xl">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Aadhaar Audit</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900 p-2 rounded-xl">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Skill Evaluated</span>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Verified Credentials On File:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {verificationResult.verificationRecord.certifications.map((cert: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Authorized Societies */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Authorized Housing Societies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {verificationResult.verificationRecord.assignedSocieties.map((soc: string) => (
                          <span key={soc} className="bg-teal-950 text-teal-200 border border-teal-800 text-[11px] px-2.5 py-0.5 rounded-md font-semibold">
                            {soc}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            ) : (
              /* Not Found Card */
              <div className="bg-rose-950/40 rounded-3xl border-2 border-rose-800 p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-rose-900/60 text-rose-300 rounded-2xl flex items-center justify-center mx-auto border border-rose-700">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div className="space-y-1 max-w-md mx-auto">
                  <h3 className="text-xl font-bold text-white">Unverified or Suspended Badge</h3>
                  <p className="text-xs text-rose-200 leading-relaxed">
                    {verificationResult?.message || `No active coach record exists for code "${searchCode}". Please report unverified individuals to ATFIT Trust & Safety.`}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
