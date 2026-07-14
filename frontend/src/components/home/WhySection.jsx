const challengeCards = [
  {
    title: 'Public Washrooms',
    description:
      'Lack of real-time monitoring leads to poor maintenance and user dissatisfaction.',
    iconBg: 'bg-primary',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      />
    ),
  },
  {
    title: 'Air Quality',
    description:
      'Unmonitored air quality affects health and hygiene in public spaces.',
    iconBg: 'bg-status-green',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    ),
  },
  {
    title: 'Water Management',
    description:
      'Water wastage and overflow issues due to unmonitored water levels.',
    iconBg: 'bg-sky-600',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c4.97 0 9 3.582 9 8 0 4.418-4.03 8-9 8s-9-3.582-9-8c0-4.418 4.03-8 9-8z"
      />
    ),
  },
  {
    title: 'Crowd & Usage',
    description:
      'No real-time data on usage leads to overcrowding and mismanagement.',
    iconBg: 'bg-violet-600',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
  },
  {
    title: 'Maintenance Delays',
    description:
      'Manual reporting causes delays in response and increased complaints.',
    iconBg: 'bg-orange-500',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    ),
  },
]

function WhySection() {
  return (
    <section className="bg-white px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Why Smart Sanitization?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
            Addressing key challenges in public sanitation management through technology.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {challengeCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <span
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full ${card.iconBg}`}
              >
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {card.icon}
                </svg>
              </span>
              <h3 className="text-sm font-bold text-primary">{card.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySection
