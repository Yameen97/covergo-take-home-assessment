import React from "react";





const Error = ({ homeStep }) => {




  return (
    <div>
      <div className="Step1_main">
        <div>
        <div >
        <p  className="heading">Ooops</p>
       <p>your age is over our accepted limit.<br></br>We are sorry but we cannot insure you now</p>
      </div>
        <button   className="button"  onClick={()=> homeStep()}>
     Ok :(
      </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
