"use client";
import Container from "@/components/ui/container";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Gallery from "./components/Gallery";
import Carousel from "./components/Carousel";
export default function Home() {
  return (
    <main>
      <Header />
      <Carousel />
      <Container>
        <Cards />
        <Gallery />
      </Container>
    </main>
  );
}
