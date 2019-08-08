import React from "react";
import contentStyles from "../styles/Content.module.css";
import giphy from "./images/giphy.gif";

const Content = props => {
  const { content, loading } = props;
  return (
    <div className={contentStyles.wrapper}>
      {!loading ? (
        content.articles.map((item, index) => (
          <div className={contentStyles.content} key={index}>
            <h3>{item.title.toUpperCase()}</h3>
            <div className={contentStyles.flexCont}>
              <div className={contentStyles.pic}>
                <img src={item.urlToImage} alt="Oops...! Failed to load" />
              </div>
              <p>
                {item.description} &nbsp;
                <a href={item.url} target="blank">
                  Read More &nbsp;
                  <i className="fa fa-angle-double-right" />
                </a>
              </p>
            </div>
            <br />
            <br />
          </div>
        ))
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "75vh"
          }}
        >
          <img src={giphy} alt="" />
        </div>
      )}
    </div>
  );
};

export default Content;
