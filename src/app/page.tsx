import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MasterPlan from "@/components/MasterPlan";
import ProjectHighlights from "@/components/ProjectHighlights";
import PrimeLocation from "@/components/PrimeLocation";
import VisionOfTomorrow from "@/components/VisionOfTomorrow";
import SiteIndex from "@/components/SiteIndex";
import InvestmentPlan from "@/components/InvestmentPlan";
import Gallery from "@/components/Gallery";
import VisitUs from "@/components/VisitUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <MasterPlan />
      <ProjectHighlights />
      <PrimeLocation />
      <VisionOfTomorrow />
      <SiteIndex />
      <InvestmentPlan />
      <Gallery />
      <VisitUs />
    </main>
  );
}
