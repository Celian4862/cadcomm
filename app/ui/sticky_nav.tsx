"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyNav() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-transform duration-300 bg-[#CFF6FF]/40 dark:bg-[#1A2A32]/40 p-4 flex items-center justify-between ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <img src="logo.png" alt="Website logo" className="w-30" />
      <nav className="flex w-auto">
        <a
          href="#home"
          className="mx-2 text-gray-800 hover:text-cyan-800 dark:text-white dark:hover:text-cyan-200"
        >
          Home
        </a>
        <a
          href="#about"
          className="mx-2 text-gray-800 hover:text-cyan-800 dark:text-white dark:hover:text-cyan-200"
        >
          About
        </a>
        <a
          href="#services"
          className="mx-2 text-gray-800 hover:text-cyan-800 dark:text-white dark:hover:text-cyan-200"
        >
          Services
        </a>
        <a
          href="#contact"
          className="mx-2 text-gray-800 hover:text-cyan-800 dark:text-white dark:hover:text-cyan-200"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
