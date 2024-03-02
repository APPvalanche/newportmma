import Image from "next/image";
import image5 from "../public/assets/image5.jpg";
import Container from "@/components/ui/container";
export default function Home() {
  return (
    <Container>
      <div className="grid items-place-center w-full">
        <Image src={image5} alt="Gym header image" placeholder="blur" />
        <div>
          <h1 className="text-4xl font-bold text-center">
            <span className="text-gray-900 dark:text-gray-100">
              Newport MMA
            </span>
          </h1>
          <h2 className="text-2xl font-bold text-center">
            <span className="text-gray-900 dark:text-gray-100">Gym</span>
          </h2>
        </div>
      </div>
    </Container>
  );
}
