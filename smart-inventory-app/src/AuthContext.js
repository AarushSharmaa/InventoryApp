import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("user")) !== null
  );

  const login = (username, password) => {
    fetch("http://localhost:3030/AuthorisedPersonnel")
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("user", JSON.stringify({ username, password }));

        for (let index = 0; index < result.length; index++) {
          if (
            result[index].name === username &&
            result[index].id === Number(password)
          ) {
            setIsAuthenticated(true);
          }
        }
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
