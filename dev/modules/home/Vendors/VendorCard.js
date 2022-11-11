import React from 'react'
import Image from "next/image";
import styles from "/styles/home/Index.module.scss";

const VendorCard = (props) => {
  return (
    <>
        <div className={` ${styles.box}`}>
        <Image
       src={props.imgsrc} 
       width={"250px"}
       height={"350px"}
       layout="responsive"
       alt="template" 
       />
        </div>
        <p className={`text-center ${styles.cardtitle}`}>{props.title}</p>
    </>
  )
}

export default VendorCard