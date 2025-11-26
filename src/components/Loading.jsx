import { RotatingLines } from "react-loader-spinner";
export const Loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RotatingLines
        height="52"
        width="52"
        color="gray"
        strokeWidth="4"
        animationDuration="0.75"
      />
    </div>
  );
};
