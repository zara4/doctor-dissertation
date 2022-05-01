import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Testimonials } from "../components/testimonials";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";
import { Pricing } from "../components/pricing";
import { Contactor } from "../components/con";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Landing = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Pricing data={landingPageData.Pricing}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Contactor data={landingPageData.Contact} />
    </div>
  );
};
export default Landing