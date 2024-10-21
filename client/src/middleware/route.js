import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
// const jwt = require("jsonwebtoken");

export const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <Navigate
        to={"/"}
        replace={true}
      ></Navigate>
    );
  }
  return children;
};

export const Public = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return children;
  }
  return (
    <Navigate
      to={"/"}
      replace={true}
    ></Navigate>
  );
};

// export const Admin = ({ children }) => {
//   const user = jwtDecode(localStorage.getItem("token"));

//   if (user.isAdmin) {
//     return children;
//   }
//   return (
//     <Navigate
//       to={"/"}
//       replace={true}
//     ></Navigate>
//   );
// };
export const Admin = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token ) {
    return (
      <Navigate
        to={"/"}
        replace={true}
      ></Navigate>
    );
  }
  //authorization check for admin
  // let user;
  // try{
  //  user = jwtDecode(localStorage.getItem("token"));
  // }catch(err){
  //   return (
  //     <Navigate
  //       to={"/"}
  //       replace={true}
  //     ></Navigate>
  //   );
  // }

  // if(user.roll==="Admin"){
    return children;
  // }
  // else{
  //   return (
  //     <Navigate
  //       to={"/"}
  //       replace={true}
  //     ></Navigate>
  //   );
  // } 
};
