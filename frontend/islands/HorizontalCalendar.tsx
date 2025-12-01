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
  for (let i = -10; i <= 10; i++) {
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

    // Find the actual button element, skipping the spacer
    const dateIndex = dateArray.findIndex((d) => isSameDay(d, date));
    if (dateIndex > -1) {
      const dateElement = container.children[dateIndex + 1] as HTMLElement; // +1 to account for spacer
      if (dateElement) {
        const containerWidth = container.offsetWidth;
        const elementWidth = dateElement.offsetWidth;
        const scrollLeft =
          dateElement.offsetLeft - containerWidth / 2 + elementWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: smooth ? "smooth" : "auto",
        });
      }
    }
  };

  // Scroll to today's date on initial component mount
  useEffect(() => {
    // A small delay ensures the layout is stable before we calculate scroll
    setTimeout(() => scrollToDate(new Date(), false), 50);
  }, []);

  // Scroll to the selected date whenever it changes
  useEffect(() => {
    scrollToDate(selectedDate.value);
  }, [selectedDate.value]);

  return (
    <div
      class="w-full relative"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
      }}
    >
      <div
        ref={scrollContainerRef}
        class="overflow-x-auto py-4 no-scrollbar flex items-center space-x-4"
      >
        {/* Spacer element to allow first item to be centered */}
        <div class="flex-shrink-0 w-[calc(50%-2.5rem)]" />
        {dateArray.map((date, index) => {
          const isSelected = isSameDay(date, selectedDate.value);
          const dayName = formatDate(date, { weekday: "short" });
          const dayNumber = formatDate(date, { day: "numeric" });

          return (
            <button
              key={index}
              onClick={() => (selectedDate.value = date)}
              class={`flex flex-col items-center justify-center rounded-lg transition-all duration-300 flex-shrink-0
                ${
                  isSelected
                    ? "bg-neutral-800 text-white shadow-lg w-20 h-24"
                    : "bg-neutral-100 text-neutral-700 w-16 h-20"
                }`}
            >
              <span
                class={`font-medium transition-all duration-300 ${
                  isSelected ? "text-base" : "text-sm"
                }`}
              >
                {dayName}
              </span>
              <span
                class={`font-bold transition-all duration-300 ${
                  isSelected ? "text-3xl" : "text-2xl"
                }`}
              >
                {dayNumber}
              </span>
            </button>
          );
        })}
        {/* Spacer element to allow last item to be centered */}
        <div class="flex-shrink-0 w-[calc(50%-2.5rem)]" />
      </div>
    </div>
  );
}