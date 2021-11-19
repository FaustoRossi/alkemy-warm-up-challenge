import React, { useState } from "react";
import NavvBar from "./NavvBar";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";
import { Form, Container, Button } from "react-bootstrap";

function PostCreate() {
  const [data, setData] = useState({ title: "", body: "" });

  const history = useHistory();

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const URL = "https://jsonplaceholder.typicode.com/posts/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("enviado");

    await axios.post(URL, data).then((res) => {
      console.log(res);
      if (res.status === 201) {
        Swal.fire("Posted!", "New post added", "success");

        history.push("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
  };

  return (
    <div>
      <NavvBar />
      <Container className="w-50 my-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={data.title}
              onChange={handleChange}
              type="text"
              placeholder="Place your title here"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Body</Form.Label>
            <Form.Control
              name="body"
              value={data.body}
              onChange={handleChange}
              as="textarea"
              rows={3}
              placeholder="Write the body of your text here"
              required
            />
          </Form.Group>
          <Button type="submit" value="Submit">
            Submit new post
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default PostCreate;
