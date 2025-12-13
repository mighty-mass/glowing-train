import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import BottomNavBar from "../islands/BottomNavBar.tsx";

export default define.page(function Home(ctx) {
  return (
    <>
      <Head>
        <title>Home - Silverback Training</title>
        <style>
          {`
          :root {
            --safe-area-inset-top: env(safe-area-inset-top, 0px);
            --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
          }
          .pt-safe-top { padding-top: var(--safe-area-inset-top); }
          .pb-safe-bottom { padding-bottom: var(--safe-area-inset-bottom); }

          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
        </style>
      </Head>
      <div className="bg-neutral-50 min-h-screen w-screen flex flex-col font-sans pb-20">
        {/* Header */}
        <header className="bg-black text-white pt-safe-top px-4 py-4">
          <h1 className="text-2xl font-bold">Home</h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Latest News from Coach */}
          <section className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-3 text-neutral-800">
              Latest from Your Coach
            </h2>
            <div className="space-y-3">
              {/* YouTube Video Player - Mock using a test video that allows embedding */}
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-black shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/EBWVWZ6R84s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <p className="text-sm text-neutral-600">
                  Watch today's message from your coach
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Video URL will come from API
                </p>
              </div>
            </div>
          </section>

          {/* Motivational Quote */}
          <section className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-sm p-6 text-white">
            <svg
              className="w-8 h-8 mb-3 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg font-medium italic mb-2">
              Strong man, strong destiny. Weak man, weak destiny
            </p>
            <p className="text-sm opacity-80">Daily inspiration</p>
          </section>
        </main>

        <BottomNavBar currentPath={ctx.url.pathname} />
      </div>
    </>
  );
});
