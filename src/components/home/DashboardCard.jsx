export default function DashboardCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  const colors = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      bar: "bg-blue-500",
      progress: "75%",
    },

    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      bar: "bg-green-500",
      progress: "92%",
    },

    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-600",
      bar: "bg-yellow-500",
      progress: "40%",
    },

    red: {
      bg: "bg-red-100",
      text: "text-red-600",
      bar: "bg-red-500",
      progress: "18%",
    },

    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      bar: "bg-purple-500",
      progress: "85%",
    },
  };

  const theme = colors[color];

  return (
    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-xl">

      <div
        className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full ${theme.bg}`}
      >
        <Icon className={theme.text} size={36} />
      </div>

      <h3 className="text-6xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-3 text-lg font-semibold text-slate-800">
        {title}
      </p>

      <div className="mt-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>

        <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
          Live
        </span>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm text-slate-500">
          <span>Status</span>
          <span>{theme.progress}</span>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full ${theme.bar}`}
            style={{ width: theme.progress }}
          ></div>
        </div>
      </div>

    </div>
  );
}