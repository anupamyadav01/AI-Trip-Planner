import TripGenerator from "../../trip-generator/TripGenerator";
import Register from "../../components/Register/Register";
const CreateTrip = () => {
  return (
    <div className="relative">
      <h1 className="text-3xl font-bold text-center mt-10">Create Trip</h1>
      <TripGenerator />
      <Register />
    </div>
  );
};

export default CreateTrip;
