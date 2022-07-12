import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes["hero__section"]}>
      <img
        src="./img/APC1.jpeg"
        alt="image"
        className="absolute w-full h-full opacity-[5%] inset-0 object-cover"
      />
      <div className="flex md:justify-between md:items-center w-full h-full ">
        <div className="ml-[1rem] md:ml-[6.25rem]">
          <div className="text-base md:text-2xl font-semibold text-text-red font-main pb-2 md:pb-4">
            Daniel is here to serve you
          </div>
          <h1 className="font-body text-2xl md:text-5xl text-primary font-medium pt-40 pb-8">
            VOTE FOR DAINEL AS <span className="text-text-red">IKEJA</span>{" "}
            LOCAL GOVERNMENT CHAIRMAN
          </h1>
          <button className="flex justify-center items-center text-sm md:text-base bg-text-red px-4 md:px-6 py-2 md:py-4 rounded-md text-secondary-100">
            <div className="pr-1 md:pr-3">JOIN THE MOVEMENT</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 rounded-sm bg-white text-text-red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className=" bg-cover-pic h-screen w-full bg-no-repeat  bg-contain bg-clip-border bg-right md:bg-right-bottom"></div>
      </div>
    </div>
  );
};

export default Hero;
