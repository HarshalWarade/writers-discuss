import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="gap-2 flex px-16 h-20">
      <div className="flex-1 flex items-center">
        {/* logo section */}
        <NavLink to={"/"} className="font-semibold text-2xl">
          Logo
        </NavLink>
      </div>

      {/* links section */}
      <div className="flex-10 flex items-center justify-center gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>

      {/* general section */}
      <div className="flex-1 flex items-center justify-end gap-4">
        <button>theme</button>
        <button>settings</button>
      </div>
    </div>
  );
};

export default Navbar;
