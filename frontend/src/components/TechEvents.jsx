import React from 'react'


 export const Technical = [
  {
    title: "With in the Boundaries",
    description: "Box Cricket",
    imgUrl: null,
    rules: [
      "Each Team should have 8 players (including 2 substitutes).",
      "Overs will be decided on that day.",
      "Only Throw bowling is allowed.",
      "Umpire’s decision will be considered the final call. ",
      "No ABUSIVE Language will be encouraged If it is found so. The team will simply be disqualified.",
      "Disqualification will be at every round so be sure you win every round.",
    ],

    roundDetails: [],

    judgingCriteria: null,
  },
  {
    title: "SmashZone",
    description: "Badminton",
    imgUrl: batminton,
    rules: [
      "Every individual should bring his/her own racquet for the event. Shuttlecocks will be provided by the organizing team.",

      "The tournament will be conducted in a knockout based format and each losing team/player will be eliminated after every round.",

      "Points will be awarded based on the rally point system",

      "Referee/Line Umpire decision is considered as the final call and arguments are not tolerated after the final decision is made",

      "All players are requested to behave in the spirit of sportsmanship and fair play in order to enjoy the game.",

      "Players are also requested to carry their own items like water bottles,towels etc .",

      "Participation Certificates will be provided to all the participants and the winners will be awarded with a special cash prize.",
    ],

    roundDetails: [],

    judgingCriteria: null,
  }
]
const TechnicalEvents = () => {
  
 
  return (
    <>
    <div className="tech-events">
        {events.map((event,index)=>{
          <TechEventCard key={index} event={event} />
      })}
    </div>
    
    </>
  )
}

export default TechnicalEvents