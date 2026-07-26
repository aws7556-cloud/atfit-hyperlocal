import { Coach, HousingSociety, CategoryType, CurriculumItem } from './types';

export const POPULAR_SOCIETIES: HousingSociety[] = [
  {
    id: 'soc-1',
    name: 'Prestige Shantiniketan',
    area: 'Whitefield',
    city: 'Bengaluru',
    apartmentsCount: 3002,
    amenities: ['Sports Lawn', 'Clubhouse Ground', 'Badminton Court', 'Swimming Pool'],
    activeCoachesCount: 12,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soc-2',
    name: 'Palm Meadows',
    area: 'Ramagondanahalli',
    city: 'Bengaluru',
    apartmentsCount: 1450,
    amenities: ['Clubhouse Gym', 'Tennis Lawn', 'Multipurpose Hall', 'Kids Pool'],
    activeCoachesCount: 8,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soc-3',
    name: 'Sobha Royal Pavilion',
    area: 'Sarjapur Road',
    city: 'Bengaluru',
    apartmentsCount: 1280,
    amenities: ['Activity Room', 'Skating Rink', 'Basketball Court'],
    activeCoachesCount: 9,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soc-4',
    name: 'Brigade Metropolis',
    area: 'Mahadevapura',
    city: 'Bengaluru',
    apartmentsCount: 1600,
    amenities: ['Clubhouse Amphitheatre', 'Indoor Games Arena'],
    activeCoachesCount: 10,
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soc-5',
    name: 'Adarsh Palm Retreat',
    area: 'Bellandur / ORR',
    city: 'Bengaluru',
    apartmentsCount: 2100,
    amenities: ['Central Park Lawn', 'Indoor Sports Complex', 'Art Deck'],
    activeCoachesCount: 14,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_COACHES: Coach[] = [
  {
    id: 'ATFIT-101',
    name: 'Rohan Sharma',
    title: 'FIDE Certified Chess Master & Youth Coach',
    category: 'Sports',
    subCategory: 'Chess',
    experienceYears: 7,
    rating: 4.92,
    reviewsCount: 48,
    verifiedSince: 'Jan 2024',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    actionPhotos: [
      'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'FIDE Rated chess coach specializing in cognitive tactics, opening strategies, and tournament readiness for children aged 5-14 inside society clubhouses.',
    certifications: [
      'FIDE Instructor License #82940',
      'National Youth Championship Top 10 Finisher',
      'Background Check Clearance #VER-8821'
    ],
    assignedSocieties: ['Prestige Shantiniketan', 'Palm Meadows', 'Adarsh Palm Retreat'],
    availableSlots: [
      { id: 's1', day: 'Mon & Wed', time: '04:30 PM - 05:30 PM', society: 'Prestige Shantiniketan', maxKids: 8, bookedKids: 5 },
      { id: 's2', day: 'Tue & Thu', time: '05:00 PM - 06:00 PM', society: 'Palm Meadows', maxKids: 8, bookedKids: 6 },
      { id: 's3', day: 'Saturday', time: '10:00 AM - 11:30 AM', society: 'Adarsh Palm Retreat', maxKids: 10, bookedKids: 8 }
    ],
    trialPrice: 99,
    monthlyPriceStarter: 399,
    monthlyPriceStandard: 699,
    monthlyPricePremium: 999,
    badgeCode: 'ATFIT-101'
  },
  {
    id: 'ATFIT-102',
    name: 'Priya Nambiar',
    title: 'Certified Swimming & Aquatic Safety Coach',
    category: 'Sports',
    subCategory: 'Swimming',
    experienceYears: 6,
    rating: 4.95,
    reviewsCount: 62,
    verifiedSince: 'Nov 2023',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    actionPhotos: [
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'ASCA Level 2 certified swimming coach for beginners and stroke refinement. Focuses on water confidence, breathing mechanics, and safety in society pools.',
    certifications: [
      'ASCA Level 2 Aquatic Coach',
      'Red Cross CPR & First Aid Certified',
      'Police Verification Certificate #KA-4491'
    ],
    assignedSocieties: ['Prestige Shantiniketan', 'Sobha Royal Pavilion', 'Brigade Metropolis'],
    availableSlots: [
      { id: 's4', day: 'Mon, Wed, Fri', time: '04:00 PM - 05:00 PM', society: 'Sobha Royal Pavilion', maxKids: 6, bookedKids: 4 },
      { id: 's5', day: 'Tue, Thu, Sat', time: '05:00 PM - 06:00 PM', society: 'Prestige Shantiniketan', maxKids: 6, bookedKids: 5 }
    ],
    trialPrice: 99,
    monthlyPriceStarter: 399,
    monthlyPriceStandard: 699,
    monthlyPricePremium: 999,
    badgeCode: 'ATFIT-102'
  },
  {
    id: 'ATFIT-103',
    name: 'Vikram Rajput',
    title: 'AIFF Licensed Youth Football Coach',
    category: 'Sports',
    subCategory: 'Football',
    experienceYears: 8,
    rating: 4.88,
    reviewsCount: 54,
    verifiedSince: 'Feb 2024',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    actionPhotos: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Former state league player delivering energetic agility, ball mastery, and team dynamics sessions on residential society lawns and turf grounds.',
    certifications: [
      'AIFF ‘D’ License Coach',
      'Grassroots Development Specialist',
      'ID & Address Verification Verified'
    ],
    assignedSocieties: ['Sobha Royal Pavilion', 'Brigade Metropolis', 'Adarsh Palm Retreat'],
    availableSlots: [
      { id: 's6', day: 'Tue & Thu', time: '05:00 PM - 06:15 PM', society: 'Brigade Metropolis', maxKids: 12, bookedKids: 9 },
      { id: 's7', day: 'Sat & Sun', time: '08:00 AM - 09:15 AM', society: 'Sobha Royal Pavilion', maxKids: 12, bookedKids: 10 }
    ],
    trialPrice: 99,
    monthlyPriceStarter: 399,
    monthlyPriceStandard: 699,
    monthlyPricePremium: 999,
    badgeCode: 'ATFIT-103'
  },
  {
    id: 'ATFIT-104',
    name: 'Ananya Roy',
    title: 'Fine Arts & Clay Sculpting Master',
    category: 'Other',
    subCategory: 'Drawing & Painting',
    experienceYears: 5,
    rating: 4.96,
    reviewsCount: 39,
    verifiedSince: 'Dec 2023',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    actionPhotos: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Fine Arts graduate helping kids unleash creativity through watercolors, acrylics, sketching, and clay modeling inside clubhouse multipurpose rooms.',
    certifications: [
      'BFA Fine Arts (Chitrakala Parishath)',
      'Child Creative Psychology Specialist',
      'Verified Society Instructor'
    ],
    assignedSocieties: ['Palm Meadows', 'Prestige Shantiniketan'],
    availableSlots: [
      { id: 's8', day: 'Wednesday', time: '05:00 PM - 06:30 PM', society: 'Palm Meadows', maxKids: 10, bookedKids: 7 },
      { id: 's9', day: 'Saturday', time: '03:30 PM - 05:00 PM', society: 'Prestige Shantiniketan', maxKids: 10, bookedKids: 8 }
    ],
    trialPrice: 99,
    monthlyPriceStarter: 399,
    monthlyPriceStandard: 699,
    monthlyPricePremium: 999,
    badgeCode: 'ATFIT-104'
  },
  {
    id: 'ATFIT-105',
    name: 'Sensei Deepak Verma',
    title: 'Shotokan Karate 3rd Dan Black Belt',
    category: 'Sports',
    subCategory: 'Martial Arts',
    experienceYears: 10,
    rating: 4.90,
    reviewsCount: 71,
    verifiedSince: 'Oct 2023',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    actionPhotos: [
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Disciplined karate and self-defense training focusing on stance, stamina, mental focus, and belt progression examinations for society kids.',
    certifications: [
      'Karate India Organisation 3rd Dan Black Belt',
      'Youth Fitness & Agility Trainer',
      'Background Checked & Police Cleared'
    ],
    assignedSocieties: ['Prestige Shantiniketan', 'Adarsh Palm Retreat', 'Sobha Royal Pavilion'],
    availableSlots: [
      { id: 's10', day: 'Tue & Fri', time: '05:30 PM - 06:30 PM', society: 'Adarsh Palm Retreat', maxKids: 12, bookedKids: 10 },
      { id: 's11', day: 'Sat & Sun', time: '04:00 PM - 05:00 PM', society: 'Prestige Shantiniketan', maxKids: 12, bookedKids: 11 }
    ],
    trialPrice: 99,
    monthlyPriceStarter: 399,
    monthlyPriceStandard: 699,
    monthlyPricePremium: 999,
    badgeCode: 'ATFIT-105'
  },
  {
    id: 'ATFIT-106',
    name: 'Kavita Menon',
    title: 'Abacus & Mental Math Speed Trainer',
    category: 'Other',
    subCategory: 'Abacus & Mental Math',
    experienceYears: 6,
    rating: 4.89,
    reviewsCount: 31,
    verifiedSince: 'Mar 2024',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    actionPhotos: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Master mental math instructor accelerating calculation speed, concentration span, and memory recall through interactive abacus exercises.',
    certifications: [
      'Master Abacus Trainer Certification',
      'Vedic Math Educator',
      'ATFIT Certified Instructor'
    ],
    assignedSocieties: ['Brigade Metropolis', 'Palm Meadows'],
    availableSlots: [
      { id: 's12', day: 'Mon & Thu', time: '04:30 PM - 05:30 PM', society: 'Brigade Metropolis', maxKids: 8, bookedKids: 5 }
    ],
    trialPrice: 99,
    monthlyPriceStarter: 399,
    monthlyPriceStandard: 699,
    monthlyPricePremium: 999,
    badgeCode: 'ATFIT-106'
  },
  {
    id: 'ATFIT-107',
    name: 'Arjun Mehta',
    title: 'BCCI Level 1 Certified Cricket Coach',
    category: 'Sports',
    subCategory: 'Cricket',
    experienceYears: 9,
    rating: 4.91,
    reviewsCount: 53,
    verifiedSince: 'Mar 2024',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    actionPhotos: [
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Dedicated cricket coach focusing on batting technique, spin/pace bowling nets, and tactical match play for residential society youth programs.',
    certifications: [
      'BCCI Level 1 Coaching Certificate',
      'Former Ranji Trophy Squad Member',
      'Background Checked #VER-9192'
    ],
    assignedSocieties: ['Prestige Shantiniketan', 'Brigade Metropolis', 'Sobha Royal Pavilion'],
    availableSlots: [
      { id: 's13', day: 'Tue & Thu', time: '04:00 PM - 05:30 PM', society: 'Prestige Shantiniketan', maxKids: 15, bookedKids: 11 },
      { id: 's14', day: 'Saturday', time: '08:30 AM - 10:30 AM', society: 'Brigade Metropolis', maxKids: 15, bookedKids: 12 }
    ],
    trialPrice: 99,
    monthlyPriceStarter: 399,
    monthlyPriceStandard: 699,
    monthlyPricePremium: 999,
    badgeCode: 'ATFIT-107'
  },
  {
    id: 'ATFIT-108',
    name: 'Sarah Jenkins',
    title: 'Royal Academy of Dance Certified Ballerina',
    category: 'Dance',
    subCategory: 'Ballet',
    experienceYears: 7,
    rating: 4.98,
    reviewsCount: 41,
    verifiedSince: 'Feb 2024',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    actionPhotos: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Passionate ballerina guiding kids through basic footwork, posture, flexibility, and lyrical routine choreography inside clubhouse multipurpose halls.',
    certifications: [
      'RAD Advanced Ballet Certificate',
      'Childhood Dance Pedagogy Diploma',
      'Police Clearance Verified'
    ],
    assignedSocieties: ['Palm Meadows', 'Adarsh Palm Retreat'],
    availableSlots: [
      { id: 's15', day: 'Mon & Wed', time: '05:00 PM - 06:15 PM', society: 'Palm Meadows', maxKids: 10, bookedKids: 6 },
      { id: 's16', day: 'Friday', time: '04:30 PM - 06:00 PM', society: 'Adarsh Palm Retreat', maxKids: 10, bookedKids: 8 }
    ],
    trialPrice: 99,
    monthlyPriceStarter: 399,
    monthlyPriceStandard: 699,
    monthlyPricePremium: 999,
    badgeCode: 'ATFIT-108'
  },
  {
    id: 'ATFIT-109',
    name: 'Rohan Malhotra',
    title: 'National Gymnastics Gold Medalist & Coach',
    category: 'Fitness',
    subCategory: 'Artistic Gymnastics',
    experienceYears: 6,
    rating: 4.93,
    reviewsCount: 29,
    verifiedSince: 'May 2024',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    actionPhotos: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Specializes in fundamental gymnastics floor routines, tumbling, cartwheels, and agility training for children ages 4-12 using soft safety mats.',
    certifications: [
      'SGFI National Gymnastics Gold Medalist',
      'Youth Agility & Strength Specialist',
      'Verified Society Fitness Coach'
    ],
    assignedSocieties: ['Sobha Royal Pavilion', 'Prestige Shantiniketan'],
    availableSlots: [
      { id: 's17', day: 'Tue & Thu', time: '04:30 PM - 05:30 PM', society: 'Sobha Royal Pavilion', maxKids: 8, bookedKids: 5 },
      { id: 's18', day: 'Saturday', time: '11:00 AM - 12:30 PM', society: 'Prestige Shantiniketan', maxKids: 10, bookedKids: 7 }
    ],
    trialPrice: 99,
    monthlyPriceStarter: 399,
    monthlyPriceStandard: 699,
    monthlyPricePremium: 999,
    badgeCode: 'ATFIT-109'
  }
];

export const CATEGORY_TILES: { type: CategoryType; title: string; subtitle: string; iconName: string; bgGradient: string; count: number }[] = [
  {
    type: 'Sports',
    title: 'Sports Classes',
    subtitle: 'Cricket, Football, Basketball, Swimming, Chess',
    iconName: 'Trophy',
    bgGradient: 'from-emerald-50 to-teal-100/70 border-teal-200',
    count: 15
  },
  {
    type: 'Dance',
    title: 'Dance Classes',
    subtitle: 'Hip-Hop, Bollywood, Classical, Zumba, Ballet',
    iconName: 'Music',
    bgGradient: 'from-rose-50 to-pink-100/70 border-rose-200',
    count: 11
  },
  {
    type: 'Fitness',
    title: 'Gymnastics & Fitness',
    subtitle: 'Artistic Gymnastics, Acrobatics, Calisthenics',
    iconName: 'Activity',
    bgGradient: 'from-amber-50 to-orange-100/70 border-amber-200',
    count: 11
  },
  {
    type: 'Other',
    title: 'Other Classes',
    subtitle: 'Drawing, Music, Guitar, Coding, Drama, Languages',
    iconName: 'Palette',
    bgGradient: 'from-sky-50 to-indigo-100/70 border-indigo-200',
    count: 14
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Discover Near Your Building',
    description: 'Select your housing society to view background-verified freelance coaches operating in your clubhouse, gym, or sports lawn.',
    icon: 'MapPin'
  },
  {
    step: '02',
    title: 'Book a Flat Rs. 99 Trial',
    description: 'Pick an available time slot and book a 1-on-1 or small group trial session for just Rs. 99. No lengthy commitments.',
    icon: 'Ticket'
  },
  {
    step: '03',
    title: 'Subscribe Monthly',
    description: 'After the trial, seamlessly convert to a flexible monthly subscription (Starter, Standard, or Premium) with easy pause/renew.',
    icon: 'CalendarCheck'
  },
  {
    step: '04',
    title: 'Verify via QR Code',
    description: 'Every coach wears a physical ATFIT ID badge with a scannable QR code linking to their live verified status and credentials.',
    icon: 'ShieldCheck'
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 't1',
    parentName: 'Siddharth & Meera Rao',
    society: 'Prestige Shantiniketan, Whitefield',
    childInfo: 'Aarav (Age 8) - Chess & Swimming',
    quote: 'The biggest win for us is safety and convenience. Rohan comes straight to our society clubhouse. Aarav cleared his beginner chess levels without us wading through Whitefield traffic!',
    rating: 5
  },
  {
    id: 't2',
    parentName: 'Pooja Agarwal',
    society: 'Palm Meadows',
    childInfo: 'Riya (Age 7) - Fine Arts',
    quote: 'I scanned Ananya’s QR ID badge on her first day. Seeing her police clearance and BFA certificate gave me complete peace of mind. Riya loves Wednesday art sessions!',
    rating: 5
  },
  {
    id: 't3',
    parentName: 'Vikram & Swati Hegde',
    society: 'Sobha Royal Pavilion',
    childInfo: 'Kabir (Age 9) - Football',
    quote: 'We started with the Rs. 99 trial on the society turf ground. Coach Vikram’s energy was infectious! We converted to the Standard monthly subscription immediately.',
    rating: 5
  }
];

export const CURRICULUM_DATA: CurriculumItem[] = [
  // --- SPORTS CLASSES (15) ---
  { id: 'curr-sp-1', category: 'Sports', name: 'Cricket', emoji: '🏏', description: 'Professional cricket coaching, nets practice, and match temperament.', coachesAvailableCount: 1 },
  { id: 'curr-sp-2', category: 'Sports', name: 'Football / Soccer', emoji: '⚽', description: 'Agility, dribbling, and team dynamics on lawn/turf grounds.', coachesAvailableCount: 1 },
  { id: 'curr-sp-3', category: 'Sports', name: 'Basketball', emoji: '🏀', description: 'Dribbling, shooting mechanics, and tactical team defense.', coachesAvailableCount: 0 },
  { id: 'curr-sp-4', category: 'Sports', name: 'Volleyball', emoji: '🏐', description: 'Service, smashing, and team synchronization drills.', coachesAvailableCount: 0 },
  { id: 'curr-sp-5', category: 'Sports', name: 'Badminton', emoji: '🏸', description: 'Reflex training, footwork, and racquet control on society courts.', coachesAvailableCount: 0 },
  { id: 'curr-sp-6', category: 'Sports', name: 'Tennis', emoji: '🎾', description: 'Groundstrokes, service, and baseline rallies.', coachesAvailableCount: 0 },
  { id: 'curr-sp-7', category: 'Sports', name: 'Table Tennis', emoji: '🏓', description: 'Hand-eye coordination, spin control, and quick reflex play.', coachesAvailableCount: 0 },
  { id: 'curr-sp-8', category: 'Sports', name: 'Swimming', emoji: '🏊', description: 'Water confidence, breathing, and stroke refinement.', coachesAvailableCount: 1 },
  { id: 'curr-sp-9', category: 'Sports', name: 'Skating', emoji: '🛼', description: 'Balance, strides, and safety equipment drills on skating rinks.', coachesAvailableCount: 0 },
  { id: 'curr-sp-10', category: 'Sports', name: 'Martial Arts', emoji: '🥋', description: 'Shotokan Karate, discipline, and defense tactics.', coachesAvailableCount: 1 },
  { id: 'curr-sp-11', category: 'Sports', name: 'Boxing', emoji: '🥊', description: 'Stamina, footwork, and basic punching/defense mechanics.', coachesAvailableCount: 0 },
  { id: 'curr-sp-12', category: 'Sports', name: 'Archery', emoji: '🏹', description: 'Focus, stance, and target accuracy training.', coachesAvailableCount: 0 },
  { id: 'curr-sp-13', category: 'Sports', name: 'Athletics', emoji: '🏃', description: 'Track running, jumping, and physical conditioning.', coachesAvailableCount: 0 },
  { id: 'curr-sp-14', category: 'Sports', name: 'Yoga', emoji: '🧘', description: 'Flexibility, mindfulness, and breathing exercises.', coachesAvailableCount: 0 },
  { id: 'curr-sp-15', category: 'Sports', name: 'Chess', emoji: '♟️', description: 'Strategic tactics, openings, and cognitive chess play.', coachesAvailableCount: 1 },

  // --- DANCE CLASSES (11) ---
  { id: 'curr-dn-1', category: 'Dance', name: 'Hip-Hop', emoji: '👟', description: 'High energy, grooves, and street-dance choreography.', coachesAvailableCount: 0 },
  { id: 'curr-dn-2', category: 'Dance', name: 'Bollywood Dance', emoji: '🕺', description: 'Expressive, upbeat, and traditional movie dance routines.', coachesAvailableCount: 0 },
  { id: 'curr-dn-3', category: 'Dance', name: 'Classical Dance (Odissi, Bharatanatyam, Kathak)', emoji: '🩰', description: 'Precise footwork, mudras, and classical expressions.', coachesAvailableCount: 0 },
  { id: 'curr-dn-4', category: 'Dance', name: 'Contemporary Dance', emoji: '🎭', description: 'Fluid movement, self-expression, and lyrical flow.', coachesAvailableCount: 0 },
  { id: 'curr-dn-5', category: 'Dance', name: 'Jazz Dance', emoji: '🎶', description: 'Rhythmic footwork, turns, and theatrical styling.', coachesAvailableCount: 0 },
  { id: 'curr-dn-6', category: 'Dance', name: 'Ballet', emoji: '🩰', description: 'Poise, posture, and core strength alignment.', coachesAvailableCount: 1 },
  { id: 'curr-dn-7', category: 'Dance', name: 'Freestyle Dance', emoji: '💫', description: 'Dynamic, improvisational, and energetic movement.', coachesAvailableCount: 0 },
  { id: 'curr-dn-8', category: 'Dance', name: 'Zumba', emoji: '💃', description: 'Cardio fitness, latin rhythms, and high-energy dance.', coachesAvailableCount: 0 },
  { id: 'curr-dn-9', category: 'Dance', name: 'Salsa', emoji: '🎵', description: 'Partner coordination, rhythm, and latin styling.', coachesAvailableCount: 0 },
  { id: 'curr-dn-10', category: 'Dance', name: 'Breakdance', emoji: '💥', description: 'Power moves, footwork, and street style freezes.', coachesAvailableCount: 0 },
  { id: 'curr-dn-11', category: 'Dance', name: 'Folk Dance', emoji: '🌾', description: 'Traditional folk rhythms and festive community dances.', coachesAvailableCount: 0 },

  // --- GYMNASTICS & FITNESS CLASSES (11) ---
  { id: 'curr-ft-1', category: 'Fitness', name: 'Artistic Gymnastics', emoji: '🤸', description: 'Floor exercises, flexibility, and coordination.', coachesAvailableCount: 1 },
  { id: 'curr-ft-2', category: 'Fitness', name: 'Rhythmic Gymnastics', emoji: '🎗️', description: 'Graceful routine work with hoops, ribbons, and balls.', coachesAvailableCount: 0 },
  { id: 'curr-ft-3', category: 'Fitness', name: 'Acrobatics', emoji: '🎪', description: 'Balance, tumbling, and partner routines.', coachesAvailableCount: 0 },
  { id: 'curr-ft-4', category: 'Fitness', name: 'Tumbling', emoji: '🌀', description: 'Flips, somersaults, and spatial awareness.', coachesAvailableCount: 0 },
  { id: 'curr-ft-5', category: 'Fitness', name: 'Parkour', emoji: '🏃‍♂️', description: 'Obstacle navigation, jumping, and landing techniques.', coachesAvailableCount: 0 },
  { id: 'curr-ft-6', category: 'Fitness', name: 'Calisthenics', emoji: '💪', description: 'Bodyweight strength, pull-ups, and core control.', coachesAvailableCount: 0 },
  { id: 'curr-ft-7', category: 'Fitness', name: 'General Fitness', emoji: '🔋', description: 'Overall stamina, endurance, and youth agility.', coachesAvailableCount: 0 },
  { id: 'curr-ft-8', category: 'Fitness', name: 'Strength Training', emoji: '🏋️', description: 'Resistance training and muscular conditioning.', coachesAvailableCount: 0 },
  { id: 'curr-ft-9', category: 'Fitness', name: 'Aerobics', emoji: '⚡', description: 'Rhythmic cardiovascular exercises and coordination.', coachesAvailableCount: 0 },
  { id: 'curr-ft-10', category: 'Fitness', name: 'Pilates', emoji: '🧘‍♀️', description: 'Core stabilization, posture, and muscle balancing.', coachesAvailableCount: 0 },
  { id: 'curr-ft-11', category: 'Fitness', name: 'Stretching & Flexibility', emoji: '🤸‍♂️', description: 'Muscle elongation, recovery, and injury prevention.', coachesAvailableCount: 0 },

  // --- OTHER CLASSES (15) ---
  { id: 'curr-ot-1', category: 'Other', name: 'Drawing & Painting', emoji: '🎨', description: 'Watercolors, acrylics, and sketching basics.', coachesAvailableCount: 1 },
  { id: 'curr-ot-2', category: 'Other', name: 'Art & Craft', emoji: '✂️', description: 'Clay sculpting, origami, and DIY creative crafting.', coachesAvailableCount: 0 },
  { id: 'curr-ot-3', category: 'Other', name: 'Music', emoji: '🎵', description: 'Rhythm theory, music appreciation, and reading sheet music.', coachesAvailableCount: 0 },
  { id: 'curr-ot-4', category: 'Other', name: 'Singing', emoji: '🎤', description: 'Vocal warmups, pitch control, and choir singing.', coachesAvailableCount: 0 },
  { id: 'curr-ot-5', category: 'Other', name: 'Guitar', emoji: '🎸', description: 'Chord progressions, fingerpicking, and rhythmic strumming.', coachesAvailableCount: 0 },
  { id: 'curr-ot-6', category: 'Other', name: 'Piano / Keyboard', emoji: '🎹', description: 'Finger placement, scales, and classical melodies.', coachesAvailableCount: 0 },
  { id: 'curr-ot-7', category: 'Other', name: 'Coding & Robotics', emoji: '💻', description: 'Visual programming, logical blocks, and basic robotics.', coachesAvailableCount: 0 },
  { id: 'curr-ot-8', category: 'Other', name: 'Public Speaking', emoji: '🗣️', description: 'Confidence building, debate skills, and stage presence.', coachesAvailableCount: 0 },
  { id: 'curr-ot-9', category: 'Other', name: 'Drama & Acting', emoji: '🎭', description: 'Character play, expression, and storytelling.', coachesAvailableCount: 0 },
  { id: 'curr-ot-10', category: 'Other', name: 'Photography', emoji: '📷', description: 'Camera mechanics, composition, and visual storytelling.', coachesAvailableCount: 0 },
  { id: 'curr-ot-11', category: 'Other', name: 'Cooking', emoji: '🍳', description: 'Fireless culinary skills and basic recipe creation.', coachesAvailableCount: 0 },
  { id: 'curr-ot-12', category: 'Other', name: 'Foreign Languages', emoji: '🌐', description: 'French, Spanish, or German conversations for beginners.', coachesAvailableCount: 0 },
  { id: 'curr-ot-13', category: 'Other', name: 'Meditation', emoji: '🧠', description: 'Mindfulness, focus, and emotional regulation.', coachesAvailableCount: 0 },
  { id: 'curr-ot-14', category: 'Other', name: 'Personality Development', emoji: '🌟', description: 'Social etiquette, communication, and confidence.', coachesAvailableCount: 0 },
  { id: 'curr-ot-15', category: 'Other', name: 'Abacus & Mental Math', emoji: '🧮', description: 'Vedic mathematics and mental math speed training.', coachesAvailableCount: 1 }
];
