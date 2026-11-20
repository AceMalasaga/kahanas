import React, { useMemo, useState } from 'react';
import DiscoverHeader from './DiscoverHeader';
import WorkerSearchBar from './WorkerSearchBar';
import WorkerCard from './WorkerCard';
import WorkerProfileModal from './WorkerProfileModal';

const initialWorkers = [
  {
    id: 'ramon-dela-cruz',
    name: 'Ramon Dela Cruz',
    trade: 'Electrician',
    experience: '9 years',
    location: 'Buhangin, Davao City',
    responseTime: 'Usually in 1 hour',
    rating: '4.9',
    reviews: 48,
    rate: '₱850/day',
    verified: true,
    saved: false,
    avatarBg: 'bg-[#7A6248]',
    initials: 'RD',
    about:
      'Residential electrician specializing in safe rewiring, lighting installation, and electrical troubleshooting.',
    skills: ['House wiring', 'Panel repair', 'Installation'],
    credential: {
      title: 'Electrical Installation NC II',
      meta: 'Reviewed by Kahanas · June 2025',
    },
    completedCount: 8,
    completedProjects: [
      {
        id: 'ramon-1',
        title: 'Whole-home electrical upgrade',
        meta: 'Matina · May 2025',
        accentBg: 'bg-[#3A4742]',
        badge: 'REWIRE',
      },
      {
        id: 'ramon-2',
        title: 'Pendant lighting installation',
        meta: 'Lanang · April 2025',
        accentBg: 'bg-[#8A643B]',
        badge: 'LIGHTING',
      },
    ],
  },
  {
    id: 'junrey-padilla',
    name: 'Junrey Padilla',
    trade: 'Carpenter',
    experience: '7 years',
    location: 'Toril, Davao City',
    responseTime: 'Usually in 2 hours',
    rating: '4.8',
    reviews: 31,
    rate: '₱900/day',
    verified: true,
    saved: true,
    avatarBg: 'bg-[#6B5A4E]',
    initials: 'JP',
    about:
      'Skilled carpenter focused on custom cabinetry, door framing, roofing repairs, and interior woodwork.',
    skills: ['Cabinetry', 'Wood framing', 'Door & trim'],
    credential: {
      title: 'Carpentry NC II',
      meta: 'Reviewed by Kahanas · May 2025',
    },
    completedCount: 6,
    completedProjects: [
      {
        id: 'junrey-1',
        title: 'Custom kitchen pantry cabinets',
        meta: 'Toril · April 2025',
        accentBg: 'bg-[#5E4937]',
        badge: 'CABINETRY',
      },
      {
        id: 'junrey-2',
        title: 'Hardwood stairs & handrail',
        meta: 'Talomo · March 2025',
        accentBg: 'bg-[#46534E]',
        badge: 'WOODWORK',
      },
    ],
  },
  {
    id: 'alvin-mercado',
    name: 'Alvin Mercado',
    trade: 'Mechanic',
    experience: '11 years',
    location: 'Panabo City',
    responseTime: 'Usually in 1 hour',
    rating: '4.9',
    reviews: 26,
    rate: '₱950/day',
    verified: true,
    saved: false,
    avatarBg: 'bg-[#46534E]',
    initials: 'AM',
    about:
      'Experienced mechanic handling diagnostics, brake and suspension servicing, and preventive maintenance.',
    skills: ['Diagnostics', 'Brake service', 'Engine tune-up'],
    credential: {
      title: 'Automotive Servicing NC II',
      meta: 'Reviewed by Kahanas · July 2025',
    },
    completedCount: 10,
    completedProjects: [
      {
        id: 'alvin-1',
        title: 'Full brake & suspension overhaul',
        meta: 'Panabo · May 2025',
        accentBg: 'bg-[#35423E]',
        badge: 'OVERHAUL',
      },
      {
        id: 'alvin-2',
        title: 'Fleet preventive maintenance',
        meta: 'Tagum · March 2025',
        accentBg: 'bg-[#5A534B]',
        badge: 'MAINTENANCE',
      },
    ],
  },
  {
    id: 'nestor-villanueva',
    name: 'Nestor Villanueva',
    trade: 'Plumber',
    experience: '6 years',
    location: 'Matina, Davao City',
    responseTime: 'Usually in 1 hour',
    rating: '4.7',
    reviews: 22,
    rate: '₱800/day',
    verified: true,
    saved: false,
    avatarBg: 'bg-[#5A534B]',
    initials: 'NV',
    about:
      'Dependable plumber specializing in pipe leak repairs, fixture replacement, and water line layouts.',
    skills: ['Leak repair', 'Pipe fitting', 'Fixture install'],
    credential: {
      title: 'Plumbing NC II',
      meta: 'Reviewed by Kahanas · June 2025',
    },
    completedCount: 5,
    completedProjects: [
      {
        id: 'nestor-1',
        title: 'Bathroom pipe & valve replacement',
        meta: 'Matina · May 2025',
        accentBg: 'bg-[#42544E]',
        badge: 'PLUMBING',
      },
      {
        id: 'nestor-2',
        title: 'Water tank pressure line setup',
        meta: 'Ecoland · April 2025',
        accentBg: 'bg-[#6B5A4E]',
        badge: 'WATERLINE',
      },
    ],
  },
];

export default function DiscoverWorkersView({ onRequestQuote }) {
  const [workers, setWorkers] = useState(initialWorkers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrade, setSelectedTrade] = useState('All');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedWorkerId, setSelectedWorkerId] = useState(null);

  const filteredWorkers = useMemo(() => {
    return workers.filter((worker) => {
      const matchesTrade =
        selectedTrade === 'All' || worker.trade === selectedTrade;
      const matchesVerified = !verifiedOnly || worker.verified;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        worker.name.toLowerCase().includes(q) ||
        worker.trade.toLowerCase().includes(q) ||
        worker.location.toLowerCase().includes(q);
      return matchesTrade && matchesVerified && matchesQuery;
    });
  }, [workers, searchQuery, selectedTrade, verifiedOnly]);

  const activeModalWorker = useMemo(
    () => workers.find((w) => w.id === selectedWorkerId) || null,
    [workers, selectedWorkerId]
  );

  const toggleSave = (id) => {
    setWorkers((prev) =>
      prev.map((w) => (w.id === id ? { ...w, saved: !w.saved } : w))
    );
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTrade('All');
    setVerifiedOnly(false);
  };

  return (
    <div className="space-y-6">
      <DiscoverHeader />

      <WorkerSearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedTrade={selectedTrade}
        onTradeChange={setSelectedTrade}
        verifiedOnly={verifiedOnly}
        onVerifiedChange={setVerifiedOnly}
        onReset={resetFilters}
      />

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {filteredWorkers.map((worker) => (
          <WorkerCard
            key={worker.id}
            worker={worker}
            onToggleSave={toggleSave}
            onViewProfile={(w) => setSelectedWorkerId(w.id)}
          />
        ))}

        {filteredWorkers.length === 0 && (
          <div className="xl:col-span-2 bg-[#FCFBF9] border border-[#E7E3DC] rounded-2xl p-8 text-center">
            <p className="text-sm font-semibold text-gray-800">
              No matching tradespeople found
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Try adjusting your search keyword or trade filter.
            </p>
          </div>
        )}
      </section>

      <WorkerProfileModal
        worker={activeModalWorker}
        onClose={() => setSelectedWorkerId(null)}
        onToggleSave={toggleSave}
        onRequestQuote={(w) => {
          setSelectedWorkerId(null);
          onRequestQuote?.(w);
        }}
      />
    </div>
  );
}