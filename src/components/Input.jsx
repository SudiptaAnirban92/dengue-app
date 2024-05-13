import React from "react";
import { Button } from "react-scroll";

const Input = () => {
  return (
    <div
      name="input"
      className="w-full md:h-screen p-2 flex justify-center items-center py-16"
    >
      <div className="max-w-[1240px] m-auto flex flex-col">
        <div>
          <p className="uppercase text-xl tracking-widest text-center">
            Dengue Data Input
          </p>
        </div>
        <div className="grid gap-6 py-16 justify-center items-center">
          <div>
            <label htmlFor="" className="px-4">
              Temperature
              <input
                type="text"
                className="p-3 flex w-full rounded-md"
                placeholder="°C"
              />
            </label>
          </div>
          <div>
            <label htmlFor="" className="px-4">
              Rain
              <input
                type="text"
                className="p-3 flex w-full rounded-md"
                placeholder="Inches"
              />
            </label>
          </div>
          <div>
            <label htmlFor="" className="px-4">
              Humidity
              <input
                type="text"
                className="p-3 flex w-full rounded-md"
                placeholder="%"
              />
            </label>
          </div>
          <div>
            <label htmlFor="" className="px-4">
              Wind
              <input
                type="text"
                className="p-3 flex w-full rounded-md"
                placeholder="KPH"
              />
            </label>
          </div>
          <Button
            className="p-2 hover:scale-105 duration-300"
            to="prediction"
            smooth={true}
            duration={500}
          >
            Go
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Input;
