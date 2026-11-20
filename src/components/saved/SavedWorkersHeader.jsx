import React from 'react';
import { Search } from 'lucide-react';

export default function SavedWorkersHeader({
  eyebrow = 'YOUR SHORTLIST',
  title = 'Saved workers',
  subtitle = 'Keep trusted tradespeople close and invite them when the right job comes up.',
  ctaLabel = 'Discover more',
  onDiscoverMore,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
      <div>
        <p className="text-[10px] font-semibold tracking-widest text-[#C9643B] uppercase">
          {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-gray-900 mt-1 leading-tight">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>

      <button
        type="button"
        onClick={onDiscoverMore}
        className="self-start sm:self-auto sm:ml-auto inline-flex items-center gap-2 bg-[#FCFBF9] hover:bg-[#F5F2EC] border border-[#E2DDD3] text-gray-800 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
      >
        <Search className="w-4 h-4 text-gray-500" />
        <span>{ctaLabel}</span>
      </button>
    </div>
  );
}