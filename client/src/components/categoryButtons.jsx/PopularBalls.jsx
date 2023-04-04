import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PopularBalls = () => {
  const products = useSelector((state) => state.product.allProducts);
  const productsCopy = [...products];
  const sortedProducts = productsCopy.sort(
    (a, b) => b.usersVisits - a.usersVisits
  );
  const topFive = sortedProducts.slice(0, 6);
  return (
    <div className="w-full h-full mt-28 border-all p-2 shad">
      <div>Top 6 More Popular</div>
      <div className="popular-balls">
        {topFive &&
          topFive.map((p) => {
            return (
              <div
                key={p.name + "k"}
                className="shad top-6-visit"
                style={{ backgroundImage: `url(${p.image})` }}
              >
                <p>{p.name}</p>
                <Link to={`/details/${p.id}`}>
                  <button className="btn">Show</button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PopularBalls;
