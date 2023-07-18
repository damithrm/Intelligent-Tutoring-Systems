import React from "react";
import { Link } from "react-router-dom";
// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Activevoice() {
  return (
    <>
      <div className="relative bg-blueGray-100 ">
      
         <AdminNavbar />
        <div className="w-full h-80 bg-lightBlue-600">
          <div className="  h-80 relative w-full px-4 max-w-full flex-grow flex-1">
              
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full mb-10 -mt-40">
        <div className="flex flex-wrap ">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-12 shadow-lg rounded">
              <div className="border border-sky-1000 rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <div className="px-3 inline text-white p-1 text-center inline-flex items-center justify-center w-8 h-8 my-2 shadow-lg rounded-full bg-red-400">
                        <i class="fas fa-angle-double-up"></i>
                      </div>
                      <span className="px-3 inline font-bold text-lg text-blueGray-700">
                        Active voice Lessone List
                      </span>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <ul className="items-center w-full bg-transparent border-collapse">
                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      1. Present Simple Tense
                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone2"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      2. Present Continuous Tense
                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone3"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      3. Present Perfect Tense
                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone4"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      4. Present perfect Continuous Tense

                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone5"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      5. Past Simple Tense

                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone6"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      6. Past Continuous Tense

                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone7"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      7. Past Perfect Tense
                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone8"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      8. Past Perfect Continuous Tense

                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone9"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      9. Future Simple Tense

                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone10"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      10. Future Continuous Tense

                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone11"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      11. Future Perfect Tense
                    </li>
                  </Link>

                  <Link className="text-blueGray-700 hover:text-blueGray-500" to="/admin/dashboard/activevoice/Activevoicelessone12"> 
                    <li className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    12. Future Perfect Continuous Tense
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      
      <FooterAdmin/>
      </div>
   </>
  );
}