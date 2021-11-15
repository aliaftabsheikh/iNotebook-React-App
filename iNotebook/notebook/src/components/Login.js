import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
    const [credientials, setcredientials]= useState({email : "", password : ""})
    let history = useHistory();



    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
             method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : '*/*'
            },
            body: JSON.stringify({email : credientials.email ,password : credientials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success){
            // Save Auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert ("LoggedIn Successfully", "success")
            history.push("/")
        }else{
            props.showAlert ("Invalid Credientals", "danger")
        }
    }   

    const onChange = (e) => {
        setcredientials({ ...credientials, [e.target.name]: e.target.value })
    }

    return (
        <div className = "mt-3 mb-3">
            <h2>Login to Continue to iNoteBook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mt-3 mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value = {credientials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value = {credientials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
