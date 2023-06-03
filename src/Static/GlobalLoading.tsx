import rock from "../assets/rock.gif";

const GlobalLoading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src={rock} alt="" style={{ height: "150px" }} />

      <p style={{ fontFamily: "sans-serif", fontWeight: "700" }}>Loading....</p>
    </div>
  );
};

export default GlobalLoading;
