import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="40"
        visible={true}
      />
    </div>
  );
};

export default Loading;
