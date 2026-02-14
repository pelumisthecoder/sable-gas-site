import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Container } from "./Container";
import { ButtonLink } from "./ui";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-8 w-8 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
        <Image
          src="/brand/sables.png"   // change to /brand/Sables.png if yours is PNG
          alt="Sable Gas & Energy"
          fill
          className="object-contain p-1"
          priority
        />
      </div>

      <span className="text-sm font-semibold tracking-[-0.02em]">
        {SITE.brandName}
      </span>
    </div>
  );
}


export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60">
          <span className="sr-only">{SITE.brandName}</span>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {SITE.nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/order" className="hidden sm:inline-flex">
            Order Gas
          </ButtonLink>
          <ButtonLink href="/order" className="sm:hidden">
            Order
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
