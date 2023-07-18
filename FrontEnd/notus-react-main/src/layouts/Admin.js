import React, {useEffect, Fragment}from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";
import Question from "views/admin/Question.js";
import Activevoice from "views/module/activevoice";
import Grammarchecker from "views/admin/Grammarchecker";
import Translator from "views/admin/Translator";

import { checkAuthenticated } from "actions/auth";
import { load_user } from "actions/profile";
import PrivateRoute from "hocs/PrivateRoute";

import Activevoicelessone from "views/module/lessones/Activevoicelessone";
import Activevoicelessone2 from "views/module/lessones/Activevoicelessone2";
import Activevoicelessone3 from "views/module/lessones/Activevoicelessone3";
import Activevoicelessone4 from "views/module/lessones/Activevoicelessone4";
import Activevoicelessone5 from "views/module/lessones/Activevoicelessone5";
import Activevoicelessone6 from "views/module/lessones/Activevoicelessone6";
import Activevoicelessone7 from "views/module/lessones/Activevoicelessone7";
import Activevoicelessone8 from "views/module/lessones/Activevoicelessone8";
import Activevoicelessone9 from "views/module/lessones/Activevoicelessone9";
import Activevoicelessone10 from "views/module/lessones/Activevoicelessone10";
import Activevoicelessone11 from "views/module/lessones/Activevoicelessone11";
import Activevoicelessone12 from "views/module/lessones/Activevoicelessone12";


function Admin({checkAuthenticated, load_user }) {

  // if(isAuthenticated)
  //   return <Redirect  to='/admin/dashboard' />;
  // if(!isAuthenticated)
  //   return <Redirect  to='/' />;

  useEffect(()=>{
    checkAuthenticated();
    load_user();
  },[]);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className=" mx-auto w-full ">
        {/* <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24"> */}
          <Switch>
            <PrivateRoute path="/admin/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/admin/settings" exact component={Settings} />
            <PrivateRoute path="/admin/question" exact component={Question} />
            <PrivateRoute path="/admin/grammarchecker" exact component={Grammarchecker} />
            <PrivateRoute path="/admin/translator" exact component={Translator} />
            <PrivateRoute path="/admin/dashboard/Activevoice" exact component={Activevoice} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone" exact component={Activevoicelessone} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone2" exact component={Activevoicelessone2} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone3" exact component={Activevoicelessone3} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone4" exact component={Activevoicelessone4} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone5" exact component={Activevoicelessone5} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone6" exact component={Activevoicelessone6} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone7" exact component={Activevoicelessone7} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone8" exact component={Activevoicelessone8} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone9" exact component={Activevoicelessone9} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone10" exact component={Activevoicelessone10} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone11" exact component={Activevoicelessone11} />
            <PrivateRoute path="/admin/dashboard/activevoice/Activevoicelessone12" exact component={Activevoicelessone12} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

export default connect(null, { checkAuthenticated,load_user })(Admin);