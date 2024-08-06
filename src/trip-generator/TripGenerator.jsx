import { Input } from "@/components/ui/input";
import { LuLoader2 } from "react-icons/lu";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "@/constants/options";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { chatSession } from "@/Gemini/AIModel";
import userContext from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebase/index";
import { useNavigate } from "react-router-dom";
// import userContext from "../context/userContext";

const TripGenerator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);
  const { showLoginBox, setShowLoginBox } = useContext(userContext);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  const handleOnGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.error("Please login first !!", {
        position: "top-right",
        duration: 2000,
        style: {
          background: "tomato",
        },
      });
      setTimeout(() => {
        setShowLoginBox(true);
      }, 1500);
      return;
    }
    if (
      !formData?.noOfDays ||
      !formData?.location ||
      !formData?.budget ||
      !formData?.traveler
    ) {
      toast.error("Please fill all the details !!", {
        position: "top-right",
        duration: 1000,
        style: {
          background: "tomato",
        },
      });
      return;
    } else if (formData?.noOfDays > 10) {
      toast.error("No. of days should be less then 10", {
        position: "top-right",
        duration: 1000,
        style: {
          background: "tomato",
        },
      });
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{location}", formData?.location)
      .replace("{noOfDays}", formData?.noOfDays)
      .replace("{noOfDays}", formData?.noOfDays);

    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
    setLoading(false);
    saveAIData(result?.response?.text());
  };

  const saveAIData = async (tripData) => {
    setLoading(true);
    const docID = Date.now().toString();
    const user = JSON.parse(localStorage.getItem("user"));
    await setDoc(doc(db, "AITrips", docID), {
      userSelection: formData,
      generatedData: JSON.parse(tripData),
      userEmail: user?.email,
      id: docID,
    });
    setLoading(false);
    toast.success("Trip Generated !!", {
      position: "top-right",
      duration: 1000,
    });

    navigate(`/view-trips/${docID}`);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        {" "}
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          <input
            type="text"
            className="w-full flex-grow p-3 focus:ring-1 focus:outline-none rounded-md shadow border border-zinc-300"
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days do you plan to stay?
          </h2>
          <Input
            type="number"
            placeholder={"Ex.3"}
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
            className="w-full flex-grow p-3 focus:ring-1 focus:outline-none rounded-md shadow border border-zinc-300"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((option) => (
            <div
              onClick={() => handleInputChange("budget", option.title)}
              key={option.id}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                formData?.budget === option.title && "border-gray-600 shadow-xl"
              }`}
            >
              <h2 className="text-4xl">{option.icon}</h2>
              <h2 className="text-lg font-bold">{option.title}</h2>
              <h2 className="text-sm text-gray-500">{option.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">
          What do you plan on traveling with on your next adventure?🏞️
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelesList.map((option) => (
            <div
              onClick={() => handleInputChange("traveler", option.people)}
              key={option.id}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                formData?.traveler === option.people &&
                "border-gray-600 shadow-xl"
              }`}
            >
              <h2 className="text-4xl">{option.icon}</h2>
              <h2 className="text-lg font-bold">{option.title}</h2>
              <h2 className="text-sm text-gray-500">{option.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 justify-end flex">
        <Button onClick={handleOnGenerateTrip} disabled={loading}>
          {loading ? (
            <LuLoader2 className="animate-spin w-7 h-7" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <Toaster />
    </div>
  );
};

export default TripGenerator;
