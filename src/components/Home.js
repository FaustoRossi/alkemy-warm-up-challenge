import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import PostItem from "./PostItem";
import Loading from "./Loading";
import axios from "axios";
import NavvBar from "./NavvBar";

function Home() {
  const [post, setPost] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/posts/";
  useEffect(() => {
    axios.get(url, { params: { _limit: 9 } }).then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  }, []);

  return (
    <div>
      <NavvBar />
      {post ? <PostList posts={post} /> : <Loading />}
    </div>
  );
}

export default Home;
