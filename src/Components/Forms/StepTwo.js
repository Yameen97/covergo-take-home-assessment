import { useState } from "react";



const StepTwo = ({ errorStep,nextStep, handleFormData, prevStep, values,setPkg,pkg,cur,fifty,seventy }) => {
   //creating error state for validation
  // const [error, setError] = useState(false);
    
 
  const submitFormData = (e) => {
    e.preventDefault();
    if(values.Age <= 100){
      nextStep();
    }else{
      console.log(values.Age)
      errorStep();
    }
      
      
  };

 
  const {  Package} = values;
  return (
    <>
      <div className="step2_main" >
        <div>  <p  className="heading">Tell us about yourself</p>
       
          <form onSubmit={submitFormData} >
          <div className="form">
         
            <label  className="label"> Name
            <input className="input"
             
              name="firstName"
              defaultValue={values.Name}
              type="text"
              placeholder="Name"
              onChange={handleFormData("Name")}
            /></label>
          
          
       
            <label  className="label">Age
            <input className="input"
             
              name="Age"
              // defaultValue={values.Age}
              defaultValue={values.Age}
              type="number"
              placeholder="Age"
              
              required
              onChange={handleFormData("Age")}
            /></label>
            <label  className="label">Where do you live
            <select className="input1"
              
            as="select"
   
            placeholder="Region"
            onChange={handleFormData("Region")}
            >
            <option value="">select</option>
          <option value="Hong Kong">Hong Kong</option>
      <option value="USA" >USA</option>
      <option value="Australia">Australia</option>
      </select>
            </label>
             
           </div>
            <div className="main_footer">
            <div className="main_radio">
            <div className="radio"><label><input type="radio"   name="Package"  value="Standard" onChange={handleFormData("Package")} />Standard</label> </div>  
            <div className="radio"><label><input type="radio" name="Package" value="Safe" onChange={handleFormData("Package")}/>Safe(+{fifty}{cur},50%)</label></div>
            <div className="radio"><label><input type="radio" name="Package" value="Super Safe" onChange={handleFormData("Package")} />Super Safe(+{seventy}{cur},75%)</label></div>
       

            </div>
            <p  className="paragraph">Your Premium is:   {pkg} </p>
            
                
            
            <div className="button1">
              <button className="buttonBack" onClick={prevStep}>
              Back
              </button>

              <button className="button" type="submit" >
               Next
              </button>
            </div>
            </div>
          
            </form>
          
        </div>
      </div>
    </>
  );
};

export default StepTwo;
