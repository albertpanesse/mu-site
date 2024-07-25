import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Create Amazing Profile Page!</h1>
        <p className="lead">Optimizing one single page for your profile and portfolios.</p>
        <hr className="my-4" />
        <p>Sign up today and start publishing your profile.</p>
        <Link to={'/signin'} className="btn btn-primary btn-lg" role="button">Get Started</Link>
      </div>
    </div>
  );
};

export default Home;
