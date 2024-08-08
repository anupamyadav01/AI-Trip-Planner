import { Link } from "react-router-dom";
import bgimg from "../../../assets/background (2).jpg";
import PropTypes from "prop-types";
const Hotels = ({ trip }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mt-10 mb-10">Hotel Recommendations</h1>
      <div className="grid justify-center grid-cols-2 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {trip?.generatedData?.hotels?.map((item, index) => (
          <Link
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              item.hotelName +
              "," +
              item.address
            }
            target="_blank"
            key={index}
          >
            <div>
              <div className="hover:scale-105 cursor-pointer transition-all ">
                <img src={bgimg} alt="" className="rounded-lg" />
              </div>
              <div className="my-2 flex flex-col">
                <h2 className="font-medium">{item.hotelName}</h2>
                <h2 className="text-xs text-gray-500">🏘️{item.address}</h2>
                <h2 className="text-sm">💸{item.price}</h2>
                <h2 className="text-sm">⭐{item.rating} stars</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

Hotels.propTypes = {
  trip: PropTypes.object,
};

export default Hotels;
