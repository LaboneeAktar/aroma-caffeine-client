import { FaLeaf, FaUsers } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import bannerImage from "../assets/Banner.png";
import storyImage from "../assets/about/story.jpg";
import aboutImage from "../assets/about/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="bg-[#F4F3F0] text-coffee">
        {/* Hero Section */}
        <section className="relative w-full h-[70vh]">
          <img
            src={bannerImage}
            alt="Aroma Caffeine Cafe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-2xl text-white md:text-4xl font-dancing font-extrabold mb-4 text-shadow-lg/50 text-shadow-coffee">
              Welcome to Aroma Caffeine
            </h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-11/12 md:w-9/12 mx-auto py-16 flex flex-col lg:flex-row justify-between gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-extrabold font-dancing text-coffee text-shadow-lg/50 text-shadow-coffee mb-6">
              Our Story
            </h2>
            <p className="text-md text-coffee/80 leading-relaxed mb-4">
              At <span className="font-semibold">Aroma Caffeine</span>, coffee
              is more than just a drink — it's an experience. We started as a
              small local café with a passion for ethically sourced beans,
              artisanal roasting, and creating a space where every sip feels
              like home.
            </p>
            <p className="text-md text-coffee/80 leading-relaxed mb-4">
              From the aroma of freshly ground beans to the warm smile you
              receive with every cup, our goal is to make every visit
              unforgettable. Whether you're here for your morning latte, an
              afternoon meeting, or a cozy evening with friends — we have a
              place for you.
            </p>
            <Link to="/#popular-products">
              {" "}
              <button className="btn bg-coffee-brown rounded-sm text-black text-lg font-dancing font-bold hover:text-white hover:bg-coffee ">
                {" "}
                Explore Our Popular Products
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="h-96 w-[400px]">
              <img
                src={storyImage}
                alt="Coffee Beans"
                className="rounded-lg shadow-lg w-full h-full object-fit"
              />
            </div>
            <div className="absolute top-2 left-2 bg-white px-4 py-2 rounded-lg shadow-md">
              <p className="font-dancing text-lg text-coffee">
                Since <span className="text-sm">2015</span>
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="w-11/12 md:w-9/12 mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-[#F4F3F0] rounded-lg shadow-md hover:scale-105 transition">
              <PiCoffeeFill className="text-5xl text-coffee mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Coffee</h3>
              <p className="text-coffee/70">
                Freshly roasted, perfectly brewed — coffee made with passion.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-[#F4F3F0] rounded-lg shadow-md hover:scale-105 transition">
              <FaLeaf className="text-5xl text-coffee mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Sustainable Sourcing
              </h3>
              <p className="text-coffee/70">
                Ethically sourced beans that support farmers and the planet.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-[#F4F3F0] rounded-lg shadow-md hover:scale-105 transition">
              <FaUsers className="text-5xl text-coffee mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-coffee/70">
                A place to connect, share stories, and create memories.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#F4F3F0] min-h-screen flex flex-col justify-center mb-16">
        <div className="w-11/12 md:w-9/12 mx-auto py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative w-full h-[300px] md:h-[450px]">
            <img
              src={aboutImage}
              alt="Aroma Caffeine"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-extrabold font-dancing text-coffee text-shadow-lg/50 text-shadow-coffee mb-6">
              About Aroma Caffeine
            </h2>
            <p className="text-coffee/80 text-md leading-relaxed mb-4">
              <span className="font-semibold text-coffee">Aroma Caffeine</span>{" "}
              — where every cup tells a story. We believe coffee isn't just a
              drink, it's a moment of connection, a spark of inspiration, and a
              warm hug in a mug.
            </p>
            <p className="text-coffee/80 text-md leading-relaxed mb-4">
              Our beans are carefully sourced from sustainable farms, roasted to
              perfection, and brewed with love. Whether you're here for your
              morning energy boost, a cozy afternoon latte, or a place to share
              stories with friends — Aroma Caffeine is your perfect spot.
            </p>
            <p className="text-coffee/80 text-md leading-relaxed">
              We're more than just coffee; we're about community, warmth, and
              creating unforgettable flavors. Come sip with us and taste the
              difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
