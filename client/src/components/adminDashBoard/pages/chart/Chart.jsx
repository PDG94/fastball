import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



function Chart({aspect, title, data}) {
  // const data = [
  //   {
  //     name: 'Mes 6',
  //     total : 0
  //   },
  //   {
  //     name: 'Mes 5',
  //     total : 10
  //   },
  //   {
  //     name: 'Mes 4',
  //     total : 15
  //   },
  //   {
  //     name: 'Mes 3',
  //     total : 17
  //   },
  //   {
  //     name: 'Mes 2',
  //     total : 10
  //   },
  //   {
  //     name: 'Actual',
  //     total : 18
  //   }
  // ];
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#007afd" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#007afd" stopOpacity={0} />
            </linearGradient>
            
          </defs>
          <XAxis dataKey="name" color='gray' stroke='gray'/>
         
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart