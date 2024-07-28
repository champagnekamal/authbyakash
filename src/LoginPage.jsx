import {  useState } from "react";
import { login, signup } from "./api/api";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const notify = () => toast("Login Successful");


  const handleLogin = async (event) => {

    // const [loginres,setloginres] = useState()
    event.preventDefault();
    console.log(email, password);
    const res = await login({ email, password });
    console.log(res, "nrjbv");
    if(res?.status != 200){
        toast(`${res?.data?.message}`)
    }
    else{
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("email", res?.data?.email);
        notify()
    navigate('/notes')
    }
  
  };

  return (
    <>

    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="input-field"
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input-field"
        />
        <br />
        <button type="submit" className="login-button">
          Login
        </button>
    
      </form>
      <Link className="mt-2" to="/signup">Sign up</Link>    
    </div>
    </>
  );
}

export default LoginPage;
