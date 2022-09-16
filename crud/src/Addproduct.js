import { useState } from 'react';
import Header from './Header'
function Addproduct() {
    async function addproduct() {
        console.warn(name, file, price, description);
        const forData = new FormData();
        forData.append("file", file)
        forData.append("name", name)
        forData.append("price", price)
        forData.append("description", description)
        let result = await fetch("http://localhost:3000/users")
    }
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3'>
                <h1>Addproduct page</h1>
                <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} placeholder='name' /><br></br>
                <input type="file" className='form-control' onChange={(e) => setFile(e.target.files[0])} placeholder='file' /><br></br>
                <input type="text" className='form-control' onChange={(e) => setPrice(e.target.value)} placeholder='price' /><br></br>
                <input type="text" className='form-control' onChange={(e) => setDescription(e.target.value)} placeholder='description' /><br></br>
                <button onClick={addproduct}>Add product</button>
            </div>
        </div>
    )
}
export default Addproduct;