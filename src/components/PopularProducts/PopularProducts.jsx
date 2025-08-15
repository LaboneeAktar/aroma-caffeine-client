import { useEffect, useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import CoffeeCard from "./CoffeeCard";
import bgCup from "../../assets/BgCup.png";
import bgHouse from "../../assets/bgHouse.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../Loader";

const PopularProducts = () => {
  const [allCoffee, setAllCoffee] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://aroma-caffeine-server.onrender.com/coffees")
      .then((res) => res.json())
      .then((data) => {
        setAllCoffee(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading coffees:", err);
        setLoading(false);
      });
  }, []);

  const displayedCoffees = showAll ? allCoffee : allCoffee.slice(0, 6);

  if (loading) {
    return <Loader />;
  }

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#EA4744",
      showCancelButton: true,
      confirmButtonColor: "#EA4744",
      cancelButtonColor: "#331a15",
      confirmButtonText: "Yes, Delete",
      color: "#331a15",
      background: "#d2b48c",
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://aroma-caffeine-server.onrender.com/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
                iconColor: "#023020",
                confirmButtonColor: "#331a15",
                color: "#331a15",
                background: "#d2b48c",
                width: 400,
              });
              const remainingCoffee = allCoffee.filter(
                (coffee) => coffee._id !== _id
              );
              setAllCoffee(remainingCoffee);
            }
          });
      }
    });
  };

  return (
    <div className="mb-20 relative">
      <div className="hidden lg:block absolute top-0 left-0">
        <img className="h-64 object-fill" src={bgCup} alt="" />
      </div>
      <div className="absolute top-40 right-0">
        <img className="h-[700px] w-[250px] object-fill" src={bgHouse} alt="" />
      </div>
      <div>
        <p className="text-center text-coffee/65">--- Sip & Savor ---</p>
        <h4 className="text-3xl font-extrabold font-dancing text-coffee text-center text-shadow-lg/50 text-shadow-coffee">
          Our Popular Products
        </h4>
        <div className="text-center mt-5">
          <Link to="/addCoffee">
            <button className="btn bg-coffee-brown text-coffee text-shadow-lg/30 text-shadow-coffee px-4 py-1 border-coffee/65 hover:bg-transparent">
              <span> Add Coffee</span> <GiCoffeeCup className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
      <div
        id="popular-products"
        className="mt-14 max-w-10/12 lg:max-w-9/12 mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        {displayedCoffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            handleDelete={handleDelete}
          ></CoffeeCard>
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
