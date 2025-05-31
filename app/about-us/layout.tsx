import Link from "next/link";
import SidebarNav from "../ui/sidebar_nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 lg:grid lg:grid-cols-4 lg:gap-5">
      <div>
        <SidebarNav />
      </div>
      <div className="lg:col-span-3">{children}</div>
    </div>
  );
}
