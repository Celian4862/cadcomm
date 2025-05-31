import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 lg:grid lg:grid-cols-4 lg:gap-5">
      <div>
        <aside
          className="bg-bg-primary/40 hidden p-5 lg:block"
          aria-label="Mini navigation"
        >
          <h2 className="text-tertiary m-5 mt-0 text-3xl font-bold uppercase">
            About Us
          </h2>
          <div className="flex flex-col justify-between gap-2 *:rounded-xl *:px-5 *:py-2">
            <Link
              href="/about-us/history-timeline"
              className="text-bg-primary bg-tertiary"
            >
              History Timeline
            </Link>
            <Link
              href="/about-us/archbishop-of-cebu"
              className="bg-bg-primary text-secondary"
            >
              Archbishop of Cebu
            </Link>
            <Link
              href="/about-us/archdioceses-coat-of-arms"
              className="bg-bg-primary text-secondary"
            >
              Archdiocese&apos;s Coat of Arms
            </Link>
          </div>
        </aside>
      </div>
      <div className="lg:col-span-3">{children}</div>
    </div>
  );
}
