import React from "react";
import { marquee } from "../../../data/data";

const Marquee = () => {
  return (
    <section className="flex gap-24 justify-center">
      {marquee.map((el) => (
        <div className="flex">
          <p className="outlined-text text-[10rem] font-semibold uppercase font-[Syne]">
            {el}
          </p>
          <img src="/assets/svg/star.svg" alt="" className="w-[2rem]" />
        </div>
      ))}
    </section>
  );
};

export default Marquee;
