import css from "../assets/img/css-3.png"
import html from "../assets/img/html.png"
import js from "../assets/img/js.png"
import react from "../assets/img/react-logo.png"
import typeScript from "../assets/img/ts.png"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"
import mongo from "../assets/img/mongo.png"
import node from "../assets/img/node.png"
import cpp from "../assets/img/cpp.png"



export const Skills = () => {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>🛠️ Skills</h2>
              <p className=" capitalize">Whats the most important thing after oxygen? to Be industry relevant and have the right skills <br></br> Checkout my skills</p>

              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={900} className="owl-carousel owl-theme skill-slider cursor-pointer">
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JAVA SCRIPT</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>REACT</h5>
                </div>

                <div className="item">
                  <img src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4" alt="Image" />
                  <h5>TAILWIND</h5>
                </div>

                <div className="item">
                  <img src={typeScript} alt="Image" />
                  <h5>TYPESCRIPT</h5>
                </div>

                <div className="item">
                  <img src={cpp} alt="Image" />
                  <h5>C++</h5>
                </div>

                <div className="item">
                  <img src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png" alt="Image" />
                  <h5>GITHUB</h5>
                </div>

                <div className="item">
                  <img src={mongo} alt="Image" />
                  <h5>MONGO DB</h5>
                </div>

                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>NODE JS</h5>
                </div>

              </Carousel>


            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

/*
 <div className="item">
                  <img src={solidity} alt="Image" />
                  <h5>SOLIDITY</h5>
                </div>
*/