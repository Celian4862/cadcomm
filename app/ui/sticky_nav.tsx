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
      className={`sticky top-0 z-50 mt-6 flex items-center justify-between bg-[#CFF6FF]/40 p-4 transition-transform duration-300 dark:bg-[#1A2A32]/40 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <img src="logo.png" alt="Website logo" className="w-30" />
      <nav className="flex w-auto">
        <a href="">about us</a>
        <a href="">curia</a>
        <a href="">clergy</a>
        <a href="">pilgrimages</a>
        <a href="">archdiocesan institutions</a>
        <a href="">updates</a>
      </nav>
    </div>
  );
}
