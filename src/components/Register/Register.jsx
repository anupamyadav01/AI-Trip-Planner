import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../utils/firebase/index";
import { useContext } from "react";
import userContext from "../../context/userContext";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Register = () => {
  const provider = new GoogleAuthProvider();
  const { user, showLoginBox, setShowLoginBox } = useContext(userContext);
  console.log(user);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));

      // setUser(user);
      setShowLoginBox(false);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Dialog open={showLoginBox ? true : false}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className=" w-full max-w-md p-8 space-y-8 bg-white">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder=""
                      className="w-full px-3 py-2 text-base mt-1 border border-gray-300 rounded-md shadow-sm outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-lg  font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="w-full px-3 py-2 text-base mt-1 border border-gray-300 rounded-md shadow-sm outline-none sm:text-sm"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="flex items-center justify-center w-full px-4 py-2 space-x-2 border rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                  >
                    <FcGoogle className="w-7 h-7" />
                    <span className="text-lg font-medium text-gray-700">
                      Sign in with Google
                    </span>
                  </button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Register;
