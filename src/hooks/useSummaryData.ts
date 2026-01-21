import { useQuery } from "@tanstack/react-query";

export interface SummaryItemData {
  id: string;
  label: string;
  value: string;
  active?: boolean;
}

const mockFetchSummary = async (): Promise<SummaryItemData[]> => {
  await new Promise((r) => setTimeout(r, 600));

  return [
    { id: "performance", label: "Performance", value: "$334.4k" },
    { id: "social", label: "Social", value: "24M Views" },
    {
      id: "partners",
      label: "Partners",
      value: "400 rebates",
      active: true,
    },
    { id: "campaigns", label: "Campaigns", value: "1500 review" },
    { id: "content", label: "Content", value: "30k assets" },
    { id: "inbox", label: "Inbox", value: "40 unread" },
    { id: "operations", label: "Operations", value: "12 Active" },
    { id: "expenses", label: "Expenses", value: "20 requests" },
  ];
};

export const useSummaryData = () =>
  useQuery({
    queryKey: ["summary"],
    queryFn: mockFetchSummary,
  });
