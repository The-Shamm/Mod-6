import { useState } from "react";
import "./styles/style.css";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import EducationForm from "./components/EducationForm";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [eduInfo, setEduInfo] = useState({
    schoolName: "",
    studyTitle: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const [display, setDisplay] = useState({
    displayEdu: false,
  });

  const handlePersonalInfoUpdate = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  };

  const handleEduInfoUpdate = (updatedInfo) => {
    setEduInfo(updatedInfo);
  };

  const handleSubmit = (e, displayType) => {
    e.preventDefault();
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      [displayType]: !prevDisplay[displayType],
    }));
  };

  return (
    <div id="container">
      <div>
        <PersonalInfo onChange={handlePersonalInfoUpdate} />
      </div>
      <div>
        <h1>{personalInfo.fullName}</h1>
        <h2>{personalInfo.email}</h2>
        <h2>{personalInfo.phone}</h2>
      </div>
      <div>
        {display.displayEdu ? (
          <div>
            <h2>Education Information</h2>
            <p>School: {eduInfo.schoolName}</p>
            <p>Study Title: {eduInfo.studyTitle}</p>
            <p>Start Date: {eduInfo.startDate.toISOString().slice(0, 10)}</p>
            <p>End Date: {eduInfo.endDate.toISOString().slice(0, 10)}</p>
            <button onClick={() => setDisplay({ displayEdu: false })}>Edit</button>
          </div>
        ) : (
          <EducationForm
            eduInfo={eduInfo}
            onChange={handleEduInfoUpdate}
            onSubmit={(e) => handleSubmit(e, "displayEdu")}
          />
        )}
      </div>
    </div>
  );
}

export default App;
