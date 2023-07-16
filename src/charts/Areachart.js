import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
function Areachart(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/students').then((res)=> res.json()).then((res) => setData(res))
    },[])
    return(
        <>
         <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="gpa" stroke="#a8820e" fill="#ffc107" />
          </AreaChart>
          <AreaChart
           width={500}
           height={200}
            data={data}
            syncId="anyId"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="hours" stroke="#6c757d" fill="#a5dc86" />
          </AreaChart>
        </>
    )
}
export default Areachart;
