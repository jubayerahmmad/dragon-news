import Marquee from "react-fast-marquee";

const LatestMarquee = () => {
  return (
    <div className="flex gap-4 p-4 bg-gray-100">
      <p className="bg-red-500 px-3 py-1 text-white animate-bounce">Latest</p>
      <Marquee pauseOnHover={true} speed={150} className="">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default LatestMarquee;
