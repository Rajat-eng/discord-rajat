import React from "react";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[100px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>

      <main className="md:pl-[100px] h-full">{children}</main>
    </div>
  );
};

export default Layout;
