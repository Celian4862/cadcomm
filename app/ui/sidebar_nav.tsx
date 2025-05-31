"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about-us/history-timeline", label: "History Timeline" },
  { href: "/about-us/archbishop-of-cebu", label: "Archbishop of Cebu" },
  {
    href: "/about-us/archdioceses-coat-of-arms",
    label: "Archdiocese's Coat of Arms",
  },
];

export default function SidebarNav() {
  const pathname = usePathname();
  return (
    <aside
      className="bg-bg-primary/40 hidden p-5 lg:block"
      aria-label="Mini navigation"
    >
      <h2 className="text-tertiary m-5 mt-0 text-3xl font-bold uppercase">
        About Us
      </h2>
      <div className="flex flex-col justify-between gap-2 font-light *:rounded-xl *:px-5 *:py-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-bg-primary bg-tertiary"
                : "bg-bg-primary text-secondary border border-solid border-black/20"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
