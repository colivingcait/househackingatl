import FadeIn from "./FadeIn";

export type TimelineStep = {
  label: string;
  time: string;
};

export default function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-pine-200" aria-hidden="true" />
      <div className="flex flex-col gap-8">
        {steps.map((step, i) => (
          <FadeIn key={step.label} delay={i * 0.08} className="relative flex gap-6 pl-0">
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine-800 text-xs font-semibold text-white">
              {i + 1}
            </span>
            <div className="-mt-1 flex-1 rounded-xl border border-pine-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-display text-base font-semibold text-pine-900">
                  {step.label}
                </p>
                <p className="text-sm font-medium text-clay-600">{step.time}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
