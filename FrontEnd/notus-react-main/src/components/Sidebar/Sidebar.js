/*eslint-disable*/
import React,{Fragment} from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from "actions/auth";
import "assets/styles/style.css"

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

function Sidebar({isAuthenticated,logout}) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const authLinks = (
    <Fragment>
      <li className="items-center">
        <a
          className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
          to="/"
          onClick={logout}
          href='/'
          >
          <i className="fa-solid fa-arrow-right-from-bracket text-rose-500 mr-2 text-sm"></i>{" "}
            Logout
         </a>
      </li>
    </Fragment>

  );

  const guestLinks = (
    <Fragment>
      <li className="items-center">
                <NavLink
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/login"
                >
                  <i className="fa-solid fa-right-to-bracket text-lime-500 mr-2 text-sm"></i>{" "}
                  Login
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/register"
                >
                  <i className="fa-solid fa-id-card text-indigo-500 mr-2 text-sm"></i>{" "}
                  Register
                </NavLink>
              </li>
    </Fragment>

  );

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 topic text-blue-900 mr-0 inline-block whitespace-nowrap text-md uppercase font-bold p-4 px-0"
            to="/"
          >
            GRAMMAR ACADEMY

          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            <hr className="my-4 md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-cyan-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fas fa-user-circle  mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-cyan-300")
                    }
                  ></i>{" "}
                  Profile
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/question") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/question"
                >
                  <i
                    className={
                      "fa-solid fa-list-check mr-2 text-md " +
                      (window.location.href.indexOf("/admin/question") !== -1
                        ? "opacity-75"
                        : "text-cyan-300")
                    }
                  ></i>{" "}
                  Tasks
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/grammarchecker") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/grammarchecker"
                >
                  <i
                    className={
                      "fa fa-server mr-2 " +
                      (window.location.href.indexOf("/admin/grammarchecker") !== -1
                        ? "opacity-75"
                        : "text-cyan-300")
                    }
                  ></i>{" "}
                  grammar checker
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/translator") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/translator"
                >
                  <i
                    className={
                      "fa-solid fa-language font-bold mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/translator") !== -1
                        ? "opacity-75"
                        : "text-cyan-300")
                    }
                  ></i>{" "}
                  Translator
                </Link>
              </li>

              

            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              
              { isAuthenticated ? authLinks : guestLinks }

            </ul>


            <hr className="my-4 md:min-w-full" />



            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            modules
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">

              <li className="inline-flex">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  to="/admin/dashboard/activevoice"
                >
                  <i className="fas fa-angle-double-up mr-2 text-red-300 text-base"></i>
                  12 Tenses
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  to="/admin/dashboard/activevoice"
                >
                  <i className="fas fa-angle-double-down mr-2 text-red-300 text-base"></i>
                  Passive Voice
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  to="/admin/dashboard/activevoice"
                >
                  <i className="fas fa-comment mr-2 text-red-300 text-base"></i>
                  Reported speech
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  to="/admin/dashboard/activevoice"
                >
                  <i className="fas fa-circle-nodes mr-2 text-red-300 text-base"></i>
                  Conjunctions
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  to="/admin/dashboard/activevoice"
                >
                  <i className="fas fa-circle-question mr-2 text-red-300 text-base"></i>
                  WH-questions
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  to="/admin/dashboard/activevoice"
                >
                  <i className="fas fa-boxes-stacked mr-2 text-red-300 text-base"></i>
                  Idioms
                </Link>
              </li>

            



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

export default connect(mapStateToProps, {logout})(Sidebar);