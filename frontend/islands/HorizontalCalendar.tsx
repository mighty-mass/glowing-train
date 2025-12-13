import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

// Helper to format dates
const formatDate = (date: Date, options: Intl.DateTimeFormatOptions) => {
  return date.toLocaleDateString("en-US", options);
};

const isSameDay = (d1: Date, d2: Date) =>
  d1.getFullYear() === d2.getFullYear() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getDate() === d2.getDate();

// Generate an array of dates to display
const generateDates = () => {
  const today = new Date();
  const dates = [];
  for (let i = -4; i <= 4; i++) {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + i);
    dates.push(newDate);
  }
  return dates;
};

export default function HorizontalCalendar() {
  const selectedDate = useSignal(new Date());
  const dateArray = generateDates();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll a specific date to the center
  const scrollToDate = (date: Date, smooth: boolean = true) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Find the button element directly (no spacer)
    const dateIndex = dateArray.findIndex((d) => isSameDay(d, date));
    if (dateIndex > -1) {
      const dateElement = container.children[dateIndex] as HTMLElement;
      if (dateElement) {
        // Compute target based on current scroll and element position in viewport
        const containerRect = container.getBoundingClientRect();
        const elementRect = dateElement.getBoundingClientRect();
        const offsetWithinContainer = elementRect.left - containerRect.left;
        const targetLeft =
          container.scrollLeft + offsetWithinContainer - (container.clientWidth / 2 - dateElement.offsetWidth / 2);

        container.scrollTo({
          left: targetLeft,
          behavior: smooth ? "smooth" : "auto",
        });
      }
    }
  };

  // Scroll to today's date on initial component mount
  useEffect(() => {
    // Multiple attempts to ensure scroll happens after layout is complete
    const scrollToToday = () => scrollToDate(selectedDate.value, false);
    
    setTimeout(scrollToToday, 0);
    setTimeout(scrollToToday, 100);
    setTimeout(scrollToToday, 300);
  }, []);

  // Scroll to the selected date whenever it changes
  useEffect(() => {
    scrollToDate(selectedDate.value, true);
  }, [selectedDate.value]);

  // Re-center on viewport resize (e.g., device rotation or window change)
  useEffect(() => {
    const onResize = () => scrollToDate(selectedDate.value, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      class="w-full relative"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div
        ref={scrollContainerRef}
        class="overflow-x-scroll py-4 no-scrollbar flex items-center gap-3"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {dateArray.map((date, index) => {
          const isSelected = isSameDay(date, selectedDate.value);
          const dayName = formatDate(date, { weekday: "short" });
          const dayNumber = formatDate(date, { day: "numeric" });

          return (
            <button
              key={index}
              onClick={() => {
                selectedDate.value = date;
              }}
              class={`flex flex-col items-center justify-center rounded-lg transition-all duration-200 flex-shrink-0
                ${
                  isSelected
                    ? "bg-neutral-800 text-white shadow-lg w-20 h-24 scale-110"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 w-16 h-20"
                }`}
              style={{ scrollSnapAlign: "center" }}
            >
              <span
                class={`font-medium transition-all duration-200 ${
                  isSelected ? "text-base" : "text-xs"
                }`}
              >
                {dayName}
              </span>
              <span
                class={`font-bold transition-all duration-200 ${
                  isSelected ? "text-3xl mt-1" : "text-2xl"
                }`}
              >
                {dayNumber}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}