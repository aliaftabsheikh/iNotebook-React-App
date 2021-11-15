import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {

    const [credientials, setcredientials]= useState({name : "", email : "", password : "",cpassword : ""})
    let history = useHistory();



    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credientials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
             method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : '*/*'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success){
            // Save Auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/")
            props.showAlert ("Account Created Successfully", "success")
        }else{
            props.showAlert ("Invalid details", "danger")
        }
    }   

    const onChange = (e) => {
        setcredientials({ ...credientials, [e.target.name]: e.target.value })
    }

    return (
        <div className = "container mt-2">
            <h2 className = "my-3">Create an account to use iNoteBook</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control"  onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                    
                </div>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control"  onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} required minLength={5} name="password" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={onChange} required minLength={5} name="cpassword" id="cpassword" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    ) 
}

export default Signup
