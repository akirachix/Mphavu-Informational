import Image from "next/image";
import FeaturedAcademies from "./components/FeaturedAcademies/page";
import Team from "./components/Team/page";
export default function Home() {
  return (
    <main>
      <div>
        <FeaturedAcademies/>
        <Team/>
      </div>
    </main>
  );
}
