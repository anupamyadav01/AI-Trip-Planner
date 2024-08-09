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

// export const AI_PROMPT =
// "Generate Travel Plan for Location: {location}, for {noOfDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, description and suggest itinerary with PlaceName, Place details, Place Image url , Geo coordinates, ticket Pricing, Rating , Time t travel each of the location for {noOfDays} days with each day plan with best time to visit in proper format."

export const AI_PROMPT = `
Generate a travel plan with the following details:

Location: {location}
Number of Days: {noOfDays} days
Number of Travelers: {traveler}
Budget: {budget}
Provide the following information in JSON format:

1. Hotels
List of hotel options with each hotel having the following details:

"hotelName": Name of the hotel
"address": Full address of the hotel
"price": Price per night (include currency)
"imageUrl": URL of the hotel's image
"geoCoordinates": Geo-coordinates of the hotel
"latitude": Latitude of the hotel
"longitude": Longitude of the hotel
"rating": Hotel rating (out of 5)
"description": Short description of the hotel
2. Itinerary
Suggest an itinerary for {noOfDays} days. For each day, include:

"dayX": Day number (replace X with the day number)
"bestTimeToVisit": Best time to visit the places listed for this day
"places": Array of places to visit with the following details for each place:
"placeName": Name of the place
"details": Detailed description of the place
"imageUrl": URL of the place's image
"geoCoordinates": Geo-coordinates of the place
"latitude": Latitude of the place
"longitude": Longitude of the place
"ticketPrice": Ticket pricing information
"rating": Place rating (out of 5)
"timeToTravel": Estimated time to travel to the place from the previous location (in minutes)

in JSON format without any comma error 
`;
