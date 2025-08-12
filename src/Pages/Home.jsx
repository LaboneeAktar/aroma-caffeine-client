import ContactUs from "../components/Footer/ContactUs";
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
    </div>
  );
};

export default Home;
