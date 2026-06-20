import type { ComponentProps, CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Button({ href, children, variant = "primary", className = "" }: { href?: ComponentProps<typeof Link>["href"]; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string }) {
  const classes = cn("button", `button-${variant}`, className);
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes}>{children}</button>;
}

export function Card({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return <section className={cn("card", className)} style={style}>{children}</section>;
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "good" | "warn" | "risk" | "neutral" }) {
  return <span className={`badge badge-${tone}`}><i />{children}</span>;
}

export function PageHeading({ eyebrow, title, children, action }: { eyebrow?: string; title: string; children?: ReactNode; action?: ReactNode }) {
  return <div className="page-heading"><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1>{children && <p>{children}</p>}</div>{action}</div>;
}

export function EmptyState({ title, text, action }: { title: string; text: string; action: string }) {
  return <div className="empty-state"><span>+</span><h3>{title}</h3><p>{text}</p><Button>{action}<ArrowUpRight size={16} /></Button></div>;
}
