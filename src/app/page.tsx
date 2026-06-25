import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpCommingWebnar from "@/components/UpCommingWebnar";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeatureSection/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpCommingWebnar/>
      <Instructors/>
     </main>
  );
}
