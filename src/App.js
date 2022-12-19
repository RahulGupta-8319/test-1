import "./App.css";
import Header from "./Componets/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Componets/SignUp";
import Login from "./Componets/Login";
import Students from "./Componets/Students";
import AddStudent from "./Componets/AddStudent";
import UpdateStudent from "./Componets/UpdateStudent";
import PrivateRoute from "./Componets/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route element={<PrivateRoute/>}>

          <Route path="/" element={<Students />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/updateStudent/:id" element={<UpdateStudent/>} />
        </Route>
          <Route path="/signUp" element={<SignUp />} />
          {/* <Route path='/signup' element ={<SignUp/>} /> */}
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
