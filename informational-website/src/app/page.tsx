import FeaturedAcademies from "./components/FeaturedAcademies/page";
import Team from "./components/Team/page";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Process from "./components/Process";
export default function Page() {
    return (
        <div>
            <Navbar />
            <section id="home" style={{ scrollMarginTop: '80px' }}>
                <HeroSection />
            </section>
            <section id="academies" style={{ scrollMarginTop: '120px' }}>
                <FeaturedAcademies />
            </section>
            <section id="services" style={{ scrollMarginTop: '100px' }}>
                <Process />
            </section>
            <section id="team" style={{ scrollMarginTop: '100px' }}>
                <Team />
            </section>
            <section id="contacts" style={{ scrollMarginTop: '100px' }}>
                <Footer />
            </section>
        </div>
    );
}











