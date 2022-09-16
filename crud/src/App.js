import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Updateproduct from './Updateproduct';
import Addproduct from './Addproduct';
import Removeproduct from './Removeproduct';
import Protected from './Protected'
import Productlist from './Productlist'
import Search from './Search';
function App() {
  return (
    <div className="App">
      <h1>CRUD PROJECT </h1>
      <BrowserRouter>
      {/* <div>
      <Switch> */}
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/updateproduct/:id" element={<Updateproduct/>} />
          <Route path="/addproduct" element={<Addproduct/>} />
          <Route path="/Removeproduct" element={<Removeproduct/>} />
          <Route path="/" element={<Productlist />} />
          <Route path="/search" element={<Search/>} />
        </Routes>
        {/* </Switch>
      </div> */}
       
      </BrowserRouter>
    </div>
  );
}
export default App;
