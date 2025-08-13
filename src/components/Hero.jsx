import bannerImg from "../assets/Banner.png";

const Hero = () => {
  return (
    <div>
      <div
        className="relative bg-cover h-[250px] lg:h-[450px] flex items-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 flex justify-center items-center">
          <div className="px-10 text-center text-white ">
            <h2 className="text-2xl md:text-4xl font-dancing font-extrabold mb-4 text-shadow-lg/50 text-shadow-coffee">
              Would you like a Cup of Delicious Coffee?
            </h2>
            <p className="mb-3 text-xs lg:text-sm text-center text-coffee-gray">
              It's coffee time - Sip & Savor. Relaxation in every sip! Get the
              nostalgia back! <br /> Your companion of every moment. Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn bg-coffee-brown border-coffee-brown rounded-sm text-black text-lg font-dancing font-bold hover:bg-transparent hover:text-white">
              {" "}
              Learn More
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
