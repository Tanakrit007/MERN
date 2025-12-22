import { Navigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const GuestRoute = ({ children }) => {
  const { userInfor } = useContext(UserContext);

  console.log("GuestRoute userInfor:", userInfor);

  if (userInfor?.accessToken) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default GuestRoute;
