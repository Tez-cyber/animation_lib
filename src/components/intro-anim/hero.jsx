


export const Hero = () => {
  return (
    <section className="hero relative h-screen overflow-hidden flex flex-col justify-between">
      <div 
        style={{ marginInline: "4rem" }}
        className="top flex justify-between items-center mt-[3.2rem] ">
        <div data-menu-item>
          Logo
        </div>
        <span data-menu-item>about</span>
        <span data-menu-item>contact</span>
      </div>

      <h1
        style={{
          gridTemplateColumns: "max-content 1fr max-content"
        }}
        className="title absolute top-1/2 left-[4rem] w-[calc(100%-8rem)] -translate-x-1/2
        mb-[8rem] grid items-center gap-[3.2rem] font-[16rem]
      ">
        <span data-title-first>Ultra</span>
        <span data-hero-line className="line inline-block h-[0.4rem] w-full bg-black scale-x-0 origin-[center_center]"></span>
        <span data-title-last>agency</span>
      </h1>

      <div className="image overflow-hidden absolute bottom-0 h-[37vh] left-0 w-full origin-[top_center]">
        <div data-image-overlay className="imageOverlay absolute inset-0 z-[3] bg-black scale-y-[0.31] origin-[bottom_center]"></div>
        <img
          data-image
          src="/images/end.jpg"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
