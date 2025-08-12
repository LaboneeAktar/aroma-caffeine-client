import ContactUs from "../components/Footer/ContactUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      {/* Main content fills remaining space */}
      <main>
        <Outlet />
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default MainLayout;
