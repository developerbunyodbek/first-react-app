import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer
      className="footer"
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: 0,
      }}
    >
      <p>Comyright Reserver {year} by BunyodbekDev</p>
    </footer>
  );
};

export default Footer;
