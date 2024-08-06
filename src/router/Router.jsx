import Home from "../pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTrip from "../pages/CreateTrip/CreateTrip";
import Header from "../components/custom/Header";
import userContext from "../context/userContext";
import { useState } from "react";
import ViewTrips from "../pages/ViewTrips/ViewTrips";
const Router = () => {
  const [user, setUser] = useState([]);
  const [showLoginBox, setShowLoginBox] = useState(false);
  return (
    <BrowserRouter>
      <userContext.Provider
        value={{ user, setUser, showLoginBox, setShowLoginBox }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-trip" element={<CreateTrip />} />
          <Route path="/view-trips/:id" element={<ViewTrips />} />
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
