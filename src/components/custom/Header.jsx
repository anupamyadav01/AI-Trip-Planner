import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="w-full sticky top-0 bg-white shadow-md">
      <div className="max-w-[1240px] mx-auto flex py-2 px-10">
        <img src="/logo.svg" alt="" />
        <Button className="ml-auto bg-red-500 hover:bg-red-400 duration-300">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Header;
