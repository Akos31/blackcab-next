import Hero from "@/components/home/Hero";
import AboutTeaser from "@/components/home/AboutTeaser";
import MenuTeaser from "@/components/home/MenuTeaser";
import LocationTeaser from "@/components/home/LocationTeaser";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <MenuTeaser />
      <Testimonials />
      <LocationTeaser />
      <GalleryTeaser />
    </>
  );
}
