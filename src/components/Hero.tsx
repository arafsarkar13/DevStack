import bannerImg from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-24">
      {/* Left: heading + description + buttons */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base text-gray-500 md:mx-0">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
          <a
            href="#technologies"
            className="bg-brand-gradient btn rounded-full border-none px-6 text-white hover:opacity-90"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="btn btn-outline rounded-full border-gray-300 px-6 text-gray-700 hover:border-gray-400 hover:bg-transparent"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right: banner image */}
      <div className="flex justify-center">
        <img
          src={bannerImg}
          alt="Illustration of a layered technology stack"
          className="w-full max-w-sm"
        />
      </div>
    </section>
  );
}

export default Hero;
