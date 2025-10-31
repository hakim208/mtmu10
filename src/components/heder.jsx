"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Effect барои тағйири ранги header ҳангоми scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "home", label: "Асосӣ" },
    { id: "achievements", label: "Ифтихорот" },
    { id: "activities", label: "Фаъолиятҳо" },
    { id: "teachers", label: "Муаллимон" },
    { id: "contact", label: "Тамос" },
  ];

  return (
    <header className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-4 shadow-2xl sticky top-0 z-50 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Logo ва унвон */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent drop-shadow-lg">
          МУАССИСАИ №10
        </h1>
      </div>

      {/* Навигация */}
      <nav className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6">
        {[
          { id: 'home', label: 'Асосӣ' },
          { id: 'achievements', label: 'Ифтихорот' },
          { id: 'activities', label: 'Фаъолиятҳо' },
          { id: 'teachers', label: 'Муаллимон' },
          { id: 'contact', label: 'Тамос' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative text-white font-semibold px-3 py-2 rounded-full hover:bg-white/20 transition-all duration-300 group"
          >
            {item.label}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 group-hover:left-1/2 transform -translate-x-1/2"></span>
          </button>
        ))}
      </nav>
    </div>
  </header>

  );
}
