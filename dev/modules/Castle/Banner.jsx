import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "/styles/castle/castle.module.scss";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import style from "/styles/Rsvp/Rsvp.module.scss";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Castle_carousel from './Carousel';
import CastleForm from './CastleForm';

const Banner = () => {
    return (
        <>
            <Container className={`my-5 ${styles.castlebanner}`}>
                <Row>
                    <Col lg={6}>
                        <Row className="g-2 my-5">
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
                            <Col md={2} className="p-0">
                                <Button className={`py-3 ${styles.inputbtn}`}>Search here</Button>
                            </Col>
                        </Row>
                            <Breadcrumb className={style.banner}>
                                <Breadcrumb.Item href="#" className={style.brdcrumb}>Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#" className={style.brdcrumb}>Vendors</Breadcrumb.Item>
                                <Breadcrumb.Item active className={style.actbrdcrumb}>The Groomy</Breadcrumb.Item>
                            </Breadcrumb>

                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                <h2>The Groomy Castle</h2>
                </Col>
                <Col lg={6}>
                    <div className="d-flex justify-content-start">
                    <h4>$200</h4>
                    <span>/ PER EVENT</span>
                    </div>
                </Col>
                <Col lg={2}>
                <AiOutlineHeart 
                className={styles.icon}
                />
                </Col>
                <Col lg={6}>
                    <div className="d-flex justify-content-start">
                        <GoLocation 
                        className={styles.map}/>
                        <span>Bekasi, Jawa Barat Hall Al khema</span>
                    </div>
                   </Col>
                   <Col lg={6}> 
                    <div className="d-flex  justify-content-end">
                        <AiFillStar 
                        className={styles.star}
                        />
                        <AiFillStar 
                        className={styles.star}
                        />
                        <AiFillStar 
                        className={styles.star}
                        />
                        <AiFillStar 
                        className={styles.star}
                        />
                        <AiFillStar 
                        className={styles.star}
                        />
                        <p>5</p>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col lg={8}>
                    <Castle_carousel />
                </Col>
                
                <Col lg={4}>
                    <CastleForm />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Banner