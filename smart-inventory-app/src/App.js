import "./App.css";
import Admin from "./Components/AdminPage/Admin";
import Login from "./Components/LoginPage/Login";
import Godown from "./Components/GodownPage/Godown";
import Return from "./Components/ReturnPage/Return";
import Inwards from "./Components/Inwards/Inwards";
import Deliveries from "./Components/DeliveriesPage/Deliveries";
import Links from "./Components/LinkPage/Links";
import RoutesOfPage from "./Components/AdminPage/RoutesOfPage";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [userName, setUserName] = useState("");

  const userDetails = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setUserName(userDetails?.username);

    console.log(userDetails);
  }, [userDetails]);
  return (
    <div>
      <RoutesOfPage />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* <Login />
       <Admin />  */}
    </div>
  );
}

export default App;
