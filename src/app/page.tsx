import Hero from "@/components/home/Hero";
import AboutTeaser from "@/components/home/AboutTeaser";
import MenuTeaser from "@/components/home/MenuTeaser";
import LocationTeaser from "@/components/home/LocationTeaser";
import GalleryTeaser from "@/components/home/GalleryTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <MenuTeaser />
      <LocationTeaser />
      <GalleryTeaser />
    </>
  );
}
