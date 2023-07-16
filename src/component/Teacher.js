import { useEffect, useState } from 'react';
import '../style/teacher.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

function Teacher(){
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:9000/teachers').then((res)=> res.json()).then((res) => setData(res))
    },[data])

    function deleteTeacher(teacher){

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: `Are you sure to delete teacher ${teacher.name}?`,
        text: "You won't be able to revert this!",
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios({method:'delete',url:`http://localhost:9000/teachers/${teacher.id}`})
          swalWithBootstrapButtons.fire(
            'Deleted!',
            `teacher "${teacher.name}" has been deleted.`,
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })

      
    }
    return(
        <>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">salary</th>
      <th scope="col">hours</th>
      <th scope="col">department</th>
      <th scope="col">operations</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {data.map((teacher)=>{
        return(
            <>
              <tr>
      <td scope="row">{teacher.name}</td>
      <td>{teacher.age}</td>
      <td>{teacher.salary}</td>
      <td>{teacher.hours}</td>
      <td className='dep'>{teacher.department}</td>
      <th scope="col">
      <button type="button" class="btn  delete" onClick={() =>deleteTeacher(teacher)}>delete</button>
      <Link to={`/editeteacher/${teacher.id}`} type="button" class="btn btn-outline-primary">edite</Link>
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
export default Teacher;
