import React, { useEffect } from "react";
import { BrowserRouter , Switch, Route, Routes,Redirect} from "react-router-dom";
import { connect } from 'react-redux';


const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) =>{

    console.log("isAuthenticated --------------------");
    console.log(isAuthenticated);
    return(
    // <BrowserRouter>
        <Switch>
            <Route 
            {...rest}
            render = {props => (isAuthenticated ? <Component {...props} /> : <Redirect to='/'/>)}
            />
        </Switch>
    /* </BrowserRouter> */
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{})(PrivateRoute);