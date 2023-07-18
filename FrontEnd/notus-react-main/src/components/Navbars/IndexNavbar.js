/*eslint-disable*/
import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import "assets/styles/style.css"
import { connect } from 'react-redux';
import { logout } from "actions/auth";

import { checkAuthenticated } from "actions/auth";
import { load_user } from "actions/profile";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

function Navbar({props,isAuthenticated,logout,checkAuthenticated,load_user}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);


  // useEffect(()=>{
  //   checkAuthenticated();
  //   load_user();
  // },[]);

  const authLinks = (
    <Fragment>
      <li className="items-center">
        <a
          className="text-red-700 text-lg font-bold leading-relaxed inline-block mr-6 py-2 whitespace-nowrap"
          to="/"
          onClick={logout}
          href='/'
          >
            Logout
         </a>
      </li>
    </Fragment>

  );

  const guestLinks = (
    <Fragment>
      <li className="flex items-center">
              <Link
              to="/auth/login"
              className="text-cyan-300 text-lg font-bold leading-relaxed inline-block mr-6 py-2 whitespace-nowrap "
            >
              Login
            </Link>
              </li>
    </Fragment>

  );

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blue-900 text-md font-bold topic leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Grammar Academy
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index-navbar"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}
              {/* <li className="flex items-center">
              <Link
                to="/admin/dashboard"
                className="text-sm py-2 px-4 text-base  block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                Dashboard
              </Link>
              </li> */}
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>
              
              { isAuthenticated ? authLinks : guestLinks }
              {/* <li className="flex items-center">
              <Link
              to="/auth/login"
              className="text-cyan-300 text-lg font-bold leading-relaxed inline-block mr-6 py-2 whitespace-nowrap "
            >
              Login
            </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout,checkAuthenticated,load_user})(Navbar);