import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = props => (
  <div>
    <h3>Portfolio</h3>
    <Link to="/portfolio/1">Project 1</Link>
    <Link to="/portfolio/2">Project 2</Link>
  </div>
);

export default PortfolioPage;
