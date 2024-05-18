import LandingPage from "@/components/landing";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black w-full relative text-white">
      <Navbar />
      <div className="relative h-screen">
        {" "}
        <LandingPage />
      </div>
    </div>
  );
}
