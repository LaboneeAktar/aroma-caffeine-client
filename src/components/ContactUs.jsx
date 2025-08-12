import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import contactBg from "../assets/contact-us-bg.png";
import logo from "../assets/Logo.png";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-9/12 mx-auto">
        <img className="pt-14" src={logo} alt="" />
        <div className="lg:flex justify-between gap-20 pb-14">
          <div className="lg:w-1/2">
            <h3 className="py-3 text-3xl font-dancing font-extrabold text-coffee text-shadow-lg/50 text-shadow-coffee">
              Aroma Caffeine
            </h3>
            <p className="text-sm text-coffee/65 pt-2">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <span className="flex gap-2 text-coffee py-4">
              <FaFacebook className="h-6 w-6" />
              <FaTwitter className="h-6 w-6" />
              <FaInstagram className="h-6 w-6" />
              <FaLinkedin className="h-6 w-6" />
            </span>
            <h3 className="pt-2 pb-5 text-3xl font-dancing font-extrabold text-coffee text-shadow-lg/50 text-shadow-coffee">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <span className="flex items-center gap-2 text-coffee">
                <FaPhoneAlt className="w-4 h-4" />
                <p className="text-sm">+880 11122-22224</p>
              </span>
              <span className="flex items-center gap-2 text-coffee">
                <MdMarkEmailUnread className="w-5 h-5" />
                <p className="text-sm">aroma.caffeine@gmail.com</p>
              </span>
              <span className="flex items-center gap-2 text-coffee">
                <FaLocationDot className="w-5 h-5" />
                <p className="text-sm">Dhaka, Bangladesh</p>
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-14">
            <h4 className="py-5 lg:py-3 text-3xl font-dancing font-extrabold text-coffee text-shadow-lg/50 text-shadow-coffee">
              Contact with Us
            </h4>
            <div className="pt-2">
              <form>
                <input
                  className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60 mb-4"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60 mb-4"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  className="textarea w-full h-24 mb-4"
                  placeholder="Message"
                ></textarea>
                <button
                  className="btn bg-transparent border-coffee rounded-lg text-coffee text-lg font-dancing text-shadow-lg/50 text-shadow-coffee hover:bg-coffee hover:text-white"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
