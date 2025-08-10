import coffee from "../assets/features/coffee-cup.png";
import award from "../assets/features/quality.png";
import coffeeBean from "../assets/features/coffee-bean.png";
import coffeeMug from "../assets/features/coffee-mug.png";

const Features = () => {
  return (
    <div className="mb-20">
      <div className="bg-[#ECEAE3] pt-8 pb-14">
        <p className="text-center pb-10 text-coffee/65">
          {" "}
          --- "Where Aroma Meets Energy" ---{" "}
        </p>
        <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img className="w-12 h-12" src={coffee} alt="" />
            <h3 className="font-extrabold text-2xl pt-3 font-dancing text-coffee">
              Awesome Aroma
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              You will definitely be a fan of the design & aroma of your coffee.
            </p>
          </div>
          <div>
            <img className="w-12 h-12" src={award} alt="" />

            <h3 className="font-extrabold text-2xl pt-3 font-dancing text-coffee">
              High Quality
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              We served the coffee to you maintaining the best quality.
            </p>
          </div>
          <div>
            <img className="w-12 h-12" src={coffeeBean} alt="" />
            <h3 className="font-extrabold text-2xl pt-3 font-dancing text-coffee">
              Pure Grades
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              The coffee is made of the green coffee beans which are 100% pure.
            </p>
          </div>
          <div>
            <img className="w-12 h-12" src={coffeeMug} alt="" />
            <h3 className="font-extrabold text-2xl pt-3 font-dancing text-coffee">
              Proper Roasting
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Your coffee is brewed by first roasting the green coffee beans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
