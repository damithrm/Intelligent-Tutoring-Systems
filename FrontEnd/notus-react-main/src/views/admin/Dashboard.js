import React from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  return (
    <>
          <div className="relative bg-blueGray-100">
          <AdminNavbar />
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
        
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <Link to="/admin/dashboard/activevoice">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i class="fas fa-angle-double-up"></i>

                    </div>
                    <h6 className="text-xl font-semibold">12 Tenses </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Do you want to improve your English verb tense skills? A good place to start is this list of all 12 verb tenses where we give the verb conjugation for the verb “to travel”.

                    </p>
                  </div>
                </div>
              </Link>
            </div>
        

        
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <Link to="/">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i class="fas fa-angle-double-down"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Passive Voice </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    The passive voice is basically the opposite of the active voice: it’s when the subject is acted upon by the object. In other words, the subject receives the action, and the object does the action.

                    </p>
                  </div>
                </div>
              </Link>
            </div>
        

            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <Link to="/">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-comment"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Reported speech</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Reported speech is how we represent the speech of other people or what we ourselves say. There are two main types of reported speech: direct speech and indirect speech.

                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <Link to="/">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-circle-nodes"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Conjunctions</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Conjunctions are parts of speech that connect words, phrases, clauses, or sentences. There are three kinds of conjunctions: coordinating, paired, and subordinating.

                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <Link to="/">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-circle-question text-md"></i>
                    </div>
                    <h6 className="text-xl font-semibold">WH-questions</h6>
                    <p className="mt-2 mb-4 pb-6 text-blueGray-500">
                    WH-questions are questions starting with WH-words including: what, when, where, who, whom, which, whose, why and how.

                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <Link to="/">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-boxes-stacked"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Idioms</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    An idiom is a phrase, saying, or a group of words with a metaphorical (not literal) meaning, which has become accepted in common usage. Source: theidioms.com

                    </p>
                  </div>
                </div>
              </Link>
            </div>

            </div>
            <FooterAdmin />
            </div>
            </div>

    </>
  );
}
