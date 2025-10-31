import Achievements from "@/components/Achievements";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";
import Header from "@/components/heder";
import Hero from "@/components/Hero";
import { default as ScrollToTopButton } from "@/components/ScrollToTopButton";
import Teachers from "@/components/Teachers";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="w-11/12 mx-auto my-8 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20">
        <Hero />
        <Achievements />
        <Activities />
        <Teachers />
      </main>

      <Footer />

      {/* 📌 Тугмаи баргаштан ба боло */}
      <ScrollToTopButton />
    </div>
  )
}
