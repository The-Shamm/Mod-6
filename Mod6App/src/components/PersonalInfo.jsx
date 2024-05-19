import {useState} from 'react'

function PersonalInfo() {  

    const [PersonalInfo, setPersonalInfo] = useState({
      fullName: "",
      email: "", 
      phone: ""

    });

    const handleFullNameInputChange = (e) => {
        setPersonalInfo(prevInfo => (
            {...prevInfo, fullName: e.target.value}

        ))
    }

  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label htmlfor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={PersonalInfo.fullName} onChange={handleFullNameInputChange} />
      </div>
      <div>
        <label htmlfor="Email">Email:</label>
        <input type="text" id="Email" name="Email" value={PersonalInfo.email} />
      </div>
      <div>
        <label htmlfor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" value={PersonalInfo.phone} />
      </div>

      <h1>{PersonalInfo.fullName}</h1>
    </div>
  );
}

export default PersonalInfo;
