/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import bgimg from "../../../assets/background (2).jpg";

const PlacesToVisit = ({ trip }) => {
  // Check if itinerary exists and is an object
  const itinerary = trip?.generatedData?.itinerary;

  if (!itinerary || typeof itinerary !== "object") {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Places to Visit</h2>
        <p className="text-red-500">Error: Unable to load itinerary data.</p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Places to Visit</h2>
      {Object.entries(itinerary).map(([day, details]) => (
        <div key={day}>
          <h2 className="text-xl text-gray-800 font-medium mb-4">{`Planning for Day ${day.slice(
            3
          )}`}</h2>
          <div className="pt-4 pb-8 grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            {details.places?.map((place, index) => (
              <Link
                key={index}
                to={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  encodeURIComponent(place.placeName)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="py-4 px-4 border rounded-lg shadow-md flex hover:scale-105 hover:shadow-lg cursor-pointer transition-all">
                  <div className="w-[35%] h-[200px]">
                    <img
                      src={bgimg}
                      alt={place.placeName}
                      className="h-full w-full object-cover rounded-md"
                    />
                  </div>
                  <div className="w-[65%] px-3">
                    <h3 className="text-lg font-bold">
                      {place.placeName || "Unknown Place"}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {place.details || "No details available"}
                    </p>
                    <p className="text-gray-500 text-sm mb-1">
                      💰 {place.ticketPrice || "No pricing info"}
                    </p>
                    <p className="font-medium text-base">
                      🕙 {place.timeToTravel || "No time info"}
                    </p>
                  </div>
                </div>
              </Link>
            )) || (
              <p className="text-gray-500">No places available for this day.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlacesToVisit;
