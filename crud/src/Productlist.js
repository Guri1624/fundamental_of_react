import { Table } from "react-bootstrap"
import Header from "./Header"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
function Productlist() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()

    }, [])
    async function getData() {
        let result = await fetch("http://localhost:5000/users");
        result = await result.json();
        setData(result)
        console.warn("data", data);
    }
    async function deletopration(id) {
        let result = await fetch("http://localhost:5000/users/"+id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result)
         getData();
    }
    return (
        <div>
            <div className='col-sm-6 offset-sm-3'>
                <h1>product list</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>image </th>
                            <th>password</th>
                            <th>Email</th>
                            <th>opration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) =>
                                <tr  key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <th><img src={item.image} height="50px" /></th>
                                    <td>{item.password}</td>
                                    <td>{item.email}</td>
                                    <td><span onClick={() => { deletopration(item.id)}} className="delet">Delete</span></td>
                                    <td><Link to={"updateproduct/"+item.id}><span className="update">Update</span></Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default Productlist;