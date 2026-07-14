import { ArrowRight } from "lucide-react";

function HowItWorksCard({
  icon: Icon,
  title,
  description,
  color,
  step,
}) {
  return (
    <div className="relative w-full">
      <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}>
          <Icon size={32} />
        </div>

        <span className="mt-5 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary">
          STEP {step}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>
      </div>

 
    </div>
  );
}

export default HowItWorksCard;