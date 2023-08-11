import React from 'react';
import TechEventsCards from './TechEventsCards';

const Technical = [
  {
    title: "Within the Boundaries",
    description: "Box Cricket",
    imgUrl: null,
    rules: [
      // ... your rules here
    ],
    roundDetails: [],
    judgingCriteria: null,
  },
  {
    title: "SmashZone",
    description: "Badminton",
    imgUrl: null,
    rules: [
      // ... your rules here
    ],
    roundDetails: [],
    judgingCriteria: null,
  },
  // Add more events here
];

const TechnicalEvents = () => {
  return (
    <>
      <div className="tech-events">
        {Technical.map((event, index) => (
          <TechEventsCards key={index} event={event} />
        ))}
      </div>
    </>
  );
};

export default TechnicalEvents;
