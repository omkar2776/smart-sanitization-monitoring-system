import DashboardCard from "./DashboardCard";
import {
  Building2,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  BarChart3,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-white pt-24 pb-8">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

       <div className="mb-10 text-center">
          <h2 className="text-5xl font-bold text-primary">
            Live Dashboard Preview
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Real-time monitoring of public sanitation facilities across
            Alandi Municipal Council.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-status-green"></div>
        </div>

        {/* Dashboard Background */}

        <div className="rounded-3xl bg-slate-100 p-8">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

            <DashboardCard
              title="Total Toilets"
              value="128"
              icon={Building2}
              color="blue"
            />

            <DashboardCard
              title="Clean Toilets"
              value="96"
              icon={CheckCircle2}
              color="green"
            />

            <DashboardCard
              title="Needs Attention"
              value="24"
              icon={AlertTriangle}
              color="yellow"
            />

            <DashboardCard
              title="Out of Service"
              value="08"
              icon={XCircle}
              color="red"
            />

            <DashboardCard
              title="Avg. Cleanliness"
              value="85%"
              icon={BarChart3}
              color="purple"
            />

          </div>

        </div>

      </div>
    </section>
  );
}