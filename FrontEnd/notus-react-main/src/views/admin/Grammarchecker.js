import React, { useState, useEffect } from 'react'
import axios from "axios";
import Cookies from 'js-cookie'
import CSRFToken from "components/CSRFToken";

// import { connect } from 'react-redux';
// import { grammer } from "actions/auth";


import AdminNavbar from "components/Navbars/AdminNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
// components



export default function Grammarchecker() {

  const [formData, setFormData] = useState({
    text : ''
  });
  const [gramer, fetchgramer] = useState([]);
  const [answer, setanswer] = useState("");
  const {text} = formData;
  const [position, setposition]= useState(false);
  const [position1, setposition1]= useState(false);
  const onChange = e => {
    setposition(false);
    setposition1(false);
    setFormData({...formData, [e.target.name]: e.target.value })};

  const handleNextItem = () => {
 

      fetch('http://localhost:8000/grammar-checker/check', {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify({ text: text }),
      })
      .then((response) => response.json())

      .then((data) => {
        console.log('Success:', data);
        setanswer(data.prediction);
        setposition(true);
      })

      .catch((error) => {
        console.error('Error:', error);
      });

      fetch('http://localhost:8000/grammar-checker-sp/check', {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify({ text: text }),
      })
      .then((response) => response.json())

      .then((data) => {
        console.log('Success:', data);
        fetchgramer(data);
        setposition1(true);
      })

      .catch((error) => {
        console.error('Error:', error);
      });
 

  
  };


  return (
    <>
      <div className="flex flex-wrap">
        <div className=" w-full lg:w-12/12 px-4">
        <div className="relative bg-blueGray-100">
      
      <AdminNavbar />
     <div className="w-full h-80 bg-lightBlue-600">
       <div className="  h-80 relative w-full px-4 max-w-full flex-grow flex-1">
           
       </div>
        </div>
        <CSRFToken />
    
            <div className="relative -mt-40 flex flex-col min-w-0 break-words w-5/6 ml-12 mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-400 text-xl font-bold">Grammar Checker</h6>
                
                    </div>
                </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                <div className="relative w-full mb-3">
                  <label
                    className="block text-blueGray-600 text-md mt-3 font-bold"
                    htmlFor="last_name"
                  >
                    Enter sentence
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="text"
                    placeholder=""
                    onChange={ e => onChange(e) } 
                    
                  />
                </div>
                { position ? (
                <div>
                  <div>
                    <h3 className='text-blueGray-600 text-md mt-3 font-bold'>
                        Correct sentences -
                    </h3>
                    <h3 className='text-cyan-800 text-md mt-3 font-bold'>
                      {answer}
                    </h3>
                  </div> 
                  {position1 ?(
                  
                       <div>
                        <h4 className='text-blueGray-600 text-md mt-8 font-bold'> Grammer Checker Report</h4>
                        <div>
                        <h3 className="text-blueGray-400 text-lg ">
                            Number Of Errors - {gramer.length}
                        </h3>
                  {gramer.map((item) => {
                      return <div className='mt-5' key={item}>
                            <h3 className="text-blueGray-400 text-lg ">
                            Message - <span className='text-md'>{item.message}</span>
                            </h3>
                            <h3 className="text-blueGray-400 text-lg ">
                            Replacements - <span className='text-md'>{item.replacements}</span>
                            </h3>
                            <h3 className="text-blueGray-400 text-lg ">
                            Error Type - <span className='text-md'>{item.category}</span>
                            </h3>
                            </div>
                  })}
                  </div></div>    ):<h3 className="text-blueGray-400 text-md mt-8">
                                            Loading...
                            </h3>}
                </div>
                
                ):null}
                <button
                className="bg-lightBlue-400 mt-5 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                onClick={handleNextItem}
                >
                    Check 
                </button>

            </div>
        </div>
      </div>
      <div className='h-40'>

      </div>
      <FooterAdmin />
      </div>
      </div>
    </>
  );
}
