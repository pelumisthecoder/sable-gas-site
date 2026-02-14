import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink, Card } from "@/components/ui";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <Container className="py-16 md:py-20">
      <Card className="p-6 md:p-8">
        <div className="max-w-[70ch]">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            404
          </div>
          <h1 className="mt-2 text-balance text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
            Page not found.
          </h1>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted md:text-base">
            The page you’re looking for doesn’t exist. If you were trying to place an order,
            you can do it in one tap.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/order" className="px-5 py-3">
              Order Gas
            </ButtonLink>
            <ButtonLink href="/" variant="outline" className="px-5 py-3">
              Go to home
            </ButtonLink>
          </div>

          <p className="mt-6 text-xs text-muted">
            Or contact us:{" "}
            <a
              className="text-fg underline decoration-border hover:decoration-fg"
              href={SITE.phoneTel}
            >
              {SITE.phoneDisplay}
            </a>{" "}
            ·{" "}
            <Link className="text-fg underline decoration-border hover:decoration-fg" href="/contact">
              Contact page
            </Link>
          </p>
        </div>
      </Card>
    </Container>
  );
}
