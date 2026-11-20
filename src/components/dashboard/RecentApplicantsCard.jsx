import React from 'react';
import { ArrowRight } from 'lucide-react';

const defaultApplicants = [
  {
    id: 'ramon',
    name: 'Ramon Dela Cruz',
    initials: 'RD',
    role: 'Electrician',
    rating: '4.9 rating',
    tag: 'SHORTLISTED',
    tagStyle: 'bg-[#E9EFEA] text-[#3F6356]',
  },
  {
    id: 'nestor',
    name: 'Nestor Villanueva',
    initials: 'NV',
    role: 'Plumber',
    rating: '4.7 rating',
    tag: 'NEW',
    tagStyle: 'bg-[#F8EAE4] text-[#D46B43]',
  },
  {
    id: 'junrey',
    name: 'Junrey Padilla',
    initials: 'JP',
    role: 'Carpenter',
    rating: '4.8 rating',
    tag: 'NEW',
    tagStyle: 'bg-[#F8EAE4] text-[#D46B43]',
  },
];

export default function RecentApplicantsCard({
  applicants = defaultApplicants,
  onViewAll,
  onApplicantClick,
}) {
  return (
    <section className="bg-[#FCFBF9] border border-[#E7E3DC] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
            RECENT APPLICANTS
          </p>
          <h3 className="text-lg font-bold text-gray-900 mt-0.5">
            Recommended for your jobs
          </h3>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A3F36] hover:underline cursor-pointer"
        >
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {applicants.map((person) => (
          <button
            key={person.id}
            type="button"
            onClick={() => onApplicantClick?.(person)}
            className="w-full text-left bg-[#FBF9F6] hover:bg-[#F5F2EC] border border-[#ECE8E0] rounded-xl p-3.5 flex items-center justify-between gap-3 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-11 rounded-lg bg-[#3A4A44] text-white text-xs font-bold flex items-center justify-center shrink-0">
                {person.initials}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">
                  {person.name}
                </p>
                <p className="text-[11px] text-gray-500 truncate mt-0.5">
                  {person.role} · {person.rating}
                </p>
              </div>
            </div>

            <span
              className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shrink-0 ${person.tagStyle}`}
            >
              {person.tag}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}