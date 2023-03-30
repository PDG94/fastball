import './home.scss';
import Sidebar from './../sidebar/Sidebar';
import Widget from './../widget/Widget';
import Featured from '../featured/Featured';
import Chart from '../chart/Chart';


function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <div className='widgets'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
        </div>
        <div className='charts'>
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transactions</div>
        </div>
      </div>
    </div>
  )
}

export default Home