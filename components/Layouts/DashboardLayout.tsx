import useGetScreenWidth from "@/CustomHooks/useGetScreenWidth";
import { useState } from "react";
import Navbar from "../Navbars/Navbar";
import Sidebar from "../Sidebars/Sidebar";
import WebsiteMetadata from "../WebsiteMetadata/WebsiteMetadata";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [showSmallScreenSidebar, setShowSmallScreenSidebar] = useState<boolean>(false);
  const { isMediumAndSmallScreen } = useGetScreenWidth();

  return (
    <WebsiteMetadata>
      <div className="dashboard_layout_bg">
        <Navbar smallScreenSidebarHandler={() => setShowSmallScreenSidebar(true)} />
        <div className="dashboard_layout_sec_bg">
          <>
            <Sidebar
              isMediumAndSmallScreen={isMediumAndSmallScreen}
              showSmallScreenSidebar={showSmallScreenSidebar}
            />

            {isMediumAndSmallScreen && showSmallScreenSidebar && (
              <div
                className="dashboard_overlay"
                onClick={() => setShowSmallScreenSidebar(false)}
              ></div>
            )}
          </>
          <div className="dashboard_children_bg">
            <div className="dashboard_children_sec_bg"> {children} </div>
          </div>
        </div>
      </div>
    </WebsiteMetadata>
  );
};

export default DashboardLayout;
