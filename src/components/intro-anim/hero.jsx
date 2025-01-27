


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
      {/* =========== Title Section ============ */}
      <h1
        style={{
          gridTemplateColumns: "max-content 1fr max-content",
        }}
        className="title absolute top-1/2 left-[4rem] w-[calc(100%-8rem)] -translate-y-1/2
          mb-[8rem] grid items-center gap-[3.2rem] text-[16rem]
        "
      >
        <span data-title-first>Ultra</span>
        {/* ========= Horizontal Line */}
        <span
          style={{
            // transform: "scaleX(0)"
          }}
          className="line block w-full h-[0.4rem] bg-black"
        />
        <span data-title-last>agency</span>
      </h1>

      {/* ======= Img-section ======== */}
      <div className="image overflow-hidden absolute bottom-0 h-[37vh] left-0 w-full origin-[top_center]">
        <div data-image-overlay className="imageOverlay absolute inset-0 z-[3] bg-black scale-y-[0.31] origin-[bottom_center]"></div>
        <img
          data-image
          src="/end.jpg"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
