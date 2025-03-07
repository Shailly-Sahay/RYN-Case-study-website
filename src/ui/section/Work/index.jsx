import React from "react";
import { works } from "../../../data/data";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Tag from "../../components/Tag";

const Work = () => {
  return (
    <section className="section-pd ">
      <div className="flex justify-between">
        {" "}
        <SectionHeader text="Work" />
        <Link to="#" className="underline">
          view all
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        {works.map((work) => (
          <div
            key={work.id}
            className="overflow-hidden relative p-4 rounded-md flex gap-12 bg-[var(--color-gray)]/60 backdrop-blur-lg before:absolute before:h-[16rem] before:w-[20rem] before:rounded-full before:bg-[var(--color-accent)] before:left-1/2 before:top-full before:translate-y-[-100%]  before:blur-[300px]"
          >
            {/* Image Section */}
            <div className="w-[40%]">
              <img
                src={work.imgSrc}
                alt={work.title}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-between">
              <h3 className="text-xl font-bold">{work.title}</h3>
              <p className="text-gray-300">{work.description}</p>

              {/* Tags Section */}
              <Tag tags={work.tags} />

              <Button
                text="View Case Study"
                variant="Secondary"
                customClass="z-10"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
