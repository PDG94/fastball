import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchOrder } from "../../../reduxToolkit/actions/orderAction";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userID1 = useSelector((state) => state.user._id);
  const orders = useSelector((state) => state.order.allOrders);

  useEffect(() => {
    dispatch(fetchOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const filteredOrders = orders.filter((order) => order.userID1 === userID1);

  const Clickk = (id) => {

    navigate(`/profile/orders/${id}`);
  };

  return (
    <div className="">
      <br />
      <br />
      <br />
      <br />
      <div>
        {/* {filteredOrders.length === 0 ? (
          <p className="emptyP2">No orders found</p>
        ) : ( */}
          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      index
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Order Amount
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Order ID
                    </th>
                  </tr>
                </thead>
                {filteredOrders.map((order, index) => {
                  const { id, createdAt, orderNumber, totalAmount } = order;
                  return (
                    <tbody  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <tr
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        key={id}                        
                      >
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {index + 1}
                        </td>
                        <td
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"                          
                        >
                          {createdAt}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {"$"}
                          {totalAmount}
                        </td>
                        <td onClick={()=>{Clickk(orderNumber)}}  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {orderNumber}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
            <Link to="/profile">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded absolute right-5">
                Back
              </button>
            </Link>
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default OrderHistory;
