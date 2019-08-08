import React from "react";
import footerStyles from "../styles/Footer.module.css";
// import twitter from "./images/twitter.png";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <div className={footerStyles.wrapper}>
      <p>
        Built with &#10084; by Ezeoke Cuba{" "}
        <a href="https://twitter.com/EzeokeCuba">
          <i className="fab fa-twitter" />
        </a>
      </p>
      <p>
        Powered by <a href="https://newsapi.org/">NEWS API</a>
      </p>
      <p>&copy; learnFactory Nigeria, 2019</p>
    </div>
  );
};

export default Footer;
