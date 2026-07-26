import { Coach, HousingSociety, CategoryType } from './types';

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
    category: 'Mind Games',
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
    category: 'Arts',
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
    category: 'Fitness',
    subCategory: 'Martial Arts / Karate',
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
    category: 'Mind Games',
    subCategory: 'Mental Math / Abacus',
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
  }
];

export const CATEGORY_TILES: { type: CategoryType; title: string; subtitle: string; iconName: string; bgGradient: string; count: number }[] = [
  {
    type: 'Sports',
    title: 'Sports & Athletics',
    subtitle: 'Swimming, Football, Badminton, Lawn Tennis',
    iconName: 'Trophy',
    bgGradient: 'from-emerald-50 to-teal-100/70 border-teal-200',
    count: 24
  },
  {
    type: 'Fitness',
    title: 'Fitness & Martial Arts',
    subtitle: 'Karate, Gymnastics, Skating, Yoga',
    iconName: 'Activity',
    bgGradient: 'from-amber-50 to-orange-100/70 border-amber-200',
    count: 18
  },
  {
    type: 'Mind Games',
    title: 'Mind Games & Logic',
    subtitle: 'Chess, Abacus, Vedic Maths, Rubik Cube',
    iconName: 'Brain',
    bgGradient: 'from-sky-50 to-indigo-100/70 border-indigo-200',
    count: 15
  },
  {
    type: 'Arts',
    title: 'Arts & Creative',
    subtitle: 'Drawing, Clay Sculpting, Guitar, Classical Dance',
    iconName: 'Palette',
    bgGradient: 'from-rose-50 to-pink-100/70 border-rose-200',
    count: 12
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
