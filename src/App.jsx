import './app.scss'
import Home from "./components/home/Home"
import Topbar from "./components/topbar/Topbar"
//import Service from "./components/service/Service"
//import Contacts from "./components/contacts/Contacts"


function App() {
  return (
    <div className="app">
       <Topbar/>

      <div className="sections">
            <Home/>
            
           </div> 
             
           
    </div>
  );
}

export default App;
