"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: t.nav.about, to: "about" },
    { name: t.nav.services, to: "services" },
    { name: t.nav.products, to: "products" },
    { name: t.nav.news, to: "news" },
    { name: t.nav.contact, to: "contact" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="relative w-8 h-8">
              <Image
                src="/logo.svg"
                alt="IPINNOVATECH Logo"
                width={32}
                height={32}
                priority
              />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
              Ipinnovatech
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="nav-link"
                    activeClass="after:w-full text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4"
          >
            <ul className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="block py-2 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-100">
                <LanguageSwitcher />
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}