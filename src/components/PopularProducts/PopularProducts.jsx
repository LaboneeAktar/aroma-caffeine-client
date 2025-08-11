import { useEffect, useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import CoffeeCard from "./CoffeeCard";

const PopularProducts = () => {
  const [allCoffee, setAllCoffee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => {
        setAllCoffee(data);
      });
  }, []);

  return (
    <div className="mb-20">
      <div>
        <p className="text-center text-coffee/65">--- Sip & Savor ---</p>
        <h4 className="text-3xl font-extrabold font-dancing text-coffee text-center">
          Our Popular Products
        </h4>
        <div className="flex justify-center items-center gap-4 mt-5">
          <button className="btn bg-coffee-brown text-coffee text-shadow-lg/30 text-shadow-coffee px-4 py-1 border-coffee/65 hover:bg-transparent">
            <span> Add Coffee</span> <GiCoffeeCup className="w-6 h-6" />
          </button>
          <button className="btn bg-coffee-brown text-coffee text-shadow-lg/30 text-shadow-coffee px-4 py-1 border-coffee/65 hover:bg-transparent">
            See All Collection
          </button>
        </div>
      </div>
      <div className="mt-14 max-w-9/12 mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-5">
        {allCoffee.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
