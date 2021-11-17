import React from "react";

import PostItem from "./PostItem";

function TitleList({ titles, bodies }) {
  const renderedList = titles.map((title) => {
    return <PostItem title={title} key={title.id} />;
  });

  return <div>{renderedList}</div>;
}

export default TitleList;
