import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchOrder } from "../../reduxToolkit/actions/orderAction";

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

    return(
        <div className="">
            <Link to="/profile">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Back
                </button>
            </Link>
            <div>
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
            </div>
        </div>
    );
}

export default OrderHistory;