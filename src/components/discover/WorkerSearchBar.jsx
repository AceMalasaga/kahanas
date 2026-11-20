import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

const defaultTrades = ['All', 'Electrician', 'Carpenter', 'Mechanic', 'Plumber'];

export default function WorkerSearchBar({
  searchQuery,
  onSearchChange,
  selectedTrade,
  onTradeChange,
  trades = defaultTrades,
  verifiedOnly,
  onVerifiedChange,
  onReset,
}) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search skills, trade, or worker"
            className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#FCFBF9] border border-[#E7E3DC] text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#1B4239]"
          />
        </div>

        {/* Trade Dropdown */}
        <div className="relative sm:w-44 shrink-0">
          <select
            value={selectedTrade}
            onChange={(e) => onTradeChange(e.target.value)}
            aria-label="Filter by trade"
            className="w-full h-11 appearance-none pl-3.5 pr-9 rounded-xl bg-[#FCFBF9] border border-[#E7E3DC] text-sm font-medium text-gray-800 focus:outline-none focus:border-[#1B4239] cursor-pointer"
          >
            {trades.map((trade) => (
              <option key={trade} value={trade}>
                {trade}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Filters Button */}
        <button
          type="button"
          onClick={() => setFiltersOpen((prev) => !prev)}
          className={`h-11 px-4 rounded-xl border text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0 ${
            filtersOpen || verifiedOnly
              ? 'bg-[#EAF2EE] border-[#2F6B54]/30 text-[#1A3F36]'
              : 'bg-[#FCFBF9] border-[#E7E3DC] text-gray-800 hover:bg-[#F5F2EC]'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Expandable Filter Options */}
      {filtersOpen && (
        <div className="bg-[#FCFBF9] border border-[#E7E3DC] rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <label className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => onVerifiedChange(e.target.checked)}
              className="rounded border-gray-300 text-[#1A3F36] focus:ring-[#1A3F36]"
            />
            <span>TESDA verified only</span>
          </label>

          <button
            type="button"
            onClick={onReset}
            className="text-xs font-semibold text-[#C9643B] hover:underline cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}