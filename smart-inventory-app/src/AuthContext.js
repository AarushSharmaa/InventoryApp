// import React, { createContext, useContext, useState } from "react";
// import RoutesOfPage from "./Components/AdminPage/RoutesOfPage";
// import { useNavigate } from "react-router-dom";
// export const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   // initialise the value of flag - isAuthenticated
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     JSON.parse(localStorage.getItem("user")) !== null
//   );

//   // logic for loggin in - setting the authentication to true
//   const login = (username, password) => {
//     fetch("http://localhost:3030/AuthorisedPersonnel")
//       .then((response) => response.json())
//       .then((result) => {
//         localStorage.setItem("user", JSON.stringify({ username, password }));

//         for (let index = 0; index < result.length; index++) {
//           if (
//             result[index].name === username &&
//             result[index].id === Number(password)
//           ) {
//             setIsAuthenticated(true);
//           }
//         }
//       });
//   };

//   // logic for logging out - setting the authentication to false
//   const logout = () => {
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
