import React, { useEffect, useRef } from "react";
import { useState } from "react";

function OtpInput({ length = 4, onOtpSubmit }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  console.log(otp);
  const inputRefs = useRef([]);

  useEffect(()=>{
    if(inputRefs.current[0]){
        inputRefs.current[0].focus();
    }
  },[]);

  // handle Change function ...
  function handleChange(index, e) {
    const value = e.target.value;
    if(isNaN(value)) return ;

    const newOtp = [...otp];
    // allow only one input ...
    newOtp[index] = value.substring(value.length -1);
    setOtp(newOtp);  

    // submit trigger ...
    const combinedOtp = newOtp.join("");
    // console.log(combinedOtp); 
    if(combinedOtp.length === length) onOtpSubmit(combinedOtp);
    
    // Move to next input if current field is filled ...
    if(value && index < length -1 && inputRefs.current[index  + 1]){
        inputRefs.current[index  + 1].focus();

    }
  };



  // handle Click function ...
  function handleClick(index){
    inputRefs.current[index].setSelectionRange(1,1);

    // optional ...
    if(index >=0 ){
        inputRefs.current[otp.indexOf("")].focus();
    }

    // 

  } 

  // handle KeyDown fucntion ...
  function handleKeyDown (index , e){
    if(e.key == "Backspace" && !otp[index] && index > 0 && inputRefs.current[index -1]){
        inputRefs.current[index -1].focus();
    }
  }

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            ref={(input)=> (inputRefs.current[index] = input)}
            key={index}
            value={value}
            onChange={(e) => handleChange(index,e)}
            onClick={() =>handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
          />
        );
      })}
    </div>
  );
}

export default OtpInput;
