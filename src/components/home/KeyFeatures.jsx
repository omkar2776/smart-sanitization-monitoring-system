import {
  Activity,
  Radio,
  LayoutDashboard,
  BellRing,
  FileBarChart,
  Users,
  Database,
  Smartphone,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const features = [
  {
    title: "Real-Time Monitoring",
    description:
      "Monitor every public sanitation facility with live sensor updates.",
    icon: Activity,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "IoT & LoRa Connectivity",
    description:
      "Reliable long-range communication between sensor nodes and gateway.",
    icon: Radio,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Interactive Dashboard",
    description:
      "View live status, analytics, and operational insights in one place.",
    icon: LayoutDashboard,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Smart Alerts",
    description:
      "Instant notifications for gas leakage, water shortage, and faults.",
    icon: BellRing,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate historical reports and visualize sanitation performance.",
    icon: FileBarChart,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Staff Management",
    description:
      "Manage municipal staff with secure role-based access control.",
    icon: Users,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Cloud Database",
    description:
      "Securely store and manage real-time sanitation data using MongoDB.",
    icon: Database,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Responsive Design",
    description:
      "Optimized interface for desktop, tablet, and mobile devices.",
    icon: Smartphone,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Secure Authentication",
    description:
      "Protected login system with secure user authentication.",
    icon: ShieldCheck,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Scalable Architecture",
    description:
      "Built using React, Node.js, Express, and MongoDB for future growth.",
    icon: Cpu,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function KeyFeatures() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold text-primary">
            Key Features
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Powerful software features designed for intelligent sanitation
            monitoring, municipal operations, and real-time decision-making.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-status-green"></div>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-status-green hover:shadow-xl"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
              >
                <feature.icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-primary">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}