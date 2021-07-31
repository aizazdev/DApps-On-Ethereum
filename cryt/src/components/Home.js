import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { StyleSheet, css } from "aphrodite";
import Welcome from "./Welcome";
import Shoes from "./Shoes";
import Roadmap from "./Roadmap";
import About from "./About";
import Thanks from "./Thanks";
import FAQs from "./FAQs";
import Footer from "./Footer";
const styles = StyleSheet.create({
  hunt: {
    height: "auto",
    minHeight: "55vw",
    background: ' url("/images/bg1x_1.jpg")',
    backgroundPosition: "50% 100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#fff"
  }
});
const Home = () => {
  const [offset, setOffset] = useState(0);
  //  passive events

  const heroNextRef = useRef(null);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(heroNextRef.current.getBoundingClientRect().y);
      const transform =
        14 + -heroNextRef.current.getBoundingClientRect().y / 1120;
      const skew = 1.9 + -heroNextRef.current.getBoundingClientRect().y / 1120;
      document.querySelector(".back").style.transform = `translate3d(0px, ${
        transform < 15 ? transform : 15
      }%, 0px) scale3d(${skew < 2 ? skew : 2}, ${
        skew < 2 ? skew : 2
      }, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      // console.log(skew - 1.9);
    };
  }, [offset]);
  return (
    <div className="home">
      <Navbar home={true} />
      <div ref={heroNextRef} className="hero-section">
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
      </div>
      <Thanks />
      <div className="container">
        <div className="first-section">
          <h1>You have arrived at the right place</h1>

          <p>
            GVP is a unique collection of shoes, which each can be one in three
            different characters with different traits and strengths.
          </p>
          <p>
            We emphasize the bigger picture and are proud to share a whole new
            world with you, where the We emphasize the bigger picture and are
            proud to share a whole new world with you, where the We emphasize
            the bigger picture and are proud to share a whole new world with
            you, where the
          </p>
        </div>
      </div>

      {/*  */}
      <div className="section-text">
        <div className="container">
          <p>
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure. X marks the spot! We’ve hidden a few treasures in
            the park. Grab 3 other new friends for a mythical adventure.
          </p>
        </div>
      </div>

      <div className={`${css(styles.hunt)} hunt`}>
        <div className="container">
          <span className="numberSection">02</span>
          <p className="hunt-text-inner">
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure.
          </p>
        </div>
      </div>
      <div className="section-text">
        <div className="container">
          <p>
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure. X marks the spot! We’ve hidden a few treasures in
            the park. Grab 3 other new friends for a mythical adventure.
          </p>
        </div>
      </div>

      <div className={`${css(styles.hunt)} hunt`}>
        <div className="container">
          <span className="numberSection">03</span>
          <p className="hunt-text-inner">
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure.
          </p>
        </div>
      </div>
      <Welcome />
      <Shoes />
      <Roadmap />
      <About />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
