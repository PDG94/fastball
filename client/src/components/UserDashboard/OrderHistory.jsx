import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { fetchOrder } from "../../reduxToolkit/actions/orderAction";

const OrderHistory = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const userID1 = useSelector((state) => state.user._id);
  // const orders = useSelector((state) => state.order.allOrders);

  useEffect(() => {
    dispatch(fetchOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const filteredOrders = orders.filter((order) => order.userID1 === userID1);

  return (
    <div className="">
      <br />
      <br />
      <br />
      <br />
      {/* <div>
            <br />
            <p className="">Your Order History</p>

            {filteredOrders.length === 0 ? (
            <p className="emptyP2">No order found</p>
            ) : (
                <div>
                    <table className="tableContainerOrder">
                    <thead>
                        <tr>
                        <th className="thOrderUsers">s/n</th>
                        <th className="thOrderUsers">Date</th>
                        <th className="thOrderUsers">Order ID</th>
                        <th className="thOrderUsers">Order Amount</th>
                        <th className="thOrderUsers">Order Status</th>
                        </tr>
                    </thead>
                    {
                        filteredOrders.map((order, index) => {
                        })
                    }
                    </table>
                </div>
            )}
        </div> */}

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4 text-right"></td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
              <td class="px-6 py-4 text-right"></td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
              <td class="px-6 py-4 text-right"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/profile">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded absolute right-5">
          Back
        </button>
      </Link>
    </div>
  );
};

export default OrderHistory;
