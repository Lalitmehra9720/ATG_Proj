import Button from "@/components/ui/Button";

const NAVBAR_HEIGHT = 96;

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative lg:min-h-[140vh] bg-black"
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50 md:opacity-100"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 120px)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 120px)",
          }}
        />
        <div
          className="absolute top-1/2 left-10 -translate-y-1/2
                -translate-y-[10px] md:-translate-y-[20px] rounded-full"
        >
          <img src="/images/ball3.png" alt="" />
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2
             h-[200px] w-[200px] md:h-[320px] md:w-[320px]
             rounded-full blur-[60px] md:blur-[80px]
             opacity-70 md:opacity-100"
            style={{
              background:
                "radial-gradient(circle, rgba(140,140,140,0.50) 0%, rgba(120,120,120,0.30) 40%, rgba(120,120,120,0.15) 60%, transparent 78%)",
            }}
          />
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2
             rounded-full "
          >
            <img src="/images/ball1.png" alt="" />
          </div>
          <div
            className=" absolute -right-10 md:right-[5%] top-[45%] md:top-[40%]
             rounded-full "
          >
            <img src="/images/ball2.png" alt="" />
          </div>
        </div>
        <div className="relative z-10 mt-20 md:mt-40 flex flex-col items-center text-center px-6 pb-20 md:pb-40">
          <h1 className="max-w-4xl text-4xl sm:text-2xl md:text-4xl lg:text-7xl font-semibold text-white leading-[1.1]">
            Beautiful Landing Page <br className="hidden sm:block" />
            Design for You
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-[18px] lg:text-[22px] leading-relaxed text-[#9E9E9E]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem.
          </p>

          <div className="mt-10 w-full sm:w-auto px-4 sm:px-0">
            <Button className="w-fit md:w-full sm:w-auto px-4 py-3 lg:px-8 lg:py-4 text-lg">
              Download Template
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
