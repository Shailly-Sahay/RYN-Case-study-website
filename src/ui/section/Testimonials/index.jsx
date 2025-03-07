import React from "react";
import { testimonials } from "../../../data/data";
import SectionHeader from "../../components/SectionHeader";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="section-pd">
      <div>
        <SectionHeader text="What they say" />
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex justify-between flex-col sm:flex-row gap-32 !mb-12"
          >
            <div className="flex gap-12">
              <div className="w-[64px]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <h5>{testimonial.name}</h5>
                <p className="large-font">{testimonial.company}</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 ">
              <h4 className="relative before:absolute before:bg-[url('/assets/svg/comma.svg')] before:w-[100%] before:h-[84px] before:bg-no-repeat before:-top-[10%] md:before:-top-[10%] xl:before:-top-[15%] ">
                {testimonial.description}
              </h4>
            </div>
          </div>
        ))}

        <div className="flex gap-8 justify-center">
          <span className="bg-[var(--color-gray)] w-[52px] h-[52px] !p-4 rounded-full text-black flex items-center justify-center">
            {" "}
            <ArrowLeft />
          </span>
          <span className="bg-white w-[52px] h-[52px] !p-4 rounded-full text-black flex items-center justify-center">
            {" "}
            <ArrowRight />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
