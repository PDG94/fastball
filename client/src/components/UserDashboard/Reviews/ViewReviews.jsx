import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchReviewsByUsrId } from "../../../reduxToolkit/actions/reviewAction";
import Sidebar from "../sidebar/UserSidebar";
import "./home.scss";

const ViewReviews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userID1 = useSelector((state) => state.user._id);
  const reviews = useSelector((state) => state.review.reviewsUsr);

  useEffect(() => {
      dispatch(fetchReviewsByUsrId(userID1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const Clickk = (id) => {
    navigate(`/profile/reviews/${id}`);
  };

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
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
                      Product
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Review ID
                    </th>
                  </tr>
                </thead>
                {reviews.map((review, index) => {
                  const { id, date, ProductId } = review;
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
                          {date}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {ProductId}
                        </td>
                        <td onClick={()=>{Clickk(id)}}  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                          {id}
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

export default ViewReviews;
