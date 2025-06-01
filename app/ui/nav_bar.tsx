import Link from "next/link";
import Image from "next/image";
import NavDropdown from "./nav_dropdown";

export default function NavBar() {
  const links = [
    { name: "about us", href: "/about-us" },
    { name: "curia", href: "/curia" },
    { name: "clergy", href: "/clergy" },
    { name: "pilgrimages", href: "/pilgrimages" },
    { name: "archdiocesan institutions", href: "/archdiocesan-institutions" },
    { name: "updates", href: "/updates" },
  ];
  return (
    <nav className="bg-bg-primary/85 mt-5 flex w-full items-center justify-around p-2 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.15),0_-2px_12px_-1px_rgba(0,0,0,0.15)] transition-transform duration-300 lg:justify-between">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Website logo"
          width={130}
          height={0}
          className="block w-full"
        />
      </Link>
      <NavDropdown>
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))}
      </NavDropdown>
    </nav>
  );
}
