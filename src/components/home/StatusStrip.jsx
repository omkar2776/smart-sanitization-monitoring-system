const statusItems = [
  {
    label: 'Monitoring Zones',
    value: '4 Active',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.665-.332.997-1.037.997-1.837V6.75c0-1.036-.84-1.875-1.875-1.875h-9.75c-1.036 0-1.875.84-1.875 1.875v8.25c0 .8.332 1.505.997 1.837l4.875 2.437"
      />
    ),
  },
  {
    label: 'LoRa Network',
    value: 'Connected',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M2.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
      />
    ),
  },
  {
    label: 'System Health',
    value: '98%',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
  {
    label: 'Last Data Update',
    value: 'Live',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    label: 'Date',
    value: '13 May 2025, 11:30 AM',
    valueClass: 'text-slate-600',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    ),
  },
]

function StatusStrip() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="rounded-xl border border-slate-200/80 bg-white px-2 py-4 shadow-[0_8px_30px_rgba(0,31,63,0.08)] sm:px-4 sm:py-5">
        <ul className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          {statusItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 px-4 py-2 sm:py-0 lg:justify-center"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-status-green/10">
                <svg
                  className="h-5 w-5 text-status-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-500">{item.label}</p>
                <p className={`truncate text-sm font-semibold ${item.valueClass ?? 'text-status-green'}`}>
                  {item.value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default StatusStrip
