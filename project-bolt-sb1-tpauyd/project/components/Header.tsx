"use client";

import { Brain } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.about, to: "about" },
    { name: t.nav.services, to: "services" },
    { name: t.nav.products, to: "products" },
    { name: t.nav.clients, to: "clients" },
    { name: t.nav.blog, to: "blog" },
    { name: t.nav.contact, to: "contact" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
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
            <Brain className="h-8 w-8 text-[var(--primary-blue)]" />
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
              Ipinnovatech
            </span>
          </Link>

          {/* Navigation */}
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
                    activeClass="after:w-full text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section: Language Switcher */}
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </motion.header>
  );
}