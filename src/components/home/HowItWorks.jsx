import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Cpu,
  Radio,
  Wifi,
  Cloud,
  LayoutDashboard,
} from "lucide-react";

import HowItWorksCard from "./HowItWorksCard";

const steps = [
  {
    step: "01",
    title: "IoT Sensors",
    description:
      "Smart sensors collect gas level, water level, temperature and usage data.",
    icon: Cpu,
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: "02",
    title: "LoRa Network",
    description:
      "Sensor nodes securely transmit data using long-range LoRa communication.",
    icon: Radio,
    color: "bg-green-100 text-green-600",
  },
  {
    step: "03",
    title: "Gateway",
    description:
      "The gateway receives sensor data and forwards it to the cloud server.",
    icon: Wifi,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    step: "04",
    title: "Cloud Processing",
    description:
      "Data is processed, analyzed and alerts are generated in real time.",
    icon: Cloud,
    color: "bg-purple-100 text-purple-600",
  },
  {
    step: "05",
    title: "Dashboard",
    description:
      "Municipal officers monitor sanitation status through one centralized dashboard.",
    icon: LayoutDashboard,
    color: "bg-red-100 text-red-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-primary">
            How It Works
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Our intelligent sanitation monitoring platform automatically
            collects, transmits, processes and visualizes real-time data.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-status-green"></div>
        </div>

       <div className="flex items-center justify-center gap-0 overflow-x-auto">

  {steps.map((step, index) => (
    <React.Fragment key={step.step}>

      <HowItWorksCard
        step={step.step}
        title={step.title}
        description={step.description}
        icon={step.icon}
        color={step.color}
      />

      {index !== steps.length - 1 && (
        <div className="mx-1 flex items-center justify-center">
          <ArrowRight
            size={28}
            strokeWidth={2.8}
            color="#1E293B"
          />
        </div>
      )}

    </React.Fragment>
  ))}

</div>
      </div>
    </section>
  );
}