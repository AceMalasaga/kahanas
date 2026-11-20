import React, { useMemo, useState } from 'react';
import JobPostsHeader from './JobPostsHeader';
import JobStatusTabs from './JobStatusTabs';
import JobPostCard from './JobPostCard';

const defaultJobs = [
  {
    id: 'job-1',
    status: 'IN PROGRESS',
    bucket: 'open',
    title: 'Kitchen rewiring & light installation',
    location: 'Matina, Davao City',
    trade: 'Electrician',
    budget: '₱5,000–₱7,000',
    targetDate: 'Jun 28',
    applicantsCount: 6,
    postedAgo: '1 days ago',
  },
  {
    id: 'job-2',
    status: 'OPEN',
    bucket: 'open',
    title: 'Built-in pantry cabinet',
    location: 'Buhangin, Davao City',
    trade: 'Carpenter',
    budget: '₱8,500–₱11,000',
    targetDate: 'Jul 04',
    applicantsCount: 4,
    postedAgo: '2 days ago',
  },
  {
    id: 'job-3',
    status: 'FILLED',
    bucket: 'filled',
    title: 'Bathroom pipe leak repair',
    location: 'Toril, Davao City',
    trade: 'Plumber',
    budget: '₱2,500–₱3,500',
    targetDate: 'Jun 15',
    applicantsCount: 2,
    postedAgo: '5 days ago',
  },
  {
    id: 'job-4',
    status: 'DRAFT',
    bucket: 'drafts',
    title: 'Carport roof repainting & seal',
    location: 'Ecoland, Davao City',
    trade: 'Painter',
    budget: '₱4,000–₱5,500',
    targetDate: 'Jul 12',
    applicantsCount: 0,
    postedAgo: 'Draft',
  },
];

export default function JobPostsView({
  jobs = defaultJobs,
  onCreateJob,
  onEditJob,
  onViewApplicants,
}) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = useMemo(() => {
    const openCount = jobs.filter((j) => j.bucket === 'open').length;
    const filledCount = jobs.filter((j) => j.bucket === 'filled').length;
    const draftsCount = jobs.filter((j) => j.bucket === 'drafts').length;

    return [
      { key: 'all', label: 'All jobs', count: jobs.length },
      { key: 'open', label: 'Open', count: openCount },
      { key: 'filled', label: 'Filled', count: filledCount },
      { key: 'drafts', label: 'Drafts', count: draftsCount },
    ];
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    if (activeTab === 'all') return jobs;
    return jobs.filter((j) => j.bucket === activeTab);
  }, [jobs, activeTab]);

  return (
    <div className="space-y-6">
      <JobPostsHeader onCreateJob={onCreateJob} />

      <JobStatusTabs
        tabs={tabs}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      <section className="space-y-4">
        {filteredJobs.map((job) => (
          <JobPostCard
            key={job.id}
            job={job}
            onEdit={onEditJob}
            onViewApplicants={onViewApplicants}
          />
        ))}

        {filteredJobs.length === 0 && (
          <div className="bg-[#FCFBF9] border border-[#E7E3DC] rounded-2xl p-8 text-center">
            <p className="text-sm font-semibold text-gray-800">
              No job posts in this tab
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Create a new job post to start receiving applicants.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}