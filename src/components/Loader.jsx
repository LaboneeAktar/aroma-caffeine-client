import hotCoffee from "../assets/hot-coffee.gif";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-40 w-40 border-t-4 border-b-4 border-coffee"></div>
        <img src={hotCoffee} className="rounded-full h-36 w-36" />
      </div>
    </div>
  );
};

export default Loader;
