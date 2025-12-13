import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import HorizontalCalendar from "../islands/HorizontalCalendar.tsx";
import BottomNavBar from "../islands/BottomNavBar.tsx";

export default define.page(function Plan(ctx) {
  return (
    <>
      <Head>
        <title>Plan - Silverback Training</title>
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
          <h1 className="text-2xl font-bold">Training Plan</h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Calendar */}
          <div className="bg-white">
            <HorizontalCalendar />
          </div>

          {/* Workout Sections */}
          <div className="p-4 space-y-4">
            <section className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold mb-3 text-neutral-800">
                Today's Workout
              </h2>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-3 py-2">
                  <p className="font-medium text-neutral-800">Workout details will appear here</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Select a date to view scheduled workouts
                  </p>
                </div>
              </div>
            </section>

            {/* Workout Sessions */}
            <section className="space-y-3">
              <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">
                Scheduled Sessions
              </h3>
              
              {/* Mock workout cards */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-neutral-800">Morning Session</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Scheduled
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mb-3">
                  Workout content will be displayed here
                </p>
                <div className="flex gap-2 text-xs text-neutral-500">
                  <span>⏱️ Duration</span>
                  <span>•</span>
                  <span>📍 Location</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-neutral-800">Evening Session</h4>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Planned
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mb-3">
                  Workout content will be displayed here
                </p>
                <div className="flex gap-2 text-xs text-neutral-500">
                  <span>⏱️ Duration</span>
                  <span>•</span>
                  <span>📍 Location</span>
                </div>
              </div>
            </section>
          </div>
        </main>

        <BottomNavBar currentPath={ctx.url.pathname} />
      </div>
    </>
  );
});
