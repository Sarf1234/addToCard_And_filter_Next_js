import Image from "next/image";

const ServiceBanner = () => {
  return (
    <div className="relative w-full md:h-[80vh]">
      <img
        src="/images/poster_image.jpg"
        alt="Poster Image"
        layout="fill"
        objectFit="fill"
        className="w-full"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-32">
        <h1 className="md:text-[3rem] text-lg  font-black text-white">Latest Styles</h1>
        <p className="md:text-lg text-sm mt-4 font-bold text-white">
          At Yesterday's Prices
        </p>
        <button className="bg-red-500 hover:bg-tomato-red-dark text-white text-sm py-2 px-4 rounded mt-4">
          BROWSE ALL STYLES
        </button>
      </div>
    </div>
  );
};

export default ServiceBanner;
