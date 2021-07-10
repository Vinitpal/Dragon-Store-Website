import { NavLink } from "react-router-dom";

const Leftnav = () => {
  return (
    <div className="left-nav">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          <img
            src="https://cdn.discordapp.com/attachments/641570546198249472/705386480234922054/dragon-1578289_960_720.webp"
            alt="logo"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Leftnav;
