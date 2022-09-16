import Header from "./Header";
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useParams } from 'react-router-dom'

function Updateproduct(props) {
    const navigate=useNavigate();
    const [data, setData] = useState([])
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function getData() {
            let result = await fetch("http://localhost:5000/users/" + params.id);
            result = await result.json();
            setData(result)
    
        }
        getData();

    }, [])
   
    async function addproduct(id) {
        console.warn("::::::::::::::::::::::::: ", id);
        // const forData = new FormData();
        // forData.append("file", file)
        // forData.append("name", name)
        // forData.append("email", email)

        const abcd = {
            "name": name,
            "password": id,
            "email": email
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(abcd)
        };
        fetch('http://localhost:5000/users/'+id, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
               // debugger
                if (response.ok) {
                    localStorage.setItem('user-info', JSON.stringify(response))
                    navigate('/');
                }
            })

    

    console.warn("data updated")
}
return (
    <div>
        <Header />
        <h1>update page</h1>
        <input type="text" onChange={(e) => setId(e.target.value)} defaultValue={data.id} /><br />
        <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={data.name} /><br />
        <input type="text" onChange={(e) => setEmail(e.target.value)} defaultValue={data.email} /><br />
        <input type="file" onChange={(e) => setFile(e.target.value)} defaultValue={data.image} /><br />
        <img style={{ width: 50 }} src={data.image} />
        <button onClick={() => addproduct(data.id)}>Update</button><br />
    </div>
)
}
export default Updateproduct;