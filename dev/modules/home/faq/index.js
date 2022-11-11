import React from 'react'
import Image from "next/image";
import styles from "/styles/home/Index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Faqcard from './faqcard';

const Faq = () => {
  return (
    <>
    
    <Container 
    className="my-5"
    >
        <Row>
          <Col>
          <div className={`my-5 ${styles.faq}`}>
              <h6 className="text-center text-primary">
                Answer to all the main Question are here Or contact us for more
              </h6>
              <h3 className="text-center">Frequently Asked Questions
              </h3>
             <Faqcard/>
             <hr />
             <Faqcard />
             <hr />
             <Faqcard />

            </div>
            </Col>
        </Row>
      </Container>
    
    </>
  )
}

export default Faq