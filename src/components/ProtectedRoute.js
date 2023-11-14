import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...props }) => {
  return props.loggedIn ? <Element {...props} /> : <Navigate to="/signin" />;
};
export default ProtectedRoute;
