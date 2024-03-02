import Image from "next/image";
import image5 from "../public/assets/image5.jpg";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="grid items-place-center w-full h-screen bg-[url('../public/assets/image5.jpg')] bg-cover bg-center">
      <div className="flex flex1 items-center justify-center backdrop-brightness-50">
        <div className="max-w-[6000px]">
          <h1 className="text-6xl font-bold text-center">
            <span className="text-gray-100 dark:text-gray-100">
              Pushing the limits every day!
            </span>
          </h1>
          <h2 className="text-2xl text-center py-6">
            <span className="text-gray-100 dark:text-gray-100">Visit our gym and join us today!</span>
          </h2>
          <div className="">
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline">Sign In!</Button>
              <Button>Sign Up!</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
