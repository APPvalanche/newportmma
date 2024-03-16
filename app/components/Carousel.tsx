import Image from "next/image";
import {
  Dumbbell,
  Activity,
  Brain,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Carousel() {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    let int = setInterval(() => {
      setPage((prev) => (prev + 1 >= 5 ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(int);
  }, []);

  return (
    <main className="relative flex flex-col w-screen h-[calc(100vh-70px)] items-center justify-center">
      <div className="absolute w-full h-full">
        <Image
          src={`/assets/image${page}.jpg`}
          alt="Carousel image1"
          fill
          sizes="100wv"
          className="h-full w-full object-cover object-center opacity-50"
        />
        <div className="absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c] rounded-lg flex flex-col items-center">
          <h2 className="text-2xl">
            <Link href="/" className="hover:text-green-600">
              Sign Up Today!
            </Link>
          </h2>
          <div className="flex flex-row items-center gap-8">
            <Dumbbell className="mt-4 h-7 w-7 text-green-600" />
            <Activity className="mt-4 h-7 w-7 text-green-600" />
            <Brain className="mt-4 h-7 w-7 text-green-600" />
          </div>
        </div>
      </div> 

        <div className="static z-10 font-semibold">
          <ArrowLeft className="absolute inline-block w-8 h-8 left-4 top-1/2 cursor-pointer transition-transform hover:-translate-x-1 motion-reduced:transform-none hover:text-green-500"/>

          <ArrowRight className="absolute inline-block w-8 h-8 right-6 top-1/2 cursor-pointer transition-transform hover:translate-x-1 motion-reduced:transform-none hover:text-green-500"/>
        </div>
    </main>
  );
}
