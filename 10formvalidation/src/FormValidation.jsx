import React from "react";
import { useState } from "react";

function FormValidation() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);


  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if(!name.trim()){
        newErrors.name = "Name is required";
        isValid = false;
    }

    else if(!email.trim()){
      newErrors.email = "email is required";
      isValid = false;
    }
    else if(!/\S+@\S+/.test(email)){
      newErrors.email = "email is invalid";
      isValid = false;
    }
    else if(!password.trim()) {
      newErrors.password = "Password is required"
      isValid=false;
    }
    else if(password.length < 6 ) {
      newErrors.password = "Password length should be atleast 6 characters long"
      isValid=false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Its holds the data on screen after submission.
    if(validateForm()) {
      const dataSubmitted = {
        name,
        email,
        password
      };
      setSubmittedData(dataSubmitted);
      console.log("Form Submitted", dataSubmitted);
    }
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
         {/* Name */}
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br/>
          { errors.name && <span className="error">{errors.name}</span>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br/>
          { errors.email && <span className="error">{errors.email}</span>}
        </div>

         {/* Password */}
         <div>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          { errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      { 
        submittedData && (
            <div>
                <h2>Submitted data:</h2>
                <table border={"1px"}>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                  </tr>

                  <tr>
                    <td>                
                      <p>Name : {submittedData.name}</p>
                    </td>
                    <td>
                    {submittedData.email}
                    </td>
                    <td>
                    {submittedData.password}
                    </td>
                  </tr>
                </table>
      
            </div>
        )
      }
    </>
  );
}

export default FormValidation;
