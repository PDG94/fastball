import gift from './../../images/giphy.gif'
import styles from './Loader.module.css'

const Loader = () => {
    return (
      <div className='container'>
      {/* <div className={styles.ring}>Loading
        <span  className={styles.span} />
      </div> */}
      <div className={styles.container}>
        <div> <img src={gift} alt="gift" /></div>
      </div>
    </div>
     );
}
 
export default Loader;