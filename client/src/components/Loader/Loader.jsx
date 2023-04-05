// import imgBall from '../../../src/components/Images/loading.webp';
import Loading from '../adminDashBoard/pages/loading/Loading';
// import styles from './Loader.module.css'
const Loader = () => {
    return (
        // <div className="flex items-center justify-center">
        //   <div className="img-loading absolute">
        //     <img src={imgBall} alt="Loading" className=" absolute" />
        //   </div>
        // </div>

        // <div className='container mt-16'>
        //     <div className={styles.container}>
        //       <div className='relative left-[45%] h- w-[30%]'>
        //         <div className={styles.ring}>Loading
        //           <span  className={styles.span} />
        //         </div>
        //           <div className={styles.soccerBall}></div>
        //       </div>
        //     </div>
        // </div>
        <div className='mt-20'>
          <Loading/>
        </div>
     );
}
 
export default Loader;