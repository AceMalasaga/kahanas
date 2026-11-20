import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/dashboard/TopHeader';
import WorkspaceHeader from './components/dashboard/WorkspaceHeader';
import KpiGrid from './components/dashboard/KpiGrid';
import NeedsAttentionCard from './components/dashboard/NeedsAttentionCard';
import ActiveProjectCard from './components/dashboard/ActiveProjectCard';
import RecentApplicantsCard from './components/dashboard/RecentApplicantsCard';
import DiscoverWorkersView from './components/discover/DiscoverWorkersView';
import SavedWorkersView from './components/saved/SavedWorkersView';
import JobPostsView from './components/jobs/JobPostsView';

export default function App() {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div className="min-h-screen flex bg-[#F8F6F2] text-[#111827] font-sans">
      <Sidebar activeItem={activeNav} onSelect={setActiveNav} />

      <div className="flex-1 min-w-0 flex flex-col pt-16 lg:pt-0">
        <main className="p-6 lg:px-8 lg:py-7 space-y-6 max-w-[1440px] w-full mx-auto">
          {activeNav === 'Dashboard' && (
            <>
              <WorkspaceHeader onPostJob={() => setActiveNav('Job posts')} />
              <KpiGrid />

              <section className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
                <div className="xl:col-span-7">
                  <NeedsAttentionCard onViewProjects={() => setActiveNav('Projects')} />
                </div>
                <div className="xl:col-span-5">
                  <ActiveProjectCard onOpenWorkspace={() => setActiveNav('Projects')} />
                </div>
              </section>

              <RecentApplicantsCard onViewAll={() => setActiveNav('Applicants')} />
            </>
          )}

          {activeNav === 'Discover workers' && <DiscoverWorkersView />}
          {activeNav === 'Saved workers' && (
            <SavedWorkersView onDiscoverMore={() => setActiveNav('Discover workers')} />
          )}
          {activeNav === 'Job posts' && (
            <JobPostsView onViewApplicants={() => setActiveNav('Applicants')} />
          )}
        </main>
      </div>
    </div>
  );
}