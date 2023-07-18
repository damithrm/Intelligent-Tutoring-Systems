import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import CardBarChart from "components/Cards/CardBarChart.js";

export default function Settings() {
  return (
    <>
     <div className="relative bg-blueGray-100 ">
      
      <AdminNavbar />
     <div className="w-full h-80 bg-lightBlue-600">
       <div className="  h-80 relative w-full px-4 max-w-full flex-grow flex-1">
           
       </div>
     </div>
      <div className="flex flex-wrap -mt-40">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
        <div className="w-full lg:w-8/12 -mt-20 px-4">
          <CardBarChart />
        </div>
        
      </div>
      <FooterAdmin />
      </div>

    </>
  );
}
