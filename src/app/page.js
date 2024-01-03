import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export const metadata = {
  title: "Perfect Pizza Home",
  description: "Perfect Pizza app",
};

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
    </main>
  );
}
