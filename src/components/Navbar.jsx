import { NavLink } from "react-router-dom";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div>
        <ul className="flex gap-6 text-xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <img src={user} alt="" />
        <button className="btn btn-outline rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
