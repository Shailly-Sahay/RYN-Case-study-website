import React from "react";
import { Footer, Navigation } from "../ui";

const HomeLayout = ({ children }) => {
  return (
    <>
      <main className=" bg-[var(--color-dark)]">
        <Navigation />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default HomeLayout;
