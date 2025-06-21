"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function NavDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Always show nav on large screens */}
      <div className="*:text-secondary hidden w-auto justify-between gap-x-7 pr-10 *:py-5 *:text-center *:text-base *:uppercase *:transition-colors *:duration-300 *:hover:text-[#7dd3fc] *:active:text-[#1a1a6b] lg:flex xl:gap-x-10 xl:*:text-xl *:dark:hover:text-white *:dark:active:text-[#38bdf8]">
        {children}
      </div>
      <div className="relative lg:hidden">
        {/* Hamburger icon only on small screens */}
        <FaBars
          size={23}
          className="block lg:hidden"
          onClick={() => setIsOpen(true)}
        />
        {/* Overlay and dropdown for mobile */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-0 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <div className="bg-bg-primary/90 *:text-secondary *:active:text-[#1a1a6b]lg:hidden absolute top-10 right-0 z-1 flex flex-col justify-between px-10 *:py-5 *:text-center *:text-base *:uppercase *:transition-colors *:duration-300 *:hover:text-[#7dd3fc] *:dark:hover:text-white *:dark:active:text-[#38bdf8]">
              {children}
            </div>
          </>
        )}
      </div>
    </>
  );
}
