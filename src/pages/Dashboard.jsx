import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MonitoringBlock from "../components/dashboard/MonitoringBlock";
import dashboardData from "../data/dashboardData";

function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-900">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Dashboard Body */}
        <main className="flex-1 overflow-y-auto p-6">

          {/* 12 Blocks */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {dashboardData.map((item) => (
              <MonitoringBlock
                key={item.id}
                block={item.block}
                location={item.location}
                status={item.status}
                latitude={item.latitude}
                longitude={item.longitude}
                gas={item.gas}
                waterLevel={item.waterLevel}
                pirUsage={item.pirUsage}
                waterFlow={item.waterFlow}
                staff={item.staff}
                connectivity={item.connectivity}
                updated={item.updated}
                alert={item.alert}
              />
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;