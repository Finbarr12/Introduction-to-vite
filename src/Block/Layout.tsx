import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  return (
    <div>
      <Header />
      {isOffline ? (
        <div
          style={{
            position: "fixed",
            top: "8.5%",
            left: 0,
            right: 0,
            background: "#FF4136",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            transform: "translateY(0)",
            zIndex: 9999,
          }}
        >
          You are currently offline. Please check your internet connection. You
          are offline
        </div>
      ) : null}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
