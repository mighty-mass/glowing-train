import { h } from "preact";
import { HandlerContext, PageProps } from "$fresh/server.ts";
import LoginForm from "../components/LoginForm.tsx";

export const handler = (_req: Request, ctx: HandlerContext) => {
  return ctx.render();
};

export default function LoginPage() {
    return (
      <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md">
          <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
          <LoginForm />
        </div>
      </div>
    );
  }