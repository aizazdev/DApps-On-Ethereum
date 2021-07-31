import React from "react";
import { StyleSheet, css } from "aphrodite";

const opacityKeyframes = {
  from: {
    backgroundSize: "40%"
  },
  to: {
    backgroundSize: "10%"
  }
};

const styles = StyleSheet.create({
  h1: {
    animationName: [opacityKeyframes],
    background: 'url("images/bg1x.jpg")',
    backgroundSize: "40%",
    backgroundPosition: "50% 50%",
    "-webkit-background-clip": "text",
    animationDuration: "3s, 1200ms",
    animationIterationCount: "infinite",
    animationDelay: "500ms"
    // animatio
    // animation: zoomout 10s ease 500ms forwards;
  }
});
const Thanks = () => {
  return (
    <div>
      <h1 className={`black-lives-matter p-4 ${css(styles.h1)}`}>
        I offer Front-End And DApp Development
      </h1>
    </div>
  );
};

export default Thanks;
