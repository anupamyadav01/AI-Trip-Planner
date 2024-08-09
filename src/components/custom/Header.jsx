import { Button } from "../ui/button";
import { useContext } from "react";
import userContext from "../../context/userContext";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  console.log(users);
  const { setShowLoginBox } = useContext(userContext);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="w-full sticky top-0 bg-white shadow-md">
      <div className="max-w-[1240px] mx-auto flex justify-between py-2 px-10">
        <img src="/logo.svg" alt="" />
        {users ? (
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger>
                {" "}
                <h2 className="text-gray-600"> Hii, {users?.displayName} </h2>
              </PopoverTrigger>
              <PopoverContent>
                <Button className=" bg-red-500" onClick={handleLogOut}>
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
            <Link to="/my-trips">
              <Button className="ml-auto">My Trips</Button>
            </Link>
          </div>
        ) : (
          <Button
            className="ml-auto"
            onClick={() => {
              console.log("clicked");

              setShowLoginBox(true);
            }}
          >
            Login
          </Button>
        )}
      </div>
      <Register />
    </div>
  );
};

export default Header;
