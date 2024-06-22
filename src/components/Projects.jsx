import { Container, Row, Col, Tab, Nav} from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";





// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { ExternalLink } from "react-external-link";

import { Tooltip as ReactTooltip } from "react-tooltip";
import "../../node_modules/react-tooltip/dist/react-tooltip.css";
import marichihome from "../assets/img/marichicover.png";
import marichiabout from "../assets/img/marichiabout.png";
import marichicarrer from "../assets/img/marichicarrer.png";
import marichistrat from "../assets/img/marichistrategy.png";
import zipkarthome from "../assets/img/zipkarthome.png";
import zipkartdashboard from "../assets/img/zipkartdashboard.png";
import zipkartinventory from "../assets/img/zipkartinventory.png";
import zipkartsearch from "../assets/img/zipkartsearch.png";
import zipkartproductmanage from "../assets/img/zipkartprodmanage.png"
import amajihome from "../assets/img/amajihome.png";
import amajiabout from "../assets/img/amajiabout.png";
import amajiproj from "../assets/img/amajiproj.png";
import amajicont from "../assets/img/amajicont.png";

export const Projects = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsArrowRight className=" text-white whiteColor z-50" />,
    prevArrow: <BsArrowLeft className=" text-white whiteColor z-50" />,
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <div className="leverageHold">
                    <p className=" capitalize o">
                      "creating leverage should be the first priority of every
                      Homosapien. that leverage can be anything leverage of
                      time, leverage of money, leverage of skills, or even
                      leverage of your team. As it is the same leverage that can
                      put you way ahead of your competitors" - A lesson from my
                      trading journey.
                    </p>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item className="cursor-pointer">
                        <Nav.Link eventKey="first">MARICHI VENTURES</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="cursor-pointer">
                        <Nav.Link eventKey="second">ZIP-KART</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="cursor-pointer">
                        <Nav.Link eventKey="third">AmaJi</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <div>
                            <Slider {...settings}>
                              <img
                                src={marichihome}
                                className=" rounded-xl mb-8"
                                alt="home"
                              />
                              <img
                                src={marichiabout}
                                className=" rounded-xl mb-8"
                                alt="about"
                              />
                              <img
                                src={marichistrat}
                                className=" rounded-xl mb-8"
                                alt="strategy"
                              />
                              <img
                                src={marichicarrer}
                                className=" rounded-xl mb-8"
                                alt="carrer"
                              />
                            </Slider>

                            <div className=" airbnbIntroHold">
                                <p className="text-[2rem]">
                                  
                                  <ExternalLink
                                    href="https://marichiventures.com/"
                                    className="text-yellow-400 hover:text-yellow-500 uppercase text-xl"
                                  >
                                    {" "}
                                    Visit the deployed Website{" "}
                                  </ExternalLink>
                                  "
                                </p>
                              </div>

                            
                            <ReactTooltip
                              anchorId="github"
                              place="bottom"
                              content="github"
                            />

                            <ReactTooltip
                              anchorId="live"
                              place="bottom"
                              content="live project"
                            />

                            
                          </div>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          <div>
                            <Slider {...settings}>
                              <img src={zipkarthome} className=" rounded-xl mb-8" alt="home"/>
                              <img src={zipkartinventory} className=" rounded-xl mb-8" alt="inventory"/>
                              <img src={zipkartsearch} className=" rounded-xl mb-8" alt="search"/>
                              <img src={zipkartproductmanage} className=" rounded-xl mb-8" alt="manage"/>
                              <img src={zipkartdashboard} className=" rounded-xl mb-8" alt="dashboard"/>
                            </Slider>

                            <div className="flex justify-center ccc">
                             

                              <div className=" airbnbIntroHold">
                                <p className=" capitalize airbnbIntro">
                                  
                                  <ExternalLink
                                    href="https://zipkart-e-commerce.vercel.app/"
                                    className="text-yellow-400 hover:text-yellow-500 uppercase"
                                  >
                                    {" "}
                                    Visit the deployed Website{" "}
                                  </ExternalLink>
                                  "
                                </p>
                              </div>
                            </div>

                            

                            <ReactTooltip
                              anchorId="github2"
                              place="bottom"
                              content="github"
                            />

                            <ReactTooltip
                              anchorId="live2"
                              place="bottom"
                              content="live project"
                            />

                            
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <div>
                            <Slider {...settings}>
                              <img
                                src={amajihome}
                                className=" rounded-xl mb-8"
                                alt="home"
                              />
                              <img
                                src={amajiabout}
                                className=" rounded-xl mb-8"
                                alt="about"
                              />
                              <img
                                src={amajiproj}
                                className=" rounded-xl mb-8"
                                alt="projects"
                              />
                              <img
                                src={amajicont}
                                className=" rounded-xl mb-8"
                                alt="contact"
                              />
                            </Slider>

                            <div className=" airbnbIntroHold">
                                <p className="text-[2rem]">
                                  
                                  <ExternalLink
                                    href="https://amaji.netlify.app/"
                                    className="text-yellow-400 hover:text-yellow-500 uppercase text-xl"
                                  >
                                    {" "}
                                    Visit the deployed Website{" "}
                                  </ExternalLink>
                                  "
                                </p>
                              </div>

                            
                            <ReactTooltip
                              anchorId="github"
                              place="bottom"
                              content="github"
                            />

                            <ReactTooltip
                              anchorId="live"
                              place="bottom"
                              content="live project"
                            />

                            
                          </div>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

/*

{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbSearch,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbCheckout,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbPlaceDetail,
    },

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbPlaceDetail,
    },

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbPlaceDetail,
    },

            */
