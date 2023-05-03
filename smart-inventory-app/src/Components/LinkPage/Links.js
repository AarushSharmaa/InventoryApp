import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Links.css";
import RoutesOfPage from "../AdminPage/RoutesOfPage";

const Links = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout button clicked");

    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <div className="card">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink to="/admin/home" className="navbar-brand">
              Home
            </NavLink>
            <NavLink to="/admin/godown" className="navbar-brand">
              Godown
            </NavLink>
            <NavLink to="/admin/employee" className="navbar-brand">
              Employee
            </NavLink>
            <NavLink to="/admin/inwards" className="navbar-brand">
              Inwards
            </NavLink>
            <NavLink to="/admin/delivery" className="navbar-brand">
              Delivery
            </NavLink>
            <NavLink to="/admin/return" className="navbar-brand">
              Return
            </NavLink>
            <NavLink to="/admin/report" className="navbar-brand">
              Report
            </NavLink>
            <div className="d-flex justify-content-end">
              <button onClick={handleLogout} className="btn btn-dark">
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Links;
