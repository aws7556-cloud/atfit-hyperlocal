import React, { useState } from 'react';
import { Coach, TrialBooking } from '../types';
import { ShieldCheck, CheckCircle2, QrCode, X, ArrowRight, Loader2, CreditCard, Building, User, Phone, Mail } from 'lucide-react';

interface TrialBookingModalProps {
  coach: Coach | null;
  selectedSlot: string;
  defaultSociety: string;
  onClose: () => void;
  onSuccess: (booking: TrialBooking) => void;
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({
  coach,
  selectedSlot,
  defaultSociety,
  onClose,
  onSuccess,
}) => {
  if (!coach) return null;

  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('8');
  const [societyName, setSocietyName] = useState(
    defaultSociety && defaultSociety !== 'All' ? defaultSociety : coach.assignedSocieties[0] || 'Prestige Shantiniketan'
  );
  
  const [loading, setLoading] = useState(false);
  const [completedBooking, setCompletedBooking] = useState<TrialBooking | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !parentPhone || !childName) {
      setErrorMsg('Please fill in your name, phone number, and child name.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/trials/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName,
          parentPhone,
          parentEmail,
          childName,
          childAge,
          societyName,
          coachId: coach.id,
          selectedSlot,
        }),
      });

      const data = await res.json();
      if (data.success && data.booking) {
        setCompletedBooking(data.booking);
        onSuccess(data.booking);
      } else {
        setErrorMsg(data.error || 'Failed to process trial booking.');
      }
    } catch (err) {
      // LocalStorage / static fallback
      const mockBooking: TrialBooking = {
        id: `TB-${Math.floor(1000 + Math.random() * 9000)}`,
        parentName,
        parentPhone,
        parentEmail,
        childName,
        childAge,
        societyName,
        coachId: coach.id,
        coachName: coach.name,
        activity: coach.subCategory,
        selectedSlot,
        amountPaid: 99,
        paymentStatus: 'Completed',
        bookingDate: new Date().toLocaleDateString(),
      };

      try {
        const savedBookings = localStorage.getItem('atfit_bookings');
        const bookingsList = savedBookings ? JSON.parse(savedBookings) : [];
        bookingsList.push(mockBooking);
        localStorage.setItem('atfit_bookings', JSON.stringify(bookingsList));
      } catch (storageErr) {
        console.error('Failed to save booking to LocalStorage', storageErr);
      }

      setCompletedBooking(mockBooking);
      onSuccess(mockBooking);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden border border-teal-100 shadow-2xl relative">
        
        {/* Header */}
        <div className="bg-teal-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-extrabold text-white">Book Trial Session — Rs. 99</h3>
              <p className="text-[11px] text-teal-200">Coach: {coach.name} ({coach.subCategory})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-teal-800 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {completedBooking ? (
          /* Confirmation State */
          <div className="p-6 space-y-5 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wide bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Payment Received • Rs. 99
              </span>
              <h3 className="text-xl font-extrabold text-slate-950 pt-1">
                Trial Session Confirmed!
              </h3>
              <p className="text-xs text-slate-600">
                Pass ID: <strong className="text-teal-900 font-mono">{completedBooking.id}</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-teal-100 text-left space-y-2 text-xs text-slate-700">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Child Name:</span>
                <span className="font-bold text-slate-900">{completedBooking.childName} (Age {completedBooking.childAge})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Coach:</span>
                <span className="font-bold text-teal-900">{completedBooking.coachName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Society:</span>
                <span className="font-bold text-slate-900">{completedBooking.societyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Selected Slot:</span>
                <span className="font-bold text-amber-700">{completedBooking.selectedSlot}</span>
              </div>
            </div>

            <div className="bg-teal-50 p-3 rounded-xl border border-teal-200 text-left text-[11px] text-teal-950 space-y-1">
              <span className="font-bold block">What happens next?</span>
              <p>1. Coach {completedBooking.coachName} will meet {completedBooking.childName} in the society clubhouse / sports lawn.</p>
              <p>2. You will receive a WhatsApp confirmation reminder before the session.</p>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs py-3 rounded-xl shadow-xs cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmitBooking} className="p-6 space-y-4">
            
            {errorMsg && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs p-3 rounded-xl">
                {errorMsg}
              </div>
            )}

            <div className="space-y-3 text-xs">
              
              <div>
                <label className="font-bold text-slate-800 block mb-1">Parent's Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Siddharth Rao"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Mobile / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Child's Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Child's Age (Years)</label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:bg-white focus:outline-teal-600"
                  >
                    {[4,5,6,7,8,9,10,11,12,13,14,15].map((a) => (
                      <option key={a} value={a}>{a} Years Old</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Housing Society Location *</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <select
                    value={societyName}
                    onChange={(e) => setSocietyName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-900 focus:bg-white focus:outline-teal-600"
                  >
                    {coach.assignedSocieties.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            {/* Price Summary & Payment Simulation */}
            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-300 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-800">Total One-Time Trial Price:</span>
                <span className="text-base font-black text-amber-700">Rs. 99</span>
              </div>
              <p className="text-[11px] text-slate-600">
                Payment includes instant slot booking, physical coach verification badge audit, and trial pass issuance.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[10px] font-bold text-teal-900">
                <CreditCard className="w-3.5 h-3.5 text-teal-700" />
                <span>Simulated Indian Payment Gateway (UPI / Cards Supported)</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-600 text-teal-950 font-black text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Payment...</span>
                </>
              ) : (
                <>
                  <span>Pay Rs. 99 & Confirm Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
