import React, { useState } from 'react';
import { ChevronRight, Search, Bell } from 'lucide-react';

export default function TopHeader({ section = 'Client', page = 'Dashboard' }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <header className="h-14 bg-[#F8F6F2] border-b border-[#E7E3DC] px-6 flex items-center justify-between">
      <div className="flex items-center gap-2 text-xs">
        <span className="text-gray-500">{section}</span>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="font-semibold text-gray-900">{page}</span>
      </div>

      <div className="flex items-center gap-3">
        {searchOpen && (
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="h-8 w-44 sm:w-56 rounded-lg border border-[#DDD8CE] bg-white px-3 text-xs text-gray-800 focus:outline-none focus:border-[#1B4239]"
          />
        )}
        <button
          type="button"
          onClick={() => setSearchOpen((prev) => !prev)}
          aria-label="Search"
          className="p-2 rounded-lg text-gray-600 hover:bg-black/5 transition-colors cursor-pointer"
        >
          <Search className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="p-2 rounded-lg text-gray-600 hover:bg-black/5 transition-colors cursor-pointer"
        >
          <Bell className="w-4 h-4" />
        </button>
        <div className="w-8 h-8 rounded-full bg-[#DCE5E1] text-[#13352D] text-xs font-bold flex items-center justify-center">
          MA
        </div>
      </div>
    </header>
  );
}