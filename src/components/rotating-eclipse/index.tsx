import { RotatingWrapper } from "./RotatingWrapper";

const RotatingEclipse = () => {
  return (
    <div className="w-[100px] m-auto">
      <RotatingWrapper className="m-auto">
        <span className="  text-2xl font-bold">
          Loading your favorite track
        </span>
      </RotatingWrapper>
    </div>
  );
};

export default RotatingEclipse;
