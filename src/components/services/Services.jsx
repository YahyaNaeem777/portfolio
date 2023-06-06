import React, { useState } from "react";
import "./../services/Services.scss";
import { servicesApi } from "./ServicesApi";

const Services = () => {
  const [services, setServices] = useState(servicesApi);
  return (
    <div className="services" id="services">
      <h1 className="main_heading text-center">My Portfolio</h1>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 main_row mt-5">
          {services.map((ser_val) => {
            const { id, logo, name, description,technology } = ser_val;
            return (
              <div className="col individual_skill" key={id}>
                <div className="card m-4" data-aos="fade-in">
                  <div className="header">
                    <div>
                      <i className="fa-regular fa-folder"></i>
                    </div>
                    {/* <div>
                    <i className="fa-duotone fa-browser"></i>
                    </div> */}
                  </div>
                  <div className="content">
                    <p className="name">{name}</p>
                    <p className="description">{description}</p>
                  </div>
                  <div className="footer">
                    <p>{technology.language}</p>
                    <p>{technology.backend}</p>
                    <p>{technology.style}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
