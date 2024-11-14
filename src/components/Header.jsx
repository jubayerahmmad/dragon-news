import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 space-y-4">
      <div>
        <img className="w-80 lg:w-auto" src={logo} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-gray-600 font-bold">
          Journalism Without Fear or Favour
        </h1>
        <p className="text-gray-500 font-semibold">
          {moment().format("dddd, MMMM Do YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
