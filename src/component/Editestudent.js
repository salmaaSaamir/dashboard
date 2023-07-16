import { useEffect, useState } from 'react';
import '../style/edite.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Editestudent(){
    const myStudentId = useParams();
    const navigate =  useNavigate();
    const [student,setStudent] = useState([])
    const [name,setName] =  useState('')
    const [age,setAge] =  useState(0)
    const [gpa,setGpa] =  useState(0)
    const [degree,setDegree] =  useState(0)
    const [department,setDepart] =  useState('')
    const [hours,setHours] =  useState(0)
   
    useEffect(() =>{
    fetch(`http://localhost:9000/students/${myStudentId.id}`).then((res) =>res.json()).then((data) =>
 {    setStudent(data)
      setName(data.name)
      setAge(data.age)
      setDepart(data.department)
      setGpa(data.gpa)
      setDegree(data.degree)
      setHours(data.hours)
    }
     )

    },[])
    function editestudent(e){
        e.preventDefault()
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })     
          swalWithBootstrapButtons.fire({
            title: `Are you sure to update student "${student.name}" data ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              axios({method:'put',url:`http://localhost:9000/students/${student.id}`,
              data:{
                name,age,degree,gpa,hours,department
              }
            }
              )
              navigate('/student')
              swalWithBootstrapButtons.fire(
                'Updated!',
                `student "${student.name}" has been updated.`,
                'success'
              )
            }
          })
    }
    
    return(
        <>
        
<form className="row g-3">
<div className="form-label title">
                edite student
            </div>
  <div className="col-md-6">
    <label  className="form-label" for="exampleFormControlInput1">name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1"  defaultValue={student.name} onChange={(e) => {setName(e.target.value)}}/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">age</label>
    <input type="text" className="form-control"  defaultValue={student.age} onChange={(e) => setAge(e.target.value)}/>
  </div>
  <div className="col-12">
    <label className="form-label">gpa</label>
    <input type="text" className="form-control" placeholder="1234 Main St" defaultValue={student.gpa} onChange={(e) =>setGpa(e.target.value)}/>
  </div>
  <div className="col-12">
    <label  className="form-label">grade</label>
    <input type="text" className="form-control" placeholder="Apartment, studio, or floor" defaultValue={student.degree} onChange={(e) =>setDegree(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label className="form-label">hours</label>
    <input type="text" className="form-control"  defaultValue={student.hours} onChange={(e)=>setHours(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label  className="form-label" >department</label>
    <input type="text" className="form-control" defaultValue={student.department} onChange={(e) =>setDepart(e.target.value)}/>
  </div>

  
  
  <div className="col-12">
    <Link type="submit" className="btn btn-outline-dark" onClick={(e) => editestudent(e)}>update</Link>
  </div>
</form>
        </>
    )
}
export default Editestudent;