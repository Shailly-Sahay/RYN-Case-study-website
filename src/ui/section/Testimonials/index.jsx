import React from "react";
import { testimonials } from "../../../data/data";
import SectionHeader from "../../components/SectionHeader";

const Testimonials = () => {
  return (
    <section className="section-pd">
      <div>
        <SectionHeader text="What they say" />
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex justify-between">
            <div className="flex">
              <div className="w-[24px]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <h5>{testimonial.name}</h5>
                <p>{testimonial.company}</p>
              </div>
            </div>

            <div className="w-1/2 relative before:absolute before:bg-[url('/assets/svg/comma.svg')] before:w-[100%] before:h-[64px] before:bg-no-repeat before:-top-[100%] ">
              <h4>{testimonial.description}</h4>
            </div>
          </div>
        ))}

        <div>
          <span className="bg-[var(--color-gray)] rounded-full text-black">
            {" "}
            &larr;
          </span>
          <span className="bg-white rounded-full text-black"> &rarr;</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
