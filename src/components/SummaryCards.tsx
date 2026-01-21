import { Target, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { SummaryMetric } from "../types";

interface SummaryCardsProps {
  metrics: SummaryMetric[];
}

const iconMap = {
  target: Target,
  check: CheckCircle2,
  clock: Clock,
};

export const SummaryCards = ({ metrics }: SummaryCardsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {metrics.map((metric, index) => {
        const Icon = iconMap[metric.icon as keyof typeof iconMap] || Target;
        return (
          <div
            key={index}
            className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                  {metric.title}
                </h3>
                <Icon className="h-5 w-5 text-gray-700" />
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">
                {metric.value}
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-gray-600 mb-0">
                  {metric.description}
                </p>
                {metric.growth && (
                  <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    {metric.growth}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
