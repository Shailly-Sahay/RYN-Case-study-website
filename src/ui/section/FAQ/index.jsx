import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { faq } from "../../../data/data";

const FAQ = () => {
  return (
    <section className="section-pd">
      <div>
        <SectionHeader text="Frequently asked questions" />

        <div className="flex flex-col">
          {faq.map((q) => (
            <div key={q.id} className="!mb-4">
              <h4>{q.question}</h4>
              <p>{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
