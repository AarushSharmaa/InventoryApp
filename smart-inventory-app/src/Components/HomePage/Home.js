import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5">Welcome Employee </h1>
      <div className="card border-primary mb-3">
        <div className="card-header">Inventory Management</div>
        <div className="card-body">
          <h4 className="card-title">Smart Inventory Management App</h4>
          <p className="card-text">
            With this app, you can manage your godown inventory like never
            before. Keep track of all your products, deliveries, and returns
            with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
