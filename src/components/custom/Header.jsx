import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex py-3">
      <img src="/logo.svg" alt="" />
      <Button className="ml-auto bg-red-500 hover:bg-red-400 duration-300">
        Sign Up
      </Button>
    </div>
  );
};

export default Header;
