import SidebarNav from "@/ui/SidebarNav";

const links = [
  { href: "/about-us", label: "History Timeline" },
  { href: "/about-us/archbishop-of-cebu", label: "Archbishop of Cebu" },
  {
    href: "/about-us/archdioceses-coat-of-arms",
    label: "Archdiocese's Coat of Arms",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 lg:grid lg:grid-cols-4 lg:gap-5">
      <div>
        <SidebarNav title="About Us" links={links} />
      </div>
      <div className="lg:col-span-3">{children}</div>
    </div>
  );
}
