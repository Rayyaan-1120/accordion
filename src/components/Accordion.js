import React, { useState } from "react";
import styles from "./accordion.module.css";
import star from "../assets/ant-design_star-filled.svg";
import arrow from "../assets/ep_d-arrow-right.svg";

function Accordion({ initial, bgGradient, title, url, rating, children }) {
  const [isOpen, setisOpen] = useState(false);

  const [ratingState, setRatingState] = useState(rating);

  return (
    <div className={styles.accordion}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <div
            className={styles.gradientDiv}
            style={{
              background: bgGradient,
            }}
          >
            {initial}
          </div>
          <div className={styles.titleDiv}>
            <h3>{title}</h3>
            <p>{url}</p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={styles.ratingContainer}>
            <div className={styles.ratingStat}>
              <p>Overall Rating</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={star} style={{ marginRight: 3 }} />
                <p>{ratingState}/5</p>
              </div>
            </div>
            <div className={styles.ratingBar}>
              <div
                className={styles.ratingBarFilled}
                style={{ width: `${ratingState * 20}%` }}
              />
            </div>
          </div>
        </div>
        <div className={styles.collapseButtonContainer}>
          <div
            className={styles.collapseButton}
            onClick={() => setisOpen(!isOpen)}
          >
            <p>See details</p>
            <img src={arrow} aria-expanded={isOpen} />
          </div>
        </div>
      </div>
      <div className={styles.accordionContent} aria-expanded={!isOpen}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;
