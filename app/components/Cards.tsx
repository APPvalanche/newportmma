import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Cards() {
  return (
    <div className="mx-auto mt-8 w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-3xl font-bold sm:text-4xl mt-4">Cards</h1>
        <p className="text-2xl mt-2"> View our membership plans and pricing.</p>
      </div>
      <div className="sm:block lg:flex justify-evenly items-center w-full h-auto mt-4">
        <Card className="h-[350px] w-[300px] flex flex-col items-center justify-center m-6">
          <CardHeader className="bt">
            <CardTitle>Muay-Thai</CardTitle>
            <CardDescription>All Levels and Age</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </CardContent>
          <CardFooter className="flex justify-start">
            <Link href={"/muaythai"} className="hover:text-gray-300">
              More
              <span>
                <ArrowRight />
              </span>
            </Link>
          </CardFooter>
        </Card>
        <Card className="h-[350px] w-[300px] flex flex-col items-center justify-center m-6">
          <CardHeader className="bt">
            <CardTitle>Muay-Thai</CardTitle>
            <CardDescription>All Levels and Age</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </CardContent>
          <CardFooter className="flex justify-start">
            <Link href={"/muaythai"} className="hover:text-gray-300">
              More
              <span>
                <ArrowRight />
              </span>
            </Link>
          </CardFooter>
        </Card>
        <Card className="h-[350px] w-[300px] flex flex-col items-center justify-center m-6">
          <CardHeader className="bt">
            <CardTitle>Muay-Thai</CardTitle>
            <CardDescription>All Levels and Age</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </CardContent>
          <CardFooter className="flex justify-start">
            <Link href={"/muaythai"} className="hover:text-gray-300">
              More
              <span>
                <ArrowRight />
              </span>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
