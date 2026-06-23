import React, { useState } from "react";
import { clsx } from "../../../utils/helpers";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab }) => {
  const [activeId, setActiveId] = useState(defaultTab ?? tabs[0]?.id);
  const activeTab = tabs.find((t) => t.id === activeId);

  return (
    <div>
      <div className="flex border-b border-border overflow-x-auto" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeId === tab.id}
            onClick={() => setActiveId(tab.id)}
            className={clsx(
              "px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors",
              activeId === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-secondary-text hover:text-primary-text"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="pt-4">
        {activeTab?.content}
      </div>
    </div>
  );
};

export default Tabs;
