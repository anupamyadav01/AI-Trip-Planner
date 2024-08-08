import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase/index";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import InfoSection from "./components/InfoSection";
import Hotels from "./components/Hotels";
const ViewTrips = () => {
  const [trip, setTrip] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    id && getTripData();
  }, [id]);

  const getTripData = async () => {
    const docRef = doc(db, "AITrips", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document: ", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No Such Document");
      toast.error("No trip Found");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information section */}
      <InfoSection trip={trip} />
      {/* Recommended Hotels */}
      <Hotels trip={trip} />
      {/* Daily Plan */}

      {/* Footer */}
    </div>
  );
};

export default ViewTrips;
