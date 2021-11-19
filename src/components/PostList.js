import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import PostItem from "./PostItem";
import Swal from "sweetalert2";

function PostList({ posts, updateList, setUpdateList, post }) {
  const [show, setShow] = useState(false);
  const [dataModal, setDataModal] = useState({ title: "", body: "" });

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  const handleChangeModal = ({ target }) => {
    setDataModal({
      ...dataModal,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${dataModal.id}`,
      dataModal
    );
    if (res.status === 200) {
      Swal.fire("Modified!", "New edit added", "success");
      handleCloseModal();
      setUpdateList(!updateList);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      {posts.map((post) => {
        return (
          <PostItem
            post={post}
            key={post.id}
            updateList={updateList}
            setUpdateList={setUpdateList}
            handleCloseMdal={handleCloseModal}
            handleShowModal={handleShowModal}
            setDataModal={setDataModal}
          />
        );
      })}
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                value={dataModal.title}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>New body</Form.Label>
              <Form.Control
                name="body"
                value={dataModal.body}
                onChange={handleChangeModal}
                as="textarea"
                rows={3}
                type="text"
                required
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>

            <Button variant="success" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default PostList;
