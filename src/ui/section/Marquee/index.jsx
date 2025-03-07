import React from "react";
import { marquee } from "../../../data/data";

const Marquee = () => {
  return (
    <section className="flex gap-24 justify-center !mb-32">
      {marquee.map((el) => (
        <div className="flex items-center">
          <p className="outlined-text font-semibold uppercase relative before:absolute before:bg-[url('/assets/svg/star.svg')] before:w-[32px] before:h-[32px] before:top-[50%] before:left-[102%] before:translate-x-0 before:-translate-y-1/2 before:bg-no-repeat">
            {el}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Marquee;
