import "./App.css";
import Admin from "./Components/AdminPage/Admin";
import Login from "./Components/LoginPage/Login";
import Godown from "./Components/GodownPage/Godown";
import Return from "./Components/ReturnPage/Return";
import Inwards from "./Components/Inwards/Inwards";
import Deliveries from "./Components/DeliveriesPage/Deliveries";
import Testing from "./Components/Testing/Testing";
function App() {
  return (
    <div className="App">
      {/* <h4>Smart Inventory Management App</h4> */}
      {/* <Login /> */}
      <Admin />
      {/* <Testing /> */}
    </div>
  );
}

export default App;
