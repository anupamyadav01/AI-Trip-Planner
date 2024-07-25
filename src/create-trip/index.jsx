import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "@/constants/options";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { chatSession } from "@/Gemini/AIModel";

const CreateTrip = () => {
  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleOnGenerateTrip = async () => {
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
    const FINAL_PROMPT = AI_PROMPT.replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{location}", formData?.location)
      .replace("{noOfDays}", formData?.noOfDays)
      .replace("{noOfDays}", formData?.noOfDays);

    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
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
        <Button onClick={handleOnGenerateTrip}>Generate Trip</Button>
      </div>

      <Toaster />
    </div>
  );
};

export default CreateTrip;
