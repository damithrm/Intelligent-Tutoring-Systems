// import React from 'react'; // get the React object from the react module
import React, { useState, useEffect } from 'react'
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function ShowQuestion() {
  
    const [count, setCount] = useState(0);
    const [resultcount, setresultcount] = useState(0);
    const [name, fetchquestion] = useState([]);
    // const [name1, fetchquestion1] = useState(null);
    const [activequestion, setActivequestion]= useState(null)
    const [correctA, setcorrectA]= useState(false)


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
          console.log(res);
          fetchquestion(res);
          setActivequestion(res[count]);
          
        })
    }
  
    useEffect(() => {
        setCount(0);
        setresultcount(0);
        setcorrectA(false);
        getData();
 
    }, [])

    const handleNextItem = () => {
      var randomItem = name[Math.floor(Math.random()*name.length)];
      setActivequestion(randomItem);
      setCount(count + 1);
      console.log(randomItem);
      setcorrectA(false);
      console.log(activequestion.correctAnswer);
      console.log(formData.answer);

      activequestion.correctAnswer == formData.answer ? setresultcount(resultcount+1) : setresultcount(resultcount);

      if(count>10){
        setActivequestion(null);
      }
        
    };

    const Showanswer = () => {
        setcorrectA(true);
        activequestion.correctAnswer == formData.answer ? setanswer("answer is correct") : setanswer("answer is not correct");

      }


      
    const Chackanswer = e => {

      const target = e.target
      const name = target.name
      const value = target.value
      setFormData({
        ...formData,
        [name] : value
      })
      
  }


  return activequestion ?(
    <>

    <div className="relative bg-blueGray-100">
      
      <AdminNavbar />
     <div className="w-full h-80 bg-lightBlue-600">
       <div className="  h-80 relative w-full px-4 max-w-full flex-grow flex-1">
           
       </div>
     </div>

    
      <div className="relative -mt-40 flex flex-col min-w-0 break-words w-5/6 ml-12 mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-400 text-xl font-bold">Questions</h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <ul>
        {/* {Users.map((item) => {
          return <li key={item.id}>{item.question}</li>
        })} */}

        <li className='mt-1'>
            <h5 className="text-blueGray-700 text-sm mt-5 mb-6 font-bold uppercase">
                {activequestion.question}
            </h5>
        </li>
          <form>
          <input type="radio" onChange={ e => Chackanswer(e) } value={activequestion.answerA} name="answer" className="inline mr-4"/>
            <span className="inline text-blueGray-500 text-sm mr-4 font-bold ">
                A :-  {activequestion.answerA}
            </span>
            <br/>
            <input type="radio" onChange={ e => Chackanswer(e) } value={activequestion.answerB} name="answer" className="inline mr-4"/>
            <span className="inline text-blueGray-500 text-sm mr-4 font-bold ">
                B :-  {activequestion.answerB}
            </span>
                <br/>
            <input type="radio" onChange={ e => Chackanswer(e) } value={activequestion.answerC} name="answer" className="inline mr-4"/>
            <span className="inline text-blueGray-500 text-sm mr-4 font-bold ">
                C :-  {activequestion.answerC}
            </span>
            <br/>
            <input type="radio" onChange={ e => Chackanswer(e) } value={activequestion.answerD} name="answer" className="inline mr-4"/>
            <span className="inline text-blueGray-500 text-sm mr-4 font-bold ">
                D :-  {activequestion.answerD}
            </span>
            <br/>
            <li className='text-blueGray-400 text-md mt-3 font-bold'>
                  { answer } 
            </li>

            </form>
        <li className='mt-2 mb-3'>
                  { correctA ? <div> <span className="block text-blueGray-600 text-base font-bold "> Answer :- </span><span className="block text-blueGray-500 text-sm font-bold mx-4"> { activequestion.correctAnswer } </span> </div> : null }
        </li>
        


        {/* {(()=>{
            let posts = [];
            let i = 0;
            while(i< Users.length){
                posts.push(<li key={Users[i].id}>{y} {Users[i].question}</li>)
                i++;
            }
            return posts[y];
        })()} */}
      </ul>
      <button onClick={Showanswer} className="mt-3 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
              Anwser
            </button>
      <button onClick={handleNextItem} className=" mt-3 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
              Next
            </button>

        </div>
      </div>
      <div className='h-36'></div>
      <FooterAdmin/>
      </div>
    </>
  ):(
    <>

    <div className="relative bg-blueGray-100">
      
      <AdminNavbar />
     <div className="w-full h-80 bg-lightBlue-600">
       <div className="  h-80 relative w-full px-4 max-w-full flex-grow flex-1">
           
       </div>
     </div>

    
      <div className="relative -mt-40 flex flex-col min-w-0 break-words w-5/6 ml-12 mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-400 text-xl font-bold">Result</h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <ul>
        {/* {Users.map((item) => {
          return <li key={item.id}>{item.question}</li>
        })} */}

        <li className='mt-1'>
            <h5 className="text-blueGray-700 text-sm mt-5 mb-6 font-bold uppercase">
                {/* {activequestion.question} */}
                Correct answers {resultcount} / 10
            </h5>
        </li>
          
        <li className='mt-2 mb-3'>
                  {/* { correctA ? <div> <span className="block text-blueGray-600 text-base font-bold "> Answer :- </span><span className="block text-blueGray-500 text-sm font-bold mx-4"> { activequestion.correctAnswer } </span> </div> : null } */}
        </li>
        


      </ul>
      {/* <button onClick={Showanswer} className="mt-3 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
              Anwser
            </button>
      <button onClick={handleNextItem} className=" mt-3 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
              Next
            </button> */}

        </div>
      </div>
      <div className='h-36'></div>
      <FooterAdmin/>
      </div>
    </>
  );
}
