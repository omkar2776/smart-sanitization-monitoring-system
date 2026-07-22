import {
  LayoutDashboard,
  Activity,
  MapPinned,
  Cpu,
  TriangleAlert,
  FileText,
  BarChart3,
  Wrench,
  Users,
  Settings,
  Trash2,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Activity, label: "Live Monitoring" },
  { icon: MapPinned, label: "Zones" },
  { icon: Cpu, label: "Sensors" },
  { icon: TriangleAlert, label: "Alerts" },
  { icon: FileText, label: "Reports" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Wrench, label: "Maintenance" },
  { icon: Users, label: "Users" },
  { icon: Settings, label: "Settings" },
];

function DashboardSidebar() {
  return (
    <aside className="w-64 h-screen bg-[#081826] border-r border-slate-800">

      {/* Top */}

     <div className="pt-8">

        {/* Menu */}

        <nav className="space-y-1 px-3">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left transition-all duration-300 ${
                  item.active
                    ? "bg-green-500/20 text-green-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.label}
                </span>

              </button>
            );
          })}

        </nav>

      </div>

    </aside>
  );
}

export default DashboardSidebar;