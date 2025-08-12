import { useEffect, useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import CoffeeCard from "./CoffeeCard";
import bgCup from "../../assets/BgCup.png";
import bgHouse from "../../assets/bgHouse.png";

const PopularProducts = () => {
  const [allCoffee, setAllCoffee] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const displayedCoffees = showAll ? allCoffee : allCoffee.slice(0, 6);

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => {
        setAllCoffee(data);
      });
  }, []);

  return (
    <div className="mb-20 relative">
      <div className="absolute top-0 left-0">
        <img className="h-64 object-fill" src={bgCup} alt="" />
      </div>
      <div className="absolute top-40 right-0">
        <img className="h-[700px] w-[250px] object-fill" src={bgHouse} alt="" />
      </div>
      <div>
        <p className="text-center text-coffee/65">--- Sip & Savor ---</p>
        <h4 className="text-3xl font-extrabold font-dancing text-coffee text-center">
          Our Popular Products
        </h4>
        <div className="text-center mt-5">
          <button className="btn bg-coffee-brown text-coffee text-shadow-lg/30 text-shadow-coffee px-4 py-1 border-coffee/65 hover:bg-transparent">
            <span> Add Coffee</span> <GiCoffeeCup className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="mt-14 max-w-9/12 mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-5">
        {displayedCoffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-10 z-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn bg-coffee-brown text-coffee text-shadow-lg/30 text-shadow-coffee px-4 py-1 border-coffee/65 hover:bg-transparent"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;
