import React, { useEffect, useState, useRef } from "react";
import { fadeInDown } from "react-animations";
import { StyleSheet, css } from "aphrodite";
// import { Parallax } from "react-parallax";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const styles = StyleSheet.create({
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: "1s"
  }
});

const Landing = () => {
  const [offset, setOffset] = useState(0);
  //  passive events

  const heroRef = useRef(null);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(heroRef.current.getBoundingClientRect().y);
      const transform = 14 + -heroRef.current.getBoundingClientRect().y / 1120;
      const skew = 1.9 + -heroRef.current.getBoundingClientRect().y / 1120;
      document.querySelector(".back").style.transform = `translate3d(0px, ${
        transform < 15 ? transform : 15
      }%, 0px) scale3d(${skew < 2 ? skew : 2}, ${
        skew < 2 ? skew : 2
      }, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      console.log(skew - 1.9);
    };
  }, [offset]);
  return (
    <div className="landing">
      <Navbar home={false} />
      <div className={`hero-top-cover`}>
        <div className="inner-container">
          <h2 className={`${css(styles.fadeInDown)} heading-3`}>
            Great
            <br />
            to be <span className="text-span-3">back.</span>
          </h2>
          <div className="curved-top"></div>
          <div className="curved-item right">
            <div className="right-side-curve"></div>
          </div>
          <div className="curved-item">
            <div className="left-side-curve"></div>
          </div>
        </div>
      </div>
      <div ref={heroRef} className="hero-section">
        <img
          src="images/back-mobile2x.jpg"
          alt=""
          className="absolute-mobile-hero-bg-image"
        />
        {/* <Parallax
          srcset="images/back-desktop1x-p-500.jpeg 500w, images/back-desktop1x-p-800.jpeg 800w, images/back-desktop1x-p-1600.jpeg 1600w, images/back-desktop1x.jpg 1920w"
          className="back"
          bgImage={"images/back-desktop1x.jpg"}
          strength={-100}
        > */}
        <img className="back" src="images/back-desktop1x.jpg" alt="" />
        {/* </Parallax> */}
        {/* <img className="back" src="images/back-desktop1x.jpg" alt="" /> */}
        <div className="bottom-image-section">
          <img
            src="images/fireplace.png"
            width="800"
            alt="Camp Fire gathering"
            sizes="74vw"
            className="campfire-image"
          />
          <img
            // sizes
            src="images/stones.png"
            sizes="(max-width: 1920px) 100vw, 1920px"
            alt=""
            className="image-2"
          />
        </div>
        <div className="hero-text">
          <h1>
            {" "}
            <span className="bold">Welcome to the</span> place of professional 
          </h1>
          <Link to="/home" className="button-3 w-button">
            Explore
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
