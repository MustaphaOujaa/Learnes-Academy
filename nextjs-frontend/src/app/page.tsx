import Hero from "@/components/Hero/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import NavigationPages from "@/components/NavigationPages/NavigationPages";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQ />
      <NavigationPages />
    </main>
  );
}
