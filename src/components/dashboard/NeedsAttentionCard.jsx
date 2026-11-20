import React from 'react';
import { FileText, Users, Check, ChevronRight, ArrowRight } from 'lucide-react';

const defaultItems = [
  {
    id: '1',
    title: 'Agreement ready for review',
    meta: 'Bathroom pipe leak repair · Nestor V.',
    badge: 'REVIEW',
    badgeClass: 'bg-[#F8EAE4] text-[#D46B43]',
    icon: FileText,
    iconBg: 'bg-[#FDF1EB]',
    iconColor: 'text-[#E07A4F]',
  },
  {
    id: '2',
    title: '6 applicants waiting',
    meta: 'Kitchen rewiring · posted 2 days ago',
    badge: 'COMPARE',
    badgeClass: 'bg-[#E9EFEA] text-[#3F6356]',
    icon: Users,
    iconBg: 'bg-[#EEF2F0]',
    iconColor: 'text-[#3F6356]',
  },
  {
    id: '3',
    title: 'Confirm milestone completion',
    meta: 'Electrical rough-in · Ramon D.',
    badge: null,
    badgeClass: '',
    icon: Check,
    iconBg: 'bg-[#EEF2F0]',
    iconColor: 'text-[#3F6356]',
  },
];

export default function NeedsAttentionCard({
  items = defaultItems,
  onViewProjects,
  onItemClick,
}) {
  return (
    <div className="bg-[#FCFBF9] border border-[#E7E3DC] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
            NEEDS ATTENTION
          </p>
          <h3 className="text-lg font-bold text-gray-900 mt-0.5">
            Keep work moving
          </h3>
        </div>

        <button
          type="button"
          onClick={onViewProjects}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A3F36] hover:underline cursor-pointer"
        >
          <span>View projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="divide-y divide-[#EFECE6]">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onItemClick?.(item)}
              className="w-full text-left py-4 first:pt-1 last:pb-1 flex items-center justify-between gap-4 hover:bg-black/[0.015] rounded-xl px-2 -mx-2 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate mt-0.5">
                    {item.meta}
                  </p>
                </div>
              </div>

              {item.badge ? (
                <span
                  className={`text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full shrink-0 ${item.badgeClass}`}
                >
                  {item.badge}
                </span>
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}