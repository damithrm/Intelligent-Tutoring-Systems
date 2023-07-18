import React, { useState, useEffect } from 'react'
import axios from 'axios';
// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {

  const [loading, setLoading] = useState(true);
  const [users, setusers] = useState([]);
  const [question, setquestion] = useState([]);
  const [lesson, setlesson] = useState([]);
  const [module, setmodule] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:8000/accounts/get_users');
        setusers(response);
        const {data: response1} = await axios.get('http://localhost:8000/questionBank/selectquestion');
        setquestion(response1);
        const {data: response2} = await axios.get('http://localhost:8000/lesson/selectLessone');
        setlesson(response2);
        const {data: response3} = await axios.get('http://localhost:8000/module/selectmodule');
        setmodule(response3);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MODULE"
                  statTitle={module.length}
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="LESSONES"
                  statTitle={lesson.length}
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="USERS"
                  statTitle={users.length}
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="QUESTION"
                  statTitle={question.length}
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-circle-question"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
