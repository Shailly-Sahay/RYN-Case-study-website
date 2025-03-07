import React from "react";
import { experiences } from "../../../data/data";
import SectionHeader from "../../components/SectionHeader";

const Experience = () => {
  return (
    <section className="section-pd">
      <div>
        <SectionHeader text="Experience" />
        <div>
          {experiences.map((experience) => (
            <div className="flex justify-between border-b-1 !p-8 gap-6">
              <h4>{experience.title}</h4>
              <div className="flex flex-col justify-center">
                <h5 className="text-end">{experience.company}</h5>
                <p className="small-font text-end">{experience.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
