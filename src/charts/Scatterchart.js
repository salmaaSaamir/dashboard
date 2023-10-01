import { useEffect, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
function Scatterchart(){
  const [data,setData] = useState([])
  useEffect(()=>{
      fetch('http://localhost:9101/teachers').then((res)=> res.json()).then((res) => setData(res))
  },[])
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    return(
        <>
      <ScatterChart
      width={400}
      height={400}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid />
      <XAxis type="number"dataKey="hours" name="hours" unit="h" />
      <YAxis type="number"  dataKey="age" name="age" unit="year" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="A school" data={data} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Scatter>
    </ScatterChart>
        </>
    )
}
export default Scatterchart;