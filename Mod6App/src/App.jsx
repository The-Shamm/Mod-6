import { useState } from 'react'
import "./styles/style.css";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const handlePersonalInfoUpdate = (updatedInfo) => {
setPersonalInfo(updatedInfo)

  }

  return (
    <div id="container">
      <div>
        <PersonalInfo onChange={handlePersonalInfoUpdate}></PersonalInfo>
      </div>

      <div>
        <h1>{personalInfo.fullName}</h1>
        <h2>{personalInfo.email}</h2>
        <h2>{personalInfo.phone} </h2>
      </div>
    </div>
  );
}

export default App;
