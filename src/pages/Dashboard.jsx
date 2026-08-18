import { useEffect, useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MonitoringBlock from "../components/dashboard/MonitoringBlock";
import dashboardData from "../data/dashboardData";

function Dashboard() {
  const [liveSensorData, setLiveSensorData] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sensor/latest");
        const result = await response.json();
        console.log("LIVE SENSOR DATA:", result);
        if (result.connected && result.data) {
          setLiveSensorData(result.data);
        }
      } catch (error) {
        console.error("Sensor API Error:", error);
      }
    };

    fetchSensorData();

    const interval = setInterval(fetchSensorData, 2000);

    return () => clearInterval(interval);
  }, []);
    const displayData = dashboardData.map((item, index) => {
    if (index === 0 && liveSensorData) {
      return {
        ...item,
        gas: liveSensorData.gas,
        pirUsage: liveSensorData.motion,
        temperature: liveSensorData.temperature,
        humidity: liveSensorData.humidity,
      };
    }

    return item;
  });

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
           {displayData.map((item) => (
             <MonitoringBlock
                key={item.id}
                block={item.block}
                location={item.location}
                status={item.id === 1 ? item.status : "Not Connected"}
                latitude={item.latitude}
                longitude={item.longitude}
                gas={item.gas}
                waterLevel={item.waterLevel}
                pirUsage={item.pirUsage}
                waterFlow={item.waterFlow}
                temperature={item.temperature}
                humidity={item.humidity}
                staff={item.staff}
                connectivity={item.connectivity}
                updated={item.updated}
                alert={item.alert}
                turbidity={item.turbidity}
                battery={item.battery}
                voltage={item.voltage}
/>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;