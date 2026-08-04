import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smile,
  ShieldCheck,
  Award,
  Sparkles,
  Heart,
  Users,
  Trophy,
  Zap,
  Star,
  CheckCircle2,
  Calendar,
  Compass,
  Activity,
  Flame,
  Dumbbell,
  Clock,
  ChevronDown,
  X,
  ArrowRight,
  Maximize2,
  Tv,
  Camera,
  Apple,
  Sun,
  Waves,
  Target,
  CircleDot
} from 'lucide-react';

interface ActivityItem {
  id: string;
  name: string;
  category: 'Indoor' | 'Outdoor' | 'Gymnastics' | 'Dance' | 'Fitness' | 'Exercise' | 'Kids Activities' | 'Family Wellness';
  image: string;
  ageGroup: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  badgeColor: string;
}

const ALL_ACTIVITIES: ActivityItem[] = [
  // INDOOR SPORTS
  {
    id: 'chess-junior',
    name: 'Junior Chess Academy',
    category: 'Indoor',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 5 - 16',
    description: 'Boost strategic focus, critical logic, memory retention, and sportsmanship in fun grandmaster-led mini leagues.',
    details: 'Covers opening tactics, endgame puzzles, Blitz friendly matches, and cognitive development tracking.',
    icon: <Trophy className="w-5 h-5 text-amber-500" />,
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'tt-junior',
    name: 'Table Tennis Smashers',
    category: 'Indoor',
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 6 - 15',
    description: 'High-speed hand-eye coordination, spin control techniques, and robotic ball feed drills on ITTF junior tables.',
    details: 'Focuses on reflexes, rally consistency, footwork agility, and fun intra-club tournaments.',
    icon: <Zap className="w-5 h-5 text-emerald-500" />,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'badminton-kids',
    name: 'Badminton Stars',
    category: 'Indoor',
    image: 'https://images.unsplash.com/photo-1626225967045-9410dd9913d9?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 5 - 16',
    description: 'BWF-certified synthetic courts, light junior rackets, power smash drills, and double team coordination.',
    details: 'Progressive grip techniques, clear overhead shots, footwork speed, and friendly weekend leagues.',
    icon: <Target className="w-5 h-5 text-cyan-500" />,
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300'
  },
  {
    id: 'basketball-jr',
    name: 'Junior Basketball Hoops',
    category: 'Indoor',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 6 - 16',
    description: 'Adjustable height hoops, dribbling mazes, shooting form mechanics, and 3v3 energetic team play.',
    details: 'Develops teamwork, vertical jump control, spatial awareness, and sports confidence.',
    icon: <CircleDot className="w-5 h-5 text-orange-500" />,
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300'
  },
  {
    id: 'swimming-splash',
    name: 'Little Splashers Swimming',
    category: 'Indoor',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 3 - 16',
    description: 'Heated UV-sanitized indoor pool with certified water safety coaches, float technique, and stroke mastery.',
    details: 'Covers water comfort, freestyle kicks, breathing control, backstroke, and splash safety games.',
    icon: <Waves className="w-5 h-5 text-blue-500" />,
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
  },

  // OUTDOOR SPORTS
  {
    id: 'football-jr',
    name: 'Grassroots Football Academy',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 4 - 16',
    description: 'Padded synthetic turf, dribbling cones, passing precision, and small-sided energetic matches.',
    details: 'Enhances stamina, ball control, sportsmanship, and tactical spatial movement in open air.',
    icon: <CircleDot className="w-5 h-5 text-emerald-500" />,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'cricket-champs',
    name: 'Junior Cricket Champs',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 6 - 16',
    description: 'Safety gear coaching, bowling action, batting stance, and plastic ball net practice for young cricketers.',
    details: 'Teaches fielding techniques, run-building strategy, focus, and weekend league matches.',
    icon: <Trophy className="w-5 h-5 text-amber-500" />,
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'tennis-jr',
    name: 'Junior Tennis Ace',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 5 - 15',
    description: 'Soft bounce balls, mini courts, forehand/backhand mechanics, and high-energy rally games.',
    details: 'Improves lateral footwork, timing, shoulder mobility, and court discipline.',
    icon: <Zap className="w-5 h-5 text-yellow-600" />,
    badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-300'
  },
  {
    id: 'skating-fun',
    name: 'Roller & Inline Skating',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1564856280073-d5804595e865?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 4 - 14',
    description: 'Padded safety track, balance control, obstacle navigation, and speed gliding drills.',
    details: 'Focuses on posture, ankle strength, core balance, and helmet safety etiquette.',
    icon: <Sparkles className="w-5 h-5 text-purple-500" />,
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300'
  },

  // GYMNASTICS
  {
    id: 'gymnastics-artistic',
    name: 'Artistic & Rhythmic Gymnastics',
    category: 'Gymnastics',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 3 - 15',
    description: 'High-density foam pits, balance beams, floor tumbles, ribbon dance, and core flexibility drills.',
    details: 'Develops graceful body posture, spatial awareness, strength landings, and poise.',
    icon: <Star className="w-5 h-5 text-pink-500" />,
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-300'
  },

  // DANCE
  {
    id: 'dance-hiphop-kids',
    name: 'Kids Hip-Hop & Zumba',
    category: 'Dance',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 4 - 15',
    description: 'High-energy pop rhythms, upbeat urban beats, coordination steps, and stage performance confidence.',
    details: 'Burns calories, boosts memory rhythm, builds self-expression, and builds group camaraderie.',
    icon: <Flame className="w-5 h-5 text-rose-500" />,
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
  },

  // FITNESS
  {
    id: 'kids-fitness-ninjas',
    name: 'Little Ninjas Functional Fitness',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Ages 4 - 12',
    description: 'Agility ladders, foam obstacle courses, core balance, speed sprints, and fun physical fitness games.',
    details: 'Prevents childhood obesity, improves motor reflexes, builds stamina, and makes exercise fun.',
    icon: <Activity className="w-5 h-5 text-teal-500" />,
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300'
  },

  // PARENTS FITNESS
  {
    id: 'parents-fitness-club',
    name: 'Parents Fitness & Wellness Club',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Parents & Adults',
    description: 'Parallel workouts for moms & dads while kids train! Functional strength, HIIT, yoga, & personal coaching.',
    details: 'Maximize family time by getting fit together. Dedicated cardio zones, group classes, & wellness guidance.',
    icon: <Dumbbell className="w-5 h-5 text-blue-600" />,
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
  },

  // FAMILY WELLNESS
  {
    id: 'family-wellness-yoga',
    name: 'Family Yoga & Nutrition Awareness',
    category: 'Family Wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    ageGroup: 'Whole Family',
    description: 'Parent-child bonding yoga sessions, breathing exercises, posture correction, and healthy family nutrition workshops.',
    details: 'Creates positive healthy lifestyle habits for the entire family in a soothing, supportive atmosphere.',
    icon: <Heart className="w-5 h-5 text-rose-500" />,
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
  }
];

const PARENT_TRUST_POINTS = [
  {
    title: 'Certified Child Coaches',
    desc: 'Pediatric sports trainers background-verified and CPR/First-Aid certified.',
    icon: <Award className="w-6 h-6 text-sky-600" />
  },
  {
    title: '100% Safe Campus & CCTV',
    desc: 'Soft-padded floors, 24/7 CCTV live stream access for registered parents.',
    icon: <Tv className="w-6 h-6 text-emerald-600" />
  },
  {
    title: 'First-Aid & On-Site Care',
    desc: 'Dedicated medical response room, sanitization protocols, and safety supervisors.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Child-Friendly Environment',
    desc: 'Non-intimidating, encouraging mentorship focused on joy, confidence, and growth.',
    icon: <Smile className="w-6 h-6 text-amber-500" />
  },
  {
    title: 'Progress Reports & Badges',
    desc: 'Digital skill tracking milestone certificates and monthly parent feedback.',
    icon: <Star className="w-6 h-6 text-purple-600" />
  },
  {
    title: 'Family Community Events',
    desc: 'Weekend sports festivals, parent-child relays, and seasonal award ceremonies.',
    icon: <Users className="w-6 h-6 text-rose-500" />
  }
];

const TESTIMONIALS = [
  {
    quote: "My 7-year-old daughter used to be extremely shy. After joining Gymnastics & Swimming here, her physical confidence and joy have skyrocketed! The coaches treat every child like family.",
    parentName: "Dr. Ananya Sharma",
    role: "Mother of Riya (Age 7)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The best part is that while my son practices Badminton and Football, I get to do functional fitness in the parents' workout zone. It saves our weekend and keeps our whole family active!",
    parentName: "Vikram & Priya Malhotra",
    role: "Parents of Aarav (Age 10)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Clean, brightly lit facilities with 24/7 CCTV access on the parent app. As a mother, safety is my #1 priority, and this academy delivers 100% peace of mind.",
    parentName: "Sneha Reddy",
    role: "Mother of Rohan (Age 5)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];

export const KidsFamilySportsSection: React.FC = () => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [selectedActivityModal, setSelectedActivityModal] = useState<ActivityItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingSubject, setBookingSubject] = useState<string>('Free Trial Pass');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const filteredActivities = selectedCategoryFilter === 'All'
    ? ALL_ACTIVITIES
    : ALL_ACTIVITIES.filter(act => act.category === selectedCategoryFilter);

  const handleOpenBooking = (subject: string = 'Free Trial Pass') => {
    setBookingSubject(subject);
    setBookingSuccess(false);
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-sky-50/60 via-white to-sky-50/40 text-slate-800 font-sans py-16 overflow-hidden border-t border-sky-100">
      
      {/* Decorative Light Background Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-sky-200/40 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-200/30 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-200/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">

        {/* 1. HERO BANNER - KIDS & FAMILY (Nike Kids + Apple + Disney Vibe) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-sky-600 to-indigo-700 overflow-hidden shadow-2xl p-8 sm:p-14 text-white">
          
          {/* Floating Sports Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 right-12 hidden lg:flex p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 gap-2 items-center text-sm font-bold shadow-lg"
          >
            <Trophy className="w-6 h-6 text-amber-300" />
            <span>🏆 Junior Champions Hub</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-24 hidden lg:flex p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-emerald-200 gap-2 items-center text-sm font-bold shadow-lg"
          >
            <ShieldCheck className="w-6 h-6 text-emerald-300" />
            <span>🛡️ 100% Safe & CCTV Monitored</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold tracking-wider uppercase shadow-md">
                <Sparkles className="w-4 h-4 text-slate-950 animate-bounce" />
                <span>PREMIUM KIDS & FAMILY ACADEMY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-sm">
                Where Kids Grow <span className="text-amber-300 underline decoration-amber-400/60 decoration-wavy">Strong,</span> Confident & Happy!
              </h1>

              <p className="text-sky-100 text-base sm:text-xl font-medium leading-relaxed max-w-2xl">
                Discover exciting sports, gymnastics, dance, swimming, fitness, and fun activities designed to help children learn, grow, and stay active in a safe, inspiring environment.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => {
                    const el = document.getElementById('kids-activities-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-xl shadow-amber-400/30 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Activities</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button 
                  onClick={() => handleOpenBooking('Free Kids & Family Trial Pass')}
                  className="px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-base border border-white/30 backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Book a Free Trial Pass 🎁
                </button>
              </div>

              {/* Highlights Row */}
              <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs font-bold text-sky-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  <span>Ages 3 to 16 Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Pediatric Certified Coaches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Parents Parallel Workouts</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 group">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Kids playing sports with smiling coaches" 
                  className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-slate-900 space-y-1 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-blue-600">Fun & Safe Environment</span>
                    <span className="text-xs font-bold text-amber-500">★★★★★ 4.9 Parent Rating</span>
                  </div>
                  <p className="text-xs font-medium text-slate-600">
                    Over 5,000+ happy kids training in Badminton, Swimming, Gymnastics, Dance & Chess!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* 2. ACTIVITIES SECTION (COMPREHENSIVE CATEGORY GRID) */}
        <div id="kids-activities-grid" className="space-y-10 scroll-mt-24">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider border border-blue-200">
              World-Class Programs
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Explore Kids & Family Activities
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Structured sports, gymnastics, dance, fitness, swimming, and mental agility programs designed for all age groups.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Indoor', 'Outdoor', 'Gymnastics', 'Dance', 'Fitness', 'Family Wellness'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategoryFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer shadow-sm ${
                  selectedCategoryFilter === cat
                    ? 'bg-blue-600 text-white shadow-blue-500/25 scale-105'
                    : 'bg-white text-slate-600 hover:bg-sky-100 border border-slate-200'
                }`}
              >
                {cat === 'All' ? '✨ All Activities' : cat}
              </button>
            ))}
          </div>

          {/* Activities Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((act, index) => (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Image & Badge */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={act.image} 
                      alt={act.name} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border shadow-md ${act.badgeColor}`}>
                        {act.category}
                      </span>
                    </div>

                    <span className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-white/20">
                      👶 {act.ageGroup}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-sky-50 border border-sky-100">
                        {act.icon}
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {act.name}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {act.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedActivityModal(act)}
                    className="w-full py-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Learn More & Schedule</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>


        {/* 3. GYMNASTICS HIGHLIGHT SECTION */}
        <div className="rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full filter blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider">
                🤸 Featured Highlight
              </span>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                Artistic & Rhythmic Gymnastics Academy
              </h2>
              <p className="text-pink-100 text-base sm:text-lg leading-relaxed">
                Build core balance, flexibility, poise, and body control under international gymnastics coaches with high-density foam pit safety.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs font-bold">
                <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                  ✨ Artistic Gymnastics
                </div>
                <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                  🎀 Rhythmic Ribbons
                </div>
                <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                  🤸 Foam Pit Tumbles
                </div>
              </div>

              <button 
                onClick={() => handleOpenBooking('Free Gymnastics Trial Pass')}
                className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-xl shadow-amber-400/30 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book Free Gymnastics Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop" 
                  alt="Child practicing gymnastics routine" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>


        {/* 4. WHY PARENTS LOVE US (SAFETY & TRUST) */}
        <div className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider border border-emerald-200">
              Parent Peace of Mind
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">Why Parents Love Us</h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Designed around safety, transparent CCTV access, certified coaches, and encouraging child development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARENT_TRUST_POINTS.map((pt, idx) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all space-y-4 hover:-translate-y-1"
              >
                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 w-fit">
                  {pt.icon}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{pt.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 5. TESTIMONIALS */}
        <div className="rounded-3xl bg-sky-900 text-white p-8 sm:p-14 space-y-10 shadow-2xl relative overflow-hidden">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="px-4 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
              Real Parent Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">Trusted by 5,000+ Happy Families</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sky-100 text-sm italic leading-relaxed">"{t.quote}"</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img src={t.avatar} alt={t.parentName} className="w-10 h-10 rounded-full object-cover border-2 border-amber-300" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.parentName}</h4>
                    <span className="text-xs text-sky-200">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* 6. FINAL CALL TO ACTION */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider">
              Start Your Family Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Give Your Child the Best Start in Sports & Fitness!
            </h2>
            <p className="text-sky-100 text-base sm:text-lg font-medium">
              Help your child build confidence, strength, discipline, friendships, and lifelong healthy habits.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button 
                onClick={() => handleOpenBooking('Final CTA Join Now')}
                className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-xl shadow-amber-400/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Join Now 🎉
              </button>
              <button 
                onClick={() => handleOpenBooking('Free Family Trial Pass')}
                className="px-8 py-4 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-base border border-white/30 backdrop-blur-md transition-all cursor-pointer"
              >
                Book Free Trial Pass 🎁
              </button>
            </div>
          </div>
        </div>

      </div>


      {/* MODAL 1: ACTIVITY DETAIL MODAL */}
      <AnimatePresence>
        {selectedActivityModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 text-slate-800"
            >
              <button 
                onClick={() => setSelectedActivityModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100">
                  {selectedActivityModal.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{selectedActivityModal.category}</span>
                  <h3 className="text-2xl font-black text-slate-900">{selectedActivityModal.name}</h3>
                </div>
              </div>

              <div className="h-52 rounded-2xl overflow-hidden">
                <img src={selectedActivityModal.image} alt={selectedActivityModal.name} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <p className="text-base font-medium text-slate-800">{selectedActivityModal.description}</p>
                <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">Eligible Age Group:</span>
                    <span className="text-blue-600">{selectedActivityModal.ageGroup}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">Curriculum Specs:</span>
                    <span className="text-slate-800">{selectedActivityModal.details}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  const actName = selectedActivityModal.name;
                  setSelectedActivityModal(null);
                  handleOpenBooking(`Book Activity: ${actName}`);
                }}
                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
              >
                Book Free Trial Session
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* MODAL 2: BOOKING FORM MODAL */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-slate-800"
            >
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!bookingSuccess ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-wider">Kids & Family Trial Pass</span>
                    <h3 className="text-2xl font-black text-slate-900">{bookingSubject}</h3>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4 text-sm">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Parent's Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Priya Sharma" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Child's Name & Age</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Aarav Sharma (Age 7)" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600" 
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-lg shadow-amber-400/25 transition-all cursor-pointer"
                    >
                      Confirm Free Trial Booking 🎉
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Trial Pass Issued!</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Our child care coordinator will call you within 2 hours to confirm your trial slot and send you the campus entry pass.
                  </p>
                  <button 
                    onClick={() => setIsBookingOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
