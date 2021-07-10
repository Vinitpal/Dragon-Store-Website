import Leftnav from "./Leftnav";
import Midnav from "./Midnav";
import Rightnav from "./Rightnav";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Leftnav />
      <Midnav />
      <Rightnav />
    </nav>
  );
};

export default Navbar;
