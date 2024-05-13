import React from "react";
import { Button, Link } from "react-scroll";

const Main = () => {
  return (
    <div name="home" className="w-full h-screen text-center">
      <div className="flex max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <div>
          <h1>
            Dengue <span className="text-[#02474d]">Prediction</span>
          </h1>
          <div>
            <p className="md:text-xl py-4 font-bold text-[#338084] w]">
              The aim of this study is to utilize remote sensing technology and
              satellite imagery to construct a precise and prompt predictive
              framework for the surveillance and prediction of Dengue outbreaks.
              This endeavor seeks to amalgamate environmental data obtained
              through remote sensing platforms with archival disease records to
              formulate a predictive instrument beneficial for public health
              agencies in preemptive Dengue mitigation endeavors. Ultimately,
              this initiative endeavors to enhance early detection mechanisms,
              mitigate the consequences of Dengue outbreaks, and augment the
              general readiness of public health systems.
            </p>
          </div>
          <Button
            className="p-4 rounded-full my-8 hover:scale-105 duration-300"
            to="input"
            smooth={true}
            duration={500}
          >
            Get Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
