import React from "react";

function Home() {
  return (
    <div className="text-center">
      <div className="p-5 bg-light rounded-3 mb-4">
        <h1 className="display-5 fw-bold">Welcome to RFactor</h1>
        <p className="lead">Empowering businesses with expert consulting solutions tailored to accelerate growth, streamline operations, and achieve sustainable success.</p>
        <button className="btn btn-primary btn-lg">Get Started</button>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Retention</h5>
              <p className="card-text">Proven strategies to retain customers.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text">Turn Clients into Loyal Advocates. Unlock Predictable Revenue Growth</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Results</h5>
              <p className="card-text">Guaranteed results and testimonials from exisiting customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
