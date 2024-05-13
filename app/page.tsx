import HeroBanner from "./landingpage/HeroBanner";
import Companies from "./landingpage/Companies";
import Services from "./landingpage/Services";
import JoinFiverr from "./landingpage/JoinFiver";
import Everything from "./landingpage/Everything";
import PopulaireService from "./landingpage/PopulaireService";
import Fiverbuisnes from "./landingpage/Fiverbuisnes";
import LandingPageNavbar from "./landingpage/landingpagenavbar";

export default function Home() {
  return (
    <div>
      <LandingPageNavbar />

      <HeroBanner />
      {/* <Companies /> */}
      <PopulaireService />
      <Everything />
      <Services />
      {/* <Fiverbuisnes />
      <JoinFiverr /> */}
    </div>
  );
}
