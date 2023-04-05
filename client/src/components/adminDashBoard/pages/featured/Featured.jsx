import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'react-circular-progressbar/dist/styles.css'
function Featured({total}) {

  console.log(total.porcentajeCrecimientoDecrecimiento)
  const porcentaje = total.porcentajeCrecimientoDecrecimiento;
  let decimales = 2; // Cantidad de decimales a redondear

let numeroRedondeado = Math.round(porcentaje)
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={numeroRedondeado + "%"} strokeWidth={5}/>
        </div>
        <p className="title">Total amount made this month</p>
        <p className="amount">$ {total.sumaTotalUltimoMes}</p>
        <p className="desc">Previous transactions processing. Last payments may not be included</p>
        <div className="summary">
          
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className={`itemResult ${(total.sumaTotalUltimoMes < total.sumaTotalMesAnterior) > 0 ? "positive" : "negative" }`}>
              {total.sumaTotalUltimoMes < total.sumaTotalMesAnterior ? <KeyboardArrowUpIcon fontSize="small"/> : <KeyboardArrowDownIcon fontSize="small"/>}
              <div className="resultAmount ">{total.sumaTotalMesAnterior}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Difference</div>
            <div className={`itemResult ${total.diferencia > 0 ? "positive": "negative"}`}>
              {total.diferencia > 0 ? <KeyboardArrowUpIcon fontSize="small"/> : <KeyboardArrowDownIcon fontSize="small"/>}
              <div className="resultAmount ">{total.diferencia}</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Featured