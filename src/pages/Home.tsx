import HeroSection from '../components/sections/HeroSection';
import TrustBar from '../components/sections/TrustBar';
import PlatformOverview from '../components/sections/PlatformOverview';
import IndustrialProblem from '../components/sections/IndustrialProblem';
import SolutionSection from '../components/sections/SolutionSection';
import CommandCenterPreview from '../components/sections/CommandCenterPreview';
import HowItWorks from '../components/sections/HowItWorks';
import IndustryUseCases from '../components/sections/IndustryUseCases';
import ROIMetrics from '../components/sections/ROIMetrics';
import Testimonials from '../components/sections/Testimonials';
import BlogContent from '../components/sections/BlogContent';
import PricingTiers from '../components/sections/PricingTiers';
import FinalCTA from '../components/sections/FinalCTA';
import FeatureGrid from '../components/sections/FeatureGrid';
import PlatformSpecs from '../components/sections/PlatformSpecs';
import NewsletterCTA from '../components/sections/NewsletterCTA';
import StorySection from '../components/sections/StorySection';
import MissionVision from '../components/sections/MissionVision';
import ContactForm from '../components/sections/ContactForm';


/* ────────────────────────────────────────────────
   HOME PAGE EXPORT
   ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <PlatformOverview />
      <IndustrialProblem />
      <SolutionSection />
      <CommandCenterPreview />
      <HowItWorks />
      <IndustryUseCases />
      <ROIMetrics />
      <Testimonials />
      <BlogContent />
      <PricingTiers />
      <FinalCTA />
      <div id="features">
        <FeatureGrid />
        <PlatformSpecs />
      </div>
      <div id="resources">
        <NewsletterCTA />
      </div>
      <div id="about">
        <StorySection />
        <MissionVision />  
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
