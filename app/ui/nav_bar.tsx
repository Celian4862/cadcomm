export default function NavBar() {
  return (
    <div className="absolute top-5 z-50 flex w-full items-center justify-between bg-[#CFF6FF]/40 p-2 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.15),0_-2px_12px_-1px_rgba(0,0,0,0.15)] transition-transform duration-300 dark:bg-[#1A2A32]/40">
      <a href="/">
        <img src="logo.png" alt="Website logo" className="w-60" />
      </a>
      <nav className="flex w-auto justify-around gap-x-15 pr-10 *:text-[1.2rem] *:text-[#00033d] *:uppercase *:transition-colors *:duration-300 *:hover:text-[#7dd3fc] *:active:text-[#1a1a6b] *:dark:text-[#7dd3fc] *:dark:hover:text-[#ffffff] *:dark:active:text-[#38bdf8]">
        <a href="/about-us">about us</a>
        <a href="/curia">curia</a>
        <a href="/clergy">clergy</a>
        <a href="/pilgrimages">pilgrimages</a>
        <a href="/archdiocesan-institutions">archdiocesan institutions</a>
        <a href="/updates">updates</a>
      </nav>
    </div>
  );
}
