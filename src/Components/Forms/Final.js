import React from "react";


const Final = ({ nextStep, handleFormData, prevStep, values ,pkg})  => {

  
    // const submitFormData = (e) => {
    //   e.preventDefault();
  
      
    //     nextStep();
    // };
  const { Name, Age, Region,Package} = values;
  return (
    <>
      <div className="final_footer">
        <div>
        
        <p  className="heading">Summary</p>
        <p className="heading1">{Name}</p>
          <p>
             Name : {Name}
          </p>
          <p>
           Age : {Age}
          </p>
          <p>
            Where do you live :{Region}
          </p>
          <p>
         <p>Package : {Package}</p> 
          <p>Premium :{pkg} </p>

          </p>
          <div className="button1">
              <button className="buttonBack" onClick={prevStep}>
            Back
              </button>

              <button className="button" type="submit" >
             Buy
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Final;
