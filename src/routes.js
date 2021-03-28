import React from "react";
import { Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
