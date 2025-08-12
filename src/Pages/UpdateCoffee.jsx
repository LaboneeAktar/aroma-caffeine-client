import { FaArrowLeft } from "react-icons/fa";
import bgImage from "../assets/CoffeeBG.png";
import { Link, useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, price, photo } =
    coffee;

  return (
    <div
      className="bg-cover h-[300px] object-fit"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-10/12 mx-auto">
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
        <div className="bg-[#F4F3F0] rounded-lg">
          <div className="text-center">
            <h4 className="text-3xl font-dancing font-extrabold text-coffee pt-14 text-shadow-lg/50 text-shadow-coffee">
              Update Existing Coffee Details
            </h4>
            <p className="text-sm text-coffee/60 max-w-4/6 mx-auto py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form
            // onSubmit={handleAddCoffee}
            className="w-10/12 mx-auto pt-4 pb-14"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-coffee/80 font-bold mb-2">
                  Name
                </label>
                <input
                  className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter Coffee Name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-coffee/80 font-bold mb-2">
                  Chef
                </label>
                <input
                  className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Enter Coffee Chef"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-coffee/80 font-bold mb-2">
                  Supplier
                </label>
                <input
                  className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter Coffee Supplier"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-coffee/80 font-bold mb-2">
                  Taste
                </label>
                <input
                  className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter Coffee Taste"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-coffee/80 font-bold mb-2">
                  Category
                </label>
                <input
                  className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter Coffee Category"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-coffee/80 font-bold mb-2">
                  Details
                </label>
                <input
                  className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Enter Coffee Details"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-coffee/80 font-bold mb-2">
                  Price
                </label>
                <input
                  className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter Coffee Price"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-coffee/80 font-bold mb-2">
                  Photo
                </label>
                <input
                  className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter Photo URL"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn w-full text-lg bg-coffee-brown border border-coffee font-dancing font-extrabold hover:bg-white"
            >
              {" "}
              Update Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
