// import imgBall from '../../../src/components/Images/loading.webp';

import styles from './Loader.module.css'
const Loader = () => {
    return (
        // <div className="flex items-center justify-center">
        //   <div className="img-loading absolute">
        //     <img src={imgBall} alt="Loading" className=" absolute" />
        //   </div>
        // </div>

        <div className='container'>
          <div className={styles.container}>
            <div > <img src={require('./../../images/giphy.gif')} alt="gif" /></div>      
          </div>
        </div>
     );
}
 
export default Loader;