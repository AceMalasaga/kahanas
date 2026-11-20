import React from 'react';
import { PenTool, MapPin, Menu, SquarePen } from 'lucide-react';

const statusStyles = {
  'IN PROGRESS': 'bg-[#EAF2EE] text-[#2F6B54]',
  OPEN: 'bg-[#F8EAE4] text-[#D46B43]',
  FILLED: 'bg-[#E9EFEA] text-[#3F6356]',
  DRAFT: 'bg-[#EFECE6] text-gray-600',
};

export default function JobPostCard({
  job,
  onEdit,
  onViewApplicants,
  onOpenMenu,
}) {
  const badgeStyle = statusStyles[job.status] || 'bg-[#EFECE6] text-gray-700';

  return (
    <article className="bg-[#FCFBF9] border border-[#E7E3DC] rounded-2xl p-6">
      {/* Top Row: Icon + Title/Meta + Menu */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-[#F3F0EA] text-[#2D4B43] flex items-center justify-center shrink-0 mt-0.5">
            <PenTool className="w-4 h-4" strokeWidth={1.9} />
          </div>

          <div className="min-w-0">
            <span
              className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-sm ${badgeStyle}`}
            >
              {job.status}
            </span>

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-1.5 leading-snug">
              {job.title}
            </h3>

            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5 flex-wrap">
              <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>{job.location}</span>
              <span className="text-gray-300">•</span>
              <span>{job.trade}</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onOpenMenu?.(job)}
          aria-label={`More options for ${job.title}`}
          className="p-1.5 rounded-lg text-gray-500 hover:bg-black/5 transition-colors cursor-pointer shrink-0"
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Summary Strip */}
      <div className="mt-5 bg-[#F6F4EF] rounded-xl px-5 py-3.5 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <p className="text-[11px] text-gray-400">Budget</p>
          <p className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
            {job.budget}
          </p>
        </div>

        <div>
          <p className="text-[11px] text-gray-400">Target date</p>
          <p className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
            {job.targetDate}
          </p>
        </div>

        <div>
          <p className="text-[11px] text-gray-400">Applicants</p>
          <p className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
            {job.applicantsCount}
          </p>
        </div>

        <div>
          <p className="text-[11px] text-gray-400">Posted</p>
          <p className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
            {job.postedAgo}
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-5 pt-4 border-t border-[#EFECE6] flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => onEdit?.(job)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-black/5 transition-colors cursor-pointer"
        >
          <SquarePen className="w-3.5 h-3.5 text-gray-500" />
          <span>Edit</span>
        </button>

        <button
          type="button"
          onClick={() => onViewApplicants?.(job)}
          className="px-4 py-2 rounded-xl border border-[#E2DDD3] bg-white hover:bg-[#F5F3EE] text-xs font-semibold text-gray-800 transition-colors cursor-pointer"
        >
          View applicants
        </button>
      </div>
    </article>
  );
}