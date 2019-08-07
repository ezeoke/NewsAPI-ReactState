import React from "react";
import contentStyles from "../styles/Content.module.css";

const Content = props => {
  const { content, loading } = props;
  const loader = (
    <div>
      <div
        class="tenor-gif-embed"
        data-postid="9856796"
        data-share-method="host"
        data-width="100%"
        data-aspect-ratio="1.5"
      >
        <a href="https://tenor.com/view/loading-gif-9856796">Loading GIF</a>{" "}
        from <a href="https://tenor.com/search/loading-gifs">Loading GIFs</a>
      </div>
      <script type="text/javascript" async src="https://tenor.com/embed.js" />
    </div>
  );

  return (
    <div>
      {!loading
        ? content.articles.map((item, index) => (
            <div key={index}>
              <h3>{item.title.toUpperCase()}</h3>
              <img
                src={item.urlToImage}
                alt="please visit news_api"
                style={{ width: "70%", height: "40%" }}
              />
              <p>{item.description}</p>
              <a href={item.url} target="blank">
                ...full story
              </a>
            </div>
          ))
        : loader}
    </div>
  );
};

export default Content;
