import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useDashboardData } from "./hooks/useDashboardData";
import { Header } from "./components/Header";
import { NotificationCards } from "./components/NotificationCards";
import { NeedsApproval } from "./components/NeedsApproval";
import { PayoutsCard } from "./components/PayoutsCard";
import { PartnerFunnel } from "./components/PartnerFunnel";
import { SummaryCards } from "./components/SummaryCards";
import { ProgramGrowth } from "./components/ProgramGrowth";
import { InboxSidebar } from "./components/InboxSidebar";
import { LoadingState } from "./components/LoadingState";
import { ErrorState } from "./components/ErrorState";
import { TopSummaryBar } from "./components/summary/TopSummaryBar";
import { PageTabs } from "./components/navigation/PageTabs";
import { Toolbar } from "./components/navigation/Toolbar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const queryClient = useQueryClient();

  // 🔒 SAFELY execute dashboard hook
  let dashboard;
  try {
    dashboard = useDashboardData();
  } catch (error) {
    console.error("useDashboardData crashed:", error);
    return (
      <div className="p-6 text-red-600">
        Dashboard failed to load.
      </div>
    );
  }

  const { data, isLoading, isError } = dashboard;

  const handleRetry = () => {
    queryClient.invalidateQueries({ queryKey: ["dashboard"] });
  };

  // 🔄 Loading
  if (isLoading) {
    return <LoadingState />;
  }

  // ❌ API error
  if (isError) {
    return <ErrorState onRetry={handleRetry} />;
  }

  // ⚠️ EMPTY DATA (never return null)
  if (!data) {
    return (
      <div className="p-6 text-gray-600">
        No dashboard data available.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NotificationCards notifications={data.notifications} />

      <TopSummaryBar />
      <PageTabs />
      <Toolbar />

      <div className="container mt-6">
        <div className="flex flex-col md:flex-row gap-6">
          
          <div
            className={`space-y-6 ${
              sidebarOpen ? "lg:w-[calc(100%-360px)]" : "lg:w-[calc(100%-64px)]"
            }`}
          >
            <NeedsApproval approvals={data.approvals} />

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4">
              <PayoutsCard
                payouts={data.payouts}
                growth={data.payoutGrowth}
                total={data.payoutTotal}
              />
              <PartnerFunnel
                funnel={data.funnel}
                growth={data.funnelGrowth}
                growthText={data.funnelGrowthText}
              />
            </div>

            <SummaryCards metrics={data.summaryMetrics} />

            <ProgramGrowth
              partners={data.programGrowth}
              total={data.programGrowthTotal}
            />
          </div>

          
          <div>
            <InboxSidebar
              messages={data.inboxMessages}
              open={sidebarOpen}
              onToggle={() => setSidebarOpen((v) => !v)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
