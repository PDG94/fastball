import imgBall from '../../../src/components/Images/ball.png';

const Loader = () => {
    return ( 
        <div className="flex items-center justify-center">
        <div class="w-12 h-12 relative">
  <img src={imgBall} alt="Loading" class="animate-spin absolute" />
</div>

      </div>
      
     );
}
 
export default Loader;