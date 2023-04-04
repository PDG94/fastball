import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOrderById } from "../../../reduxToolkit/actions/orderAction";
import Sidebar from "../sidebar/UserSidebar";
import "./homeOrder.scss";

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

  const info = () => {
    console.log("id", id);
  };

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <Link to="/profile/orders"> Back to my Order List</Link>
            </button>
          </div>

          <div>
            <button onClick={info}>info</button>
          </div>

          <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
             
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Order Info
              </h3>

              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Details and Information about this specific order.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Order Number:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{orderExample.orderNumber}</b>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Total Amount:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{orderExample.totalAmount}</b>
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Created at:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{orderExample.createdAt}</b>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">User Id:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{orderExample.UserId}</b>
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Products Bought</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {orderExample.Products.map((product) => {
                    return (
                      <div>
                        <h3>Product Name: {product.name}</h3>
                        <h2>Price: {"$"}{product.price}</h2>
                        <div className="p-4 pz4">
                          <img src={product.image} alt="" />
                        </div>
                      </div>
                    );
                  })}
                  </dd>
                </div>
              </dl>
            </div>
          </div>          

        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
