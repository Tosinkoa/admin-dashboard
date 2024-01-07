import Link from "next/link";
import { useRouter } from "next/router";
import sidebarNavButtons from "./sidebarNavButtons";
import { useEffect, useState } from "react";

interface SidebarProps {
  isMediumAndSmallScreen: boolean;
  showSmallScreenSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  isMediumAndSmallScreen,
  showSmallScreenSidebar,
}) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState<boolean>(false);

  // https://nextjs.org/docs/messages/react-hydration-error
  // For  fixing hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div
          className={` ${
            (isMediumAndSmallScreen && showSmallScreenSidebar) || !isMediumAndSmallScreen
              ? "translate-x-0"
              : "-translate-x-full"
          } sidebar_bg`}
        >
          <button className="sidebar_invoice_button">GENERATE INVOICE</button>
          <div className="sidebar_list_bg">
            {/* Main buttons */}
            {sidebarNavButtons?.map((eachSidebarSection) => (
              <ul key={eachSidebarSection.section_name}>
                <li className="sidebar_nav_button_title">
                  {eachSidebarSection.section_name || ""}
                </li>
                {eachSidebarSection?.buttons?.map((eachButton) => (
                  <li key={eachButton.linkParams}>
                    <Link
                      href={eachButton.linkParams}
                      passHref
                      className={`sidebar_nav_button ${
                        router.asPath.includes(eachButton.linkParams) &&
                        "sidebar_active_button"
                      }`}
                    >
                      <>
                        {router.asPath.includes(eachButton.linkParams) && (
                          <span className="sidebar_blue_border_line"></span>
                        )}
                        <span> {eachButton.icon} </span> {eachButton.name}
                      </>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
