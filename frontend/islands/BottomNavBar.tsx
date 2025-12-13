function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: any;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      class={`flex flex-col items-center justify-center gap-1 flex-1 py-2 ${
        active ? "text-white" : "text-neutral-400"
      } hover:text-white transition-colors`}
    >
      {icon}
      <span class="text-xs font-medium">{label}</span>
    </a>
  );
}

export default function BottomNavBar({ currentPath }: { currentPath?: string }) {
  // Placeholder icons
  const HomeIcon = (
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      >
      </path>
    </svg>
  );
  const CalendarIcon = (
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      >
      </path>
    </svg>
  );
  const ProfileIcon = (
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      >
      </path>
    </svg>
  );

  return (
    <nav class="fixed bottom-0 left-0 right-0 bg-black z-50 pb-safe-bottom">
      <div class="flex justify-around items-start max-w-screen-sm mx-auto">
        <NavItem href="/" icon={HomeIcon} label="Home" active={currentPath === "/"} />
        <NavItem href="/plan" icon={CalendarIcon} label="Plan" active={currentPath === "/plan"} />
        <NavItem href="/profile" icon={ProfileIcon} label="Profile" active={currentPath === "/profile"} />
      </div>
    </nav>
  );
}