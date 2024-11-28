import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProductsSection } from "./sections/ProductsSection";
import { NewsSection } from "./sections/NewsSection";
import { FAQ } from "./contact/FAQ";
import { ContactSection } from "./sections/ContactSection";

export function Sections() {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <NewsSection />
      <FAQ />
      <ContactSection />
    </>
  );
}