import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";
import Instructors from "@/components/ui/Instructors";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonial />
      <UpcommingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
