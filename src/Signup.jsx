import { useState } from 'react';
import { signup } from './api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call your API or authentication service here
  const res = await  signup({name,email,password})
  console.log(res,"fnrjfn");
  if(res?.status !=200){    
        toast(`${res?.data?.message}`)
  }
  else{
    toast("user created successfully")
    navigate("/login")
  }
   
  };

  return (
    <div className="signup-container">
    <h2 className="signup-title">Signup</h2>
    <form className="signup-form" onSubmit={handleSubmit}>
      <label className="signup-label">
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="signup-input"
        />
      </label>
      <br />
      <label className="signup-label">
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="signup-input"
        />
      </label>
      <br />
      <label className="signup-label">
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="signup-input"
        />
      </label>
      <br />
      <button className="signup-button" type="submit">Signup</button>
    </form>
  </div>
  );
};

export default Signup;