import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="gap-2 flex px-16 h-20">
      <div className="flex-1 flex items-center">
        {/* logo section */}
        <NavLink to={"/"} className="font-bold text-2xl text-indigo-600">
          WritersDiscuss
        </NavLink>
      </div>

      {/* links section */}
      <div className="flex-10 flex items-center justify-center gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>

      {/* general section */}
      <div className="flex-2 flex items-center justify-end gap-4">
        <button>Login</button>
        <button className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer">
          Join the community
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
