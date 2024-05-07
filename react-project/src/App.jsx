import { useState } from "react";
import "./App.css";
import PhoneOtpForm from "./components/PhoneOtpForm";

function App() {
  return (
    <div className="App">
      <h1>Login with phone no</h1>
      <PhoneOtpForm/>
    </div>
  );
}

export default App;
