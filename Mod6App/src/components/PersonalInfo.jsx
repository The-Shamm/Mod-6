function PersonalInfo() {
  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label htmlfor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value="" />
      </div>
      <div>
        <label htmlfor="Email">Email:</label>
        <input type="text" id="Email" name="Email" value="" />
      </div>
      <div>
        <label htmlfor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" value="" />
      </div>
    </div>
  );
}

export default PersonalInfo;
