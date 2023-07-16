import { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
function Linechart(){
    const [data,setData] = useState([])
    useEffect(()=>{
        
        fetch('http://localhost:9000/teachers').then((res)=> res.json()).then((res) => setData(res))
    },[])
    
    return(
        <>
         <LineChart width={600} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="salary" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
        </>
    )
}
export default Linechart;