import React, {useEffect, Fragment}from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

import { checkAuthenticated } from "actions/auth";
import { load_user } from "actions/profile"

// views without layouts

import Aboutus from "views/Aboutus.js";
import Index from "views/Index.js";
import Chatbot from "components/Footers/Chatbot.js";

import { Provider } from "react-redux";
import store from "./store";

function App() {

    // useEffect(()=>{
    //     checkAuthenticated();
    //     load_user();
    //   },[]);

    return (
    <Provider store={store}> 
        <BrowserRouter>
        <Chatbot/>
        <Switch>
            {/* add routes with layouts */}
            <Route path="/admin" component={Admin} />
            <Route path="/auth" component={Auth} />
            {/* add routes without layouts */}
            <Route path="/aboutus" exact component={Aboutus} />
            <Route path="/" exact component={Index} />
            {/* add redirect for first page */}
            <Redirect from="*" to="/" />
        </Switch>
        </BrowserRouter>
    </Provider>
  );
}
export default App;