import React from "react";
import PageLink from "../../components/PageLink";

const Footer = () => {
  return (
    <section className="section-pd !mb-0">
      <div className="text-center !mb-12">
        <h1 className="font-[Syne] text-[9rem] font-bold">Let's Talk!</h1>
      </div>
      <div className="flex gap-6 justify-center !mb-12">
        <p className="large-font">rehanurraihan@gmail.com </p>
        <span>
          <img src="/assets/svg/arrow.svg" alt="" />
        </span>
      </div>
      <div className="flex justify-between items-center">
        <p className="body-font">© Rehan Raihan - 2023</p>
        <div className="flex flex-wrap justify-end gap-4 md:gap-8 lg:gap-16">
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
