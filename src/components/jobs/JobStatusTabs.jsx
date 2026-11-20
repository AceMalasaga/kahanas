import React from 'react';

export default function JobStatusTabs({ tabs, activeTab, onSelectTab }) {
  return (
    <div className="border-b border-[#E7E3DC] flex items-center gap-6 overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onSelectTab?.(tab.key)}
            className={`relative pb-3 text-xs sm:text-sm whitespace-nowrap inline-flex items-center gap-2 transition-colors cursor-pointer ${
              isActive
                ? 'font-bold text-gray-900'
                : 'font-medium text-gray-500 hover:text-gray-800'
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-full ${
                isActive
                  ? 'bg-[#EAE7E1] text-gray-800'
                  : 'bg-[#F2EFE9] text-gray-500'
              }`}
            >
              {tab.count}
            </span>

            {isActive && (
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#1A3F36] rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}