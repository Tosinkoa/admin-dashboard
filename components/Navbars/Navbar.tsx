import useGetScreenWidth from "@/CustomHooks/useGetScreenWidth";
import Image from "next/legacy/image";
import { BiSearch } from "react-icons/bi";
import { BsBell, BsHeadset, BsQuestionCircle } from "react-icons/bs";

interface NavbarProps {
  smallScreenSidebarHandler: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ smallScreenSidebarHandler }) => {
  const { isMediumAndSmallScreen } = useGetScreenWidth();

  const sidebarHandler = () => {
    if (isMediumAndSmallScreen) {
      smallScreenSidebarHandler();
    }
  };

  return (
    <div className="navbar_bg">
      <div className="navbar_left_items">
        <p className="navbar_title">TransMonitor</p>
        <span className="navbar_search_bg">
          <input type="search" className="navbar_search_input" placeholder="Search..." />
          <BiSearch className="navbar_search_icon" />
        </span>
      </div>

      <div className="navbar_right_items">
        <button className="navbar_text_button">Support</button>
        <BsHeadset className="navbar_button_icons" />

        <button className="navbar_text_button">FAQ</button>
        <BsQuestionCircle className="navbar_button_icons" />

        <button className="navbar_notification_bg">
          <div className="navbar_notification_count">8</div>
          <BsBell className="navbar_notification_bell" />
        </button>

        <div className="navbar_user_bg">
          <div className="navbar_user_name">
            <span className="navbar_user_greeting">Hello</span>
            <span>Oluwaleke Ojo</span>
          </div>
          <div className=" block cursor-pointer" onClick={sidebarHandler}>
            <div className="navbar_user_picture">
              <Image
                src="/assets/images/mintyn-user-image.png"
                alt="profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
