"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  const pathname = usePathname();
  return (
    <aside
      className="bg-bg-primary/40 hidden p-5 lg:block"
      aria-label="Mini navigation"
    >
      <h2 className="text-tertiary m-5 mt-0 text-3xl font-black uppercase">
        {title}
      </h2>
      <div className="flex flex-col justify-between gap-2 font-light *:rounded-xl *:px-5 *:py-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-bg-primary bg-tertiary"
                : "bg-bg-primary text-secondary border border-solid border-(--foreground)/20"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
