import React from "react";
import "./../about/About.scss";

const About = () => {
  return (
    <div className="about py-5  text-center" id="about" >
      <h1 className="mb-3 main_heading" data-aos="zoom-in"> <span>Who</span> Am I <span>?</span> </h1>
      <h1 className="position" data-aos="fade-in">" WEB DEVELOPER "</h1>
       <p className="text-white description" data-aos="fade-up">
            Hello!! I'm a professional Web developer. As a skilled web developer, I specialize in creating
            user-friendly, responsive, and visually appealing websites that are
            optimized for search engines and built to your specific
            requirements. I have 2+ years of experience in Web development
            field. I'm experts in MERN stack projects, converting XD, PSD, Figma
            to HTML, CSS, JavaScript, Bootstrap, ReactJs, Responsive, pixel
            perfect. I assure a 100% quality website as website developer and designer.
          </p>
          <div className="bottom" data-aos="flip-down">
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default About;
