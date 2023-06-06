import React, { useState } from "react";
import "./../services/Services.scss";
import { servicesApi } from "./ServicesApi";

const Services = () => {
  const [services, setServices] = useState(servicesApi);
  return (
    <div className="services" id="services">
      <h1 className="main_heading text-center">What I Do?</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 main_row mt-5">
          {services.map((ser_val) => {
            const {id,logo,name,percent}=ser_val;
            return (
            <div className="col individual_skill" key={id}>
              <div className="card m-4 py-4" data-aos="fade-in"
              data-aos-duration="4000">
              <i className={logo}></i>
              <h3>{name}</h3>
              {/* <div className="progress w-50">
                <div
                  className={`progress-bar progress-bar-striped progress-bar-animated ${bg}`}
                  role="progressbar"
                  aria-label="Default striped example"
                  style={{ width: "50%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div> */}
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default Services;
