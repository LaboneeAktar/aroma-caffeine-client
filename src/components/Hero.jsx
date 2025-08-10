import bannerImg from "../assets/Banner.png";

const Hero = () => {
  return (
    <div>
      <div
        className="relative bg-cover h-[250px] lg:h-[535px] flex items-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="absolute bg-amber-900"></div>
        <div className="px-10 absolute lg:-right-0 text-white lg:max-w-1/2 lg:pr-10">
          <h2 className="text-2xl md:text-4xl font-dancing font-extrabold mb-4">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="mb-3 font-poppins text-xs lg:text-sm font-light">
            It's coffee time - Sip & Savor. Relaxation in every sip! Get the
            nostalgia back! Your companion of every moment. Enjoy the beautiful
            moments and make them memorable.
          </p>
          <button className=" bg-coffee-brown text-lg text-black px-3 py-2 font-dancing font-bold rounded-sm">
            Learn More
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
