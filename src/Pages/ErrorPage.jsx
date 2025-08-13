import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import errorPage from "../assets/errorPage.jpg";

const ErrorPage = () => {
  return (
    <div className="max-w-10/12 lg:max-w-9/12 mx-auto">
      <div className="flex items-center gap-3 pt-4">
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <Link
          to="/"
          className="text-2xl font-dancing font-extrabold text-shadow-lg/50 text-shadow-coffee cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <img className="lg:h-[450px]" src={errorPage} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
