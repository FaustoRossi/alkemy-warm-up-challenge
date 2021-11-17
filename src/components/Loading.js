import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div>
      <Spinner
        className="position-absolute top-50 start-50"
        animation="border"
        variant="dark"
      />
    </div>
  );
}

export default Loading;
