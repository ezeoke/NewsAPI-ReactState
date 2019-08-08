import React from "react";
import contentStyles from "../styles/Content.module.css";

const Content = props => {
  const { content, loading } = props;
  console.log(content);

  return (
    <div>
      {!loading
        ? content.articles.map((item, index) => (
            <div key={index}>
              <h3>{item.title.toUpperCase()}</h3>
              <img
                // src={item.urlToImage}
                alt="please visit news_api"
                style={{ width: "70%", height: "40%" }}
              />
              <p>{item.description}</p>
              <a href={item.url} target="blank">
                ...full story
              </a>
            </div>
          ))
        : "...loading"}
    </div>
  );
};

export default Content;
