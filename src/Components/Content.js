import React from "react";
import contentStyles from "../styles/Content.module.css";
import giphy from "./images/giphy.gif";
import showMore from "./images/images2.png";

const Content = props => {
  const { content, loading, heading } = props;
  console.log(content);
  return (
    <div style={contentStyles.body}>
      <h2>{heading && `Latest Happenings in ${heading}`}</h2>
      {!loading ? (
        content.articles.map((item, index) => (
          <div style={contentStyles.content} key={index}>
            <h4>{item.title.toUpperCase()}</h4>
            <img
              src={item.urlToImage}
              alt="please visit news_api"
              style={{ width: "70%", height: "40%" }}
            />
            <p>
              {item.description} &nbsp;
              <a href={item.url} target="blank">
                <img src={showMore} alt="" style={{ width: "1.5%" }} />
              </a>
            </p>
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
