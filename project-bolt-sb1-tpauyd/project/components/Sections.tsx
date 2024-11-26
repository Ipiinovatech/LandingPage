import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProductsSection } from "./sections/ProductsSection";
import { ClientsSection } from "./sections/ClientsSection";
import { BlogSection } from "./sections/BlogSection";
import { ContactSection } from "./sections/ContactSection";

export function Sections() {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ClientsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}