import { useState } from "react";

function ExpForm(props) {
  const [expInfo, setExpInfo] = useState({
    companyName: "",
    positionTitle: "",
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    props.onChange({ ...expInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  return (
    <>
      <h2 className="form-title">Experience</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="companyName" className="form-label">
            Company Name:
            <input
              type="text"
              id="companyName"
              value={expInfo.companyName}
              name="companyName"
              onChange={handleInputChange}
              className="form-input"
              placeholder="Company Name"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="positionTitle" className="form-label">
            Position Title:
            <input
              type="text"
              id="positionTitle"
              value={expInfo.positionTitle}
              name="positionTitle"
              onChange={handleInputChange}
              className="form-input"
              placeholder="Position Title"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="startDate" className="form-label">
            Start Date:
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={expInfo.startDate}
              onChange={handleInputChange}
              className="form-input form-date-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="endDate" className="form-label">
            End Date:
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={expInfo.endDate}
              onChange={handleInputChange}
              className="form-input form-date-input"
            />
          </label>
        </div>
        <div className="form-group">
          <button className="form-btn" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default ExpForm;
