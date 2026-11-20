import React from 'react';
import { Plus } from 'lucide-react';

export default function WorkspaceHeader({
  greeting = 'Maayong buntag, Maria',
  subtitle = 'Three projects need your attention today.',
  ctaLabel = 'Post a job',
  onPostJob,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-gray-900 mt-1 leading-tight">
          {greeting}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>

      <button
        type="button"
        onClick={onPostJob}
        className="self-start sm:self-auto inline-flex items-center gap-2 bg-[#1A3F36] hover:bg-[#13312A] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
      >
        <Plus className="w-4 h-4" />
        <span>{ctaLabel}</span>
      </button>
    </div>
  );
}