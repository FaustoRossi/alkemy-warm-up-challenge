import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import Loading from "./Loading";
import axios from "axios";
import NavvBar from "./NavvBar";

function Home() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  });

  return (
    <div>
      <NavvBar />
      {post ? <PostList titles={post} /> : <Loading />}
    </div>
  );
}

export default Home;
