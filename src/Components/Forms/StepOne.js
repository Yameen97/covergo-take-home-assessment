import React from "react";





const StepOne = ({ nextStep, handleFormData, values }) => {




  return (
    <div>
      <div className="Step1_main">
        <div>
        <div >
        <p  className="heading">Hello There!</p>
       <p>Let's buy some insurance. It is going to take only a few steps</p>
      </div>
        <button  onClick={()=> nextStep()} className="button">
        Start
      </button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
