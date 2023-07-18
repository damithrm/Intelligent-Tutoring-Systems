import React from "react";
import { connect } from "react-redux";
import { delete_account } from "actions/auth";
// components

function CardProfile({

  delete_account,
  first_name_global,
  last_name_global,
  phone_global,
  city_global,

}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/profile1.jpg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
            {`${first_name_global}`} {`${last_name_global}`}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-phone mr-2 text-xl text-blueGray-400"></i>
              
              {`${phone_global}`}
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-location-arrow mr-2 text-lg text-blueGray-400"></i>
              
              {`${city_global}`}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">

                  <div className="mt-5">
                  <a
                  className="bg-lightBlue-400 mt-5 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  href="/"
                  onClick={delete_account}
                  >
                  Delete youer account
                </a>
                </div>

          </div>
        </div>
      </div>
    </>
  );
}


const mapStateToProps = state => ({

  first_name_global:state.profile.first_name,
  last_name_global:state.profile.last_name,
  phone_global:state.profile.phone,
  city_global:state.profile.city,

});

export default connect(mapStateToProps,{delete_account})(CardProfile);