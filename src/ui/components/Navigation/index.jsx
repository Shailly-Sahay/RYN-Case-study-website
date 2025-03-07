import React from "react";
import PageLink from "../PageLink";
import Button from "../Button";

const Navigation = () => {
  return (
    <div className="w-full section-pd flex justify-between">
      <div>
        <PageLink href="/">
          <img src="/assets/svg/logo.svg" alt="" />
        </PageLink>
      </div>
      <div className="flex flex-between items-center justify-center">
        <PageLink text="Home" href="/" />
        <PageLink text="About" href="/about" />
        <PageLink text="Projects" href="/projects" />
        <PageLink text="Contact" href="/contact" />
      </div>
      <div>
        <Button text="Hire me" />
      </div>
    </div>
  );
};

export default Navigation;
