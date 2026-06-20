import Link from "next/link";
export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={`logo ${inverse ? "logo-inverse" : ""}`} aria-label="FlowPilot home">
    <span className="logo-mark"><i /><i /><i /></span><span>FlowPilot</span>
  </Link>;
}
