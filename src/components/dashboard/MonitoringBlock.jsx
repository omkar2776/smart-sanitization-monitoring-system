import { useState } from "react";
import {
  MapPin,
  Wifi,
  CheckCircle2,
  AlertTriangle,
  X
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
  temperature,
  humidity,
  turbidity,
  battery,
  voltage,
  staff,
  connectivity,
  updated,
  alert,
})  {
  const isConnected = block === 1;
  const [showDetails, setShowDetails] = useState(false);
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
  <>
    <div
      onClick={() => setShowDetails(true)}
      className={`bg-[#102544] border-2 ${border[status]} rounded-lg overflow-hidden shadow-xl flex flex-col cursor-pointer`}
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
          <span className="text-[15px]">{location}</span>
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

    <div className="px-4 mt-3">
    <p className="text-xs uppercase tracking-wider text-slate-400">
        Assigned Staff
    </p>

   <p className="mt-2 font-semibold text-white">
  {staff}
</p>

    <p className="text-sm text-slate-400">
        Sanitation Supervisor
    </p>
</div>
{/* SENSOR VALUES */}
<div className="grid grid-cols-2 gap-3 px-4 mt-4 border-t border-slate-700/60 pt-3">

  <div>
    <p className="uppercase text-[10px] text-gray-400">
      Gas
    </p>
    <p className={`text-[16px] font-bold mt-1 ${readingColor(gasAlert, gas === "Medium")}`}>
      {gas}
    </p>
  </div>

  <div>
    <p className="uppercase text-[10px] text-gray-400">
      Water Lvl
    </p>
    <p className={`text-[16px] font-bold mt-1 ${readingColor(waterAlert, waterLevel === "Medium")}`}>
      Not Connected
    </p>
  </div>

  <div>
    <p className="uppercase text-[10px] text-gray-400">
      PIR Usage
    </p>
    <p className={`text-[16px] font-bold mt-1 ${readingColor(usageAlert)}`}>
      {pirUsage}
    </p>
  </div>

  <div>
    <p className="uppercase text-[10px] text-gray-400">
      Water Flow
    </p>
    <p className={`text-[16px] font-bold mt-1 ${readingColor(flowAlert)}`}>
      Not Connected
    </p>
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

    {/* FULL BLOCK DETAILS */}
    {showDetails && (
  <div
  className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/75 backdrop-blur-md px-4 py-6"
  onClick={() => setShowDetails(false)}
>
   <div
  className="
    w-full max-w-3xl
    max-h-[82vh]
    overflow-y-auto
    rounded-2xl
    border border-slate-700/80
    bg-slate-900/95
    shadow-[0_25px_80px_rgba(0,0,0,0.55)]
    ring-1 ring-white/5
  "
  onClick={(e) => e.stopPropagation()}
>

      {/* POPUP HEADER */}
      <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Smart Sanitation Monitoring
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            {block} — {location}
          </h2>
        </div>

        <button
          onClick={() => setShowDetails(false)}
          className="rounded-lg p-2 text-slate-300 hover:bg-slate-700 hover:text-white"
        >
          <X size={22} />
        </button>
      </div>
     {/* LIVE SENSOR DATA */}
<div className="px-6 py-4">
  <div className="flex items-center justify-between mb-3">
    <div>
      <p className="text-xs uppercase tracking-widest text-slate-400">
        Live Sensor Data
      </p>
      <p className="text-sm text-slate-500 mt-1">
        Real-time monitoring for this smart toilet
      </p>
    </div>

    <span className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      LIVE
    </span>
  </div>

  <div className="grid grid-cols-3 gap-3">

    {/* GAS */}
    <div className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-4 shadow-lg">
      <p className="text-[11px] uppercase tracking-wider text-slate-400">
        MQ135 Gas
      </p>
      <p className="mt-2 text-xl font-bold text-white">
        {gas}
      </p>
      <p className="mt-1 text-xs text-emerald-400">
        Air Quality
      </p>
    </div>

    {/* PIR */}
    <div className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-4 shadow-lg">
      <p className="text-[11px] uppercase tracking-wider text-slate-400">
        PIR Occupancy
      </p>
      <p className="mt-2 text-xl font-bold text-white">
        {pirUsage}
      </p>
      <p className="mt-1 text-xs text-slate-400">
        Today's Usage
      </p>
    </div>

    {/* WATER LEVEL */}
    <div className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-4 shadow-lg">
      <p className="text-[11px] uppercase tracking-wider text-slate-400">
        Water Level
      </p>
      <p className="mt-2 text-xl font-bold text-white">
        Not Connected
      </p>
      <p className="mt-1 text-xs text-slate-400">
        Tank Status
      </p>
    </div>

    {/* WATER FLOW */}
    <div className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-4 shadow-lg">
      <p className="text-[11px] uppercase tracking-wider text-slate-400">
        Water Flow
      </p>
      <p className="mt-2 text-xl font-bold text-white">
        Not Connected
      </p>
      <p className="mt-1 text-xs text-slate-400">
        Consumption
      </p>
    </div>

    {/* TEMPERATURE */}
    <div className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-4 shadow-lg">
      <p className="text-[11px] uppercase tracking-wider text-slate-400">
        Temperature
      </p>
      <p className="mt-2 text-xl font-bold text-white">
        {temperature}
      </p>
      <p className="mt-1 text-xs text-slate-400">
        Ambient
      </p>
    </div>

    {/* HUMIDITY */}
    <div className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-4 shadow-lg">
      <p className="text-[11px] uppercase tracking-wider text-slate-400">
        Humidity
      </p>
      <p className="mt-2 text-xl font-bold text-white">
        {humidity}
      </p>
      <p className="mt-1 text-xs text-slate-400">
        Ambient
      </p>
    </div>

    {/* TURBIDITY */}
    <div className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-4 shadow-lg">
      <p className="text-[11px] uppercase tracking-wider text-slate-400">
        Turbidity
      </p>
      <p className="mt-2 text-xl font-bold text-white">
        {turbidity}
      </p>
      <p className="mt-1 text-xs text-slate-400">
        Water Quality
      </p>
    </div>

    {/* BATTERY */}
    <div className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-4 shadow-lg">
      <p className="text-[11px] uppercase tracking-wider text-slate-400">
        Battery
      </p>
      <p className="mt-2 text-xl font-bold text-emerald-400">
        {battery}
      </p>
      <p className="mt-1 text-xs text-slate-400">
        Power Health
      </p>
    </div>

    {/* VOLTAGE */}
    <div className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-4 shadow-lg">
      <p className="text-[11px] uppercase tracking-wider text-slate-400">
        Voltage
      </p>
      <p className="mt-2 text-xl font-bold text-white">
        {voltage}
      </p>
      <p className="mt-1 text-xs text-slate-400">
        Supply Voltage
      </p>
    </div>

  </div>
</div>
{/* SENSOR HEALTH */}
<div className="px-6 pb-4">
  <div className="rounded-xl border border-slate-700/70 bg-slate-800/40 p-4 shadow-lg">

    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">
          Sensor Health
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Connected devices and communication status
        </p>
      </div>

      <span className="text-xs font-semibold text-emerald-400">
        {connectivity}
      </span>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

      <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-3 py-2">
        <span className="text-sm text-slate-300">MQ135 Gas</span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Online
        </span>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-3 py-2">
        <span className="text-sm text-slate-300">PIR Sensor</span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Online
        </span>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-3 py-2">
        <span className="text-sm text-slate-300">Water Level</span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Online
        </span>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-3 py-2">
        <span className="text-sm text-slate-300">Water Flow</span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Online
        </span>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-3 py-2">
        <span className="text-sm text-slate-300">Turbidity</span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Online
        </span>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-slate-900/50 px-3 py-2">
        <span className="text-sm text-slate-300">DHT Sensor</span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Online
        </span>
      </div>

    </div>
  </div>
</div>
{/* ACTIVE ALERTS */}
<div className="px-6 pb-4">
  <div className="rounded-xl border border-slate-700/70 bg-slate-800/40 p-4 shadow-lg">

    <div className="flex items-center justify-between mb-3">
      <p className="text-xs uppercase tracking-widest text-slate-400">
        Active Alerts
      </p>

      {alert === "No Alert" ? (
        <span className="text-xs font-semibold text-emerald-400">
          All Clear
        </span>
      ) : (
        <span className="text-xs font-semibold text-red-400">
          Attention Required
        </span>
      )}
    </div>

    {alert === "No Alert" ? (
      <div className="flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          ✓
        </span>

        <div>
          <p className="text-sm font-semibold text-emerald-400">
            No Active Alerts
          </p>

          <p className="text-xs text-slate-500 mt-0.5">
            All monitored parameters are currently within limits.
          </p>
        </div>
      </div>
    ) : (
      <div className="flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-400">
          !
        </span>

        <div>
          <p className="text-sm font-semibold text-red-400">
            {alert}
          </p>

          <p className="text-xs text-slate-500 mt-0.5">
            Immediate attention may be required.
          </p>
        </div>
      </div>
    )}

  </div>
</div>
{/* AI PREDICTIVE CLEANING */}
<div className="px-6 pb-4">
  <div className="rounded-xl border border-cyan-500/20 bg-slate-800/40 p-4 shadow-lg">

    <div className="flex items-center justify-between mb-3">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">
          AI Predictive Cleaning
        </p>

        <p className="text-xs text-slate-500 mt-1">
          Predictive analysis based on usage and sensor trends
        </p>
      </div>

      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
        AI Engine
      </span>
    </div>

    <div className="grid grid-cols-3 gap-3">

      {/* PREDICTION */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Prediction
        </p>

        <p className="mt-1 text-sm font-semibold text-cyan-400">
          Cleaning Required
        </p>
      </div>

      {/* TIME */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Estimated Time
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          Within 30 Minutes
        </p>
      </div>

      {/* CONFIDENCE */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Confidence
        </p>

        <p className="mt-1 text-sm font-semibold text-emerald-400">
          87%
        </p>
      </div>

    </div>

    {/* REASON */}
    <div className="mt-3 rounded-lg border border-slate-700/60 bg-slate-900/40 px-3 py-3">

      <p className="text-[10px] uppercase tracking-wider text-slate-500">
        Prediction Reason
      </p>

      <p className="mt-1 text-sm text-slate-300">
        High usage + increasing gas level + increased water consumption
      </p>

    </div>

  </div>
</div>
{/* SATELLITE-ASSISTED PLANNING */}
<div className="px-6 pb-4">
  <div className="rounded-xl border border-violet-500/20 bg-slate-800/40 p-4 shadow-lg">

    <div className="flex items-center justify-between mb-3">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">
          Satellite-Assisted Planning
        </p>

        <p className="text-xs text-slate-500 mt-1">
          Simulated pilgrimage activity analysis
        </p>
      </div>

      <span className="rounded-full bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-400">
        SIMULATED
      </span>
    </div>

    <div className="grid grid-cols-3 gap-3">

      {/* CROWD LEVEL */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Crowd Level
        </p>

        <p className="mt-1 text-sm font-semibold text-amber-400">
          High
        </p>
      </div>

      {/* EXPECTED USAGE */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Expected Usage
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          High
        </p>
      </div>

      {/* STAFF PRIORITY */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Staff Priority
        </p>

        <p className="mt-1 text-sm font-semibold text-red-400">
          High
        </p>
      </div>

    </div>

    {/* ACTIVITY MESSAGE */}
    <div className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-3">

      <p className="text-[10px] uppercase tracking-wider text-amber-400">
        Activity Alert
      </p>

      <p className="mt-1 text-sm text-slate-300">
        High Pilgrim Activity Detected. Increase Cleaning Staff.
      </p>

    </div>

  </div>
</div>
{/* SENSOR TREND */}
<div className="px-6 pb-4">
  <div className="rounded-xl border border-slate-700/70 bg-slate-800/40 p-4 shadow-lg">

    <div className="flex items-center justify-between mb-3">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">
          Sensor Trend
        </p>

        <p className="text-xs text-slate-500 mt-1">
          Recent gas and usage activity
        </p>
      </div>

      <span className="text-[10px] uppercase tracking-wider text-emerald-400">
        Live
      </span>
    </div>

    <div className="grid grid-cols-2 gap-3">

      {/* GAS TREND */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 p-3">

        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-wider text-slate-500">
            Gas Trend
          </p>

          <p className="text-xs font-semibold text-white">
            {gas}
          </p>
        </div>

        <div className="mt-3 flex h-12 items-end gap-1">
          <div className="h-3 w-full rounded-sm bg-slate-700"></div>
          <div className="h-5 w-full rounded-sm bg-slate-600"></div>
          <div className="h-4 w-full rounded-sm bg-slate-600"></div>
          <div className="h-7 w-full rounded-sm bg-slate-500"></div>
          <div className="h-6 w-full rounded-sm bg-slate-500"></div>
          <div className="h-9 w-full rounded-sm bg-emerald-500/60"></div>
        </div>

      </div>

      {/* USAGE TREND */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 p-3">

        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-wider text-slate-500">
            Usage Trend
          </p>

          <p className="text-xs font-semibold text-white">
            {pirUsage}
          </p>
        </div>

        <div className="mt-3 flex h-12 items-end gap-1">
          <div className="h-5 w-full rounded-sm bg-slate-700"></div>
          <div className="h-4 w-full rounded-sm bg-slate-600"></div>
          <div className="h-7 w-full rounded-sm bg-slate-600"></div>
          <div className="h-6 w-full rounded-sm bg-slate-500"></div>
          <div className="h-8 w-full rounded-sm bg-slate-500"></div>
          <div className="h-10 w-full rounded-sm bg-cyan-500/60"></div>
        </div>

      </div>

    </div>
  </div>
</div>
{/* CLEANING & MAINTENANCE */}
<div className="px-6 pb-4">
  <div className="rounded-xl border border-slate-700/70 bg-slate-800/40 p-4 shadow-lg">

    <div className="flex items-center justify-between mb-3">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">
          Cleaning & Maintenance
        </p>

        <p className="text-xs text-slate-500 mt-1">
          Block-specific maintenance information
        </p>
      </div>

      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400">
        Monitoring
      </span>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

      {/* LAST CLEANING */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Last Cleaning
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          10:30 AM
        </p>
      </div>

      {/* NEXT CLEANING */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Next Cleaning
        </p>

        <p className="mt-1 text-sm font-semibold text-cyan-400">
          11:00 AM
        </p>
      </div>

      {/* PRIORITY */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Priority
        </p>

        <p className="mt-1 text-sm font-semibold text-amber-400">
          High
        </p>
      </div>

      {/* TASK */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Task Status
        </p>

        <p className="mt-1 text-sm font-semibold text-amber-400">
          Pending
        </p>
      </div>

    </div>

    {/* ASSIGNED STAFF */}
    <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-700/60 bg-slate-900/40 px-4 py-3">

      <div>
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Assigned Staff
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          {staff}
        </p>
      </div>

      <span className="rounded-full bg-slate-700/60 px-3 py-1 text-[10px] font-semibold text-slate-300">
        Block Staff
      </span>

    </div>

  </div>
</div>

{/* LORA COMMUNICATION */}
<div className="px-6 pb-5">
  <div className="rounded-xl border border-cyan-500/20 bg-slate-800/40 p-4 shadow-lg">

    <div className="flex items-center justify-between mb-3">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">
          LoRa Communication
        </p>

        <p className="text-xs text-slate-500 mt-1">
          Smart toilet communication link
        </p>
      </div>

      <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        Connected
      </span>
    </div>

    <div className="grid grid-cols-3 gap-3">

      {/* CONNECTION */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Connection
        </p>

        <p className="mt-1 text-sm font-semibold text-emerald-400">
          Online
        </p>
      </div>

      {/* SIGNAL */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Signal
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          -62 dBm
        </p>
      </div>

      {/* PACKET */}
      <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          Last Packet
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          Received
        </p>
      </div>

    </div>

  </div>
</div>

      {/* LOCATION */}
      <div className="mx-6 mt-2 rounded-lg border border-slate-700/70 bg-slate-800/40 px-4 py-3">
        <p className="text-xs uppercase text-slate-400">
          Location
        </p>

        <p className="mt-1 font-semibold text-white">
          {location}
        </p>

        <p className="mt-1 text-sm text-green-400">
          Lat: {latitude} • Long: {longitude}
        </p>
      </div>

     

      {/* ASSIGNED STAFF */}
     <div className="mx-6 mt-2 rounded-lg border border-slate-700/70 bg-slate-800/40 px-4 py-3">
        <p className="text-xs uppercase tracking-wider text-slate-400">
          Assigned Staff
        </p>

        <p className="mt-2 font-semibold text-white">
          {staff}
        </p>

        <p className="text-sm text-slate-400">
          Sanitation Supervisor
        </p>
      </div>

      {/* ALERT */}
      {alert && alert !== "No Alert" && (
        <div className="mx-6 my-4 rounded-lg border border-red-500/40 bg-red-500/10 p-4">
          <p className="text-xs uppercase text-red-300">
            Active Alert
          </p>

          <p className="mt-1 font-semibold text-red-400">
            {alert}
          </p>
        </div>
      )}

      {/* CLOSE BUTTON */}
      <div className="flex justify-end px-6 py-4">
        <button
          onClick={() => setShowDetails(false)}
          className="rounded-lg bg-slate-700 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-600"
        >
          Close
        </button>
      </div>

    </div>
  </div>
)}

  </>
);
}

export default MonitoringBlock;