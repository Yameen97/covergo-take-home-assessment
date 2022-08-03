import "./App.css";


import { useState } from "react";
import StepOne from "./Components/Forms/StepOne";
import StepTwo from "./Components/Forms/StepTwo";
import Final from "./Components/Forms/Final";
import Error from "./Components/Forms/Error";


function App() {
  //state for steps
  const [step, setStep] = useState(1);
  const [pkg, setPkg] = useState();
  const [cur, setCur] = useState();
  const [fifty, setFifty] = useState(0);
  const [seventy, setSeventy] = useState(0);

  //state for form data
  const [formData, setFormData] = useState({
    Name: "",
    Age: "",
    Region: "",
    Package: "",
  })

  const nextStep = () => {
    setStep(step + 1);
  };

 
  const prevStep = () => {
    setStep(step - 1);
  };
  const errorStep = () => {
    setStep(4);
  };
  const homeStep = () => {
    setStep(1);
  };

  const handleInputData = input => e => {
    if(e.target.value === "USA"){
      setCur('USD')
      setFifty((50/100)*(formData.Age*10*2))
      setSeventy((75/100)*(formData.Age*10*2))
    }
    else if(e.target.value === 'Hong Kong'){
      setCur('HKD')
      setFifty((50/100)*(formData.Age*10*1))
      setSeventy((75/100)*(formData.Age*10*1))
    }
    else if(e.target.value === 'Australia'){
      setCur('AUD')
      setFifty((50/100)*(formData.Age*10*3))
      setSeventy((75/100)*(formData.Age*10*3))
    }





    if(e.target.value === 'USA'){

      if(formData.Package === "Standard"){
       setPkg(formData.Age*10*2+"USD")
      }
      else if(formData.Package === "Safe"){
        let per = (50/100)*(formData.Age*10*2)
        setFifty(per)
        setPkg(per +(formData.Age*10*2)+"USD")
      }
      else if(formData.Package === "Super Safe"){
        let per = (75/100)*(formData.Age*10*2)
        setSeventy(per)
        setPkg(per+(formData.Age*10*2)+"USD")
      }
    }
    else if(e.target.value === 'Hong Kong'){
      if(formData.Package === "Standard"){
        setPkg(formData.Age*10*1+"HKD")
      }
      else if(formData.Package === "Safe"){
        let per = (50/100)*(formData.Age*10*1)
        setFifty(per)
        setPkg(per +(formData.Age*10*1)+"HKD")
      }
      else if(formData.Package === "Super Safe"){
        let per = (75/100)*(formData.Age*10*1)
        setSeventy(per)
        setPkg(per +(formData.Age*10*1)+"HKD")
        
      }
     }else if(e.target.value === 'Australia'){
      if(formData.Package === "Standard"){
        setPkg(formData.Age*10*3+"AUD")
      }
      else if(formData.Package === "Safe"){
        let per = (50/100)*(formData.Age*10*3)
        setFifty(per)
        setPkg(per+(formData.Age*10*3)+"AUD")
      }
      else if(formData.Package === "Super Safe"){
        let per = (75/100)*(formData.Age*10*3)
        setSeventy(per)
        setPkg(per+(formData.Age*10*3)+"AUD")
      }
     }
    








   if(e.target.value === 'Standard'){

    if(formData.Region === "USA"){
      // console.log(  formData.Age*200+"USD")
    
     setPkg(formData.Age*10*2+"USD")
     
    }
    else if(formData.Region === "Hong Kong"){
      
      // document.getElementById("msg").innerHTML="Your Premium is :"+formData.Age*100+"HKD"
      setPkg(formData.Age*10*1+"HKD")
    }
    else if(formData.Region === "Australia"){
      setPkg(formData.Age*10*3+"AUD")
    }
  }
   else if(e.target.value === 'Safe'){
    if(formData.Region === "USA"){
      let per = (50/100)*(formData.Age*10*2)
      setFifty(per)
      setPkg(per +(formData.Age*10*2)+"USD")
    }
    else if(formData.Region === "Hong Kong"){
      let per = (50/100)*(formData.Age*10*1)
      setFifty(per)
      setPkg(per +(formData.Age*10*1)+"HKD")
    }
    else if(formData.Region === "Australia"){
      let per = (50/100)*(formData.Age*10*3)
      setFifty(per)
      setPkg(per +(formData.Age*10*3)+"AUD")
      
    }
   }
   else if(e.target.value === 'Super Safe'){
    if(formData.Region === "USA"){
      let per = (75/100)*(formData.Age*10*2)
      setSeventy(per)
      setPkg(per+(formData.Age*10*2)+"USD")
    }
    else if(formData.Region === "Hong Kong"){
      let per = (75/100)*(formData.Age*10*1)
      setSeventy(per)
      setPkg(per+(formData.Age*10*1)+"HKD")
    }
    else if(formData.Region === "Australia"){
      let per = (75/100)*(formData.Age*10*3)
      setSeventy(per)
      setPkg(per+(formData.Age*10*3)+"AUD")
    }
   }

   
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }


// javascript switch case to show different form in each step
  switch (step) {

    case 1:
      return (
        <div className="App">
          <div>
            <div>
              <div   >
                <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </div>
            </div>
          </div>
        </div>
      );
    
    case 2:
      return (
        <div className="App">
          <div>
            <div>
              <div  >
                <StepTwo nextStep={nextStep} prevStep={prevStep} pkg={pkg} cur={cur} fifty={fifty} seventy={seventy} errorStep={errorStep}handleFormData={handleInputData} values={formData} />
              </div>
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="App">
          <div>
            <div>
              <div  >
                <Final nextStep={nextStep} prevStep={prevStep} pkg={pkg} handleFormData={handleInputData} values={formData}   />
              </div>
            </div>
          </div>
        </div>
      );
      case 4:
        return (
          <div className="App">
            <div>
              <div>
                <div  >
                  <Error  homeStep={homeStep}  />
                </div>
              </div>
            </div>
          </div>
        );
    // default case to show nothing
    default:
      return (
        <div className="App">
        </div>
      );
  }
}

export default App;
