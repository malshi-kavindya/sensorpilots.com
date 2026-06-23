import HeroSection from '../components/sections/HeroSection';
import TrustBar from '../components/sections/TrustBar';
import PlatformOverview from '../components/sections/PlatformOverview';
import IndustrialProblem from '../components/sections/IndustrialProblem';
import CommandCenterPreview from '../components/sections/CommandCenterPreview';
import HowItWorks from '../components/sections/HowItWorks';
import IndustryUseCases from '../components/sections/IndustryUseCases';
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
      <div id="about">
        <StorySection />
      </div>
      <div id="vision-mission">
        <MissionVision />
      </div>
      <IndustrialProblem />
      
      <CommandCenterPreview />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="use-cases">
        <IndustryUseCases />
      </div>
      <div id="features">
        <FeatureGrid />
        <PlatformSpecs />
      </div>
      
      <PricingTiers />
     
      <BlogContent />
      <Testimonials />
      <div id="resources">
        <FinalCTA />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
