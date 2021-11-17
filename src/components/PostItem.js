import React from "react";
import { Container, Accordion } from "react-bootstrap";
function PostItem({ title }) {
  return (
    <div>
      <Container className="mt-3">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{title.title}</Accordion.Header>
            <Accordion.Body>{title.body}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default PostItem;
