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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum autem mollitia, exercitationem suscipit aliquid quas
              incidunt nam debitis harum sapiente recusandae accusamus adipisci
              ratione officiis odio eaque, hic optio quasi explicabo! Esse, a
              illo. Ratione facilis autem quidem tempore consequatur odit fuga
              minus, laborum, atque doloribus voluptas. At, labore magni.
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
