import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateStudent = () => {
  const params = useParams();
  let [name, setName] = useState("");
  let [subject, setSubject] = useState("");
  let [marks, setMarks] = useState("");
  let navigate = useNavigate()

  useEffect(() => {
    StudentDetails();
  }, []);

  async function StudentDetails() {
    console.log(params.id);
    let res = await fetch(`http://localhost:3001/theStudent/${params.id}`);
    res = await res.json();
    let { name, subject, marks } = res.data;
    setName(name);
    setSubject(subject);
    setMarks(marks);
    console.log(res);
  }

  async function updateMarks() {
    let id =JSON.parse( localStorage.getItem("teacher") )
    
    // let token =JSON.parse( localStorage.getItem('token') )
    let res = await fetch(`http://localhost:3001/student/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("token")),
      },
      body:JSON.stringify( {name, subject , marks})
    });
    res = await res.json()

    if(res.status == false){
      alert(res.msg)
    }else{
      alert("marks update successfully")
      navigate('/')
    }
  }

  return (
    <div className="addStudent">
      <h1>Update Student</h1>
      <input
        className="input"
        type="text"
        placeholder="Student name"
        value={name}
      />
      <br />
      <br />
      <input
        className="input"
        type="text"
        placeholder="Subject name"
        value={subject}
      />
      <br />
      <br />
      <input
        className="input"
        type="number"
        placeholder="marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <br />
      <br />

      <button className="btn" onClick={updateMarks}>
        Update
      </button>
    </div>
  );
};

export default UpdateStudent;
