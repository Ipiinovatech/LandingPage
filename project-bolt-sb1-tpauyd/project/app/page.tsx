import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Sections } from "@/components/Sections";
import { ChatBot } from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Sections />
      <ChatBot />
    </main>
  );
}