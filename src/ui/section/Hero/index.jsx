const Hero = () => {
  return (
    <section className="section-pd h-[100vh] flex flex-col justify-center gap-32 lg:gap-64">
      <div className="leading-[1.2]">
        <h1 className="flex flex-wrap gap-4 uppercase justify-center">
          <span className="text-white">I am a</span>
          <span className="inline-flex items-center">
            <img
              src="/assets/avatarMin.jpeg"
              alt="Profile"
              className="w-[6rem] h-[2.5rem] sm:w-[8rem] sm:h-[4rem] lg:h-[6rem] lg:w-[10rem] xl:w-[14rem] xl:h-[8rem] rounded-full object-cover object-center"
            />
          </span>
          <span className="text-white">Freelance</span>
        </h1>
        <h1 className="flex flex-wrap gap-4 uppercase text-center justify-center">
          <span className="text-white">Designer</span>
          <span className="inline-flex items-center">
            <img
              src="/assets/hero.png"
              alt="Work Showcase"
              className="w-[6rem] h-[2.5rem] sm:w-[8rem] sm:h-[4rem]  lg:h-[6rem] lg:w-[10rem] xl:w-[14rem] xl:h-[8rem] rounded-full object-cover object-center"
            />
          </span>
          <span className="text-white">from</span>
          <span className="text-white">San Francisco</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 xl:gap-64  ">
        <div className="flex justify-between w-full md:flex-1">
          <img
            src="/assets/svg/doraDesign.svg"
            alt="Dora"
            className="h-[2rem] md:h-[2.8rem]"
          />
          <img
            src="/assets/svg/silsila.svg"
            alt="Silsila"
            className="h-[2rem] md:h-[2.8rem]"
          />
          <img
            src="/assets/svg/wavefun.svg"
            alt="Wavefun"
            className="h-[2rem] md:h-[2.8rem]"
          />
        </div>
        <div className="w-full md:w-[40%]">
          <p className="text-white body-font text-center md:text-left">
            Welcome to my portfolio. Here, artistry meets functionality. Dive
            into a curated showcase of distinctive branding and web designs,
            each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
