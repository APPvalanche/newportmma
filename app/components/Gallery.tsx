import Image from "next/image";
import image1 from "../../public/assets/image1.jpg";
import image2 from "../../public/assets/image2.jpg";
import image3 from "../../public/assets/image3.jpg";
import image4 from "../../public/assets/image4.jpg";

export default function Gallery() {
  return (
    <div className="flex flex-col w-full h-full mx-auto mt-8 sm:mt-6">
      <div className="">
        <h1 className="text-3xl font-bold sm:text-4xl">Gallery</h1>
        <p className="mt-1 max-w-2xl text-xl">
          This is a gallery of my projects.
        </p>
      </div>
      <div className="mt-8 w-full">
        <div
          style={{
            display: "grid",
            gridGap: "8px",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto))",
          }}
        >
          <div style={{ position: "relative", height: "400px" }}>
            <Image
              src={image1}
              alt="Gym Image1"
              fill
              sizes="100vw"
              placeholder="blur"
              className="object-cover brightness-50 hover:brightness-100"
            />
          </div>
          <div style={{ position: "relative", height: "400px" }}>
            <Image
              src={image2}
              alt="Gym Image2"
              fill
              sizes="100vw"
              placeholder="blur"
              className="object-cover brightness-50 hover:brightness-100"
            />
          </div>
          <div style={{ position: "relative", height: "400px" }}>
            <Image
              src={image3}
              alt="Gym Image3"
              fill
              sizes="100vw"
              placeholder="blur"
              className="object-cover brightness-50 hover:brightness-100"
            />
          </div>
          <div style={{ position: "relative", height: "400px" }}>
            <Image
              src={image4}
              alt="Gym Image4"
              fill
              sizes="100vw"
              placeholder="blur"
              className="object-cover brightness-50 hover:brightness-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
