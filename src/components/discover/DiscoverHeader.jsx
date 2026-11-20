import React from 'react';

export default function DiscoverHeader({
  title = 'Find the right hands for the job',
  subtitle = 'Search verified tradespeople by skill, location, availability, and experience.',
}) {
  return (
    <div>
      <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-gray-900 leading-tight">
        {title}
      </h2>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}