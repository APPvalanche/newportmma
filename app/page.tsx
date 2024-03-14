"use client";
import Container from "@/components/ui/container";
import Header from "./components/Header";
import Cards from "./components/Cards";
export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <Cards />
      </Container>
    </main>
  );
}
