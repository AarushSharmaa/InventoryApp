import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <NavLink to="./godown" className="navbar-brand">
            godown
          </NavLink>
        </div>

        <div>
          <NavLink to="./employee" className="navbar-brand">
            employee
          </NavLink>
        </div>

        <div>
          <NavLink to="./inwards" className="navbar-brand">
            inwards
          </NavLink>
        </div>

        <div>
          <NavLink to="./return" className="navbar-brand">
            return
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Links;
