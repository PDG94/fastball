import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneOrder } from "../../../reduxToolkit/actions/orderAction";
import Sidebar from "../sidebar/UserSidebar";
import "./homeOrder.scss";

const OrderDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  // const [order, setOrder] = useState({})

  const singleorder = useSelector((state) => state.order.singleOrder);

  useEffect(() => {
    dispatch(fetchOneOrder(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  

  // const info = () => {
  //   console.log("id", id);
  //   console.log("111", singleorder.Products)
  //   // console.log("222", singleorder)
  // };

  return (
    <div>
      <div className="homee">
        <Sidebar />
        <div className="homeContainerr">
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
                    <b>{singleorder.orderNumber}</b>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Total Amount:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{singleorder.totalAmount}</b>
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Created at:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{singleorder.createdAt}</b>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">User Id:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{singleorder.UserId}</b>
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Products Bought</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  
                  {singleorder.Products&&singleorder.Products.map((product) => {
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
