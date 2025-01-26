import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  const cookies = req.headers.get("cookie");
  const session = cookies?.split("; ").find((c) => c.startsWith("session="))?.split("=")[1];

  if (session) {
    ctx.state.session = session;
  }

  return await ctx.next();
}