const Jumbotron: React.FC = () => {
  return (
    <>
      <section
        id="jumbotron"
        className="W-full h-screen bg-cover bg-center saturate-150"
        style={{ backgroundImage: `url('/images/landing.jpg')` }}
      >
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="absolute z-20 w-full h-full">
          <div className="relative max-w-7xl flex flex-col items-center justify-center h-full gap-5 mx-auto">
            <h1 className="md:text-5xl 2xl:text-7xl font-medium text-3xl max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5 select-none text-white">
              Welcome to{" "}
              <span className="bg-indigo-400 px-10 py-2 rounded-full">
                Our Base
              </span>
            </h1>
            <div className="z-20 absolute bottom-0 w-full flex p-12 justify-center items-center">
              <a draggable={false} href="#about" className="text-white text-xl justify-center items-center animate-bounce bg-indigo-400 px-5 py-2 rounded-full inline-flex gap-2">
                Scroll Down{" "}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
