import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchOrder } from "../../../reduxToolkit/actions/orderAction";
import Sidebar from "../sidebar/UserSidebar";
import "./homeOrder.scss";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userID1 = useSelector((state) => state.user._id);
  const orders = useSelector((state) => state.order.allOrders);

  useEffect(() => {
    dispatch(fetchOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const filteredOrders = orders.filter((order) => order.UserId === userID1);

  const info = () => {
    console.log("111",orders)
    console.log("222",filteredOrders)
    console.log("333", userID1)
  };

  const Clickk = (id) => {

    navigate(`/profile/orders/${id}`);
  };

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3" onClick={info}>
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Order Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Order Number
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
                        <td onClick={()=>{Clickk(id)}} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                          {id}
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
                        <td   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                          {orderNumber}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>    

        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
