import { useState } from "react";
import { useSummaryData } from "@/hooks/useSummaryData";
import clsx from "clsx";

export const TopSummaryBar = () => {
  const { data } = useSummaryData();
  const [active, setActive] = useState("partners");

  return (
    <div className="border-b">
      <div className="container">
        <div className="flex flex-wrap overflow-x-auto gap-2">
          {data?.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={clsx(
                "min-w-[160px] px-4 py-2 text-left transition",
                active === item.id
                  ? "bg-summaryActive text-black rounded-t-lg"
                  : "text-textMuted hover:text-black rounded-lg"
              )}
            >
              <div className="text-xs font-medium uppercase tracking-wide">
                {item.label}
              </div>
              <div className="text-sm font-semibold">{item.value}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
