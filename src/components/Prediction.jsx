import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from "react-scroll";

const Prediction = () => {
  return (
    // Parent div
    <div name="prediction" className="w-full h-screen text-center">
      <div className="flex max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <div>
          <h1 className="pb-16">
            Prediction <span className="text-[#02474d]">Result</span>
          </h1>
          <div>
            <p className="md:text-2xl font-bold text-[#338084] ">
              Chances of Dengue:
            </p>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-9xl text-[#EDF4F5]">40%</h1>
          </div>
          <div className="flex justify-center items-center m-28">
            <Link to="home" smooth={true} duration={500}>
              <div className="shadow-xl shadow-[#032f3c] rounded-full uppercase bg-[#217b7e] text-[#EDF4F5] p-4 cursor-pointer">
                <IoIosArrowRoundUp size={25} className="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
