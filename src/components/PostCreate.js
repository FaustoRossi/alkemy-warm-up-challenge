import React from "react";
import NavvBar from "./NavvBar";
import axios from "axios";
import { Form, Container, Button } from "react-bootstrap";

function PostCreate() {
  const handleSubmit = async () => {
    axios.post("https://jsonplaceholder.typicode.com/posts/").then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <NavvBar />
      <Container className="w-50 my-5">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="email" placeholder="Place your   title here" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write the body of your text here"
            />
          </Form.Group>
        </Form>
        <Button type="submit" value="Submit" onSubmit={handleSubmit}>
          Submit new post
        </Button>
      </Container>
    </div>
  );
}

export default PostCreate;
