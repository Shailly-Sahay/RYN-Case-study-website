import React from "react";
import PageLink from "../../components/PageLink";

const Footer = () => {
  return (
    <section className="section-pd">
      <div className="text-center">
        <p className="font-[Syne] text-[9rem] font-bold">Let's Talk!</p>
      </div>
      <div className="flex gap-6 justify-center">
        <p>rehanurraihan@gmail.com </p>
        <span>
          <img src="/assets/svg/arrow.svg" alt="" />
        </span>
      </div>
      <div className="flex justify-between">
        <p>© Rehan Raihan - 2023</p>
        <div className="flex gap-16">
          <PageLink text="Dribble" href="/twitter" />
          <PageLink text="Behance" href="/behance" />
          <PageLink text="Twitter" href="/twitter" />
          <PageLink text="Instagram" href="/instagram" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
