import React from 'react';
import { Bookmark, MapPin, Star } from 'lucide-react';

export default function SavedWorkerCard({
  worker,
  onToggleSave,
  onViewProfileAndWork,
}) {
  return (
    <article className="bg-[#FCFBF9] border border-[#E7E3DC] rounded-2xl p-5 flex flex-col justify-between">
      {/* Top Row: Avatar/Photo + Details + Saved Bookmark Button */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          {worker.avatarUrl ? (
            <img
              src={worker.avatarUrl}
              alt={worker.name}
              className="w-24 h-24 rounded-xl object-cover shrink-0"
            />
          ) : (
            <div
              className={`w-24 h-24 rounded-xl ${worker.avatarBg || 'bg-[#6B5A4E]'} text-white font-bold text-xl flex items-center justify-center shrink-0`}
            >
              {worker.initials}
            </div>
          )}

          <div className="min-w-0">
            {worker.verified && (
              <span className="inline-block bg-[#EAF2EE] text-[#2F6B54] text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm">
                TESDA VERIFIED
              </span>
            )}

            <h3 className="text-lg font-bold text-gray-900 mt-1 truncate">
              {worker.name}
            </h3>

            <p className="text-xs text-gray-500 mt-0.5">
              {worker.trade} · {worker.experience}
            </p>

            <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1 truncate">
              <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span className="truncate">{worker.location}</span>
            </p>

            <p className="text-xs text-gray-600 mt-1.5 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#E89B3C] text-[#E89B3C] shrink-0" />
              <span className="font-bold text-gray-900">{worker.rating}</span>
              <span className="text-gray-400">({worker.reviews} reviews)</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onToggleSave?.(worker.id)}
          aria-label={`Remove ${worker.name} from saved workers`}
          className="w-8 h-8 rounded-lg bg-[#FDF1EB] hover:bg-[#fae5da] flex items-center justify-center transition-colors cursor-pointer shrink-0"
        >
          <Bookmark className="w-4 h-4 fill-[#E86A33] text-[#E86A33]" />
        </button>
      </div>

      {/* Bottom Row: Rate & View Profile & Work */}
      <div className="mt-5 pt-4 border-t border-[#EFECE6] flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] text-gray-400 leading-none">Starts at</p>
          <p className="text-sm font-bold text-gray-900 mt-1">{worker.rate}</p>
        </div>

        <button
          type="button"
          onClick={() => onViewProfileAndWork?.(worker)}
          className="px-4 py-2 rounded-xl border border-[#E2DDD3] bg-white hover:bg-[#F5F3EE] text-xs font-semibold text-gray-800 transition-colors cursor-pointer"
        >
          View profile &amp; work
        </button>
      </div>
    </article>
  );
}