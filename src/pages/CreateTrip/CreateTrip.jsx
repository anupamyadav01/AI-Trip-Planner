import TripGenerator from "../../trip-generator/TripGenerator";
import Register from "../../components/Register/Register";
const CreateTrip = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl font-bold text-center mt-10">Create Trip</h1>
        <TripGenerator />
        <Register />
      </div>
    </div>
  );
};

export default CreateTrip;
