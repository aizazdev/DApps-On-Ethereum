import { Container, Tab, Tabs } from "react-bootstrap";
import React, { useState } from "react";
import { fadeInUp, fadeIn } from "react-animations";
// import { Nav } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { StyleSheet, css } from "aphrodite";
// const fadeInSlideDown = merge(slideInDown);
const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeIn,
    animationDuration: "1s"
  },
  fadeInUpD: {
    animationName: fadeInUp,
    animationDuration: "1s"
  }
});
const Roadmap = () => {
  const [key, setKey] = useState("60");
  return (
    <Container name="roadmap" className="mt-4 roadmap">
      <h1 id="roadmap" class="text-center my-4 heading-9">
        Roadmap
      </h1>
      {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first"> */}
      {/* <img src="images/girl.png" alt=""></img> */}
      <div className="roadmap-paralax">
        <div className="status-icons">
          <div class="status-block w-clearfix mb-4">
            {key === "100" && (
              <div class="activity-icon full flexed ">
                <div class="small-line white"></div>
                <div class="small-line v2 white"></div>
                <div class="small-line v3 white"></div>
                <div class="small-line v4 white"></div>
              </div>
            )}

            {key === "90" && (
              <div class="activity-icon full v3">
                <div
                  style={{ width: 5, height: 5 }}
                  class="small-line white"
                ></div>
                <div
                  style={{ width: 5, height: 5 }}
                  class="small-line v2 white"
                ></div>
                <div
                  style={{ width: 5, height: 5 }}
                  class="small-line v3 white"
                ></div>
                {/* <div class="small-line v4 white"></div> */}
              </div>
            )}
            {key === "80" && (
              <div class="activity-icon no-rotation mountain">
                <div class="triangle white"></div>
                <div class="triangle v2 white"></div>
              </div>
            )}
            {key === "70" && (
              <div class="activity-icon flexed">
                <div class="circle white"></div>
              </div>
            )}
            {key === "60" && (
              <div class="activity-icon flexed no-rotation">
                <div class="half-circle white"></div>
                <div class="half-circle rotated white"></div>
              </div>
            )}
            {key === "40" && (
              <div class="activity-icon flexed no-rotation downCircles">
                <div class="half-circle rotated v3 white"></div>
                <div class="half-circle rotated v2 white"></div>
              </div>
            )}
            {key === "30" && (
              <div class="activity-icon flexed no-rotation downCircles">
                <div class="half-circle rotated v3 white"></div>
                <div class="half-circle rotated v2 white"></div>
              </div>
            )}
            {key === "20" && (
              <div class="activity-icon flexed no-rotation downCircles">
                <div class="half-circle rotated v3 white"></div>
                <div class="half-circle rotated v2 white"></div>
              </div>
            )}
            {key === "10" && (
              <div class="activity-icon flexed no-rotation downCircles">
                <div class="half-circle rotated v3 white"></div>
                <div class="half-circle rotated v2 white"></div>
              </div>
            )}
          </div>
        </div>
        <Parallax
          style={{ hieght: "114vh" }}
          bgImage={"images/girl.png"}
          strength={-150}
        >
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab
              eventKey={100}
              title={
                <div className="tab-container">
                  <div class="activity-icon full flexed">
                    <div class="small-line"></div>
                    <div class="small-line v2"></div>
                    <div class="small-line v3"></div>
                    <div class="small-line v4"></div>
                  </div>
                  <div class="tab-text">100%</div>
                </div>
              }
            >
              <h2 className={`mb-3 ${css(styles.fadeInUp)}`}>100%</h2>
              <p className={`tab-p ${css(styles.fadeInUpD)}`}>
                X marks the spot! We’ve hidden a few treasures in the park. Grab
                3 other new friends for a mythical adventure. We've placed some
                exclusive Epic gear around the park. Hike, explore, be the first
                to find the treasure. X marks the spot! We’ve hidden a few
                treasures in the park. Grab 3 other new friends for a mythical
                adventure.X marks the spot! We’ve hidden a few treasures in the
                park. Grab 3 other new friends for a mythical adventure. We've
                placed some exclusive Epic gear around the park. Hike, explore,
                be the first to find the treasure. X marks the spot! We’ve
                hidden a few treasures in the park. Grab 3 other new friends for
                a mythical adventure.
              </p>
            </Tab>
            <Tab
              eventKey={90}
              title={
                <div className="tab-container">
                  <div class="activity-icon">
                    <div class="dot _2"></div>
                    <div class="dot _3"></div>
                    <div class="dot"></div>
                  </div>
                  <div class="tab-text">90%</div>
                </div>
              }
            >
              <h2 className={`mb-3 ${css(styles.fadeInUp)}`}>Rock Climbing</h2>
              <p className={`tab-p ${css(styles.fadeInUpD)}`}>
                Y'all might have heard about El Cap, right? Be part of the
                legend that is Yosemite. Create your own legend with friends as
                you climb some of the best in the world.
              </p>
            </Tab>
            <Tab
              eventKey={80}
              title={
                <div className="tab-container">
                  <div class="activity-icon no-rotation">
                    <div class="triangle"></div>
                    <div class="triangle v2"></div>
                  </div>
                  <div class="tab-text">80%</div>
                </div>
              }
            >
              <h2 className={`mb-3 ${css(styles.fadeInUp)}`}>
                Mountain Biking
              </h2>
              <p className={`tab-p ${css(styles.fadeInUpD)}`}>
                Epic ascents and views make for an epic decent down the Sierras.
              </p>
            </Tab>
            <Tab
              eventKey={70}
              title={
                <div className="tab-container">
                  <div class="activity-icon flexed">
                    <div class="circle"></div>
                  </div>
                  <div class="tab-text">70%</div>
                </div>
              }
            >
              <h2 className={`mb-3 ${css(styles.fadeInUp)}`}>
                Treasure Hunting
              </h2>
              <p className={`tab-p ${css(styles.fadeInUpD)}`}>
                You read the section above right?&nbsp;
                <br />
                Who doesn't love treasure?
              </p>
            </Tab>

            <Tab
              eventKey={60}
              title={
                <div className="tab-container">
                  <div class="activity-icon flexed no-rotation">
                    <div class="half-circle"></div>
                    <div class="half-circle rotated"></div>
                  </div>
                  <div class="tab-text">60%</div>
                </div>
              }
            >
              <h2 className={`mb-3 ${css(styles.fadeInUp)}`}>Fishing</h2>
              <p className={`tab-p ${css(styles.fadeInUpD)}`}>
                I'm on the hook to write about fishing.
                <br />I don't fish so I better reel in my
                <br />
                puns. Seriously, Dann is going to
                <br />
                tackle me for how fishy this
                <br />
                description is.
              </p>
            </Tab>
            <Tab
              eventKey={50}
              title={
                <div className="tab-container">
                  <div class="activity-icon flexed no-rotation">
                    <div class="half-circle rotated v3"></div>
                    <div class="half-circle rotated v2"></div>
                  </div>
                  <div class="tab-text">50%</div>
                </div>
              }
            >
              <h2 className={`mb-3 ${css(styles.fadeInUp)}`}>Kayaking</h2>
              <p className={`tab-p ${css(styles.fadeInUpD)}`}>
                Explore the grandeur of Yosemite with a refreshing padding.
              </p>
            </Tab>
            <Tab
              eventKey={40}
              title={
                <div className="tab-container">
                  <div class="activity-icon flexed no-rotation">
                    <div class="half-circle rotated v3"></div>
                    <div class="half-circle rotated v2"></div>
                  </div>
                  <div class="tab-text">40%</div>
                </div>
              }
            >
              <h2 className={`mb-3 ${css(styles.fadeInUp)}`}>Kayaking</h2>
              <p className={`tab-p ${css(styles.fadeInUpD)}`}>
                Explore the grandeur of Yosemite with a refreshing padding.
              </p>
            </Tab>
            <Tab
              eventKey={30}
              title={
                <div className="tab-container">
                  <div class="activity-icon flexed no-rotation">
                    <div class="half-circle rotated v3"></div>
                    <div class="half-circle rotated v2"></div>
                  </div>
                  <div class="tab-text">30%</div>
                </div>
              }
            >
              <h2 className={`mb-3 ${css(styles.fadeInUp)}`}>Kayaking</h2>
              <p className={`tab-p ${css(styles.fadeInUpD)}`}>
                Explore the grandeur of Yosemite with a refreshing padding.
              </p>
            </Tab>
            <Tab
              eventKey={20}
              title={
                <div className="tab-container">
                  <div class="activity-icon flexed no-rotation">
                    <div class="half-circle rotated v3"></div>
                    <div class="half-circle rotated v2"></div>
                  </div>
                  <div class="tab-text">20%</div>
                </div>
              }
            >
              <h2 className={`mb-3 ${css(styles.fadeInUp)}`}>Kayaking</h2>
              <p className={`tab-p ${css(styles.fadeInUpD)}`}>
                Explore the grandeur of Yosemite with a refreshing padding.
              </p>
            </Tab>
            <Tab
              eventKey={10}
              title={
                <div className="tab-container">
                  <div class="activity-icon flexed no-rotation">
                    <div class="half-circle rotated v3"></div>
                    <div class="half-circle rotated v2"></div>
                  </div>
                  <div class="tab-text">10%</div>
                </div>
              }
            >
              <h2 className={`mb-3 ${css(styles.fadeInUp)}`}>Kayaking</h2>
              <p className={`tab-p ${css(styles.fadeInUpD)}`}>
                Explore the grandeur of Yosemite with a refreshing padding.
              </p>
            </Tab>
          </Tabs>
          {/* <div className="tabs-head">
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <div class="activity-icon full flexed">
                      <div class="small-line"></div>
                      <div class="small-line v2"></div>
                      <div class="small-line v3"></div>
                      <div class="small-line v4"></div>
                    </div>
                    <div class="tab-text">100%</div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="tabs-content">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h1>dfsd</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h1>dfsd</h1>
                </Tab.Pane>
              </Tab.Content>
            </div> */}
        </Parallax>
      </div>
      {/*  </Tab.Container> */}
    </Container>
  );
};

export default Roadmap;
