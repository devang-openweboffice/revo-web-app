import { useDashboardData } from "./hooks/useDashboardData";
import { useState } from "react";
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
import { useQueryClient } from "@tanstack/react-query";
import { TopSummaryBar } from "./components/summary/TopSummaryBar";
import { PageTabs } from "./components/navigation/PageTabs";
import { Toolbar } from "./components/navigation/Toolbar";

function App() {
  const { data, isLoading, isError } = useDashboardData();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleRetry = () => {
    queryClient.invalidateQueries({ queryKey: ["dashboard"] });
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState onRetry={handleRetry} />;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NotificationCards notifications={data.notifications} />

      <TopSummaryBar />
      <PageTabs />
      <Toolbar />

      <div className="container mt-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 transition-all duration-300">
          {/* Main Content Area */}
          <div
            className={`space-y-6 transition-all duration-300 ${
              sidebarOpen ? "lg:col-span-8" : "lg:col-span-11"
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
          {/* Sidebar */}{" "}
          <div
            className={`transition-all duration-300 ${
              sidebarOpen ? "lg:col-span-4" : "lg:col-span-1"
            }`}
          >
            <InboxSidebar
              messages={data.inboxMessages}
              onToggle={() => setSidebarOpen((v) => !v)}
              open={sidebarOpen}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
