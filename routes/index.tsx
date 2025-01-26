import { useSignal } from "@preact/signals";
import { h } from "preact";
import { HandlerContext, PageProps } from "$fresh/server.ts";

export const handler = (_req: Request, ctx: HandlerContext) => {
  const session = _req.headers.get("Cookie")?.split("; ").find(row => row.startsWith("session="))?.split("=")[1];
  return ctx.render({ session });
};

export default function HomePage({ data }: PageProps) {
  return (
    <div>
      <h1>Welcome to the Personal Expenses Tracker</h1>
      {data.session ? (
        <p>Logged in as: {data.session}</p>
      ) : (
        <p>You are not logged in. <a href="/login">Login</a></p>
      )}
    </div>
  );
}