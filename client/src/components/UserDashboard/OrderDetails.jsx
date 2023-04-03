import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOrderById } from "../../reduxToolkit/actions/orderAction";
const orderExample = {
  id: 3,
  orderNumber: "123",
  totalAmount: 500,
  createdAt: "2023-03-26T00:29:18.383Z",
  updatedAt: "2023-03-26T00:29:18.476Z",
  UserId: "f286901a-262c-4a28-af5a-ca5a73716496",
  Products: [
    {
      name: "qwerty",
      description: "Buen producto",
      image:
        "https://media.istockphoto.com/id/175005911/es/foto/pelotas-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=Iw-CwMf_Xm53_rpO0IKLeTOtKU0Bwn6NTTygy8NuSz0=",
      price: 10,
      OderProduct: {
        quantity: 2,
        createdAt: "2023-03-26T00:29:19.199Z",
        updatedAt: "2023-03-26T00:29:19.199Z",
        orderId: 3,
        ProductId: "52636e7a-ed0b-4beb-a679-b6bcadc7994c",
      },
    },
    {
      name: "asd",
      description: "Buen producto",
      image:
        "https://media.istockphoto.com/id/175005911/es/foto/pelotas-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=Iw-CwMf_Xm53_rpO0IKLeTOtKU0Bwn6NTTygy8NuSz0=",
      price: 10,
      OderProduct: {
        quantity: 2,
        createdAt: "2023-03-26T00:29:19.199Z",
        updatedAt: "2023-03-26T00:29:19.199Z",
        orderId: 3,
        ProductId: "52636e7a-ed0b-4beb-a679-b6bcadc7994c",
      },
    },
    {
      name: "zxc",
      description: "Buen producto",
      image:
        "https://media.istockphoto.com/id/175005911/es/foto/pelotas-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=Iw-CwMf_Xm53_rpO0IKLeTOtKU0Bwn6NTTygy8NuSz0=",
      price: 10,
      OderProduct: {
        quantity: 2,
        createdAt: "2023-03-26T00:29:19.199Z",
        updatedAt: "2023-03-26T00:29:19.199Z",
        orderId: 3,
        ProductId: "52636e7a-ed0b-4beb-a679-b6bcadc7994c",
      },
    },
  ],
};

const OrderDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const orderNumber = "pm_1Mq7UYC4TeWDJRMMd1foU2Er";

  useEffect(() => {
    dispatch(fetchOrderById(orderNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const orderDetails = useSelector((state) => state.order.orderDetail);
  // const userID1 = useSelector((state) => state.user._id);
  // const allOrders = useSelector((state) => state.order.allOrders);

  const info =()=>{
    console.log("id", id)
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          <Link to="/profile/orders"> Back to my Order List</Link>
        </button>
      </div>

      <div>
        <button onClick={info}>
          info
        </button>
      </div>

      <div className="font-semibold text-lg mb-2">
        Order Number: {orderExample.orderNumber}
      </div>

      <div className="font-semibold text-lg mb-2">
        Total Amount: {orderExample.totalAmount}
      </div>

      <div className="font-semibold text-lg mb-2">
        Created at: {orderExample.createdAt}
      </div>

      <div className="font-semibold text-lg mb-2">
        User Id: {orderExample.UserId}
      </div>

      <div>
        <div className="flex flex-col md:w-full mt-20">
          <div className="cart-container flex flex-row">
            <div className="products-container flex-1 md:w-2/3 p-4">
              <div className="font-semibold text-lg mb-2">Products Bought</div>
              {orderExample.Products.map((product) => {
                return (
                  <div>
                    <h3>{product.name}</h3>
                    <div className="p-4 pz4">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
