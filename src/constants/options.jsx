export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "🏕️",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "Travel with your family",
    icon: "👨‍👩‍👧‍👦",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "Travel with your friends",
    icon: "👨‍👩‍👦‍👦",
    people: "5+ People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Stay on budget",
    icon: "💰",
  },
  {
    id: 3,
    title: "Expensive",
    desc: "Stay on budget",
    icon: "💵",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location}, for {noOfDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, description and suggest itinerary with PlaceName, Place details, Place Image url , Geo coordinates, ticket Pricing, Rating , Time t travel each of the location for {noOfDays} days with each day plan with best time to visit in JSON format and don not add comment in JSON format";
