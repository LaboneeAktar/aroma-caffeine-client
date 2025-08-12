import { FaEye, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, price, photo } = coffee;

  return (
    <div className="w-full">
      <div className=" flex justify-center items-center gap-5 bg-gray-100 shadow-lg px-6 py-8 rounded-lg">
        {/* Image Container */}
        <div className="w-36 h-36">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
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
        <div className="flex flex-col gap-2 z-10">
          <button className="bg-coffee-gray text-white p-2 rounded cursor-pointer">
            <FaEye />
          </button>
          <button className="bg-[#3C393B] text-white p-2 rounded cursor-pointer">
            <MdEdit />
          </button>
          <button className="bg-[#EA4744] text-white p-2 rounded cursor-pointer">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
