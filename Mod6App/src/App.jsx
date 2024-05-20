import { useState } from "react";
import "./styles/style.css";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import EducationForm from "./components/EducationForm";
import ExpForm from "./components/ExpForm";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [eduInfo, setEduInfo] = useState({
    schoolName: "",
    studyTitle: "",
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
  });

  const [expInfo, setExpInfo] = useState({
    companyName: "",
    positionTitle: "",
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
  });

  const handlePersonalInfoUpdate = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  };

  const handleEduInfoUpdate = (updatedInfo) => {
    setEduInfo(updatedInfo);
  };

  const handleExpInfoUpdate = (updatedInfo) => {
    setExpInfo(updatedInfo);
  };

  return (
    <div className="app-container">
      <div className="form-section">
        <div className="personal-education-container">
          <div className="form-container">
            <PersonalInfo onChange={handlePersonalInfoUpdate} />
          </div>
          <div className="form-container">
            <EducationForm onChange={handleEduInfoUpdate} />
          </div>
        </div>
        <div className="form-container">
          <ExpForm onChange={handleExpInfoUpdate} />
        </div>
      </div>
      <div className="display-section">
        <div className="display-container">
          <div className="personal-info-display">
            <h2>Personal Information</h2>
            <h3>{personalInfo.fullName}</h3>
            <h3>{personalInfo.email}</h3>
            <h3>{personalInfo.phone}</h3>
          </div>
          <div className="education-info-display">
            <h2>Education Information</h2>
            <h3>School: {eduInfo.schoolName}</h3>
            <h3>Study Title: {eduInfo.studyTitle}</h3>
            <h3>Start Date: {eduInfo.startDate}</h3>
            <h3>End Date: {eduInfo.endDate}</h3>
          </div>
          <div className="experience-info-display">
            <h2>Experience Information</h2>
            <h3>Company: {expInfo.companyName}</h3>
            <h3>Position Title: {expInfo.positionTitle}</h3>
            <h3>Start Date: {expInfo.startDate}</h3>
            <h3>End Date: {expInfo.endDate}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
