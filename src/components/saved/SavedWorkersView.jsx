import React, { useState } from 'react';
import SavedWorkersHeader from './SavedWorkersHeader';
import SavedWorkerCard from './SavedWorkerCard';
import WorkerProfileModal from '../discover/WorkerProfileModal';

const defaultSavedWorkers = [
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
];

export default function SavedWorkersView({
  workers: controlledWorkers,
  onToggleSave: controlledToggleSave,
  onDiscoverMore,
  onRequestQuote,
}) {
  const [internalWorkers, setInternalWorkers] = useState(defaultSavedWorkers);
  const [activeWorker, setActiveWorker] = useState(null);

  const savedList = (controlledWorkers ?? internalWorkers).filter(
    (w) => w.saved !== false
  );

  const handleToggleSave = (id) => {
    if (controlledToggleSave) {
      controlledToggleSave(id);
    } else {
      setInternalWorkers((prev) =>
        prev.map((w) => (w.id === id ? { ...w, saved: !w.saved } : w))
      );
    }
    if (activeWorker?.id === id) {
      setActiveWorker(null);
    }
  };

  return (
    <div className="space-y-6">
      <SavedWorkersHeader onDiscoverMore={onDiscoverMore} />

      {savedList.length > 0 ? (
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {savedList.map((worker) => (
            <SavedWorkerCard
              key={worker.id}
              worker={worker}
              onToggleSave={handleToggleSave}
              onViewProfileAndWork={(w) => setActiveWorker(w)}
            />
          ))}
        </section>
      ) : (
        <div className="bg-[#FCFBF9] border border-[#E7E3DC] rounded-2xl p-8 text-center">
          <p className="text-sm font-semibold text-gray-800">
            No saved workers yet
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Bookmark tradespeople from Discover workers to keep them on your shortlist.
          </p>
          <button
            type="button"
            onClick={onDiscoverMore}
            className="mt-4 inline-flex items-center gap-2 bg-[#1A3F36] hover:bg-[#13312A] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            Discover workers
          </button>
        </div>
      )}

      <WorkerProfileModal
        worker={activeWorker}
        onClose={() => setActiveWorker(null)}
        onToggleSave={handleToggleSave}
        onRequestQuote={(w) => {
          setActiveWorker(null);
          onRequestQuote?.(w);
        }}
      />
    </div>
  );
}