import bgImage from "../assets/CoffeeBG.png";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate();

  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      price,
      photo,
    };

    //send data to the server
    fetch(`https://aroma-caffeine-server-omega.vercel.app/coffees`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Successfully Added Your Coffee!",
            icon: "success",
            iconColor: "#023020",
            confirmButtonColor: "#331a15",
            color: "#331a15",
            background: "#d2b48c",
            width: 400,
          });
          form.reset();
          navigate("/");
        }
      })
      .catch((error) => console.error(error));
  };

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
        <div className="bg-[#F4F3F0] rounded-lg mb-10 lg:mb-32">
          <div className="text-center">
            <h4 className="text-3xl font-dancing font-extrabold text-coffee pt-8 lg:pt-14 text-shadow-lg/50 text-shadow-coffee">
              Add New Coffee
            </h4>
            <p className="text-justify lg:text-center text-sm text-coffee/60 lg:max-w-4/6 px-4 lg:px-0 mx-auto py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form
            onSubmit={handleAddCoffee}
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
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
