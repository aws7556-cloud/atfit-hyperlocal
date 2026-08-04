import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Award,
  Zap,
  Target,
  CircleDot,
  Sun,
  Waves,
  UserCheck,
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  ChevronDown,
  X,
  CheckCircle2,
  Calendar,
  Flame,
  Dumbbell,
  HeartPulse,
  Activity,
  Maximize2,
  Compass,
  ArrowRight,
  Smile,
  Music,
  Star
} from 'lucide-react';

interface SportItem {
  id: string;
  name: string;
  category: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  availableLocs: string;
  schedule: string;
}

interface CoachingCategory {
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

interface DanceProgram {
  title: string;
  description: string;
  image: string;
  intensity: string;
  calories: string;
}

const INDOOR_SPORTS: SportItem[] = [
  {
    id: 'chess',
    name: 'Chess',
    category: 'Mind Sports',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1000&auto=format&fit=crop',
    icon: <Trophy className="w-6 h-6 text-amber-400" />,
    description: 'Master strategy, tactical defense, and rapid calculation with grandmaster-trained coaches in quiet arenas.',
    details: 'Includes blitz chess leagues, tournament prep, opening repertoire analysis, and 1-on-1 tactical drills.',
    availableLocs: 'All Flagship Hubs',
    schedule: 'Mon - Sun | 7:00 AM - 9:00 PM'
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    category: 'Racket Sports',
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=1000&auto=format&fit=crop',
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    description: 'International-grade ITTF tables, high-rebound flooring, spin control sessions, and robotic feed drills.',
    details: 'Features automatic ball multi-feed machines, high-speed camera review, and open play round-robins.',
    availableLocs: 'All Hubs',
    schedule: 'Mon - Sun | 6:00 AM - 10:00 PM'
  },
  {
    id: 'badminton',
    name: 'Badminton',
    category: 'Racket Sports',
    image: 'https://images.unsplash.com/photo-1626225967045-9410dd9913d9?q=80&w=1000&auto=format&fit=crop',
    icon: <Target className="w-6 h-6 text-cyan-400" />,
    description: 'BWF-standard synthetic rubber courts, anti-glare LED lighting, power smash clinics, and double coordination.',
    details: 'Professional footwork training, stringing assistance, racket customization, and monthly ladder matches.',
    availableLocs: 'All Hubs',
    schedule: 'Mon - Sun | 6:00 AM - 10:30 PM'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    category: 'Team Sports',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1000&auto=format&fit=crop',
    icon: <CircleDot className="w-6 h-6 text-orange-400" />,
    description: 'Indoor maple wood cushioned court, glass backboards, pickup games, and 3v3 half-court tournaments.',
    details: 'Shooting form correction, vertical jump conditioning, pick-and-roll tactical execution, and weekend leagues.',
    availableLocs: 'Select Flagship Hubs',
    schedule: 'Daily | 6:00 AM - 10:00 PM'
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    category: 'Team Sports',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1000&auto=format&fit=crop',
    icon: <Flame className="w-6 h-6 text-rose-400" />,
    description: 'High-jump cushioned indoor arena, spike accuracy training, jump serve drills, and co-ed recreational leagues.',
    details: 'Focuses on team defense rotation, setter precision, communication calls, and athletic conditioning.',
    availableLocs: 'Select Sports Hubs',
    schedule: 'Tue, Thu, Sat, Sun | 7:00 AM - 9:30 PM'
  },
  {
    id: 'swimming',
    name: 'Swimming (Where Available)',
    category: 'Aquatics',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1000&auto=format&fit=crop',
    icon: <Waves className="w-6 h-6 text-blue-400" />,
    description: 'Temperature-controlled semi-Olympic 25m indoor pool with UV filtration, lap lanes, and stroke correction.',
    details: 'Covers freestyle, backstroke, breaststroke, butterfly, flip-turn technique, and aqua endurance conditioning.',
    availableLocs: 'Flagship Aquatics Centers',
    schedule: 'Mon - Sun | 6:00 AM - 9:00 PM'
  }
];

const COACHING_PROGRAMS: CoachingCategory[] = [
  {
    title: 'Professional Coaches',
    description: 'Certified by national and international governing bodies with proven track records in nurturing champions.',
    badge: 'Certified Mentors',
    icon: <Award className="w-6 h-6 text-amber-400" />
  },
  {
    title: 'Beginner Coaching',
    description: 'Structured foundation modules focused on proper grip, safety, rules, footwork, and confidence building.',
    badge: 'Foundation Level',
    icon: <Compass className="w-6 h-6 text-emerald-400" />
  },
  {
    title: 'Advanced Coaching',
    description: 'High-intensity tactical drills, video analysis, match simulation, and stroke acceleration techniques.',
    badge: 'Pro Tier',
    icon: <Sparkles className="w-6 h-6 text-purple-400" />
  },
  {
    title: 'Personal Coaching',
    description: 'Dedicated 1-on-1 personalized training sessions designed around your specific schedule and physical goals.',
    badge: '1-on-1 Focus',
    icon: <UserCheck className="w-6 h-6 text-cyan-400" />
  },
  {
    title: 'Tournament Preparation',
    description: 'Comprehensive competitive preparation including mental toughness, match stamina, and opponent scouting.',
    badge: 'Competitive Edge',
    icon: <Trophy className="w-6 h-6 text-rose-400" />
  }
];

const FITNESS_PROGRAMS = [
  {
    title: 'Functional Fitness',
    desc: 'Dynamic movement patterns, core stability, agility ladders, and multi-planar body weight exercises.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    icon: <Activity className="w-6 h-6 text-teal-400" />
  },
  {
    title: 'Strength Training',
    desc: 'Progressive overload routines, kettlebell circuits, barbell work, and posture biomechanics coaching.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    icon: <Dumbbell className="w-6 h-6 text-amber-400" />
  },
  {
    title: 'Cardio HIIT',
    desc: 'High-intensity interval training designed to maximize VO2 max, stamina, and calorie expenditure.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop',
    icon: <HeartPulse className="w-6 h-6 text-rose-400" />
  },
  {
    title: 'Flexibility & Mobility',
    desc: 'Deep muscle lengthening, joint mobility drills, active recovery, and injury prevention routines.',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1000&auto=format&fit=crop',
    icon: <Sparkles className="w-6 h-6 text-purple-400" />
  },
  {
    title: 'Endurance Conditioning',
    desc: 'Pacing control, aerobic capacity expansion, and sustained energy performance drills.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop',
    icon: <Zap className="w-6 h-6 text-cyan-400" />
  }
];

const KIDS_PROGRAMS = [
  {
    title: 'Kids Fitness',
    desc: 'Interactive obstacle courses, balance games, and core coordination to make fitness fun and habitual.',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1000&auto=format&fit=crop',
    age: 'Ages 4 - 8'
  },
  {
    title: 'Kids Activities',
    desc: 'Multi-sport exploration introducing badminton, table tennis, and mini basketball in a supportive group.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1000&auto=format&fit=crop',
    age: 'Ages 6 - 12'
  },
  {
    title: 'Skill Development',
    desc: 'Structured technique drills aimed at developing hand-eye coordination, reaction time, and discipline.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop',
    age: 'Ages 8 - 14'
  },
  {
    title: 'Weekend Programs',
    desc: 'Vibrant weekend sports camps filled with friendly matches, team challenges, and social fitness.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop',
    age: 'Ages 5 - 15'
  },
  {
    title: 'Fun Indoor Games',
    desc: 'Dodgeball, mini relay races, speed tag, and cooperative team challenges designed for high laughter.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
    age: 'All Junior Group'
  }
];

const DANCE_MEN: DanceProgram[] = [
  {
    title: 'Cardio Dance',
    description: 'High-octane rhythm cardio combining athletic footwork and upbeat tracks to burn up to 700 kcal.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop',
    intensity: 'High',
    calories: '650 - 750 kcal'
  },
  {
    title: 'Hip-Hop',
    description: 'Street dance routines, urban beats, popping & locking fundamentals, and body isolation mastery.',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1000&auto=format&fit=crop',
    intensity: 'Moderate to High',
    calories: '550 - 650 kcal'
  },
  {
    title: 'Functional Dance',
    description: 'Athletic footwork mixed with rhythmic body conditioning to enhance core strength and agility.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    intensity: 'High',
    calories: '600 - 700 kcal'
  }
];

const DANCE_WOMEN: DanceProgram[] = [
  {
    title: 'Zumba',
    description: 'Exhilarating Latin and international dance moves blended into an infectious, high-energy party atmosphere.',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop',
    intensity: 'Moderate',
    calories: '500 - 650 kcal'
  },
  {
    title: 'Bollywood Fitness',
    description: 'High-powered Indian dance grooves featuring expressive storytelling choreography and cardio blasts.',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1000&auto=format&fit=crop',
    intensity: 'High',
    calories: '600 - 700 kcal'
  },
  {
    title: 'Dance Cardio',
    description: 'Non-stop rhythmic sculpting dance routines designed for core engagement and cardiovascular stamina.',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1000&auto=format&fit=crop',
    intensity: 'Moderate',
    calories: '550 - 650 kcal'
  },
  {
    title: 'Aerobic Dance',
    description: 'Structured aerobic choreography synchronized with energizing bass beats for total body toning.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop',
    intensity: 'Moderate',
    calories: '500 - 600 kcal'
  }
];

const WHY_CHOOSE_US = [
  {
    title: 'Professional Coaches',
    desc: 'Accredited national level trainers with years of competitive and developmental coaching experience.',
    icon: <Award className="w-7 h-7 text-amber-400" />
  },
  {
    title: 'Indoor Sports Facilities',
    desc: 'All-weather indoor arenas equipped with BWF synthetic floors, ITTF tables, & climate control.',
    icon: <Trophy className="w-7 h-7 text-emerald-400" />
  },
  {
    title: 'Certified Trainers',
    desc: 'CPR, first-aid, and sports nutrition certified staff present on court at all times.',
    icon: <ShieldCheck className="w-7 h-7 text-cyan-400" />
  },
  {
    title: 'Safe Environment',
    desc: 'Shock-absorbing flooring, sanitized gear, 24/7 security, and first-aid response units.',
    icon: <UserCheck className="w-7 h-7 text-teal-400" />
  },
  {
    title: 'Flexible Timings',
    desc: 'Convenient early morning 6 AM slots to late evening 10 PM sessions fitting your routine.',
    icon: <Clock className="w-7 h-7 text-purple-400" />
  },
  {
    title: 'Community Events',
    desc: 'Monthly intra-club friendly mixers, weekend mini-leagues, and active lifestyle workshops.',
    icon: <Users className="w-7 h-7 text-rose-400" />
  },
  {
    title: 'Regular Sports Tournaments',
    desc: 'Seasonal trophy competitions with live refereeing, digital scoring, and podium awards.',
    icon: <Star className="w-7 h-7 text-amber-300" />
  }
];

const GALLERY_IMAGES = [
  {
    title: 'Chess Strategic Championship',
    category: 'Chess',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Table Tennis Rally Action',
    category: 'Table Tennis',
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Pro Badminton Smash Arena',
    category: 'Badminton',
    image: 'https://images.unsplash.com/photo-1626225967045-9410dd9913d9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Indoor Basketball Hoop Challenge',
    category: 'Basketball',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Indoor Volleyball Serve',
    category: 'Volleyball',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Heated Semi-Olympic Pool',
    category: 'Swimming',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Functional Fitness Agility',
    category: 'Fitness Programs',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: '1-on-1 Tactical Coaching',
    category: 'Coaching',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Dance Fitness High-Energy Session',
    category: 'Dance Fitness',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Kids Fun Agility Camp',
    category: 'Kids Activities',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop'
  }
];

const FAQS = [
  {
    q: 'Who can join?',
    a: 'Anyone from ages 4 to 75! We offer structured sports modules tailored for toddlers, junior academies, working professionals, and seniors looking to stay fit.'
  },
  {
    q: 'Are beginners welcome?',
    a: 'Absolutely! More than 60% of our members join as complete beginners. Our certified coaches start with foundational grips, rules, and fundamental drills.'
  },
  {
    q: 'Is coaching available?',
    a: 'Yes. We offer both small-group batch coaching and personalized 1-on-1 coaching for badminton, table tennis, chess, swimming, and fitness.'
  },
  {
    q: 'Is swimming available at every location?',
    a: 'Swimming pools are available at our Flagship Aquatics & Sports Hubs. You can verify available sports at your nearest center during sign-up.'
  },
  {
    q: 'What equipment is provided?',
    a: 'Standard equipment such as chess sets, table tennis balls, basketballs, and volleyballs are provided on-site. Members bring or rent personal equipment like rackets.'
  },
  {
    q: 'Are kids eligible?',
    a: 'Yes! We have specialized Kids Fitness, Skill Development, and Junior Academy programs starting from age 4 with trained pediatric fitness instructors.'
  }
];

export const SportsSection: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<SportItem | null>(null);
  const [activeDanceTab, setActiveDanceTab] = useState<'women' | 'men'>('women');
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [bookingType, setBookingType] = useState<string>('Sports Pass');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Filtered gallery
  const filteredGallery = activeGalleryFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeGalleryFilter || (activeGalleryFilter === 'Indoor Sports' && ['Chess', 'Table Tennis', 'Badminton', 'Basketball', 'Volleyball', 'Swimming'].includes(img.category)));

  const handleOpenBookingModal = (typeStr: string = 'Sports Pass') => {
    setBookingType(typeStr);
    setFormSubmitted(false);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToIndoorSports = () => {
    const elem = document.getElementById('indoor-sports');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-slate-950 text-slate-100 font-sans overflow-hidden py-12 border-t border-slate-800/80">
      
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">

        {/* 1. HERO SECTION */}
        <div className="relative rounded-3xl overflow-hidden min-h-[560px] flex items-center justify-center p-6 md:p-14 border border-slate-800 shadow-2xl">
          {/* Background Image & Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 hover:scale-100"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />
          <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-slate-950" />

          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
              <span>PREMIUM SPORTS & ATHLETICS MODULE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
              Play. <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Train.</span> Compete.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Experience professional indoor sports, fitness programs, expert coaching, and activities for every age group under one roof.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={scrollToIndoorSports}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-base shadow-lg shadow-teal-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Sports</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button 
                onClick={() => handleOpenBookingModal('Hero Join Now')}
                className="px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 backdrop-blur-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Join Now
              </button>
            </div>

            {/* Micro Stats Bar */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-300 text-sm font-medium max-w-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                <span>6+ Indoor Sports</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Pro BWF & ITTF Hubs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Certified Mentors</span>
              </div>
            </div>
          </motion.div>
        </div>


        {/* 2. INDOOR SPORTS */}
        <div id="indoor-sports" className="space-y-10 scroll-mt-24">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-teal-400 text-xs font-bold tracking-widest uppercase">World-Class Facilities</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Indoor Sports Arena</h2>
            <p className="text-slate-400 text-base sm:text-lg">
              State-of-the-art indoor courts and arenas designed for peak athletic execution and strategic play.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDOOR_SPORTS.map((sport, index) => (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={sport.image} 
                      alt={sport.name} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-xs font-semibold text-teal-300 flex items-center gap-1.5">
                      {sport.icon}
                      <span>{sport.category}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {sport.name}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {sport.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedSport(sport)}
                    className="w-full py-3 rounded-xl bg-slate-800/80 hover:bg-teal-500 hover:text-slate-950 text-slate-200 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group-hover:bg-teal-500 group-hover:text-slate-950"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 3. SPORTS COACHING */}
        <div className="rounded-3xl bg-slate-900/40 border border-slate-800 p-8 sm:p-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Expert Mentorship</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Elite Sports Coaching & Academy
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Elevate your technique with structured coaching routines, video bio-mechanical feedback, and personalized athletic development plans tailored for all skill tiers.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => handleOpenBookingModal('Sports Coaching Inquiry')}
                  className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <UserCheck className="w-5 h-5" />
                  <span>Book Coach Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Coaching Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COACHING_PROGRAMS.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>


        {/* 4. FITNESS PROGRAMS */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">High-Performance Conditioning</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Fitness Programs</h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Science-backed functional fitness, cardio interval blasts, and strength conditioning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {FITNESS_PROGRAMS.map((prog, idx) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between p-5 space-y-4"
              >
                <div className="space-y-3">
                  <div className="relative h-36 rounded-xl overflow-hidden">
                    <img 
                      src={prog.image} 
                      alt={prog.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/30" />
                    <div className="absolute bottom-2 left-2 p-2 rounded-lg bg-slate-950/80 backdrop-blur-md">
                      {prog.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                <button 
                  onClick={() => handleOpenBookingModal(`Fitness Program: ${prog.title}`)}
                  className="w-full py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-emerald-500 hover:text-slate-950 text-xs font-semibold transition-all cursor-pointer"
                >
                  Join Program
                </button>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 5. KIDS FITNESS & ACTIVITIES */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/40 border border-slate-800 p-8 sm:p-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Smile className="w-4 h-4 text-amber-400" />
                <span>Youth & Junior Academy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Kids Fitness & Activities</h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Building athletic foundations, motor skills, social confidence, and a lifelong love for active sports.
              </p>
            </div>
            <button 
              onClick={() => handleOpenBookingModal('Kids Academy Enrollment')}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-400/20 transition-all cursor-pointer self-start md:self-auto"
            >
              Enroll Junior Champion
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {KIDS_PROGRAMS.map((kid, idx) => (
              <motion.div
                key={kid.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.07 }}
                className="rounded-2xl bg-slate-950/80 border border-slate-800 p-4 space-y-3 hover:border-amber-400/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <img 
                      src={kid.image} 
                      alt={kid.title} 
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/90 text-[10px] font-bold text-amber-400 border border-amber-400/30">
                      {kid.age}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">{kid.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{kid.desc}</p>
                </div>
                <div className="pt-2 text-center text-xs font-semibold text-amber-400">
                  Fun & Safe Guarantee ✓
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 6. DANCE FITNESS */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">Rhythm & Cardio Workouts</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Dance Fitness</h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Choreographed high-energy cardio dance workouts for men and women.
            </p>
          </div>

          {/* Gender Selector Tabs */}
          <div className="flex justify-center">
            <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-800 inline-flex gap-2">
              <button
                onClick={() => setActiveDanceTab('women')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeDanceTab === 'women'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Music className="w-4 h-4" />
                <span>Women's Programs</span>
              </button>
              <button
                onClick={() => setActiveDanceTab('men')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeDanceTab === 'men'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Flame className="w-4 h-4" />
                <span>Men's Programs</span>
              </button>
            </div>
          </div>

          {/* Dance Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDanceTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {(activeDanceTab === 'women' ? DANCE_WOMEN : DANCE_MEN).map((item, idx) => (
                <div 
                  key={item.title}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 overflow-hidden flex flex-col justify-between p-5 space-y-4 transition-all hover:shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="relative h-44 rounded-xl overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-purple-300 border border-purple-500/30">
                        {item.calories}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span>Intensity:</span>
                      <span className="text-purple-400 font-bold">{item.intensity}</span>
                    </div>
                    <button
                      onClick={() => handleOpenBookingModal(`Dance Fitness: ${item.title}`)}
                      className="w-full py-2.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-500 hover:text-white font-semibold text-xs transition-all cursor-pointer"
                    >
                      Book Dance Session
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>


        {/* 7. WHY CHOOSE US */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">The Cult.fit Advantage</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Why Choose Us</h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Uncompromising standards in sports facilities, coaching integrity, and community safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-400/40 transition-all space-y-4 hover:bg-slate-900/80"
              >
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 8. SPORTS GALLERY */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Visual Showcase</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Sports Gallery</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Indoor Sports', 'Fitness Programs', 'Coaching', 'Dance Fitness', 'Kids Activities'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveGalleryFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeGalleryFilter === cat
                      ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-Style Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredGallery.map((img, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxImage(img.image)}
                className="group relative h-64 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer"
              >
                <img 
                  src={img.image} 
                  alt={img.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-slate-950/80">
                    {img.category}
                  </span>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{img.title}</h4>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/70 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 9. FREQUENTLY ASKED QUESTIONS */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-teal-400 text-xs font-bold tracking-widest uppercase">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={faq.q}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-teal-400 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>


        {/* 10. FINAL CALL TO ACTION */}
        <div className="relative rounded-3xl bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 border border-teal-500/30 p-8 sm:p-14 text-center space-y-6 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full filter blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Begin Your Sports Journey?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Join our sports community and unlock a healthier, stronger, and more active lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button 
                onClick={() => handleOpenBookingModal('Final CTA Join Now')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-slate-950 font-bold text-base shadow-xl shadow-teal-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                Join Now
              </button>
              <button 
                onClick={() => handleOpenBookingModal('Contact Us')}
                className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-base transition-all cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>


      {/* MODAL 1: INDOOR SPORT DETAIL MODAL */}
      <AnimatePresence>
        {selectedSport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8"
            >
              <button 
                onClick={() => setSelectedSport(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/30">
                  {selectedSport.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">{selectedSport.category}</span>
                  <h3 className="text-2xl font-bold text-white">{selectedSport.name}</h3>
                </div>
              </div>

              <div className="h-48 rounded-2xl overflow-hidden">
                <img src={selectedSport.image} alt={selectedSport.name} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4 text-slate-300 text-sm">
                <p>{selectedSport.description}</p>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Features & Drills:</span>
                    <span className="font-semibold text-teal-300">{selectedSport.details}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Available Locations:</span>
                    <span className="font-semibold text-white">{selectedSport.availableLocs}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Timings:</span>
                    <span className="font-semibold text-cyan-400">{selectedSport.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const sportName = selectedSport.name;
                    setSelectedSport(null);
                    handleOpenBookingModal(`Book Session: ${sportName}`);
                  }}
                  className="w-full py-3.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-sm hover:bg-teal-400 transition-all cursor-pointer"
                >
                  Book Free Trial Session
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* MODAL 2: LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <div 
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-slate-800"
            >
              <img src={lightboxImage} alt="Enlarged view" className="w-full h-full object-contain" />
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* MODAL 3: BOOKING / CONTACT MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!formSubmitted ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Join Sports Community</span>
                    <h3 className="text-2xl font-bold text-white">{bookingType}</h3>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 text-sm">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Alex Morgan" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Sport / Activity</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500">
                        <option>Badminton</option>
                        <option>Table Tennis</option>
                        <option>Chess</option>
                        <option>Basketball</option>
                        <option>Volleyball</option>
                        <option>Swimming</option>
                        <option>Dance Fitness</option>
                        <option>Kids Academy</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 hover:from-teal-300 hover:to-cyan-300 transition-all cursor-pointer"
                    >
                      Confirm Booking
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Booking Confirmed!</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Our sports coordinator will reach out to you within 2 hours to confirm your court slot and trial pass.
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-xs hover:bg-slate-700 cursor-pointer"
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
