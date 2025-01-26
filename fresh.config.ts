import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

import { handler as sessionMiddleware } from "./routes/middleware.tsx";

export default defineConfig({
  plugins: [tailwind()],
  port: 3000,
  middlewares: [sessionMiddleware]
});
