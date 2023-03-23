
import styles from './Loader.module.css'
const Loader = () => {
    return (
        <div className='container'>
          <div className={styles.container}>
            <div > <img src={require('./../../images/giphy.gif')} alt="gif" /></div>      
          </div>
        </div>
     );
}
 
export default Loader;