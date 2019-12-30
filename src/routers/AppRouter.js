import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import AboutPage from "../components/About";
import ContactPage from "../components/Contact";
import HomePage from "../components/Home";
import NotFoundPage from "../components/NotFound";
import PortfolioPage from "../components/Portfolio";
import PortfolioItemPage from "../components/PortfolioItem";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
