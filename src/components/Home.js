import React, { useState, useEffect } from "react";
import PostList from "./PostList";

import Loading from "./Loading";
import axios from "axios";
import NavvBar from "./NavvBar";

function Home() {
  const [post, setPost] = useState(null);
  const [updateList, setUpdateList] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/posts/";

  useEffect(() => {
    getData().then((res) => {
      setPost(res.data);
    });
  }, [updateList]);

  // La ideas hacer que getData solo cambie cuando se actualida updateList,
  // para eso la llevo al hijo, que la lleva al otro hijo para que updateList sea true al activarse setUpdateList, pero tampoco funcionad

  const getData = async () => {
    const res = await axios.get(url, { params: { _limit: 9 } });
    return res;
  };
  return (
    <div>
      <NavvBar />
      {post ? (
        <PostList
          posts={post}
          setUpdateList={setUpdateList}
          updateList={updateList}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Home;
