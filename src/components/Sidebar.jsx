import React, { useState } from 'react';
import {
  Home,
  Search,
  Bookmark,
  Briefcase,
  Users,
  FileText,
  PenTool,
  Star,
  User,
  ChevronRight,
  ChevronLeft,
  LogOut,
  HelpCircle,
  Menu,
  X,
} from 'lucide-react';

function Sidebar({ activeItem: controlledActive, onSelect }) {
  const [internalActive, setInternalActive] = useState('Dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeItem = controlledActive ?? internalActive;

  const navItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Discover workers', icon: Search },
    { name: 'Saved workers', icon: Bookmark },
    { name: 'Job posts', icon: Briefcase },
    { name: 'Applicants', icon: Users, badge: 12 },
    { name: 'Agreements', icon: FileText },
    { name: 'Projects', icon: PenTool },
    { name: 'Reviews', icon: Star },
    { name: 'Profile', icon: User },
  ];

  const handleNavClick = (name) => {
    setInternalActive(name);
    onSelect?.(name);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    setMobileOpen(false);
  };

  const compact = isCollapsed && !mobileOpen;

  return (
    <>
      {/* Mobile Top Bar (visible below lg breakpoint) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 h-16 bg-[#15352E] text-white px-4 flex items-center justify-between border-b border-white/10 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#E86A33] flex items-center justify-center">
            <PenTool className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">Kahanas</span>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          className="p-2 rounded-xl text-gray-200 hover:bg-white/10 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 min-h-screen bg-[#15352E] text-white flex flex-col select-none font-sans transition-all duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${compact ? 'w-20 px-3' : 'w-72 px-5'} py-5`}
      >
        {/* Desktop Collapse Toggle Button */}
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="hidden lg:flex absolute -right-3.5 top-8 w-7 h-7 rounded-full bg-[#E86A33] text-white items-center justify-center shadow-md hover:bg-[#d65c26] transition-colors cursor-pointer"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>

        {/* Brand Header */}
        <div
          className={`flex items-center ${
            compact ? 'justify-center' : 'justify-between px-1'
          }`}
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-[#E86A33] flex items-center justify-center shrink-0 shadow-sm">
              <PenTool className="w-5 h-5 text-white" />
            </div>
            {!compact && (
              <div className="truncate">
                <h1 className="text-2xl font-bold tracking-tight leading-none">
                  Kahanas
                </h1>
                <p className="text-[10px] font-semibold tracking-wider text-gray-300/80 uppercase mt-1.5 truncate">
                  TRABAHO NGA MASALIGAN.
                </p>
              </div>
            )}
          </div>

          {/* Mobile Close Button */}
          {mobileOpen && (
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="lg:hidden p-1.5 rounded-lg text-gray-300 hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Profile Card */}
        <div
          title={compact ? 'Maria Alonzo' : undefined}
          className={`mt-5 bg-[#1C423A]/70 border border-white/10 rounded-2xl cursor-pointer hover:bg-[#1C423A] transition-colors ${
            compact ? 'p-2 flex justify-center' : 'p-3'
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <div
              className={`flex items-center ${
                compact ? 'justify-center w-full' : 'gap-3 min-w-0'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#D6DFDC] text-[#15352E] font-bold text-sm flex items-center justify-center shrink-0">
                MA
              </div>
              {!compact && (
                <div className="truncate">
                  <p className="text-sm font-bold leading-tight truncate">
                    Maria Alonzo
                  </p>
                  <p className="text-xs text-gray-300/75 mt-0.5">Client</p>
                </div>
              )}
            </div>
            {!compact && (
              <ChevronRight className="w-4 h-4 text-gray-300/70 shrink-0" />
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-5 flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;

            return (
              <button
                key={item.name}
                type="button"
                title={compact ? item.name : undefined}
                onClick={() => handleNavClick(item.name)}
                className={`relative w-full flex items-center ${
                  compact ? 'justify-center px-0 py-3' : 'justify-between px-4 py-2.5'
                } rounded-xl text-sm font-medium transition-all overflow-hidden cursor-pointer ${
                  isActive
                    ? 'bg-[#35524B] text-white font-semibold shadow-sm'
                    : 'text-gray-200/90 hover:bg-white/5 hover:text-white'
                }`}
              >
                {/* Left Orange Indicator Pill */}
                {isActive && (
                  <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E86A33] rounded-l-xl" />
                )}

                <div className="flex items-center gap-3.5 min-w-0">
                  <Icon
                    className={`w-5 h-5 shrink-0 ${
                      isActive ? 'text-white' : 'text-gray-300/80'
                    }`}
                    strokeWidth={1.75}
                  />
                  {!compact && <span className="truncate">{item.name}</span>}
                </div>

                {/* Expanded Badge */}
                {!compact && item.badge && (
                  <span className="bg-[#E86A33] text-white text-xs font-bold px-2.5 py-0.5 rounded-full shrink-0">
                    {item.badge}
                  </span>
                )}

                {/* Compact Notification Dot */}
                {compact && item.badge && (
                  <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-[#E86A33]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <footer className="mt-4 pt-3 border-t border-white/10 space-y-1">
          <button
            type="button"
            title={compact ? 'Help & Support' : undefined}
            onClick={() => handleNavClick('Help & Support')}
            className={`w-full flex items-center ${
              compact ? 'justify-center px-0 py-2' : 'gap-3.5 px-4 py-2'
            } rounded-xl text-sm font-medium text-gray-300/85 hover:bg-white/5 hover:text-white transition-colors cursor-pointer`}
          >
            <HelpCircle className="w-5 h-5 text-gray-300/80 shrink-0" strokeWidth={1.75} />
            {!compact && <span className="truncate">Help &amp; Support</span>}
          </button>

          <button
            type="button"
            title={compact ? 'Log out' : undefined}
            onClick={handleLogout}
            className={`w-full flex items-center ${
              compact ? 'justify-center px-0 py-2' : 'gap-3.5 px-4 py-2'
            } rounded-xl text-sm font-medium text-[#F28B5E] hover:bg-[#E86A33]/10 hover:text-[#FF9D72] transition-colors cursor-pointer`}
          >
            <LogOut className="w-5 h-5 shrink-0" strokeWidth={1.75} />
            {!compact && <span className="truncate">Log out</span>}
          </button>

          {!compact && (
            <p className="px-4 pt-1.5 text-[11px] text-gray-400/75">
              Kahanas © 2026
            </p>
          )}
        </footer>
      </aside>
    </>
  );
}

export default Sidebar;