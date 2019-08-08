import React from "react";
import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.wrapper}>
      <p>
        Built with &#10084; by Ezeoke Cuba{" "}
        <a href="https://twitter.com/EzeokeCuba" title="@EzeokeCuba">
          <i style={{ color: "#1A91DA" }} className="fa fa-twitter" />
        </a>
      </p>
      <p>
        Powered by{" "}
        <a
          className={footerStyles.api}
          href="https://newsapi.org/"
          title="https://newsapi.org/"
          target="_blank"
        >
          NEWS API
        </a>
      </p>
      <p>&copy; LearnFactory Nigeria, 2019</p>
    </div>
  );
};

export default Footer;
