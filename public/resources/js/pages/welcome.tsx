// import AboutSection from '@/components/sections/about';
import FAQSection from '@/components/sections/faq';
import FinalCTA from '@/components/sections/final-cta';
import HeroSection from '@/components/sections/hero';
import ResultsSection from '@/components/sections/results';
// import ServicesSection from '@/components/sections/services';
import ServicesSnapshotSection from '@/components/sections/services-snapshots';
import SocialProofSection from '@/components/sections/social-proof';
import SolutionSection from '@/components/sections/solution';
import VideoExplainerSection from '@/components/sections/video-explainer';
import WhyTrustUsSection from '@/components/sections/why-trust-us';
import WhyWebsitesFail from '@/components/sections/why-websites-fail';
import GuestLayout from '@/layouts/guest-layout';

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;

    return (
        <>
            <GuestLayout>
                <HeroSection />
                <SocialProofSection />
                <WhyWebsitesFail />
                <SolutionSection />
                <ResultsSection />
                <ServicesSnapshotSection />
                <VideoExplainerSection />
                <WhyTrustUsSection />
                <FAQSection />
                <FinalCTA />
            </GuestLayout>
        </>
    );
}
