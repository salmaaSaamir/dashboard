import { useEffect, useState } from 'react';
import '../style/teacher.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
function Student(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/students').then((res)=> res.json()).then((res) => setData(res))
    },[data])
    function deleteStudent(student){

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: `Are you sure to delete student ${student.name}?`,
        text: "You won't be able to revert this!",
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios({method:'delete',url:`http://localhost:9000/students/${student.id}`})
          swalWithBootstrapButtons.fire(
            'Deleted!',
            `teacher "${student.name}" has been deleted.`,
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
          )
        }
      })


    }
    return(
        <>
       <h1>students data</h1>
        <table class="table">
        
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">gpa</th>
      <th scope="col">grade</th>
      <th scope="col">hours</th>
      <th scope="col">department</th>
      <th scope="col">operations</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {data.map((student)=>{
        return(
            <>
      <tr>
      <td scope="row">{student.name}</td>
      <td>{student.age}</td>
      <td>{student.gpa}</td>
      <td>{student.degree}</td>
      <td>{student.hours}</td>
      <td className='dep'>{student.department}</td>
      <th scope="col">
      <button type="button" class="btn  delete" onClick={() =>deleteStudent(student)}>delete</button>
      <Link to={`/editestudent/${student.id}`} type="button" class="btn btn-outline-primary">edite</Link>
      </th>
    </tr>
            </>
        )
    })}
    

    
  </tbody>
</table>
        </>
    )
}
export default Student;