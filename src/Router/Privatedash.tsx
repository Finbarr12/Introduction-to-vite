import { useAppSelector } from "../Global/Store";
import { Navigate } from "react-router-dom";

const Privatedash = ({ children }: any) => {
  const user = useAppSelector((state) => state.loginUser);

  if (user?.name) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default Privatedash;
