import React from "react";

const PortfolioItemPage = props => (
  <div>
    <h3>Portfolio</h3>
    <p>This is project ID {props.match.params.id} </p>
  </div>
);

export default PortfolioItemPage;
