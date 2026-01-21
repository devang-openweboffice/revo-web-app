import clsx from "clsx";

interface Props {
  label: string;
  value: string;
  active?: boolean;
}

export const SummaryItem = ({ label, value, active }: Props) => {
  return (
    <div
      className={clsx(
        "min-w-[140px] px-5 py-3 rounded-lg cursor-pointer transition-all",
        active
          ? "bg-lime-300 text-black"
          : "bg-transparent text-gray-500 hover:text-black"
      )}
    >
      <div className="text-xs font-medium uppercase tracking-wide opacity-80">
        {label}
      </div>
      <div className="text-sm font-semibold mt-0.5">{value}</div>
    </div>
  );
};
