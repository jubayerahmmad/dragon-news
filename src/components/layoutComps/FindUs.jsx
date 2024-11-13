import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Find Us On</h2>
      <div className="join join-vertical flex *:bg-base-100 my-4">
        <button className="btn join-item justify-start text-lg">
          <FaFacebook size={24}></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start text-lg">
          <FaTwitter size={24}></FaTwitter> Twitter
        </button>
        <button className="btn join-item justify-start text-lg">
          <FaInstagram size={24}></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
