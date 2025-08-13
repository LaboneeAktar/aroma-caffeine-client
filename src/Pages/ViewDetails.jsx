import bgImage from "../assets/CoffeeBG.png";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const coffee = useLoaderData();
  const { name, photo, chef, price, category, taste, supplier, details } =
    coffee;

  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-10/12 lg:max-w-9/12 mx-auto">
        <span className="flex items-center gap-3">
          <Link to="/">
            <FaArrowLeft />
          </Link>
          <Link
            to="/"
            className="my-12 text-2xl font-dancing font-extrabold text-shadow-lg/50 text-shadow-coffee cursor-pointer"
          >
            Back to Home
          </Link>
        </span>
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-gray-100 shadow-lg px-5 lg:px-20 py-8 rounded-lg">
            {/* Image */}
            <div className="w-full md:w-96 h-56 md:h-96 lg:py-4 object-fit">
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Text */}
            <div className="flex-1 text-center md:text-left lg:ml-3">
              <p className="text-3xl font-dancing font-extrabold text-shadow-lg/50 text-shadow-coffee pb-4">
                {name}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {category}
              </p>
              <p>
                <span className="font-semibold">Taste:</span> {taste}
              </p>
              <p>
                <span className="font-semibold">Price:</span> {price} Taka
              </p>
              <p>
                <span className="font-semibold">Chef:</span> {chef}
              </p>
              <p>
                <span className="font-semibold">Supplier:</span> {supplier}
              </p>
              <p>
                <span className="font-semibold">Details:</span> {details}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
