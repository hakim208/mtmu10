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
      {/* <Heder1/> */}
      <Header />
      <main className="">
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
