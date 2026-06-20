"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import { Logo } from "./logo";
import { navItems } from "@/lib/demo-data";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div className="app-frame">
    <aside className="sidebar">
      <Logo inverse />
      <div className="org-chip"><span>NL</span><div><b>Northline Studio</b><small>Agency workspace</small></div><ChevronDown size={14} /></div>
      <nav aria-label="Application navigation">
        {navItems.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}{label === "Invoices" && <em>2</em>}</Link>)}
      </nav>
      <div className="sidebar-footer"><div className="mini-avatar">AH</div><div><b>Ahmed Hakeem</b><small>Owner</small></div></div>
    </aside>
    <div className="app-main">
      <header className="app-topbar"><button className="mobile-menu" aria-label="Open menu"><Menu /></button><div className="search"><Search size={16} /><span>Search anything</span><kbd>⌘ K</kbd></div><button aria-label="Notifications" className="icon-button"><Bell size={18} /><i /></button><span className="synced"><i />Synced 2m ago</span></header>
      <main className="app-content">{children}</main>
    </div>
  </div>;
}
