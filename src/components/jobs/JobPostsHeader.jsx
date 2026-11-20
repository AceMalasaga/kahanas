import React from 'react';
import { Plus } from 'lucide-react';

export default function JobPostsHeader({
  eyebrow = 'HIRING',
  title = 'Job posts',
  subtitle = 'Create opportunities and manage every posting from draft to hire.',
  ctaLabel = 'Create job post',
  onCreateJob,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
        onClick={onCreateJob}
        className="self-start sm:self-auto sm:ml-auto inline-flex items-center gap-2 bg-[#1A3F36] hover:bg-[#13312A] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
      >
        <Plus className="w-4 h-4" />
        <span>{ctaLabel}</span>
      </button>
    </div>
  );
}