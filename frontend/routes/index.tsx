import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import HorizontalCalendar from "../islands/HorizontalCalendar.tsx";
import BottomNavBar from "../islands/BottomNavBar.tsx";

export default define.page(function Home(ctx) {
  return (
    <>
      <Head>
        <title>Silverback Training</title>
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
      <div class="bg-white h-screen w-screen flex flex-col font-sans">
        {/* Header Area */}
        <header class="flex-shrink-0 flex flex-col items-center pt-safe-top pt-8">
          <img
            src="/logo.svg"
            width="100"
            height="100"
            alt="the Silverback Training logo"
            class="mb-4"
          />
          <HorizontalCalendar />
        </header>

        {/* Main Scrollable Content Area */}
        {/* pb-24 provides padding to ensure content scrolls above the fixed nav bar */}
        <main class="flex-grow overflow-y-auto p-4 pb-24">
          <div class="text-center text-neutral-400 py-10">
            <p>Workout content for the selected date will appear here.</p>
          </div>
          <div class="space-y-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} class="bg-neutral-100 rounded-lg p-4 h-24">
                <p class="text-neutral-500">Workout Item {i + 1}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Bottom Navigation */}
        <BottomNavBar />
      </div>
    </>
  );
});
