/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Col, Container, Row ,Button} from 'react-bootstrap'
import MyCarousel from './MyCarousel';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import style from "/styles/Rsvp/Rsvp.module.scss";
import styles from "/styles/asthetical/aesthetical.module.scss";
import Image from "next/image";
import Img from "public/assests/asthetical/ant_design.svg";


const Asthetical = () => {
    const React = require('react');
    const ReactDOM = require('react-dom');

    return (
        <div>
            <Container>
                <Row><Col lg={12} className={` ${style.banner}`}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#" className={style.brdcrumb}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" className={style.brdcrumb}>Template</Breadcrumb.Item>
                        <Breadcrumb.Item active className={style.actbrdcrumb}>Asthetical</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                    <Col lg={6}>
                        <MyCarousel />
                    </Col>
                    <Col lg={6}  className={`px-3 ${styles.asthetical}`}>
                        <div className="d-flex">
                        <h2>The Asthetical</h2>
                        <h6 className="my-4 mx-3">Starting from <span> $29</span></h6>
                        </div>
                    <p>Made by Tulba Designers</p>
                    <h5 className='my-5'>What’s good in this ?</h5>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span className={styles.check}>Print on both sides</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span  className={styles.check}>Free Shipping from us</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span  className={styles.check}>Free Envelope</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span  className={styles.check}>Free Addressing</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span className={styles.check}>Matching Cards</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span className={styles.check}>Free Quick Change Date.</span>
                    </div>
                    <div>
                        <Button className={styles.as_btn}>
                            <div className="d-flex justify-content-center">
                            <Image src={Img} />
                            <p className='my-3'>  Get a free sample from us</p>
                            </div>
                            </Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Asthetical