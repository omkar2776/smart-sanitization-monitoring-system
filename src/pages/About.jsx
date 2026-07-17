import AboutHeroSection from "../components/about/AboutHeroSection";
import {
  Cpu,
  Radio,
  Database,
  Server,
  Cloud,
  Code2,
  Palette,
  Network,
  CheckCircle2,
} from "lucide-react";
import {
  Wind,
  Waves,
  Radar,
  UserRound,
} from "lucide-react";


const technologies = [
  {
    name: "ESP32",
    title: "IoT Microcontroller",
    desc: "Collects and processes real-time sensor data from sanitation facilities.",
    icon: Cpu,
    color: "bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white",
  },
  {
    name: "LoRa",
    title: "Wireless Communication",
    desc: "Enables secure long-range communication with low power consumption.",
    icon: Radio,
    color: "bg-orange-100 text-orange-700 group-hover:bg-orange-500 group-hover:text-white",
  },
  {
    name: "React.js",
    title: "Frontend Framework",
    desc: "Creates a responsive and interactive monitoring dashboard.",
    icon: Code2,
    color: "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    name: "Node.js",
    title: "Backend Runtime",
    desc: "Handles APIs, authentication, and backend application logic.",
    icon: Server,
    color: "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    name: "Express.js",
    title: "REST API",
    desc: "Provides fast communication between frontend and backend.",
    icon: Network,
    color: "bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white",
  },
  {
    name: "MongoDB",
    title: "Database",
    desc: "Stores users, reports, alerts, and sensor information.",
    icon: Database,
    color: "bg-lime-100 text-lime-700 group-hover:bg-lime-600 group-hover:text-white",
  },
  {
    name: "Tailwind CSS",
    title: "UI Framework",
    desc: "Builds a clean, modern, and responsive interface.",
    icon: Palette,
    color: "bg-cyan-100 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white",
  },
  {
    name: "Cloud",
    title: "Cloud Integration",
    desc: "Supports remote monitoring and centralized data management.",
    icon: Cloud,
    color: "bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white",
  },
];

const objectives = [
  "Real-time monitoring of public sanitation facilities.",
  "Detect abnormal gas levels and poor air quality.",
  "Monitor water level and waste level continuously.",
  "Generate instant alerts for critical conditions.",
  "Provide historical reports and smart analytics.",
  "Improve operational efficiency and public hygiene.",
];

export default function About() {
  return (
  <section className="relative overflow-hidden bg-white">
 <AboutHeroSection />
 <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Two Column */}
       <div
  id="objectives"
  className="grid lg:grid-cols-2 gap-10 items-start scroll-mt-28"
>

          {/* Objectives */}
         <div
  id="objectives"
  className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-10"
>

            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              Project Objectives
            </h2>

            <div className="space-y-6">

              {objectives.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    size={28}
                    className="text-green-600 mt-1"
                  />

                  <p className="text-lg text-gray-700 leading-8">
                    {item}
                  </p>

                </div>

              ))}
              {/* ================= SENSOR MODULES ================= */}

<div className="mt-8 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-slate-200 p-8">

  <h2 className="text-3xl font-bold text-primary mb-8">
    Sensor Modules Used
  </h2>

  <div className="grid grid-cols-2 gap-5">

    {/* MQ135 */}

    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
        <Wind className="text-green-600" size={28} />
      </div>

      <h3 className="text-xl font-bold text-primary">
        MQ135
      </h3>

      <p className="text-green-600 font-semibold text-sm mt-1">
        Gas Sensor
      </p>

      <p className="text-slate-600 text-sm mt-3 leading-relaxed">
        Monitors air quality and detects harmful gases for a safer public environment.
      </p>

    </div>



    {/* Water Level */}

    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <Waves className="text-blue-600" size={28} />
      </div>

      <h3 className="text-xl font-bold text-primary">
        Water Level
      </h3>

      <p className="text-blue-600 font-semibold text-sm mt-1">
        Water Sensor
      </p>

      <p className="text-slate-600 text-sm mt-3 leading-relaxed">
        Continuously measures water availability to ensure uninterrupted sanitation services.
      </p>

    </div>



    {/* Ultrasonic */}

    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

      <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
        <Radar className="text-orange-600" size={28} />
      </div>

      <h3 className="text-xl font-bold text-primary">
        Ultrasonic
      </h3>

      <p className="text-orange-600 font-semibold text-sm mt-1">
        Distance Sensor
      </p>

      <p className="text-slate-600 text-sm mt-3 leading-relaxed">
        Detects waste bin fill level for smart cleaning and efficient maintenance.
      </p>

    </div>



    {/* PIR */}

    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

      <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
        <UserRound className="text-purple-600" size={28} />
      </div>

      <h3 className="text-xl font-bold text-primary">
        PIR Sensor
      </h3>

      <p className="text-purple-600 font-semibold text-sm mt-1">
        Motion Sensor
      </p>

      <p className="text-slate-600 text-sm mt-3 leading-relaxed">
        Detects human presence to monitor facility usage and occupancy in real time.
      </p>

    </div>

  </div>

</div>

            </div>

          </div>
          {/* Technologies */}
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-3">

            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              Technologies Used
            </h2>

           <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">

              {technologies.map((tech) => {

                const Icon = tech.icon;

                return (

                  <div
                    key={tech.name}
                   className="group bg-white rounded-xl border border-gray-200 p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${tech.color}`}
                    >
                     <Icon size={20} />
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-blue-900">
                      {tech.name}
                    </h3>

                   <p className="text-green-600 font-semibold text-xs mt-1">
                      {tech.title}
                    </p>

                   <p className="text-gray-600 text-xs leading-5 mt-2">
                      {tech.desc}
                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

        

        {/* Bottom Section */}

        <div className="mt-20 bg-white/90 backdrop-blur rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold text-center text-blue-900">
            Why This Project?
          </h2>

          <div className="w-32 h-1 bg-green-600 mx-auto rounded-full mt-4 mb-8"></div>

          <p className="max-w-5xl mx-auto text-center text-lg text-gray-700 leading-10">
            Traditional sanitation monitoring relies heavily on manual
            inspection, resulting in delayed maintenance, increased
            operational costs, and poor resource utilization. This
            project introduces an intelligent IoT-based monitoring
            platform that enables real-time visibility into sanitation
            facilities, automated alert generation, centralized
            monitoring, and data-driven maintenance planning. The system
            enhances operational efficiency while contributing to cleaner,
            healthier, and smarter public infrastructure.
          </p>

        </div>
        </div>
    </section>
  );
}