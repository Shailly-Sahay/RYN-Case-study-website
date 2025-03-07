import React from "react";
import { expertiseData } from "../../../data/data";
import SectionHeader from "../../components/SectionHeader";
// import {SectionH}

const Expertise = () => {
  console.log(expertiseData);
  return (
    <section className="section-pd">
      <SectionHeader text="Expertise" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {expertiseData.map((expertise) => (
          <div key={expertise.id}>
            <h5 className="flex items-center gap-4  text-white">
              <span className="h-[5px] w-[5px] bg-white inline-block"></span>
              {expertise.title}
            </h5>
            <p className="text-white">{expertise.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
