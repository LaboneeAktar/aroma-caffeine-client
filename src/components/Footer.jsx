import footerBg from "../assets/footer-bg.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
      }}
    >
      <p className="text-white/50 text-xs lg:text-sm text-center py-4">
        Copyright Aroma Caffeine ! All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
