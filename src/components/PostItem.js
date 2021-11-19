import React, { useState } from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function PostItem({ post, updateList, setUpdateList, handleOpenModal }) {
  const [dataModal, setDataModal] = useState({});

  const handleDelete = async () => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    console.log("deleted");

    if (res.status === 200) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Post has been deleted",
        showConfirmButton: false,
        timer: 1500,
      });
      setUpdateList(!updateList);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const handleEdit = () => {
    console.log("editando");
    handleOpenModal();
    setDataModal(post);
  };

  return (
    <div>
      <Container className="mt-3">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{post.title}</Accordion.Header>
            <Accordion.Body>{post.body}</Accordion.Body>
            <Accordion.Body className="d-flex justify-content-end ">
              <Button variant="success" className="mx-2" onClick={handleEdit}>
                Edit Post
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Delete Post
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default PostItem;
