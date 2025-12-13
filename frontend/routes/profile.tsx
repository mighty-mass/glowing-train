import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import BottomNavBar from "../islands/BottomNavBar.tsx";

export default define.page(function Profile(ctx) {
  return (
    <>
      <Head>
        <title>Profile - Silverback Training</title>
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
          <h1 className="text-2xl font-bold">Profile</h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Profile Picture & Name */}
          <div className="bg-white p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-3">
                A
              </div>
              <h2 className="text-xl font-bold text-neutral-800">Athlete Name</h2>
              <p className="text-sm text-neutral-500">athlete@example.com</p>
            </div>
          </div>

          {/* Subscription Status */}
          <div className="p-4">
            <section className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-sm p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Subscription Status</p>
                  <p className="text-lg font-semibold">Premium Plan</p>
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </section>
          </div>

          {/* Statistics */}
          <div className="p-4 space-y-4">
            <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">
              Your Statistics
            </h3>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <p className="text-sm text-neutral-500 mb-1">Workouts</p>
                <p className="text-2xl font-bold text-neutral-800">--</p>
                <p className="text-xs text-neutral-400 mt-1">This month</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <p className="text-sm text-neutral-500 mb-1">Hours Trained</p>
                <p className="text-2xl font-bold text-neutral-800">--</p>
                <p className="text-xs text-neutral-400 mt-1">This month</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <p className="text-sm text-neutral-500 mb-1">Avg Heart Rate</p>
                <p className="text-2xl font-bold text-neutral-800">--</p>
                <p className="text-xs text-neutral-400 mt-1">bpm</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <p className="text-sm text-neutral-500 mb-1">Streak</p>
                <p className="text-2xl font-bold text-neutral-800">--</p>
                <p className="text-xs text-neutral-400 mt-1">days</p>
              </div>
            </div>

            {/* Additional Data */}
            <section className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-semibold text-neutral-800 mb-3">Performance Data</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                  <span className="text-sm text-neutral-600">Personal Records</span>
                  <span className="text-sm font-medium text-neutral-800">--</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                  <span className="text-sm text-neutral-600">Total Distance</span>
                  <span className="text-sm font-medium text-neutral-800">-- km</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-neutral-600">Training Load</span>
                  <span className="text-sm font-medium text-neutral-800">--</span>
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
