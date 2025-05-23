import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="bg-bg-primary/85 mt-5 w-full items-center justify-between p-2 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.15),0_-2px_12px_-1px_rgba(0,0,0,0.15)] transition-transform duration-300 lg:absolute lg:top-5 lg:m-0 lg:flex">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Website logo"
          width={130}
          height={0}
          className="hidden w-full lg:block"
        />
      </Link>
      <nav className="*:text-secondary flex w-auto justify-between gap-x-7 pr-10 *:py-5 *:text-center *:text-base *:uppercase *:transition-colors *:duration-300 *:hover:text-[#7dd3fc] *:active:text-[#1a1a6b] xl:gap-x-10 xl:*:text-xl *:dark:hover:text-[#ffffff] *:dark:active:text-[#38bdf8]">
        <Link href="/about-us">about us</Link>
        <Link href="/curia">curia</Link>
        <Link href="/clergy">clergy</Link>
        <Link href="/pilgrimages">pilgrimages</Link>
        <Link href="/archdiocesan-institutions">archdiocesan institutions</Link>
        <Link href="/updates">updates</Link>
      </nav>
    </div>
  );
}
