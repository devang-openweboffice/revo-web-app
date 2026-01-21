import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  "Overview",
  "Database",
  "Rebate Journey",
  "Contracts",
  "Retailers",
];

export const PageTabs = () => {
  return (
    <div className="border-b">
      <div className="container">
        <Tabs defaultValue="Overview" className="w-full">
          <TabsList className="h-auto bg-transparent p-0">
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-none border-b-2 border-transparent px-0 py-3 text-sm font-medium text-gray-500 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};
