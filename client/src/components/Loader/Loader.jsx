
import styles from './Loader.module.css'

const Loader = () => {
    return (
      <div className='container'>
      <div className={styles.ring}>Loading
        <span  className={styles.span} />
      </div>
      <div className={styles.container}>
        <div className={styles.soccerBall}></div>
      </div>
    </div>
     );
}
 
export default Loader;