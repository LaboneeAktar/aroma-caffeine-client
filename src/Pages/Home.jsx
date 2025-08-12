import ContactUs from "../components/ContactUs";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import PopularProducts from "../components/PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <PopularProducts />
      <Instagram />
      <ContactUs />
    </div>
  );
};

export default Home;
