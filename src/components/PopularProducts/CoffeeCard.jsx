import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, price, photoURL } = coffee;

  return (
    <div className="w-full">
      <div className=" flex justify-center items-center gap-5 bg-gray-100 shadow-lg p-6 rounded-lg">
        {/* Image Container */}
        <div className="w-36 h-32">
          <img
            src={photoURL}
            alt={name}
            className="w-full h-full object-cover"
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
        <div className="flex flex-col gap-2">
          <button className="bg-[#d6b18a] text-white p-2 rounded">
            <FaEye />
          </button>
          <button className="bg-gray-700 text-white p-2 rounded">
            <FaEdit />
          </button>
          <button className="bg-red-500 text-white p-2 rounded">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
