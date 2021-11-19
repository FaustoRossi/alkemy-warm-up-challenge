import React from "react";

import PostItem from "./PostItem";

function PostList({ posts }) {
  const renderedList = posts.map((post) => {
    return <PostItem post={post} key={post.id} />;
  });

  return <div>{renderedList} </div>;
}

export default PostList;
