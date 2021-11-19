import React, { useState } from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import axios from "axios";

function PostItem({ post }) {
  return (
    <div>
      <Container className="mt-3">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{post.title}</Accordion.Header>
            <Accordion.Body>{post.body}</Accordion.Body>
            <Accordion.Body className="d-flex justify-content-end ">
              <Button variant="success" className="mx-2">
                Edit Post
              </Button>
              <Button variant="danger">Delete Post</Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default PostItem;
