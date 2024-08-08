import TripGenerator from "../../trip-generator/TripGenerator";
import Register from "../../components/Register/Register";
const CreateTrip = () => {
  return (
    <div>
      <div className="px-5 sm:px-14 md:px-20 lg:px-36 xl:px-44">
        <h1 className="text-3xl font-bold text-center mt-10">Create Trip</h1>
        <TripGenerator />
        <Register />
      </div>
    </div>
  );
};

export default CreateTrip;
