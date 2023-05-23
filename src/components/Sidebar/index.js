import "./index.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiUserSettingsLine, RiFontSize } from "react-icons/ri";
import { BiLogIn, BiCube, BiUserPlus, BiErrorCircle } from "react-icons/bi";
import { TbCircles } from "react-icons/tb";
import { MdCreditCard } from "react-icons/md";
import { FaTable } from "react-icons/fa";

const Sidebar = () => (
  <div className="side-bar">
    <h1 className="first-head">SALESQUEEN</h1>
    <div>
      <div className="sidebar-option alpha">
        <AiOutlineHome className="icon" />
        <span>Dashboard</span>
      </div>
      <div className="sidebar-option">
        <RiUserSettingsLine className="icon" />
        <span>Account Settings</span>
      </div>
    </div>
    <div className="sidebar-subhead">
      <hr className="left-line" /> <span className="subhead">PAGES</span>{" "}
      <hr className="right-line" />
    </div>
    <div>
      <div className="sidebar-option">
        <BiLogIn className="icons" />
        <span>Login</span>
      </div>
      <div className="sidebar-option">
        <BiUserPlus className="icons" />
        <span>Register</span>
      </div>
      <div className="sidebar-option">
        <BiErrorCircle className="icons" />
        <span>Error</span>
      </div>
    </div>
    <div className="sidebar-subhead">
      <hr className="left-line" />{" "}
      <span className="subhead">USER INTERFACE</span> <hr />
    </div>
    <div>
      <div className="sidebar-option">
        <RiFontSize className="icons" />
        <span>Typography</span>
      </div>
      <div className="sidebar-option">
        <TbCircles className="icons" />
        <span>Icons</span>
      </div>
      <div className="sidebar-option">
        <MdCreditCard className="icons" />
        <span>Cards</span>
      </div>
      <div className="sidebar-option">
        <FaTable className="icons" />
        <span>Tables</span>
      </div>
      <div className="sidebar-option">
        <BiCube className="icons" />
        <span>Form Layouts</span>
      </div>
    </div>
  </div>
);

export default Sidebar;
