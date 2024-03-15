
import Image from "next/image";
import { useEffect, useState } from "react";

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
        <div className="absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c] rounded-lg">
          <h2 className="text-4xl">Training day</h2>
          <p className="text-2xl mt-4">Put the work in!</p>
        </div>
      </div>
    </main>
  );
}
