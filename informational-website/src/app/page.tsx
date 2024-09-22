import FeaturedAcademies from "./components/FeaturedAcademies/page";
import Team from "./components/Team/page";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Process from "./components/Process";

export default function Page() {
    return (
        <>
            <Navbar />
            <section id="home">
                <HeroSection />
            </section>

            <section id="academies">
                <FeaturedAcademies />
            </section>

            <section id="services">
                <Process />
            </section>

            <section id="team">
                <Team />
            </section>

            <section id="contacts">
                <Footer />
            </section>
        </>
    );
}
