import React from "react";

const Content = props => {
  const { content, loading } = props;

  return (
    <div>
      {!loading
        ? content.articles.map(item => (
            <div>
              <h3>{item.title.toUpperCase()}</h3>
              <img
                src={item.urlToImage}
                alt="please visit news_api"
                style={{ width: "70%", height: "40%" }}
              />
              <p>{item.description}</p>
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default Content;
