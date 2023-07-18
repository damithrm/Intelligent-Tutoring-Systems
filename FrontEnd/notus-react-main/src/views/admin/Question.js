import React from "react";

// components

import ShowQuestion from "components/Cards/ShowQuestion.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <ShowQuestion />
        </div>
      </div>
    </>
  );
}