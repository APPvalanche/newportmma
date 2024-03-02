import Image from "next/image";
import image5 from "../public/assets/image5.jpg";
import Container from "@/components/ui/container";
export default function Home() {
  return (
    <Container>
      <div className="grid items-place-center w-full h-screen bg-[url('../public/assets/image5.jpg')] bg-cover bg-center">
        <div className="flex flex1 items-center justify-center backdrop-brightness-50">
          <div className="max-w-[6000px]">
            <h1 className="text-6xl font-bold text-center my-4">
              <span className="text-gray-900 dark:text-gray-100">
                Pushing limits every day!
              </span>
            </h1>
            <h2 className="text-2xl font-bold text-center">
              <span className="text-gray-900 dark:text-gray-100">Gym</span>
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
}
