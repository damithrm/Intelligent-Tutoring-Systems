import React,{useState ,useEffect} from "react";
import { Redirect, Link, } from 'react-router-dom';
import { connect } from "react-redux";
import { update_profile } from "actions/profile";
import { delete_account } from "actions/auth";

// components

function CardSettings({
  delete_account,
  update_profile,
  first_name_global,
  last_name_global,
  phone_global,
  city_global,

}) {

  const[profileUpdated, setProfileUpdated] = useState(false);

  const [formData, setFormData] = useState({
    first_name:'',
    last_name:'',
    phone:'',
    city:''
  });

  const {first_name, last_name, phone, city} = formData;

  useEffect(()=>{
    setFormData({
        first_name: first_name_global,
        last_name: last_name_global,
        phone: phone_global,
        city: city_global,
    })
  },[first_name_global]);


  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })


  const onSubmit = e =>{
      // e.proventDefault();
      const updateProfile = async () => {
        update_profile(first_name, last_name, phone, city); 
        setProfileUpdated(!profileUpdated);
      }
      updateProfile();
      // console.log(isAuthenticated); 
      // setAccountCreated(true);
  };

  // if(accountCreated)
  //     return <Redirect  to='/admin/dashboard' />;


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={e=> onSubmit(e)}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="first_name"
                    placeholder={`${first_name_global}`}
                    onChange={e => onChange(e)}
                    value={first_name}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="last_name"
                    placeholder={`${last_name_global}`}
                    onChange={e => onChange(e)}
                    value={last_name}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="phone"
                    placeholder={`${phone_global}`}
                    onChange={e => onChange(e)}
                    value={phone}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="city"
                    placeholder={`${city_global}`}
                    onChange={e => onChange(e)}
                    value={city}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
            
            <button
              className="bg-lightBlue-400 mt-5 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type=""
            >
              Update
            </button>
            
          </form>

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

export default connect(mapStateToProps,{delete_account, update_profile})(CardSettings);