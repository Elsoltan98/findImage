import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import ImageView from "./imageSearch/ImageView";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/image/:id" component={ImageView} />
      </Switch>
    </div>
  );
};

export default Router;
