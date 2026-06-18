import HeroSection from '../components/sections/HeroSection';
import TrustBar from '../components/sections/TrustBar';
import PlatformOverview from '../components/sections/PlatformOverview';
import IndustrialProblem from '../components/sections/IndustrialProblem';
import SolutionSection from '../components/sections/SolutionSection';
import CommandCenterPreview from '../components/sections/CommandCenterPreview';
import HowItWorks from '../components/sections/HowItWorks';
import IndustrialCapabilities from '../components/sections/IndustrialCapabilities';
import IndustryUseCases from '../components/sections/IndustryUseCases';
import ROIMetrics from '../components/sections/ROIMetrics';
import Testimonials from '../components/sections/Testimonials';
import BlogContent from '../components/sections/BlogContent';
import PricingTiers from '../components/sections/PricingTiers';
import PricingModels from '../components/sections/PricingModels';
import PricingFAQ from '../components/sections/PricingFAQ';
import PricingCTA from '../components/sections/PricingCTA';
import FinalCTA from '../components/sections/FinalCTA';
import FeatureGrid from '../components/sections/FeatureGrid';
import IntegrationFeatures from '../components/sections/IntegrationFeatures';
import PlatformSpecs from '../components/sections/PlatformSpecs';
import ResourceGrid from '../components/sections/ResourceGrid';
import NewsletterCTA from '../components/sections/NewsletterCTA';
import StorySection from '../components/sections/StorySection';
import MissionVision from '../components/sections/MissionVision';
import LeadershipSection from '../components/sections/LeadershipSection';
import Timeline from '../components/sections/Timeline';
import OpenPositions from '../components/sections/OpenPositions';
import BenefitsSection from '../components/sections/BenefitsSection';
import ContactForm from '../components/sections/ContactForm';
import SupportChannels from '../components/sections/SupportChannels';

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
      <IndustrialCapabilities />
      <IndustryUseCases />
      <ROIMetrics />
      <Testimonials />
      <BlogContent />
      <PricingTiers />
      <PricingModels />
      <PricingFAQ />
      <PricingCTA />
      <FinalCTA />
      <div id="features">
        <FeatureGrid />
        <IntegrationFeatures />
        <PlatformSpecs />
      </div>
      <div id="resources">
        <ResourceGrid />
        <NewsletterCTA />
      </div>
      <div id="about">
        <StorySection />
        <MissionVision />
        <LeadershipSection />
        <Timeline />
      </div>
      <div id="careers">
        <OpenPositions />
        <BenefitsSection />
      </div>
      <div id="contact">
        <ContactForm />
        <SupportChannels />
      </div>
    </div>
  );
}
