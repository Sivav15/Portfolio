import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Element } from "react-scroll";
import "./About.css";
function About() {
  const para = [
    "Hi Everyone, I am **Sivanathan V** from **Salem, India**.",
    "I am an innovative and dedicated **hardworking MERN stack developer** with **hands-on experience in developing web applications**.",
    "I have passion for **developing scalable web application** and working across the full stack.",
    "**I spend most days learning** and **building up**, either start it from **scratch or adding some customized features and functionality for outdated websites to make them shine** again.",
  ];

  return (
    <Element id="about">
      <div className="about-main">
        <div className="about">
          <div className="row a_contains mx-auto">
            <div className=" col-sm-12 col-md-12 col-lg-6  about-left-contain">
              <img
                src="https://www.roessner.tech/static/media/about.d8fe852f6a9badcd8616.png"
                alt="about"
              />
            </div>
            <div className=" col-sm-12 col-md-12 col-lg-6 about-right-contain">
              <h2>
                Know Who I <span className="about-highlight">I'M</span>
              </h2>
              {para.map((para, index) => {
                return (
                  <p key={index}>
                    <ReactMarkdown
                      components={{
                        strong: ({ node, ...props }) => (
                          <span className="about-highlight" {...props} />
                        ),
                      }}
                      children={para}
                    />
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
