import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


function Piechart(){
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const [data01,setData01] = useState([])
    const [data02,setData02] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9101/students').then((res)=> res.json()).then((res) => setData01(res))
        fetch('http://localhost:9101/teachers').then((res)=> res.json()).then((res) => setData02(res))
    },[])
    const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * .5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  
    return(
        <>
         <PieChart width={350} height={300}>
          <Pie data={data01} dataKey="gpa" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={data02} dataKey="salary" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fill="#82ca9d" label />
        </PieChart>

        <PieChart width={200} height={300}>
          <Pie
            data={data01}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="hours"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </>
    )
}
export default Piechart;