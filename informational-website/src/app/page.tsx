import Image from "next/image";
import FeaturedAcademies from "./components/FeaturedAcademies/page";
import Team from "./components/Team/page";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <HeroSection/>
        <FeaturedAcademies/>
        <Team/>

      </div>
    </main>
  );
}
