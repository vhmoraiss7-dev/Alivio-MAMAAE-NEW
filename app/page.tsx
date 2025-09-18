import { Header } from "@/components/header"
import { ComboHeroSection } from "@/components/combo-hero-section"
import { ComboProductsSection } from "@/components/combo-products-section"
import { ComboPricingSection } from "@/components/combo-pricing-section"
import { ComboTestimonialsSection } from "@/components/combo-testimonials-section"
import { ComboUrgencySection } from "@/components/combo-urgency-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ComboHeroSection />
      <ComboProductsSection />
      <ComboPricingSection />
      <ComboTestimonialsSection />
      <ComboUrgencySection />
      <Footer />
    </main>
  )
}
