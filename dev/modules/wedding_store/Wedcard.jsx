import React from 'react'
import { Container, Row, Col, Button} from "react-bootstrap";
import { GiElvenCastle, GiCastle, GiNestedHearts, GiLargeDress } from "react-icons/gi";
import styles from "/styles/vendors/vendor.module.scss";
import Image from "next/image";
import Vector from "public/assests/store/weddingcard.png";
import { AiFillStar, AiOutlineUsergroupAdd } from "react-icons/ai";
import Pagination from 'react-bootstrap/Pagination';
// import Button from "components/form/button";
import stylesButton from "/styles/modal/modal.module.scss";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}
const Wedcard = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col lg={3} className={styles.vendors}>
                        <nav className="navbar-light bg-light">
                            <ul className="navbar-nav flex-column mr-auto">
                                <h1 className="text-center my-5">Categories</h1>

                                <li className={`nav-item active ${styles.actvelink}`}>
                                    <a
                                        className={"nav-link d-flex justify-content-start"}
                                        href="#"
                                    >
                                        <GiElvenCastle
                                            className={styles.icon}
                                        />
                                        <span>
                                            Wedding Planner
                                        </span>
                                    </a>
                                </li>
                                <li className={"nav-item active "}>
                                    <a
                                        className={"nav-link d-flex justify-content-start"}
                                        href="#"
                                    >
                                        <GiCastle
                                            className={styles.icon}
                                        />
                                        <span>
                                            Catering ( 11 )
                                        </span>
                                    </a>
                                </li>
                                <li className={"nav-item "}>
                                    <a
                                        className={"nav-link d-flex justify-content-start"}
                                        href="#"
                                    >
                                        <GiNestedHearts
                                            className={styles.icon}
                                        />
                                        <span>
                                            Decoration ( 8 )
                                        </span>
                                    </a>
                                </li>
                                <li className={"nav-item "}>
                                    <a
                                        className={"nav-link d-flex justify-content-start"}
                                        href="#"
                                    >
                                        <GiLargeDress
                                            className={styles.icon}
                                        />
                                        <span>
                                            Dresses ( 55 )
                                        </span>
                                    </a>
                                </li>

                                <li className={"nav-item active "}>
                                    <a
                                        className={"nav-link d-flex justify-content-start"}
                                        href="#"
                                    >
                                        <GiElvenCastle
                                            className={styles.icon}
                                        />
                                        <span>
                                            Venue ( 20 )
                                        </span>
                                    </a>
                                </li>
                            </ul>

                            <div className={styles.colours}>
                                <h3 className='my-5'>Colours</h3>
                                <div className="d-flex">
                                    <div className={`my-2 mx-5 ${styles.circle_blue}`}></div>
                                    <p>Blue</p>
                                </div>
                                <div className="d-flex">
                                    <div className={`my-2 mx-5 ${styles.circle_green}`}></div>
                                    <p>Green</p>
                                </div>
                                <div className="d-flex">
                                    <div className={`my-2 mx-5 ${styles.circle_pink}`}></div>
                                    <p>Pink</p>
                                </div>
                            </div>
                        </nav>

                    </Col>
                    <Col lg={9}>
                        <div className='d-flex align-items-center'>
                            <h1>Shop Our hand crafted Invitations</h1>
                            <h6 className="mt-2 mx-2">(1,000+ relevant results )</h6>
                        </div>
                        <Row>
                            <Col lg={4} md={6} className="my-2">
                                <div className={` ${styles.wed_card}`}>
                                    <Image
                                        src={Vector}
                                        layout="fixed"
                                        width={"280px"}
                                        height={"320px"}
                                        alt="template"
                                    />
                                </div>
                                <div className={`d-flex justify-content-between ${styles.wed_content}`}>
                                    <h1 className='mx-3 my-2'>The Asthetcal</h1>

                                    <div className='d-flex justify-content-end'>
                                        <AiFillStar
                                            className={` my-3 ${styles.star}`}
                                        />
                                        <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>5</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start  my-2">
                                    <h4 className='mx-3'>
                                        $300.00
                                    </h4>
                                    <h6 className="my-1 mx-2">
                                        ( 20% off )
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-start  my-1 mx-3">
                                    <div className={`mx-1 ${styles.circle_blue}`}></div>
                                    <div className={`mx-1 ${styles.circle_green}`}></div>
                                    <div className={`mx-1 ${styles.circle_pink}`}></div>

                                </div>

                                <div className="flex flex-row justify-evenly my-1 mx-1">
                                    <div>
                                        <Button className={stylesButton.btn} variant="danger">Buy Now</Button>
                                    </div>

                                    <div >
                                        <Button className={stylesButton.btn} variant="danger" >Add to Cart</Button>
                                    </div>

                                </div>

                            </Col>
                            <Col lg={4} md={6} className="my-2">
                                <div className={`${styles.wed_card}`}>
                                    <Image
                                        src={Vector}
                                        layout="fixed"
                                        width={"280px"}
                                        height={"320px"}
                                        alt="template"
                                    />
                                </div>
                                <div className={`d-flex justify-content-between ${styles.wed_content}`}>
                                    <h1 className='mx-3 my-2'>The Asthetcal</h1>

                                    <div className='d-flex justify-content-end'>
                                        <AiFillStar
                                            className={` my-3 ${styles.star}`}
                                        />
                                        <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>5</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start  my-2">
                                    <h4 className='mx-3'>
                                        $300.00
                                    </h4>
                                    <h6 className="my-1 mx-2">
                                        ( 20% off )
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-start  my-1 mx-3">
                                    <div className={`mx-1 ${styles.circle_blue}`}></div>
                                    <div className={`mx-1 ${styles.circle_green}`}></div>
                                    <div className={`mx-1 ${styles.circle_pink}`}></div>

                                </div>

                                <div className="flex flex-row justify-evenly my-1 mx-1">
                                    <div>
                                        <Button className={stylesButton.btn} variant="danger">Buy Now</Button>
                                    </div>

                                    <div >
                                        <Button className={stylesButton.btn} variant="danger" >Add to Cart</Button>
                                    </div>

                                </div>

                            </Col>
                            <Col lg={4} md={6} className="my-2">
                                <div className={`${styles.wed_card}`}>
                                    <Image
                                        src={Vector}
                                        layout="fixed"
                                        width={"280px"}
                                        height={"320px"}
                                        alt="template"
                                    />
                                </div>
                                <div className={`d-flex justify-content-between ${styles.wed_content}`}>
                                    <h1 className='mx-3 my-2'>The Asthetcal</h1>

                                    <div className='d-flex justify-content-end'>
                                        <AiFillStar
                                            className={` my-3 ${styles.star}`}
                                        />
                                        <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>5</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start  my-2">
                                    <h4 className='mx-3'>
                                        $300.00
                                    </h4>
                                    <h6 className="my-1 mx-2">
                                        ( 20% off )
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-start  my-1 mx-3">
                                    <div className={`mx-1 ${styles.circle_blue}`}></div>
                                    <div className={`mx-1 ${styles.circle_green}`}></div>
                                    <div className={`mx-1 ${styles.circle_pink}`}></div>

                                </div>

                                <div className="flex flex-row justify-evenly my-1 mx-1">
                                    <div>
                                        <Button className={stylesButton.btn} variant="danger">Buy Now</Button>
                                    </div>

                                    <div >
                                        <Button className={stylesButton.btn} variant="danger" >Add to Cart</Button>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={4} md={6} className="my-2">
                                <div className={` ${styles.wed_card}`}>
                                    <Image
                                        src={Vector}
                                        layout="fixed"
                                        width={"280px"}
                                        height={"320px"}
                                        alt="template"
                                    />
                                </div>
                                <div className={`d-flex justify-content-between ${styles.wed_content}`}>
                                    <h1 className='mx-3 my-2'>The Asthetcal</h1>

                                    <div className='d-flex justify-content-end'>
                                        <AiFillStar
                                            className={` my-3 ${styles.star}`}
                                        />
                                        <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>5</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start  my-2">
                                    <h4 className='mx-3'>
                                        $300.00
                                    </h4>
                                    <h6 className="my-1 mx-2">
                                        ( 20% off )
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-start  my-1 mx-3">
                                    <div className={`mx-1 ${styles.circle_blue}`}></div>
                                    <div className={`mx-1 ${styles.circle_green}`}></div>
                                    <div className={`mx-1 ${styles.circle_pink}`}></div>

                                </div>

                                <div className="flex flex-row justify-evenly my-1 mx-1">
                                    <div>
                                        <Button className={stylesButton.btn} variant="danger">Buy Now</Button>
                                    </div>

                                    <div >
                                        <Button className={stylesButton.btn} variant="danger" >Add to Cart</Button>
                                    </div>

                                </div>

                            </Col>
                            <Col lg={4} md={6} className="my-2">
                                <div className={`${styles.wed_card}`}>
                                    <Image
                                        src={Vector}
                                        layout="fixed"
                                        width={"280px"}
                                        height={"320px"}
                                        alt="template"
                                    />
                                </div>
                                <div className={`d-flex justify-content-between ${styles.wed_content}`}>
                                    <h1 className='mx-3 my-2'>The Asthetcal</h1>

                                    <div className='d-flex justify-content-end'>
                                        <AiFillStar
                                            className={` my-3 ${styles.star}`}
                                        />
                                        <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>5</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start  my-2">
                                    <h4 className='mx-3'>
                                        $300.00
                                    </h4>
                                    <h6 className="my-1 mx-2">
                                        ( 20% off )
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-start  my-1 mx-3">
                                    <div className={`mx-1 ${styles.circle_blue}`}></div>
                                    <div className={`mx-1 ${styles.circle_green}`}></div>
                                    <div className={`mx-1 ${styles.circle_pink}`}></div>

                                </div>

                                <div className="flex flex-row justify-evenly my-1 mx-1">
                                    <div>
                                        <Button className={stylesButton.btn} variant="danger">Buy Now</Button>
                                    </div>

                                    <div >
                                        <Button className={stylesButton.btn} variant="danger" >Add to Cart</Button>
                                    </div>

                                </div>

                            </Col>
                            <Col lg={4} md={6} className="my-2">
                                <div className={`${styles.wed_card}`}>
                                    <Image
                                        src={Vector}
                                        layout="fixed"
                                        width={"280px"}
                                        height={"320px"}
                                        alt="template"
                                    />
                                </div>
                                <div className={`d-flex justify-content-between ${styles.wed_content}`}>
                                    <h1 className='mx-3 my-2'>The Asthetcal</h1>

                                    <div className='d-flex justify-content-end'>
                                        <AiFillStar
                                            className={` my-3 ${styles.star}`}
                                        />
                                        <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>5</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start  my-2">
                                    <h4 className='mx-3'>
                                        $300.00
                                    </h4>
                                    <h6 className="my-1 mx-2">
                                        ( 20% off )
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-start  my-1 mx-3">
                                    <div className={`mx-1 ${styles.circle_blue}`}></div>
                                    <div className={`mx-1 ${styles.circle_green}`}></div>
                                    <div className={`mx-1 ${styles.circle_pink}`}></div>

                                </div>

                                <div className="flex flex-row justify-evenly my-1 mx-1">
                                    <div>
                                        <Button className={stylesButton.btn} variant="danger">Buy Now</Button>
                                    </div>

                                    <div >
                                        <Button className={stylesButton.btn} variant="danger" >Add to Cart</Button>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={4} md={6} className="my-2">
                                <div className={` ${styles.wed_card}`}>
                                    <Image
                                        src={Vector}
                                        layout="fixed"
                                        width={"280px"}
                                        height={"320px"}
                                        alt="template"
                                    />
                                </div>
                                <div className={`d-flex justify-content-between ${styles.wed_content}`}>
                                    <h1 className='mx-3 my-2'>The Asthetcal</h1>

                                    <div className='d-flex justify-content-end'>
                                        <AiFillStar
                                            className={` my-3 ${styles.star}`}
                                        />
                                        <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>5</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start  my-2">
                                    <h4 className='mx-3'>
                                        $300.00
                                    </h4>
                                    <h6 className="my-1 mx-2">
                                        ( 20% off )
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-start  my-1 mx-3">
                                    <div className={`mx-1 ${styles.circle_blue}`}></div>
                                    <div className={`mx-1 ${styles.circle_green}`}></div>
                                    <div className={`mx-1 ${styles.circle_pink}`}></div>

                                </div>

                                <div className="flex flex-row justify-evenly my-1 mx-1">
                                    <div>
                                        <Button className={stylesButton.btn} variant="danger">Buy Now</Button>
                                    </div>

                                    <div >
                                        <Button className={stylesButton.btn} variant="danger" >Add to Cart</Button>
                                    </div>

                                </div>

                            </Col>
                            <Col lg={4} md={6} className="my-2">
                                <div className={`${styles.wed_card}`}>
                                    <Image
                                        src={Vector}
                                        layout="fixed"
                                        width={"280px"}
                                        height={"320px"}
                                        alt="template"
                                    />
                                </div>
                                <div className={`d-flex justify-content-between ${styles.wed_content}`}>
                                    <h1 className='mx-3 my-2'>The Asthetcal</h1>

                                    <div className='d-flex justify-content-end'>
                                        <AiFillStar
                                            className={` my-3 ${styles.star}`}
                                        />
                                        <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>5</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start  my-2">
                                    <h4 className='mx-3'>
                                        $300.00
                                    </h4>
                                    <h6 className="my-1 mx-2">
                                        ( 20% off )
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-start  my-1 mx-3">
                                    <div className={`mx-1 ${styles.circle_blue}`}></div>
                                    <div className={`mx-1 ${styles.circle_green}`}></div>
                                    <div className={`mx-1 ${styles.circle_pink}`}></div>

                                </div>

                                <div className="flex flex-row justify-evenly my-1 mx-1">
                                    <div>
                                        <Button className={stylesButton.btn} variant="danger">Buy Now</Button>
                                    </div>

                                    <div >
                                        <Button className={stylesButton.btn} variant="danger" >Add to Cart</Button>
                                    </div>

                                </div>

                            </Col>
                            <Col lg={4} md={6} className="my-2">
                                <div className={`${styles.wed_card}`}>
                                    <Image
                                        src={Vector}
                                        layout="fixed"
                                        width={"280px"}
                                        height={"320px"}
                                        alt="template"
                                    />
                                </div>
                                <div className={`d-flex justify-content-between ${styles.wed_content}`}>
                                    <h1 className='mx-3 my-2'>The Asthetcal</h1>

                                    <div className='d-flex justify-content-end'>
                                        <AiFillStar
                                            className={` my-3 ${styles.star}`}
                                        />
                                        <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>5</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <h4 className='mx-3'>
                                        $300.00
                                    </h4>
                                    <h6 className="my-1 mx-2">
                                        ( 20% off )
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-start  my-1 mx-3">
                                    <div className={`mx-1 ${styles.circle_blue}`}></div>
                                    <div className={`mx-1 ${styles.circle_green}`}></div>
                                    <div className={`mx-1 ${styles.circle_pink}`}></div>
                                </div>

                                <div className="flex flex-row justify-evenly my-1 mx-1">
                                    <div>
                                        <Button className={stylesButton.btn} variant="danger">Buy Now</Button>
                                    </div>

                                    <div >
                                        <Button className={stylesButton.btn} variant="danger" >Add to Cart</Button>
                                    </div>

                                </div>

                            </Col>
                            <Col lg={12} className="">
                                <div className="d-flex justify-content-end p-5">
                                    <Pagination size="md">{items}</Pagination>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Wedcard