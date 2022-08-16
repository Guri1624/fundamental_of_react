
import logo from './logo.svg';
import './App.css';
import Props from './Props'
import Members from './Members'
function App()
{
     function getData()
          {
               alert("hello")
          }
     return (
         <div className="App">
          <Props data={getData}/>
          <Members data={getData}/>
                   </div>
     );
}
 
export default App;















































































































































 // <div className="App" style={{
          //      backgroundImage: 'url("https://media.geeksforgeeks.org/'+
          //      'wp-content/uploads/20201221222410/download3.png")',
          
          //      }}>