import { HandlerContext, PageProps } from "$fresh/server.ts";
import AddTransaction from "../islands/AddTransaction.tsx";

export const handler = (_req: Request, ctx: HandlerContext) => {
  const session = _req.headers.get("Cookie")?.split("; ").find(row => row.startsWith("session="))?.split("=")[1];
  return ctx.render({ session });
};

export default function HomePage({ data }: PageProps) {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
        <h1 class="text-3xl font-bold text-center text-gray-900">Welcome to the Personal Expenses Tracker</h1>
        {data.session ? (
          <div class="space-y-6">
            <p class="text-center text-gray-600">Logged in as: {data.session}</p>
          </div>
        ) : (
          <div class="text-center">
            <p class="mb-4 text-gray-600">You are not logged in.</p>
          </div>
        )}
      </div>
    </div>
  );
}