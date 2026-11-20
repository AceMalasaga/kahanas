import React from 'react';
import { MessageSquare, Check } from 'lucide-react';

const steps = [
  { step: 1, label: 'Open', state: 'done' },
  { step: 2, label: 'Applied', state: 'done' },
  { step: 3, label: 'Accepted', state: 'done' },
  { step: 4, label: 'In progress', state: 'active' },
  { step: 5, label: 'Completed', state: 'pending' },
];

export default function ActiveProjectCard({
  projectName = 'Kitchen rewiring',
  statusLabel = 'ON TRACK',
  workerName = 'Ramon Dela Cruz',
  workerInitials = 'RD',
  nextMilestone = 'Install new panel',
  dueDate = 'June 25',
  onMessage,
  onOpenWorkspace,
}) {
  return (
    <div className="bg-[#FCFBF9] border border-[#E7E3DC] rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
            ACTIVE PROJECT
          </p>
          <h3 className="text-lg font-bold text-gray-900 mt-0.5">
            {projectName}
          </h3>
        </div>

        <span className="bg-[#EAF2EE] text-[#2F6B54] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shrink-0">
          {statusLabel}
        </span>
      </div>

      {/* Worker Row */}
      <div className="mt-5 bg-[#F5F3EE] rounded-xl p-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#3A4A44] text-white text-xs font-bold flex items-center justify-center shrink-0">
            {workerInitials}
          </div>
          <div>
            <p className="text-[11px] text-gray-500 leading-none">
              Working with
            </p>
            <p className="text-sm font-bold text-gray-900 mt-1">
              {workerName}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onMessage}
          aria-label={`Message ${workerName}`}
          className="p-2 rounded-lg text-gray-500 hover:bg-black/5 hover:text-gray-800 transition-colors cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
        </button>
      </div>

      {/* Stepper */}
      <div className="mt-6 relative flex items-center justify-between">
        <div className="absolute left-4 right-4 top-3.5 h-[2px] bg-[#E5E2DC]" />
        <div className="absolute left-4 right-[22%] top-3.5 h-[2px] bg-[#24473E]" />

        {steps.map((s) => (
          <div
            key={s.step}
            className="relative z-10 flex flex-col items-center"
          >
            {s.state === 'done' && (
              <div className="w-7 h-7 rounded-full bg-[#24473E] text-white flex items-center justify-center">
                <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
              </div>
            )}
            {s.state === 'active' && (
              <div className="w-7 h-7 rounded-full bg-[#24473E] text-white text-xs font-bold flex items-center justify-center ring-4 ring-[#E5ECE9]">
                {s.step}
              </div>
            )}
            {s.state === 'pending' && (
              <div className="w-7 h-7 rounded-full bg-[#E5E3DE] text-gray-500 text-xs font-semibold flex items-center justify-center">
                {s.step}
              </div>
            )}
            <span
              className={`mt-2 text-[11px] ${
                s.state === 'active'
                  ? 'font-bold text-gray-900'
                  : s.state === 'done'
                    ? 'font-medium text-gray-700'
                    : 'text-gray-400'
              }`}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Milestone Footer */}
      <div className="mt-6 pt-4 border-t border-[#EFECE6] flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] text-gray-400">Next milestone</p>
          <p className="text-sm font-bold text-gray-900 mt-0.5">
            {nextMilestone}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-gray-400">Due</p>
          <p className="text-xs font-semibold text-gray-800 mt-0.5">
            {dueDate}
          </p>
        </div>
      </div>

      {/* Workspace CTA */}
      <button
        type="button"
        onClick={onOpenWorkspace}
        className="mt-5 w-full py-2.5 px-4 rounded-xl border border-[#DFDBD2] bg-white hover:bg-[#F5F3EE] text-xs font-semibold text-gray-800 transition-colors cursor-pointer"
      >
        Open project workspace
      </button>
    </div>
  );
}