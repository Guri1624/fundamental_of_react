import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from './Header'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    async function sign() {
        console.warn("data", email, password)
        let item = { email, password }
        let result = await fetch("http://localhost:5000/users", {
            method: 'POST',
            Headers: {
                "contect-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/Addproduct")
    }
    return (
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3' >
                <h1>Login page</h1>
                <input type='text' className="form-control" placeholder='EMAIL' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type='text' className="form-control" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button onClick={sign} className="btn btn-primary">sign</button>
            </div>
        </div>
    )
}
export default Login;