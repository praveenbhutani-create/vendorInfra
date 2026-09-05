import { createFileRoute } from "@tanstack/react-router";

import { jsonResponse } from "@/lib/api-response.server";

/* Fetching the stats API straight from the browser broke on the live site:
   Hostinger sends `Content-Security-Policy: upgrade-insecure-requests`, so
   the old `http://3.110.208.157/...` call was upgraded to https:// against
   the bare IP, which fails TLS validation (the cert is for
   admin.vendorinfra.com). Going through the hostname over HTTPS server-side
   avoids that and lets us add a short cache. */
const UPSTREAM_URL = "https://admin.vendorinfra.com/api/vendor/getPlatformStats";

export const Route = createFileRoute("/api/platform-stats")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const upstream = await fetch(UPSTREAM_URL, {
            headers: { accept: "application/json" },
            signal: AbortSignal.timeout(8000),
          });

          if (!upstream.ok) {
            throw new Error(`Upstream responded ${upstream.status}`);
          }

          const json = await upstream.json();

          return new Response(JSON.stringify(json), {
            status: 200,
            headers: {
              "content-type": "application/json; charset=utf-8",
              // Short cache so repeat visitors don't hit the upstream on every load.
              "cache-control": "public, max-age=300, s-maxage=300",
            },
          });
        } catch (error) {
          console.error("Failed to fetch platform stats upstream:", error);
          // Home falls back to its static values when `success` isn't true.
          return jsonResponse({ success: false, error: "Unable to load platform stats." }, 502);
        }
      },
    },
  },
});
