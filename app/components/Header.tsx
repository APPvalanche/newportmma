import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex relative justify-center items-center w-full min-h-screen">
      <div className="absolute w-full h-screen top-0 left-0 -z-50 brightness-50">
        <Image
          src="/assets/image5.jpg"
          alt="hero image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex1 items-center justify-center">
        <div className="max-w-[6000px]">
          <h1 className="text-6xl font-bold text-center">
            <span className="text-gray-100 dark:text-gray-100">
              Pushing the limits every day!
            </span>
          </h1>
          <h2 className="text-2xl text-center py-6">
            <span className="text-gray-100 dark:text-gray-100">
              Visit our gym and join us today!
            </span>
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
