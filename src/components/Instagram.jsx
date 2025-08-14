import { PhotoProvider, PhotoView } from "react-photo-view";
import coffee1 from "../assets/instagram/coffee-1.png";
import coffee2 from "../assets/instagram/coffee-2.png";
import coffee3 from "../assets/instagram/coffee-3.png";
import coffee4 from "../assets/instagram/coffee-4.png";
import coffee5 from "../assets/instagram/coffee-5.png";
import coffee6 from "../assets/instagram/coffee-6.png";
import coffee7 from "../assets/instagram/coffee-7.png";
import coffee8 from "../assets/instagram/coffee-8.png";

const Instagram = () => {
  const images = [
    coffee1,
    coffee2,
    coffee3,
    coffee4,
    coffee5,
    coffee6,
    coffee7,
    coffee8,
  ];
  return (
    <div className="max-w-10/12 lg:max-w-9/12 mx-auto mb-20">
      <div>
        <p className="text-center text-coffee/65">--- Follow Us Now ---</p>
        <h4 className="text-3xl font-extrabold font-dancing text-coffee text-center text-shadow-lg/50 text-shadow-coffee">
          Follow on Instagram
        </h4>
      </div>
      <PhotoProvider>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 foo">
          {images.map((item, index) => (
            <PhotoView key={index} src={item}>
              <img src={item} alt="" />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Instagram;
