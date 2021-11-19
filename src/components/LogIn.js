import { Formik, Field, Form } from "formik";
import React, { useEffect } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import ErrorMsg from "./ErrorMsg";
import axios from "axios";

import catProfile from "../assets/cat-profile.png";
import security from "../assets/security.png";

function LogIn() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.assign("/home");
    }
  }, []);
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          let error = {};

          if (values.email !== "challenge@alkemy.org") {
            error.email = "Please introduce the valid email address";
          }
          if (values.password !== "react") {
            error.password = "Password not authorized";
          }

          return error;
        }}
        onSubmit={(values) => {
          console.log("enviado");
          axios
            .post("http://challenge-react.alkemy.org", values)
            .then((res) => {
              console.log(res.data.token);
              localStorage.setItem("token", res.data.token);
              window.location.assign("/home");
            })
            .catch((err) => {
              alert("Incorrect Data");
              console.log(err);
            });
        }}
      >
        {({ errors }) => (
          <Container className=" mt-5">
            <Row>
              <Col lg={4} md={6} sm={12} className="mt-5 p-3">
                <Col className="text-center">
                  <Image
                    src={catProfile}
                    alt="user "
                    style={{
                      width: "6rem",
                      height: "6rem",
                    }}
                  />
                </Col>

                <Form>
                  <div className="mb-3" controlId="formBasicEmail">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <Field
                      placeholder="challenge@alkemy.com"
                      id="email"
                      name="email"
                      type="text"
                      className="form-control shadow-none"
                    />
                  </div>
                  <ErrorMsg errMsg={errors.email} />
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="form-control shadow-none"
                      placeholder="react"
                    />
                  </div>
                  <ErrorMsg errMsg={errors.password} />
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">
                      Log In
                    </Button>
                  </div>
                  <div className="text-muted">Powered by Catnip Inc.™</div>
                </Form>
              </Col>
              <Col lg={8} md={6} sm={12}>
                <Image src={security} className="w-100" />
              </Col>
            </Row>
          </Container>
        )}
      </Formik>
    </>
  );
}

export default LogIn;
