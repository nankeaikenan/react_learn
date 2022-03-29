import React from "react";
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import Home from '../Home';
import List from '../List';
import Error from "../Error";
import MyIndex from "../MyIndex";

const BaseRouter = () => {
    return (
       <BrowserRouter history={useHistory}>
            <Switch>
              <Route path='/' component={() =>
                  <MyIndex>
                      <Switch>
                          <Route path="/home/:id" component={Home}/>
                          <Route path="/list" component={List}/>
                          <Route component={Error}/>
                      </Switch>
                  </MyIndex>
              }/>

            </Switch>
       </BrowserRouter>
    )
}

export default BaseRouter;