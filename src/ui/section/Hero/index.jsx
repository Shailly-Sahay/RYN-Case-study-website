const Hero = () => {
  return (
    <section className="section-pd h-[100vh]">
      <div className="leading-[1.2]">
        <h1 className="flex flex-wrap gap-4 uppercase justify-center">
          <span className="text-white">I am a</span>
          <span className="inline-flex items-center">
            <img
              src="/assets/user.png"
              alt="Profile"
              className="w-[80px] h-[80px] rounded-full object-cover"
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
              className="w-[80px] h-[80px] rounded-md object-cover"
            />
          </span>
          <span className="text-white">from</span>
          <span className="text-white">San Francisco</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="flex gap-16">
          <img src="/assets/svg/doraDesign.svg" alt="Dora" />
          <img src="/assets/svg/silsila.svg" alt="Silsila" />
          <img src="/assets/svg/wavefun.svg" alt="Wavefun" />
        </div>
        <div className="w-[40%]">
          <p className="text-white body-font">
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
