import { useEffect, useState } from 'react';
import '../style/edite.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
function Editeteacher(){
    const myTeacherId = useParams();
    const navigate =  useNavigate();
    const [teacher,setTeacher] = useState([])
    const [name,setName] =  useState('')
    const [age,setAge] =  useState(0)
    const [salary,setSalary] =  useState(0)
    const [department,setDepart] =  useState('')
    const [hours,setHours] =  useState(0)
   
    useEffect(() =>{
    fetch(`http://localhost:9101/teachers/${myTeacherId.id}`).then((res) =>res.json()).then((data) =>
 {    setTeacher(data)
      setName(data.name)
      setAge(data.age)
      setDepart(data.department)
      setSalary(data.salary)
      setHours(data.hours)
    }
     )

    },[])
    function editeteacher(e){
        e.preventDefault()
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })     
          swalWithBootstrapButtons.fire({
            title: `Are you sure to update teacher "${teacher.name}" ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              axios({method:'put',url:`http://localhost:9000/teachers/${teacher.id}`,
              data:{
                name,age,salary,hours,department
              }
            }
              )
              navigate('/teacher')
              swalWithBootstrapButtons.fire(
                'Updated!',
                `teacher "${teacher.name}" has been updated.`,
                'success'
              )
            }
          })
    }
    
    return(
        <>
        <form className="row g-3">
        <div className="form-label title">
                edite teacher
            </div>
          <div className="col-md-6">
            <label  className="form-label" for="exampleFormControlInput1">name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1"  defaultValue={teacher.name} onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <div className="col-md-6">
            <label  className="form-label">age</label>
            <input type="text" className="form-control"  defaultValue={teacher.age} onChange={(e) => setAge(e.target.value)}/>
          </div>
          <div className="col-12">
            <label className="form-label">salary</label>
            <input type="text" className="form-control" placeholder="1234 Main St" defaultValue={teacher.salary} onChange={(e) =>setSalary(e.target.value)}/>
          </div>
          <div className="col-md-6">
            <label className="form-label">hours</label>
            <input type="text" className="form-control"  defaultValue={teacher.hours} onChange={(e)=>setHours(e.target.value)}/>
          </div>
          <div className="col-md-4">
            <label  className="form-label" >department</label>
            <input type="text" className="form-control" defaultValue={teacher.department} onChange={(e) =>setDepart(e.target.value)}/>
          </div>
        
          
          
          <div className="col-12">
            <Link type="submit" className="btn btn-outline-dark" onClick={(e) => editeteacher(e)}>update</Link>
          </div>
        </form>
                </>
    )
}
export default Editeteacher;