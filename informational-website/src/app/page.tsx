import Image from "next/image";
import FeaturedAcademies from "./components/FeaturedAcademies/page";
import Team from "./components/Team/page";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Process from "./components/Process";
export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <HeroSection/>
        <FeaturedAcademies/>
        <Process/>
        <Team/>
        <Footer/>
      </div>
    </main>
  );
}
