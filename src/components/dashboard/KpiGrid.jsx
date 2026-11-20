import React from 'react';
import { Briefcase, Users, Bookmark, Star } from 'lucide-react';

const defaultStats = [
  {
    label: 'Active jobs',
    value: '3',
    subtext: '2 on schedule',
    icon: Briefcase,
    iconBg: 'bg-[#EEF2F0]',
    iconColor: 'text-[#2D4B43]',
  },
  {
    label: 'New applicants',
    value: '12',
    subtext: '+5 since yesterday',
    icon: Users,
    iconBg: 'bg-[#FDF1EB]',
    iconColor: 'text-[#E07A4F]',
  },
  {
    label: 'Saved workers',
    value: '8',
    subtext: 'Across 5 trades',
    icon: Bookmark,
    iconBg: 'bg-[#EEF2F0]',
    iconColor: 'text-[#2D4B43]',
  },
  {
    label: 'Client rating',
    value: '4.9',
    subtext: 'From 11 workers',
    icon: Star,
    iconBg: 'bg-[#EEF2F0]',
    iconColor: 'text-[#2D4B43]',
  },
];

export default function KpiGrid({ stats = defaultStats }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="bg-[#FCFBF9] border border-[#E7E3DC] rounded-2xl p-5 flex items-start gap-4"
          >
            <div
              className={`w-11 h-11 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 mt-0.5`}
            >
              <Icon className="w-5 h-5" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-0.5 leading-snug">
                {item.value}
              </p>
              <p className="text-xs text-gray-400 mt-1">{item.subtext}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}