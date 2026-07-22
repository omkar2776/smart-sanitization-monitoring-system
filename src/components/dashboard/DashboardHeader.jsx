import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  CalendarDays,
  Clock3,
  ChevronDown,
} from "lucide-react";

function DashboardHeader() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentDate = time.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currentTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-700 bg-[#0F172A]/95 px-8 py-1 backdrop-blur-lg">

      {/* LEFT */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Smart Sanitization Dashboard
        </h1>

        <div className="mt-2 flex items-center gap-6 text-sm text-slate-400">

          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-cyan-400" />
            {currentDate}
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} className="text-green-400" />
            {currentTime}
          </div>

        </div>
      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-5">

        {/* SEARCH */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search sensors, zones..."
            className="w-80 rounded-xl border border-slate-700 bg-[#16263A] py-3 pl-11 pr-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
          />

        </div>

        {/* NOTIFICATION */}

        <button className="relative rounded-xl border border-slate-700 bg-[#16263A] p-3 text-slate-300 transition duration-300 hover:border-cyan-400 hover:text-cyan-400">

          <Bell size={22} />

          <span className="absolute right-2 top-2 flex h-2.5 w-2.5">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>

          </span>

        </button>

        {/* PROFILE */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-700 bg-[#16263A] px-4 py-2 transition duration-300 hover:border-cyan-400">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-lg font-bold text-white">
            A
          </div>

          <div className="text-left">

            <h3 className="font-semibold text-white">
              Admin
            </h3>

            <p className="text-xs text-green-400">
              ● Online
            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />

        </button>

      </div>

    </header>
  );
}

export default DashboardHeader;