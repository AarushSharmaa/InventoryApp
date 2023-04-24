import "./App.css";
import Admin from "./Components/AdminPage/Admin";
import Login from "./Components/LoginPage/Login";
import Godown from "./Components/GodownPage/Godown";
import Return from "./Components/ReturnPage/Return";
import Inwards from "./Components/Inwards/Inwards";
import Deliveries from "./Components/DeliveriesPage/Deliveries";
import Logout from "./Components/Logout/Logout";

function App() {
  return (
    <div className="App">
      {/* <h4>Smart Inventory Management App</h4> */}

      {/* <Login /> */}

      <Admin />
      {/* <Godown /> */}
      {/* <Return /> */}
      {/* <Deliveries /> */}
      {/* <Inwards /> */}
      {/* Inwards & Employees done by someone else */}
      {/* <Logout /> */}
    </div>
  );
}

export default App;
