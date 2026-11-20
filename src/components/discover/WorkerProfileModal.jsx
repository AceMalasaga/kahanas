import React, { useEffect } from 'react';
import {
  X,
  Bookmark,
  Star,
  MapPin,
  Clock,
  Check,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export default function WorkerProfileModal({
  worker,
  onClose,
  onToggleSave,
  onRequestQuote,
}) {
  useEffect(() => {
    if (!worker) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [worker, onClose]);

  if (!worker) return null;

  const aboutText =
    worker.about ||
    `Experienced ${worker.trade.toLowerCase()} specializing in reliable residential work, safe installations, and thorough troubleshooting.`;

  const skills = worker.skills || [
    'House wiring',
    'Panel repair',
    'Installation',
  ];

  const credential = worker.credential || {
    title: 'Electrical Installation NC II',
    meta: 'Reviewed by Kahanas · June 2025',
  };

  const completedProjects = worker.completedProjects || [
    {
      id: 'proj-1',
      title: 'Whole-home electrical upgrade',
      meta: 'Matina · May 2025',
      accentBg: 'bg-[#3C4A42]',
      badge: 'REWIRE',
    },
    {
      id: 'proj-2',
      title: 'Pendant lighting installation',
      meta: 'Lanang · April 2025',
      accentBg: 'bg-[#7A5836]',
      badge: 'LIGHTING',
    },
  ];

  const totalCompletedCount = worker.completedCount ?? 8;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-[1px] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${worker.name} profile`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[90vh] bg-[#FCFBF9] rounded-2xl border border-[#E7E3DC] shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Scrollable Modal Body */}
        <div className="relative flex-1 overflow-y-auto">
          {/* Sticky Close Button Bar */}
          <div className="sticky top-0 z-20 flex justify-end px-4 pt-4 pointer-events-none">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile modal"
              className="pointer-events-auto w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Hero Banner (pulled up under sticky bar) */}
          <div className="-mt-[52px] h-48 sm:h-56 w-full bg-[#2E3834]">
            {worker.coverUrl || worker.avatarUrl ? (
              <img
                src={worker.coverUrl || worker.avatarUrl}
                alt={worker.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className={`w-full h-full ${worker.avatarBg || 'bg-[#2E3834]'} flex items-center justify-center text-white/25 text-5xl font-bold select-none`}
              >
                {worker.initials}
              </div>
            )}
          </div>

          {/* Profile Content */}
          <div className="p-6 sm:p-7 space-y-6">
            {/* Header & Bookmark */}
            <div className="flex items-start justify-between gap-4">
              <div>
                {worker.verified && (
                  <span className="inline-block bg-[#EAF2EE] text-[#2F6B54] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm">
                    TESDA VERIFIED
                  </span>
                )}
                <h2 className="text-2xl sm:text-[28px] font-bold text-gray-900 mt-2 leading-tight">
                  {worker.name}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {worker.trade} · {worker.experience} experience
                </p>
              </div>

              <button
                type="button"
                onClick={() => onToggleSave?.(worker.id)}
                aria-label={
                  worker.saved ? `Unsave ${worker.name}` : `Save ${worker.name}`
                }
                className="w-10 h-10 rounded-full border border-[#E6E2DA] bg-white hover:bg-[#F5F3EE] flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <Bookmark
                  className={`w-4 h-4 ${
                    worker.saved
                      ? 'fill-[#E86A33] text-[#E86A33]'
                      : 'text-gray-600'
                  }`}
                />
              </button>
            </div>

            {/* 3 Stat Highlight Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="bg-white border border-[#ECE8E0] rounded-xl p-4">
                <Star className="w-4 h-4 fill-[#E89B3C] text-[#E89B3C]" />
                <p className="text-base font-bold text-gray-900 mt-2.5 leading-snug">
                  {worker.rating}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {worker.reviews} reviews
                </p>
              </div>

              <div className="bg-white border border-[#ECE8E0] rounded-xl p-4">
                <MapPin className="w-4 h-4 text-gray-500" />
                <p className="text-sm font-bold text-gray-900 mt-2.5 leading-snug">
                  Nearby
                </p>
                <p className="text-xs text-gray-400 mt-0.5 truncate">
                  {worker.location}
                </p>
              </div>

              <div className="bg-white border border-[#ECE8E0] rounded-xl p-4">
                <Clock className="w-4 h-4 text-gray-500" />
                <p className="text-sm font-bold text-gray-900 mt-2.5 leading-snug">
                  Responds fast
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {worker.responseTime || 'Usually in 1 hour'}
                </p>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-sm font-bold text-gray-900">About</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                {aboutText}
              </p>
            </div>

            {/* Skills & Services */}
            <div>
              <h3 className="text-sm font-bold text-gray-900">
                Skills &amp; services
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 bg-[#EFF3F1] text-[#26423A] text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    <Check className="w-3.5 h-3.5 text-[#3B6658]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Credential Banner */}
            <div className="bg-[#EAF1EE] border border-[#DCE7E2] rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-white/75 text-[#2F6B54] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-wider text-[#47685C] uppercase">
                  VERIFIED CREDENTIAL
                </p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">
                  {credential.title}
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {credential.meta}
                </p>
              </div>
            </div>

            {/* Completed Projects */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-900">
                  Completed projects
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700">
                  <span>View all {totalCompletedCount}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {completedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border border-[#ECE8E0] rounded-xl overflow-hidden"
                  >
                    <div
                      className={`h-28 ${project.accentBg} flex items-center justify-center text-white/80 text-xs font-bold tracking-widest uppercase`}
                    >
                      {project.badge}
                    </div>
                    <div className="p-3.5">
                      <p className="text-xs sm:text-sm font-bold text-gray-900">
                        {project.title}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        {project.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Action Bar */}
        <div className="bg-[#FCFBF9] border-t border-[#ECE8E0] px-6 sm:px-7 py-4 flex items-center justify-between gap-4 shrink-0">
          <div>
            <p className="text-[11px] text-gray-400 leading-none">Starts at</p>
            <p className="text-base font-bold text-gray-900 mt-1">
              {worker.rate}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onRequestQuote?.(worker)}
            className="inline-flex items-center gap-2 bg-[#163830] hover:bg-[#102A24] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>Request a quote</span>
          </button>
        </div>
      </div>
    </div>
  );
}