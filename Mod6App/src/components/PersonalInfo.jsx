import {useState} from 'react'

function PersonalInfo(props) {  

    const [PersonalInfo, setPersonalInfo] = useState({
      fullName: "",
      email: "", 
      phone: ""

    });

    const handleFullNameInputChange = (e) => {
        setPersonalInfo(prevInfo => (
            {...prevInfo, fullName: e.target.value}

        ))
        props.onChange({...PersonalInfo, fullName: e.target.value})
    }
    const handleEmailInputChange = (e) => {
        setPersonalInfo(prevInfo => (
            {...prevInfo, email: e.target.value}

        ))
        props.onChange({...PersonalInfo, email: e.target.value})
    }
    const handlePhoneInputChange = (e) => {
        setPersonalInfo(prevInfo => (
            {...prevInfo, phone: e.target.value}

        ))
        props.onChange({...PersonalInfo, phone: e.target.value})
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
        <input type="text" id="Email" name="Email" value={PersonalInfo.email} onChange={handleEmailInputChange}/>
      </div>
      <div>
        <label htmlfor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" value={PersonalInfo.phone} onChange={handlePhoneInputChange}/>
      </div>


    </div>
  );
}

export default PersonalInfo;
