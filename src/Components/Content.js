import React from "react";
import contentStyles from "../styles/Content.module.css";
import giphy from "./images/giphy.gif";
import showMore from "./images/images.png";

const Content = props => {
  const { content, loading } = props;
  console.log(content);
  return (
    <div>
      {!loading ? (
        content.articles.map((item, index) => (
          <div key={index}>
            <h3>{item.title.toUpperCase()}</h3>
            <img
              // src={item.urlToImage}
              alt="please visit news_api"
              style={{ width: "70%", height: "40%" }}
            />
            <p>
              {item.description}{" "}
              <a href={item.url} target="blank">
                <img src={showMore} alt="" style={{ width: "3%" }} />
              </a>
            </p>
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
