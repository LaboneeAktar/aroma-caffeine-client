import { FaEye, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, handleDelete }) => {
  const { _id, name, chef, price, photo } = coffee;

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 bg-gray-100 shadow-lg px-6 py-8 rounded-lg">
        {/* Image */}
        <div className="w-full md:w-36 h-48 md:h-36">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left lg:ml-3">
          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {price} Taka
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex md:flex-col gap-2 mt-2 md:mt-0 z-10">
          <button className="bg-coffee-gray text-white p-2 rounded cursor-pointer">
            <FaEye />
          </button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="bg-[#3C393B] text-white p-2 rounded cursor-pointer">
              <MdEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-[#EA4744] text-white p-2 rounded cursor-pointer"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
