import navbarBG from "../assets/navBg.png";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${navbarBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <span className="flex justify-center items-center gap-3 py-2">
        <img className="h-14 w-10" src={logo} alt="" />
        <Link to="/">
          {" "}
          <h2 className="text-4xl text-white font-dancing text-shadow-lg/50 text-shadow-coffee/50">
            Aroma Caffeine
          </h2>{" "}
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
