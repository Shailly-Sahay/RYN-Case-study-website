import React, { useState } from "react";
import PageLink from "../PageLink";
import Button from "../Button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full relative section-pd flex justify-between items-center">
      <div>
        <Link to="/">
          <img src="/assets/svg/logo.svg" alt="Logo" className="w-20" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        <PageLink text="Home" href="/" />
        <PageLink text="About" href="/about" />
        <PageLink text="Projects" href="/projects" />
        <PageLink text="Contact" href="/contact" />
      </div>

      <div className="hidden md:block">
        <Button text="Hire me" customClass="font-[Syne] uppercase small-font" />
      </div>

      {/* Mobile Menu Button (Appears Below md) */}
      <button
        className="md:hidden p-2 rounded focus:outline-none z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white transition-transform duration-300 rotate-90" />
        ) : (
          <Menu className="w-8 h-8 text-white transition-transform duration-300" />
        )}
      </button>

      <div
        className={`absolute top-full left-0 w-full bg-black bg-dark p-6 rounded-lg shadow-lg flex flex-col gap-4 md:hidden transition-all duration-500 !px-32 !py-12 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <PageLink text="Home" href="/" />
        <PageLink text="About" href="/about" />
        <PageLink text="Projects" href="/projects" />
        <PageLink text="Contact" href="/contact" />
        <Button
          text="Hire me"
          customClass="font-[Syne] uppercase small-font w-full"
        />
      </div>
    </nav>
  );
};

export default Navigation;
