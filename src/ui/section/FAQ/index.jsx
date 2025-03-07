import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { faq } from "../../../data/data";

const FAQ = () => {
  return (
    <section className="section-pd">
      <div>
        <SectionHeader text="Frequently asked questions" />

        <div className="flex flex-col gap-12">
          {faq.map((q) => (
            <div key={q.id}>
              <h4>{q.question}</h4>
              <p className="large-font">{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
