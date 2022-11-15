import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {MyCard,MyCardBlue,MyCardYellow, MyCardOne} from "./MyCard";
import styles from "/styles/home/Index.module.scss";
import imageone from "public/assests/home_img/Download.svg"
import arabian2 from "public/assests/home_img/arabian.jpg"


const Plan = () => {
  return (
    <>
      <Container  className="my-5">
        <Row className="my-5">
          <Col md={12}>
            <div className={`text-center ${styles.plan}`}>
              <h5>WE got the best tools for your event, so hop on</h5>
              <h1>Tools that make Wedding Plan simple</h1>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <MyCard
              // imgsrc={imageone}
              imgsrc={arabian2}
              
              head="Vendor Search"
              para="Browse through venues, catering, decor & more 
                    with our most economical platform for make your dream
                    wedding comes true."
              btn="Search Vendor"
            />
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
          <MyCardYellow
              imgsrc="/../assests/home_img/temp1.svg"
              head="Event Website"
              para="Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true."
              btn="Create Free Site"
            />
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
          <MyCardBlue
              imgsrc="/../assests/home_img/1-04.svg"
              head="Shop Invitation Card"
              para="Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true."
              btn="Browse Invitation"
            />
          </Col>
        <Col lg={4} md={6} sm={6} xs={6}>
          <MyCardBlue
              imgsrc="/../assests/home_img/1-04.svg"
              head="Nikkah Template"
              para="Browse through venues, catering, decor & more 
                    with our most economical platform for make your dream
                    wedding comes true."
              btn="Browse Card"
            />
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
          <MyCardYellow
              imgsrc="/../assests/home_img/temp1.svg"
              head="Checklist Creation"
              para="Browse through venues, catering, decor & more 
                    with our most economical platform for make your dream
                    wedding comes true."
              btn="Start Planning"
            />
          </Col>
          <Col lg={4} md={6}  sm={6} xs={6}>
            <MyCardOne
              imgsrc="/../assests/home_img/Download.svg"
              head="Guest List/RSVP"
              para="Browse through venues, catering, decor & more 
                    with our most economical platform for make your dream
                    wedding comes true."
              btn="Rsvp Invites"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Plan;
