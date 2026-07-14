import {
  RadioIcon,
  SignalIcon,
  CpuChipIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
const features = [
  {
    title: "Live Monitoring",
    description: "Monitor public sanitation facilities in real time.",
    icon: RadioIcon,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "IoT Sensors",
    description: "Smart sensors collect cleanliness and water-level data.",
    icon: SignalIcon,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "LoRa Network",
    description: "Long-range communication with low power consumption.",
    icon: CpuChipIcon,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Predictive Cleaning",
    description: "AI-assisted cleaning recommendations and alerts.",
    icon: CpuChipIcon,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Reports & Analytics",
    description: "Generate reports for municipal decision-making.",
    icon: ChartBarIcon,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function WhySection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary">
            Why Smart Sanitization?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A modern sanitation ecosystem powered by IoT, LoRa, and real-time
            monitoring.
          </p>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-status-green"></div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-status-green hover:shadow-xl"
            >
             <div
  className={`flex h-16 w-16 items-center justify-center rounded-full ${item.color}`}
>
  <item.icon className="h-8 w-8" />
</div>

              <h3 className="mt-6 text-xl font-semibold text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}