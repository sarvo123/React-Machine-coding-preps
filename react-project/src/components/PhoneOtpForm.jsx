import React, { useState } from "react";
import OtpInput from "./OtpInput";

function PhoneOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  // handler function for phone number change ...
  function PhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }
  // handler function for submit the form ...
  function PhoneNumberSubmit(event) {
    event.preventDefault();

    // Phone Validations ...
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone number !");
      // setPhoneNumber("");
      return;
    }

    // Call api for backend ...
    setShowOtp(true);
  }

  function onOtpSubmit(otp){
    console.log("Login successful" , otp);

  }

  return (
    <div>
      {!showOtp ? (
        <form onSubmit={PhoneNumberSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={PhoneNumberChange}
            placeholder="Enter your phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
            <p>Enter Otp sent to {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  );
}

export default PhoneOtpForm;
