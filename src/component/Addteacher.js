import {  useState } from 'react';
import '../style/edite.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Addteacher(){

    const navigate =  useNavigate();
    const [name,setName] =  useState('')
    const [age,setAge] =  useState(0)
    const [salary,setSalary] =  useState(0)
    const [department,setDepart] =  useState('')
    const [hours,setHours] =  useState(0)
    function addStudent(e){
        e.preventDefault();
        axios({method:'post',url:"http://localhost:9101/teachers",data:{
            name,age,salary,department,hours
        }})
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your student has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/teacher')
    }
    return(
        <>
        
        <form className="row g-3">
            <div className="form-label title">
                add teacher
            </div>
        <div className="col-md-6">
    <label  className="form-label" for="exampleFormControlInput1">name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1"  onChange={(e) => {setName(e.target.value)}}/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">age</label>
    <input type="text" className="form-control"   onChange={(e) => setAge(e.target.value)}/>
  </div>
  <div className="col-12">
    <label className="form-label">salary</label>
    <input type="text" className="form-control"  onChange={(e) =>setSalary(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label className="form-label">hours</label>
    <input type="text" className="form-control"   onChange={(e)=>setHours(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label  className="form-label" >department</label>
    <input type="text" className="form-control"  onChange={(e) =>setDepart(e.target.value)}/>
  </div>
          <div className="col-12">
            <Link type="submit" className="btn btn-outline-dark" onClick={(e) => addStudent(e)}>add</Link>
          </div>
        </form>
        </>
    )
}
export default Addteacher;