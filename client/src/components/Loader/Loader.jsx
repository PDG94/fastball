import imgBall from '../../../src/components/Images/loading.webp';

const Loader = () => {
    return (
        <div className="flex items-center justify-center">
          <div className="img-loading absolute">
            <img src={imgBall} alt="Loading" className=" absolute" />
          </div>
        </div>
     );
}
 
export default Loader;