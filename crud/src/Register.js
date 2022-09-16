import { useHistory, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react";
import Header from "./Header";
function Register() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    async function signup() {
        let item = [name, password, email];
        const abcd = {
            "name": name,
            "password": password,
            "email": email
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(abcd)
        };
        fetch(' http://localhost:5000/users', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                debugger
                if (response.ok) {
                    localStorage.setItem('user-info', JSON.stringify(abcd))
                    navigate('/')
                }
            })

    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">

                <h1>Rrgister page</h1>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                <br />
                Password
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                <br />
                <button onClick={signup} className="btn  btn-primary">sign up</button>
            </div>
        </>
    )
}
export default Register;

// json-server --watch db.json