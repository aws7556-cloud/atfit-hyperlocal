import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Award,
  Zap,
  Target,
  CircleDot,
  Waves,
  UserCheck,
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  ChevronDown,
  X,
  CheckCircle2,
  Flame,
  Dumbbell,
  HeartPulse,
  Activity,
  Maximize2,
  Compass,
  ArrowRight,
  Smile,
  Music,
  Star,
  Tv,
  Heart,
  Sun,
  Shield
} from 'lucide-react';

interface UnifiedProgram {
  id: string;
  name: string;
  category: 'Indoor Sports' | 'Outdoor Sports' | 'Gymnastics & Dance' | 'Fitness & Exercise' | 'Kids & Camps' | 'Family Wellness';
  image: string;
  targetAudience: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  badgeText: string;
}

const ALL_UNIFIED_PROGRAMS: UnifiedProgram[] = [
  // INDOOR SPORTS
  {
    id: 'badminton',
    name: 'Badminton Academy',
    category: 'Indoor Sports',
    image: 'https://images.unsplash.com/photo-1626225967045-9410dd9913d9?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Kids & Adults',
    description: 'BWF-standard synthetic rubber courts, anti-glare LED lighting, footwork drills, and monthly ladder matches.',
    details: 'Professional coaching, racket customization, power smash clinics, and round-robin tournaments.',
    icon: <Target className="w-5 h-5 text-teal-700" />,
    badgeText: 'BWF Standard'
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis Arena',
    category: 'Indoor Sports',
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'All Ages',
    description: 'ITTF-certified tables, high-rebound flooring, multi-ball feed robotics, and spin control drills.',
    details: 'Covers fast reflex training, serve variations, camera review, and singles/doubles leagues.',
    icon: <Zap className="w-5 h-5 text-teal-700" />,
    badgeText: 'ITTF Certified'
  },
  {
    id: 'chess',
    name: 'Grandmaster Chess Club',
    category: 'Indoor Sports',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Ages 5+',
    description: 'Develop strategic foresight, tactical puzzles, opening repertoire, and endgame mastery.',
    details: 'Blitz tournaments, cognitive agility tracking, 1-on-1 Grandmaster analysis, and FIDE rated prep.',
    icon: <Trophy className="w-5 h-5 text-amber-600" />,
    badgeText: 'Mind Sports'
  },
  {
    id: 'basketball',
    name: 'Indoor Basketball Court',
    category: 'Indoor Sports',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Ages 6+',
    description: 'Cushioned indoor maple wood flooring, adjustable hoops, shooting form mechanics, and pickup games.',
    details: 'Focuses on 3v3 half-court play, vertical jump conditioning, pick-and-roll execution, and shooting form.',
    icon: <CircleDot className="w-5 h-5 text-amber-600" />,
    badgeText: 'Pro Hardwood'
  },
  {
    id: 'volleyball-indoor',
    name: 'Indoor Volleyball Arena',
    category: 'Indoor Sports',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Ages 8+',
    description: 'High-jump cushioned indoor arena, spike accuracy training, jump serve drills, and co-ed leagues.',
    details: 'Team defense rotation, setter precision, communication calls, and athletic stamina conditioning.',
    icon: <Flame className="w-5 h-5 text-teal-700" />,
    badgeText: 'Cushioned Court'
  },
  {
    id: 'carrom-board',
    name: 'Indoor Carrom & Board Hub',
    category: 'Indoor Sports',
    image: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'All Ages',
    description: 'International Carrom boards, striker precision, angles calculation, and recreational family matches.',
    details: 'Focuses on touch control, finger dexterity, strategic positioning, and friendly weekend leagues.',
    icon: <Smile className="w-5 h-5 text-emerald-600" />,
    badgeText: 'Precision Sport'
  },
  {
    id: 'swimming',
    name: 'Aquatics & Swimming Pool',
    category: 'Indoor Sports',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'All Ages',
    description: 'Temperature-controlled semi-Olympic 25m indoor pool with UV filtration and dedicated lap lanes.',
    details: 'Stroke correction, freestyle kicks, breathing technique, aqua endurance, and certified water safety.',
    icon: <Waves className="w-5 h-5 text-teal-700" />,
    badgeText: 'Heated Pool'
  },

  // OUTDOOR SPORTS
  {
    id: 'football-turf',
    name: 'Grassroots Football Turf',
    category: 'Outdoor Sports',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Ages 4 - Adult',
    description: 'FIFA-grade shock-padded synthetic turf, dribbling mazes, passing precision, and small-sided matches.',
    details: 'Enhances stamina, ball control, team tactics, and athletic agility under certified coaches.',
    icon: <CircleDot className="w-5 h-5 text-emerald-600" />,
    badgeText: 'FIFA Turf'
  },
  {
    id: 'cricket-nets',
    name: 'Cricket Academy & Nets',
    category: 'Outdoor Sports',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Ages 6 - Adult',
    description: 'Professional astro-turf net pitches, bowling machine feeds, batting stance correction, and fielding drills.',
    details: 'Covers spin/fast bowling action, run-building strategy, match stamina, and weekend leagues.',
    icon: <Trophy className="w-5 h-5 text-amber-600" />,
    badgeText: 'Pro Nets'
  },
  {
    id: 'athletics-track',
    name: 'Athletics & Track Sprints',
    category: 'Outdoor Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Ages 6 - Adult',
    description: 'Synthetic running track, sprint mechanics, hurdles training, long jump, and endurance pacing.',
    details: 'Develops explosive stride power, VO2 max stamina, lung capacity, and competition readiness.',
    icon: <Activity className="w-5 h-5 text-teal-700" />,
    badgeText: 'Track & Field'
  },
  {
    id: 'tennis-outdoor',
    name: 'Outdoor Tennis Ace',
    category: 'Outdoor Sports',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Ages 5 - Adult',
    description: 'Hard court tennis arena, topspin mechanics, serve acceleration, and singles/doubles strategy.',
    details: 'Improves lateral footwork, timing, shoulder mobility, and match stamina.',
    icon: <Zap className="w-5 h-5 text-amber-600" />,
    badgeText: 'Pro Courts'
  },
  {
    id: 'skating-rink',
    name: 'Roller & Inline Skating',
    category: 'Outdoor Sports',
    image: 'https://images.unsplash.com/photo-1564856280073-d5804595e865?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Ages 4 - 16',
    description: 'Smooth paved safety track, balance control, obstacle navigation, and speed gliding drills.',
    details: 'Focuses on posture, ankle strength, core balance, and helmet safety etiquette.',
    icon: <Sparkles className="w-5 h-5 text-teal-700" />,
    badgeText: 'Safety Track'
  },

  // GYMNASTICS & DANCE
  {
    id: 'gymnastics-pro',
    name: 'Artistic & Rhythmic Gymnastics',
    category: 'Gymnastics & Dance',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Ages 4 - 16',
    description: 'High-density foam pits, balance beams, tumble tracks, ribbon routines, and flexibility drills.',
    details: 'Builds poise, core landings, graceful flexibility, and body coordination under expert coaches.',
    icon: <Star className="w-5 h-5 text-amber-600" />,
    badgeText: 'Gymnastics'
  },
  {
    id: 'dance-men-women',
    name: 'Dance Fitness (Zumba, Hip-Hop & Bollywood)',
    category: 'Gymnastics & Dance',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Kids, Men & Women',
    description: 'High-energy cardio dance routines blending Bollywood beats, Zumba, urban hip-hop, and freestyle dance.',
    details: 'Burns up to 650 kcal per session while improving cardiovascular stamina and musical rhythm.',
    icon: <Music className="w-5 h-5 text-teal-700" />,
    badgeText: 'Dance Cardio'
  },

  // FITNESS & EXERCISE
  {
    id: 'functional-hiit',
    name: 'Functional Fitness & HIIT',
    category: 'Fitness & Exercise',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Adults & Parents',
    description: 'Dynamic movement patterns, kettlebell circuits, barbell work, and high-intensity interval training.',
    details: 'Maximizes calorie burn, core stability, muscle toning, and biomechanical posture.',
    icon: <Dumbbell className="w-5 h-5 text-teal-700" />,
    badgeText: 'High Energy'
  },
  {
    id: 'yoga-meditation',
    name: 'Yoga, Mobility & Meditation',
    category: 'Fitness & Exercise',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'All Ages',
    description: 'Deep muscle lengthening, active joint recovery, mindfulness breathing, and core stability routines.',
    details: 'Reduces stress, improves joint flexibility, builds mental clarity, and aids muscle recovery.',
    icon: <Activity className="w-5 h-5 text-emerald-600" />,
    badgeText: 'Mindfulness'
  },

  // KIDS & CAMPS
  {
    id: 'kids-agility-camps',
    name: 'Kids Agility & Summer Camps',
    category: 'Kids & Camps',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Ages 4 - 14',
    description: 'Obstacle courses, team building games, weekend fitness camps, and holiday skill workshops.',
    details: 'Develops coordination, confidence, friend-making, and active healthy habits in a safe environment.',
    icon: <Smile className="w-5 h-5 text-emerald-600" />,
    badgeText: 'Kids Camps'
  },

  // FAMILY WELLNESS
  {
    id: 'family-wellness-club',
    name: 'Parent-Child Family Workouts',
    category: 'Family Wellness',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop',
    targetAudience: 'Whole Family',
    description: 'Parallel parent-child workouts, family fitness relays, and healthy lifestyle nutrition workshops.',
    details: 'Allows parents to work out simultaneously while kids train, creating positive healthy family habits.',
    icon: <Heart className="w-5 h-5 text-rose-600" />,
    badgeText: 'Family Fitness'
  }
];

const WHY_CHOOSE_ITEMS = [
  {
    title: 'Certified Professional Coaches',
    desc: 'Accredited BWF, ITTF, and pediatric sports mentors with verified athletic backgrounds.',
    icon: <Award className="w-6 h-6 text-teal-700" />
  },
  {
    title: 'All-Weather Indoor & Outdoor Arenas',
    desc: 'Climate-controlled courts with pro BWF synthetic flooring and FIFA-grade turf.',
    icon: <ShieldCheck className="w-6 h-6 text-teal-700" />
  },
  {
    title: 'Safe Campus & 24/7 CCTV Access',
    desc: 'Sanitized equipment, shock-absorbing floors, first-aid care, and live stream parent access.',
    icon: <Tv className="w-6 h-6 text-teal-700" />
  },
  {
    title: 'Flexible Morning & Evening Timings',
    desc: 'Early morning 6:00 AM slots to late evening 10:00 PM sessions fitting busy family routines.',
    icon: <Clock className="w-6 h-6 text-teal-700" />
  },
  {
    title: 'Child Progress Reports & Badges',
    desc: 'Digital skill tracking, milestone certificates, and regular parent feedback.',
    icon: <Star className="w-6 h-6 text-teal-700" />
  },
  {
    title: 'Community Events & Tournaments',
    desc: 'Monthly intra-club sports leagues, seasonal trophy competitions, and family mixers.',
    icon: <Users className="w-6 h-6 text-teal-700" />
  }
];

const GALLERY_PHOTOS = [
  { title: 'Badminton Smash Action', category: 'Badminton', image: 'https://images.unsplash.com/photo-1626225967045-9410dd9913d9?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Table Tennis Rally', category: 'Table Tennis', image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Grandmaster Chess Match', category: 'Chess', image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Indoor Basketball Hoop', category: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Semi-Olympic Indoor Pool', category: 'Swimming', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Artistic Gymnastics Practice', category: 'Gymnastics', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Grassroots Football Turf', category: 'Football', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Kids Agility Drills', category: 'Kids Camps', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop' }
];

const FAQS = [
  {
    q: 'Who can join the sports and fitness programs?',
    a: 'Programs are available for children (ages 3–18), adults, working professionals, and families. We offer beginner, intermediate, and advanced coaching tiers.'
  },
  {
    q: 'Are beginners welcome?',
    a: 'Yes! Over 60% of our members start as beginners. Dedicated coaches guide fundamental footwork, rules, grips, and confidence building.'
  },
  {
    q: 'Is coaching available for both adults and children?',
    a: 'Yes, we provide structured group coaching batches and 1-on-1 personal coaching across badminton, table tennis, chess, swimming, gymnastics, football, cricket, and fitness.'
  },
  {
    q: 'Is swimming available at every location?',
    a: 'Swimming pools are available at our flagship aquatics hubs with temperature-controlled 25m indoor pools and certified lifeguards.'
  },
  {
    q: 'What equipment is provided on court?',
    a: 'Standard facility equipment (table tennis balls, chess sets, basketballs, footballs, swimming lap lanes) is provided. Personal items like rackets and goggles can be brought or rented.'
  },
  {
    q: 'Can parents train at the same time as their children?',
    a: 'Yes! Our parallel scheduling allows parents to attend functional fitness, dance cardio, or yoga sessions while their children train in sports or gymnastics.'
  }
];

export const UnifiedSportsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All Programs');
  const [selectedProgram, setSelectedProgram] = useState<UnifiedProgram | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalSubject, setModalSubject] = useState<string>('Free Trial Pass');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const filteredPrograms = activeTab === 'All Programs'
    ? ALL_UNIFIED_PROGRAMS
    : ALL_UNIFIED_PROGRAMS.filter(p => p.category === activeTab);

  const handleOpenBooking = (subject: string = 'Free Trial Pass') => {
    setModalSubject(subject);
    setSubmitted(false);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-slate-50 text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8 space-y-20 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* 1. HERO BANNER - MATCHED TO MAIN WEBSITE THEME */}
        <div 
          className="relative rounded-3xl overflow-hidden min-h-[520px] flex items-center justify-center p-6 md:p-14 border border-slate-200 shadow-xl"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.70), rgba(248, 250, 252, 0.98)), url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center space-y-6 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-700/10 border border-teal-700/20 text-teal-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-teal-700" />
              <span>SPORTS, GYMNASTICS & FAMILY ATHLETICS MODULE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif italic font-normal text-slate-950 tracking-tight leading-[1.1]">
              Play. Train. Compete.
            </h1>

            <p className="text-base sm:text-xl text-slate-800 max-w-3xl mx-auto font-normal leading-relaxed">
              Experience professional indoor & outdoor sports, kids academy, gymnastics, dance, swimming, and family fitness in a safe, world-class environment.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('unified-programs-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-base shadow-lg shadow-teal-700/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Explore All Programs</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button 
                onClick={() => handleOpenBooking('Free Sports & Fitness Trial')}
                className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-base border border-slate-300 shadow-sm transition-all cursor-pointer"
              >
                Book Free Trial Pass
              </button>
            </div>

            {/* Micro Badges */}
            <div className="pt-6 border-t border-slate-300/80 flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-700" /> Pro BWF Courts & FIFA Turf</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-700" /> Certified Child & Adult Mentors</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-700" /> 100% Safe Campus & CCTV</span>
            </div>
          </motion.div>
        </div>


        {/* 2. PROGRAM CATEGORY GRID */}
        <div id="unified-programs-grid" className="space-y-10 scroll-mt-24">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">World-Class Athletics</span>
            <h2 className="text-3xl sm:text-5xl font-serif italic text-slate-950">Sports & Activity Programs</h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore professional sports, gymnastics, dance, swimming, exercise, and kids programs designed for all ages.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {['All Programs', 'Indoor Sports', 'Outdoor Sports', 'Gymnastics & Dance', 'Fitness & Exercise', 'Kids & Camps', 'Family Wellness'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                  activeTab === tab
                    ? 'bg-teal-700 text-white border-teal-700 shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Programs Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog, index) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={prog.image} 
                      alt={prog.name} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-teal-800 shadow-sm border border-slate-200">
                        {prog.badgeText}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-4">
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-xs font-medium text-slate-100">
                        {prog.targetAudience}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-teal-50 border border-teal-100">
                        {prog.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-950 group-hover:text-teal-700 transition-colors">
                        {prog.name}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="w-full py-3 rounded-xl bg-slate-100 hover:bg-teal-700 hover:text-white text-slate-800 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Program Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 3. WHY CHOOSE US (TRUST & CAMPUS STANDARDS) */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 space-y-10 shadow-sm">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">Excellence & Safety</span>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-slate-950">Why Members Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="p-3 rounded-xl bg-white border border-slate-200 w-fit">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>


        {/* 4. SPORTS GALLERY */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">Campus Highlights</span>
              <h2 className="text-3xl sm:text-4xl font-serif italic text-slate-950">Sports & Activity Gallery</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImg(photo.image)}
                className="group relative h-60 rounded-2xl overflow-hidden bg-slate-200 border border-slate-300/80 cursor-pointer"
              >
                <img 
                  src={photo.image} 
                  alt={photo.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-teal-300 px-2 py-0.5 rounded bg-slate-950/70">
                    {photo.category}
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-1">{photo.title}</h4>
                </div>
                <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* 5. FREQUENTLY ASKED QUESTIONS */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-teal-700 text-xs font-bold uppercase tracking-widest">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-slate-950">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-teal-700 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>


        {/* 6. FINAL CALL TO ACTION BANNER */}
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-serif italic text-white tracking-tight">
              Ready to Begin Your Sports Journey?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Join our sports community and unlock a healthier, stronger, and more active lifestyle for you and your family.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button 
                onClick={() => handleOpenBooking('Final CTA Join Now')}
                className="px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-base shadow-lg shadow-teal-600/30 transition-all cursor-pointer"
              >
                Join Now
              </button>
              <button 
                onClick={() => handleOpenBooking('Contact Inquiry')}
                className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-base transition-all cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>


      {/* MODAL 1: PROGRAM DETAILS */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-slate-900"
            >
              <button 
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-teal-50 border border-teal-100">
                  {selectedProgram.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{selectedProgram.badgeText}</span>
                  <h3 className="text-2xl font-bold text-slate-950">{selectedProgram.name}</h3>
                </div>
              </div>

              <div className="h-48 rounded-2xl overflow-hidden">
                <img src={selectedProgram.image} alt={selectedProgram.name} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-3 text-slate-700 text-sm">
                <p>{selectedProgram.description}</p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target Group:</span>
                    <span className="font-semibold text-slate-900">{selectedProgram.targetAudience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Curriculum & Drills:</span>
                    <span className="font-semibold text-teal-800">{selectedProgram.details}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  const progName = selectedProgram.name;
                  setSelectedProgram(null);
                  handleOpenBooking(`Book Trial: ${progName}`);
                }}
                className="w-full py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm transition-all cursor-pointer shadow-md"
              >
                Book Free Trial Session
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* MODAL 2: LIGHTBOX PHOTO PREVIEW */}
      <AnimatePresence>
        {lightboxImg && (
          <div 
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-slate-700"
            >
              <img src={lightboxImg} alt="Gallery Preview" className="w-full h-full object-contain" />
              <button 
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* MODAL 3: BOOKING FORM */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-slate-900"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Book Trial Pass</span>
                    <h3 className="text-2xl font-bold text-slate-950">{modalSubject}</h3>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 text-sm">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Alex Morgan" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-teal-700" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-teal-700" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Select Program</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-teal-700">
                        <option>Badminton Academy</option>
                        <option>Table Tennis Arena</option>
                        <option>Grandmaster Chess Club</option>
                        <option>Indoor Basketball Court</option>
                        <option>Aquatics & Swimming Pool</option>
                        <option>Grassroots Football Turf</option>
                        <option>Cricket Academy & Nets</option>
                        <option>Artistic & Rhythmic Gymnastics</option>
                        <option>Dance Fitness (Zumba/Hip-Hop/Bollywood)</option>
                        <option>Functional Fitness & HIIT</option>
                        <option>Yoga, Mobility & Meditation</option>
                        <option>Kids Agility & Summer Camps</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                    >
                      Confirm Free Trial Registration
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto border border-teal-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">Registration Confirmed!</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Our sports coordinator will contact you within 2 hours to confirm your trial slot and campus pass.
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 cursor-pointer"
                  >
                    Done
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
