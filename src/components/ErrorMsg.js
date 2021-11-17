import React from "react";
import { ErrorMessage } from "formik";

function ErrorMsg({ errMsg }) {
  return (
    <div>
      <ErrorMessage
        name="email"
        component={() => (
          <div
            style={{
              color: "#f50057",
              fontSize: "1rem",
              marginTop: "-15px",
            }}
            className="error"
          >
            {/* prop msj de error de email o password */}
            {errMsg}
          </div>
        )}
      />
    </div>
  );
}

export default ErrorMsg;
