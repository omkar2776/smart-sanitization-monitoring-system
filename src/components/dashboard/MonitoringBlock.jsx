import {
  MapPin,
  Wifi,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function MonitoringBlock({
  block,
  location,
  status,
  latitude,
  longitude,
  gas,
  waterLevel,
  pirUsage,
  waterFlow,
  staff,
  connectivity,
  updated,
  alert,
}) {
  const border = {
    Healthy: "border-green-500",
    Warning: "border-yellow-500",
    Critical: "border-red-500",
  };

  const badge = {
    Healthy: "bg-green-700",
    Warning: "bg-yellow-600",
    Critical: "bg-red-800",
  };

  const statusText = {
    Healthy: "text-green-400",
    Warning: "text-yellow-400",
    Critical: "text-red-400",
  };

  // Zone letter + team label derived from the block number, e.g. "Block 3" -> "C"
  const blockNumber = parseInt(block.replace(/\D/g, "")) || 1;
  const zoneLetter = String.fromCharCode(64 + blockNumber);
  const isOnline = connectivity === "Online";

  // Highlight individual readings when they cross the same thresholds
  // used to flag a block Critical (gas High, water Low, >50 users, >100L)
  const gasAlert = gas === "High";
  const waterAlert = waterLevel === "Low";
  const usageAlert = parseInt(pirUsage) > 50;
  const flowAlert = parseInt(waterFlow) > 100;

  const readingColor = (isAlert, isMedium) =>
    isAlert ? "text-red-400" : isMedium ? "text-yellow-400" : "text-white";

  return (
    <div
      className={`bg-[#102544] border-2 ${border[status]} rounded-lg overflow-hidden shadow-xl flex flex-col`}
    >
      {/* HEADER */}
      <div className="flex justify-between items-start px-4 pt-4">
        <div>
          <h2 className="text-[22px] font-bold text-white">{block}</h2>
          <p className="text-green-400 font-semibold text-[17px]">{location}</p>
        </div>

        <div className={`${badge[status]} rounded px-3 py-1 flex items-center gap-2 shrink-0`}>
          <span className="text-white text-xs font-bold">{status.toUpperCase()}</span>
          {status === "Healthy" ? (
            <CheckCircle2 size={15} className="text-white" />
          ) : (
            <AlertTriangle size={15} className="text-white" />
          )}
        </div>
      </div>

      {/* LOCATION */}
      <div className="px-4 mt-3">
        <div className="flex items-center gap-2 text-white">
          <MapPin size={15} className="text-red-500" />
          <span className="text-[15px]">{location} Area</span>
        </div>
        <p className="mt-1 text-[13px] text-green-400">
          Lat: {latitude} • Long: {longitude}
        </p>
      </div>

      {/* CONNECTIVITY */}
      <div className="px-4 mt-3 border-t border-slate-700/60 pt-3 space-y-2">
        <div className="flex justify-between items-center">
          <span className="uppercase text-gray-400 text-[11px]">Sensor Connectivity</span>
          <span className={`flex items-center gap-1.5 text-sm font-semibold ${isOnline ? "text-white" : "text-red-400"}`}>
            <Wifi size={14} />
            {connectivity}
          </span>
        </div>
      </div>

    <div className="mt-3">
    <p className="text-xs uppercase tracking-wider text-slate-400">
        Assigned Staff
    </p>

    <p className="mt-2 font-semibold text-white">
        Ramesh Patil
    </p>

    <p className="text-sm text-slate-400">
        Sanitation Supervisor
    </p>
</div>

      {/* SENSOR VALUES */}
      <div className="grid grid-cols-2 gap-3 px-4 mt-4 border-t border-slate-700/60 pt-3">
        <div>
          <p className="uppercase text-[10px] text-gray-400">Gas</p>
          <p className={`text-[16px] font-bold mt-1 ${readingColor(gasAlert, gas === "Medium")}`}>{gas}</p>
        </div>
        <div>
          <p className="uppercase text-[10px] text-gray-400">Water Lvl</p>
          <p className={`text-[16px] font-bold mt-1 ${readingColor(waterAlert, waterLevel === "Medium")}`}>{waterLevel}</p>
        </div>
        <div>
          <p className="uppercase text-[10px] text-gray-400">PIR Usage</p>
          <p className={`text-[16px] font-bold mt-1 ${readingColor(usageAlert)}`}>{pirUsage}</p>
        </div>
        <div>
          <p className="uppercase text-[10px] text-gray-400">Water Flow</p>
          <p className={`text-[16px] font-bold mt-1 ${readingColor(flowAlert)}`}>{waterFlow}</p>
        </div>
      </div>

      {/* BLOCK STATUS */}
      <div className="flex justify-between items-end px-4 mt-4">
        <div>
          <p className="uppercase text-[11px] text-gray-400">Block Status</p>
          <p className={`text-[24px] font-bold ${statusText[status]}`}>{status}</p>
        </div>
        <div className="text-gray-400 text-xs pb-1">Updated {updated}</div>
      </div>

      {alert === "No Alert" && <div className="mb-4" />}
    </div>
  );
}

export default MonitoringBlock;