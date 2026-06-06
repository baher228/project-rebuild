import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <>
      <SiteNav />
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--forest)", padding: "120px 24px" }}>
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>404 — Not found</div>
          <h1 className="section-title" style={{ fontSize: "clamp(48px,5vw,72px)", color: "var(--linen)", marginBottom: 16 }}>
            This page <em style={{ fontStyle: "italic", color: "var(--gold)" }}>doesn't exist.</em>
          </h1>
          <p style={{ color: "rgba(232,226,213,.55)", fontFamily: "var(--font-serif)", fontSize: 17, marginBottom: 36 }}>
            The page you were looking for has moved, or was never here.
          </p>
          <Link to="/" className="btn-gold">Return home</Link>
        </div>
      </div>
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--forest)", padding: "120px 24px" }}>
      <div style={{ maxWidth: 480, textAlign: "center" }}>
        <h1 className="section-title" style={{ fontSize: 32, color: "var(--linen)", marginBottom: 16 }}>This page didn't load</h1>
        <p style={{ color: "rgba(232,226,213,.55)", fontFamily: "var(--font-serif)", fontSize: 16, marginBottom: 28 }}>
          Something went wrong. You can try again or head home.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            className="btn-gold"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home →</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ardivia — Bespoke Design & Build, London" },
      { name: "description", content: "Ardivia is a London design and build studio creating exceptional residential and commercial architecture for discerning clients." },
      { name: "author", content: "Ardivia" },
      { property: "og:title", content: "Ardivia — Bespoke Design & Build, London" },
      { property: "og:description", content: "Architecture that endures. Bespoke design and build for those who demand the extraordinary." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <Outlet />
      <SiteFooter />
    </QueryClientProvider>
  );
}
