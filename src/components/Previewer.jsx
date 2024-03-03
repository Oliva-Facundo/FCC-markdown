import React from "react";

const Previewer = () => {
  return (
    <div className=" bg-secondary rounded-2xl w-[50rem] min-h-[40rem] p-2 ">
      <h1 className=" font-semibold pl-4 text-white text-center text-lg">
        Previewer
      </h1>
      <div id="preview" className=" bg-tertiary px-3 rounded-lg"></div>
    </div>
  );
};

export default Previewer;
