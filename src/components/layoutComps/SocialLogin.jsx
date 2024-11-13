import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Login With</h2>
      <div className="my-6 space-y-4">
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-3 btn btn-outline">
            <FaGoogle size={28} />
            Login with Google
          </button>
          <button className="flex items-center gap-3 btn btn-outline">
            <FaGithub size={28} />
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
