import { useState } from "react";

function EducationForm(props) {
  const [eduInfo, setEduInfo] = useState({
    schoolName: "",
    studyTitle: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name.includes("Date") ? new Date(value) : value;
    const updatedInfo = { ...eduInfo, [name]: updatedValue };
    setEduInfo(updatedInfo);
    props.onChange(updatedInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  return (
    <>
      <h2 className="form-title">Education</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="schoolName" className="form-label">
          School Name:
          <input
            type="text"
            placeholder="School Name"
            value={eduInfo.schoolName}
            name="schoolName"
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label htmlFor="studyTitle" className="form-label">
          Study Title:
          <input
            type="text"
            placeholder="Study Title"
            value={eduInfo.studyTitle}
            name="studyTitle"
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label htmlFor="startDate" className="form-label">
          Start Date:
          <input
            type="date"
            value={eduInfo.startDate.toISOString().slice(0, 10)}
            name="startDate"
            onChange={handleInputChange}
            className="form-input form-date-input"
          />
        </label>
        <label htmlFor="endDate" className="form-label">
          End Date:
          <input
            type="date"
            value={eduInfo.endDate.toISOString().slice(0, 10)}
            name="endDate"
            onChange={handleInputChange}
            className="form-input form-date-input"
          />
        </label>
        <button className="form-btn" type="submit">Submit</button>
      </form>
    </>
  );
}

export default EducationForm;
