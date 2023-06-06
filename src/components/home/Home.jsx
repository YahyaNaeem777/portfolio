import React from "react";
import "./../home/Home.scss";
// import {AiFillFacebook,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="row">
        <div className="col-md-6 home-left ps-4">
          <div className="headings">
            <p className="hello" data-aos="fade-left">Hello!</p>
            <div className="profession" data-aos="fade-right">
              <span className="im">I'm</span> <br />
              <span className="wd">web Developer</span> <br />
              <span className="yn">Yahya Naeem</span>
            </div>
          </div>
          <p className="description text-white" data-aos="zoom-out">
            I'm Yahya Naeem, a Web Developer, and Web Designer. | love writing
            clean and simple but elegant and effective scipt.Have an impressive
            knowledge of Html, Css, Javascript, Bootstrap, ReactJs, NodeJs,
            ExpressJs, MongoDB, Cloud Firebase. | work hard, try my best and give my 100% to
            make the website visually and functionally perfect.
          </p>
        </div>
        <div className="col-md-6 home-right" data-aos="fade-right">
          <img className="img-fluid" src="Images/profile.png" alt="" />
        </div>
      </div>
      <div className="bottom" data-aos="flip-down">
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Home;
