/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import bgimg from "../../../assets/background (2).jpg";
// import PropTypes from "prop-types";
import { IoIosSend } from "react-icons/io";
const InfoSection = ({ trip }) => {
  return (
    <div>
      <img
        src={bgimg}
        alt=""
        className="w-full h-[340px] object-cover rounded-xl"
      />
      <div className="my-5 flex flex-col gap-2">
        <h2 className="font-bold text-2xl">{trip?.userSelection?.location}</h2>
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              📅
              {trip?.userSelection?.noOfDays} Days
            </h2>{" "}
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              💰
              {trip?.userSelection?.budget} Days
            </h2>{" "}
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              ✈️ No. of Traveler: {trip?.userSelection?.traveler}
            </h2>
          </div>
          <Button className="">
            <IoIosSend />
          </Button>
        </div>
      </div>
    </div>
  );
};

// InfoSection.propTypes = {
//   trip: PropTypes.object,
// };

export default InfoSection;
