
import './App.css';
import Header from './Componets/Header';
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import SignUp from './Componets/SignUp';
import Login from './Componets/Login';
import Students from './Componets/Students';
import AddStudent from './Componets/AddStudent';
function App() {
  return (
    <div className="App">
    <AddStudent/>
     <Router>
     <Header />
     <Routes>
     <Route path='/' element={<Students/>}/>
      <Route path='/signup' element ={<SignUp/>} />
      <Route path = "/login" element={<Login/>}/>
     </Routes>

     </Router>
    </div>
  );
}

export default App;
