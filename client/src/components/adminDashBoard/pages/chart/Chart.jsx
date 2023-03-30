import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    total : 1200
  },
  {
    name: 'Page B',
    total : 1200
  },
  {
    name: 'Page C',
    total : 1500
  },
  {
    name: 'Page D',
    total : 1700
  },
  {
    name: 'Page E',
    total : 100
  },
  {
    name: 'Page F',
    total : 1800
  },
  {
    name: 'Page G',
    total : 1200
  },
];

function Chart() {
  return (
    <div className='chart'>
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
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