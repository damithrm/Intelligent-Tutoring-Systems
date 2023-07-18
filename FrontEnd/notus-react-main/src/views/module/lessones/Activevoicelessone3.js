import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Player } from "video-react";
import Cookies from 'js-cookie'
import CSRFToken from "components/CSRFToken";
// import ReactPlayer from 'react-player'
import VideoPlayer from "react-video-js-player";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
// components

export default function Activevoicelessone3() {

  const [count, setCount] = useState(0);
  const [resultcount, setresultcount] = useState(0);
  const [name, fetchquestion] = useState([]);
  const [name1, fetchquestion1] = useState([]);
  const [activequestion, setActivequestion]= useState(null)
  const [correctA, setcorrectA]= useState(false)
  const [quiz , setquiz ]= useState(false)


  const [formData, setFormData] = useState({
    isAgree : 'false',
    answer : ''
  });

  const [answer, setanswer] = useState("");
  // const [Users, fetchUsers] = useState([])

  const getData = () => {
    fetch('http://localhost:8000/questionBank/selectquestion')
      .then((res) => res.json())
      .then((res) => {
        fetchquestion(res);
        fetchquestion1(res.filter(test => test.lessoneId === 3));
        setActivequestion(res[count]);
        
      })
  }

  useEffect(() => {
      setCount(0);
      setresultcount(0);
      getData();
      setquiz(false);

  }, [])


  const handlequiz = () => {
    setquiz(true);
    setActivequestion(name1[count]);
  }

  const handleNextItem = () => {
      setActivequestion(name1[count + 1]);
      setCount(count + 1);
      setcorrectA(false);
      console.log(activequestion.correctAnswer);
      console.log(formData.answer);

      activequestion.correctAnswer === formData.answer ? setresultcount(resultcount+1) : setresultcount(resultcount);
      setanswer("");
      
  };

  const Showanswer = () => {
      setcorrectA(true);
      activequestion.correctAnswer === formData.answer ? setanswer("Your answer is correct") : setanswer("Your answer is not correct");
    }


    
  const Chackanswer = e => {
    setanswer("");
    setcorrectA(false);
    const target = e.target
    const name = target.name
    const value = target.value
    setFormData({
      ...formData,
      [name] : value
    })
    
}


const updateResult = () => {


  fetch('http://localhost:8000/dolesson/updatedolesson', {
    method: 'PUT',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify({ 
      'withCredentials':true,
      result: '80',
      lessoneId : 1
      }),
  })
  .then((response) => response.json())
  //Then with the data from the response in JSON...
  .then((data) => {
    console.log('Success:', data);
    // setanswer(data.prediction);
  })
  //Then with the error genereted...
  .catch((error) => {
    console.error('Error:', error);
  });



};


  return activequestion ? (
    <>
      <div className="relative bg-blueGray-100">
        <AdminNavbar />
        <div className="w-full h-80 bg-lightBlue-600">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1"></div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -mt-40">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Present Perfect Tense
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <p className="text-blueGray-600 text-md mt-3 mb-6 ">
                The present perfect tense is used to express the situation or
                event which is completed but in a present consequence. It is a
                combination of the ideal aspect done in the present tense.
              </p>
              <h4 className="font-bold text-lg mb-4">1. Positive Sentence</h4>
              <div class="flex items-center">
                <div className="font-bold mb-3 w-1/4"></div>
                <div className="relative w-2/4 mb-3 text-center border-4 border-orange-400">
                  <h4 className="font-bold mb-3">Structural formula</h4>

                  <label
                    className="block text-blueGray-600 text-md font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Subject + Auxiliary have (has/ have) + Main Verb (Past
                    Participle)
                  </label>
                </div>
              </div>

              <div className="relative my-3 mr-4">
                <h4 className="text-blueGray-500 text-md mt-2 mx-8 mb-2 font-bold">
                  Examples,{" "}
                </h4>

                <ul
                  className=" block text-blueGray-600 text-md mx-20 my-2"
                  htmlFor="grid-password"
                >
                  <li>
                    I <label className="font-bold">have seen </label>you.
                  </li>
                  <li>
                    You <label className="font-bold">have eaten </label>mine.
                  </li>
                </ul>
              </div>
              <br />

              <h4 className="font-bold text-lg mb-4">2. Negative Sentence</h4>
              <div class="flex items-center">
                <div className="font-bold mb-3 w-1/4"></div>
                <div className="relative w-2/4 mb-3 text-center border-4 border-orange-400">
                  <h4 className="font-bold mb-3">Structural formula</h4>

                  <label
                    className="block text-blueGray-600 text-md font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Subject + Auxiliary have (has/ have) + not + Main Verb (Past
                    Participle)
                  </label>
                </div>
              </div>

              <div className="relative my-3 mr-4">
                <h4 className="text-blueGray-500 text-md mt-2 mx-8 mb-2 font-bold">
                  Examples,{" "}
                </h4>

                <ul
                  className=" block text-blueGray-600 text-md mx-20 my-2"
                  htmlFor="grid-password"
                >
                  <li>
                    She <label className="font-bold">has not been </label>to
                    Rome.
                  </li>
                  <li>
                    We <label className="font-bold">have not played </label>
                    football.
                  </li>
                </ul>
              </div>
              <br />

              <h4 className="font-bold text-lg mb-4">3. Question Sentence</h4>
              <div class="flex items-center">
                <div className="font-bold mb-3 w-1/4"></div>
                <div className="relative w-2/4 mb-3 text-center border-4 border-orange-400">
                  <h4 className="font-bold mb-3">Structural formula</h4>

                  <label
                    className="block text-blueGray-600 text-md font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Auxiliary have (Has/ Have) + Subject + Main Verb (Past
                    Participle)
                  </label>
                </div>
              </div>

              <div className="relative my-3 mr-4">
                <h4 className="text-blueGray-500 text-md mt-2 mx-8 mb-2 font-bold">
                  Examples,{" "}
                </h4>

                <ul
                  className=" block text-blueGray-600 text-md mx-20 my-2"
                  htmlFor="grid-password"
                >
                  <li>
                    <label className="font-bold">Have </label>you{" "}
                    <label className="font-bold">finished?</label>
                  </li>
                  <li>
                    <label className="font-bold">Have </label>they{" "}
                    <label className="font-bold">done </label>it?
                  </li>
                </ul>
              </div>
              <br />

              <div className="flex items-center h-96 ">
                <div className="w-1/6 h-96 py-6"></div>

                <VideoPlayer
                  src="/videos/video1.mp4"
                  className="w-4/6 h-96 py-6"
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-400 text-xl font-bold">
                  {quiz ? (
                    <span>Questions</span>
                  ) : (
                    <button
                      onClick={handlequiz}
                      className=" mt-3 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    >
                      Quiz Start
                    </button>
                  )}
                </h6>
              </div>
            </div>
            {quiz ? (
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <ul>
                  {/* {Users.map((item) => {
          return <li key={item.id}>{item.question}</li>
        })} */}

                  <li className="mt-1">
                    <h5 className="text-blueGray-700 text-sm mt-5 mb-6 font-bold uppercase">
                      {activequestion.question}
                    </h5>
                  </li>
                  <form>
                    <input
                      type="radio"
                      onChange={(e) => Chackanswer(e)}
                      value={activequestion.answerA}
                      name="answer"
                      className="inline mr-4"
                    />
                    <span className="inline text-blueGray-500 text-sm mr-4 font-bold ">
                      A :- {activequestion.answerA}
                    </span>
                    <br />
                    <input
                      type="radio"
                      onChange={(e) => Chackanswer(e)}
                      value={activequestion.answerB}
                      name="answer"
                      className="inline mr-4"
                    />
                    <span className="inline text-blueGray-500 text-sm mr-4 font-bold ">
                      B :- {activequestion.answerB}
                    </span>
                    <br />
                    <input
                      type="radio"
                      onChange={(e) => Chackanswer(e)}
                      value={activequestion.answerC}
                      name="answer"
                      className="inline mr-4"
                    />
                    <span className="inline text-blueGray-500 text-sm mr-4 font-bold ">
                      C :- {activequestion.answerC}
                    </span>
                    <br />
                    <input
                      type="radio"
                      onChange={(e) => Chackanswer(e)}
                      value={activequestion.answerD}
                      name="answer"
                      className="inline mr-4"
                    />
                    <span className="inline text-blueGray-500 text-sm mr-4 font-bold ">
                      D :- {activequestion.answerD}
                    </span>
                    <br />
                    <li className="text-blueGray-400 text-md mt-3 font-bold">
                      {answer}
                    </li>
                  </form>
                  <li className="mt-2 mb-3">
                    {correctA ? (
                      <div>
                        {" "}
                        <span className="block text-blueGray-600 text-base font-bold ">
                          {" "}
                          Answer :-{" "}
                        </span>
                        <span className="block text-blueGray-500 text-sm font-bold mx-4">
                          {" "}
                          {activequestion.correctAnswer}{" "}
                        </span>{" "}
                      </div>
                    ) : null}
                  </li>
                </ul>
                <button
                  onClick={Showanswer}
                  className="mt-3 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                >
                  Anwser
                </button>
                <button
                  onClick={handleNextItem}
                  className=" mt-3 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                >
                  Next
                </button>
              </div>
            ) : null}
          </div>

          <FooterAdmin />
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="relative bg-blueGray-100">
        <AdminNavbar />
        <div className="w-full h-80 bg-lightBlue-600">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1"></div>
        </div>
        <CSRFToken />
        <div className="px-4 md:px-10 mx-auto w-full -mt-40">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            {/* <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">Present Simple Tense</h6>
                </div>
              </div> */}
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <h4 className="text-blue-600 mr-20 mt-10 text-xl font-bold">
                {" "}
                Lesson Completed !!
              </h4>

              <div className="relative my-3 mr-4">
                <h4 className="text-blueGray-500 text-md mt-2 mx-8 mb-2 font-bold">
                  {" "}
                  Correct answers {resultcount}/{count}{" "}
                </h4>
              </div>

              <button
                onClick={updateResult}
                className="mt-3 bg-red-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              >
                Done
              </button>
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
