import classImg from "../../assets/class.png";
import swimming from "../../assets/swimming.png";
import playground from "../../assets/playground.png";
const QZone = () => {
  return (
    <div className="bg-gray-200">
      <h2 className="font-semibold text-xl p-4">Q-Zone</h2>
      <div className="p-6 space-y-4">
        <div>
          <img className="mx-auto" src={classImg} alt="" />
        </div>
        <div>
          <img className="mx-auto" src={swimming} alt="" />
        </div>
        <div>
          <img className="mx-auto" src={playground} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QZone;
