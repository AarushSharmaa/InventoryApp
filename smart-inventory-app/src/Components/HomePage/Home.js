import "bootstrap/dist/css/bootstrap.css";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const fadeAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideAnimation = useSpring({
    from: { transform: "translateX(-100px)" },
    to: { transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  return (
    <animated.div className="container" style={fadeAnimation}>
      <h1 className="text-center my-5">Welcome Employee</h1>
      <animated.div className="card border-primary mb-3" style={slideAnimation}>
        <div className="card-header">Inventory Management</div>
        <div className="card-body">
          <h4 className="card-title">Smart Inventory Management App</h4>
          <p className="card-text">
            With this app, you can manage your godown inventory like never
            before. Keep track of all your products, deliveries, and returns
            with ease.
          </p>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Home;
