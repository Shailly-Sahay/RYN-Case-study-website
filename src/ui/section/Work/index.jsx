import React from "react";
import { works } from "../../../data/data";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Tag from "../../components/Tag";

const Work = () => {
  return (
    <section className="section-pd ">
      <div className="flex justify-between items-center">
        <SectionHeader text="Work" />
        <Link to="#" className="body-font underline">
          view all
        </Link>
      </div>

      <div className="flex flex-col gap-12">
        {works.map((work) => (
          <div
            key={work.id}
            className="overflow-hidden relative !p-12  rounded-3xl flex flex-col xl:flex-row gap-24 bg-[var(--color-gray)]/60 backdrop-blur-lg before:absolute before:h-[16rem] before:w-[20rem] before:rounded-full before:bg-[var(--color-accent)] before:left-1/2 before:top-full before:translate-y-[-100%]  before:blur-[300px]"
          >
            {/* Image Section */}
            <div className="w-[100%] xl:w-[60%]">
              <img
                src={work.imgSrc}
                alt={work.title}
                className="object-cover rounded-3xl"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2 2xl:gap-4 !mb-6">
                <h3 className="!font-semibold ">{work.title}</h3>
                <p className="large-font !mb-4 2xl:!mb-12">
                  {work.description}
                </p>
                <Tag tags={work.tags} />
              </div>

              <span className="z-10">
                {" "}
                <Button text="View Case Study" variant="Secondary" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
