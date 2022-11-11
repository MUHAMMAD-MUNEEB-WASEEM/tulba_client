import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
// import Img from "public/assests/RSVP/banner.svg";
import styles from "/styles/Rsvp/Rsvp.module.scss";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import googlelogo from "public/assests/GoogleLogo.svg";
import fb from "public/assests/fb.svg";
import apple from "public/assests/apple.svg";

const Banner = () => {
  return (
    <>
      <Container fluid className="my-5 p-0">
        <Row>
          <Col lg={6} className={` ${styles.banner}`}>
            <Breadcrumb>
              <Breadcrumb.Item href="/" className={styles.brdcrumb}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active className={styles.actbrdcrumb}>Event Planner</Breadcrumb.Item>
            </Breadcrumb>
            <div>
              <div className='d-flex  justify-content-start'>
                <div className={`my-4  ${styles.head_border}`}></div>
                <h5>We got the best tools for your event, so hop on.</h5>
              </div>
              <h1 className="mb-2">Event Planner</h1>
              <p>
                Get Listed all your wedding items and see their progress on the
                go.
              </p>
              <h4 className="my-3">Get Started</h4>
              <Row className={`g-2 mb-2 ${styles.castlebanner}`}>
                <Col md={5} className="btstrp p-0">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Email address">
                    <Form.Control
                      type="email"
                      placeholder="Search Vendors, Catering"
                      className={styles.input}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={5} className="btstrp p-0">
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Select Location"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      className={styles.input}
                    >

                      <option>In (E.g. Karachi)</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md={2} sm={12} className="p-0">
                  <Button className={` ${styles.inputbtn}`}>Start Planning</Button>
                </Col>
              </Row>
            <div className="d-flex justify-content-between">
              <h5>
              You can also sign up using:
              </h5>
              <h5>Already have an account? Log in</h5>
            </div>
              <div className="d-flex">
                <div className={styles.logo}>
                  <Image
                    src={googlelogo}
                    alt="googlelogo"
                    width={"20px"}
                    height={"20px"}
                    loading="lazy"
                  />{" "}
                </div>
                <div  className={styles.logo}>
                  <Image
                    src={fb}
                    alt="googlelogo"
                    width={"20px"}
                    height={"20px"}
                    loading="lazy"
                  />{" "}
                </div>
                <div  className={styles.logo}>
                  <Image
                    src={apple}
                    alt="googlelogo"
                    width={"20px"}
                    height={"20px"}
                    loading="lazy"
                  />{" "}
                </div>
              </div>

            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.banner_img}></div>
            {/* <Image 
            src={Img}
            layout="responsive"
            /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
