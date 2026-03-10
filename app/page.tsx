import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { TestosteroneChart } from "@/components/sections/testosterone-chart";
import { ModelGallerySection } from "@/components/sections/model-gallery";
import { AuthorSection } from "@/components/sections/author-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col bg-black min-h-screen">
      <HeroSection />
      <ProblemSection />
      <TestosteroneChart />
      <ModelGallerySection />
      <AuthorSection />
      <CtaSection />
      <Footer />
    </main>
  );
}