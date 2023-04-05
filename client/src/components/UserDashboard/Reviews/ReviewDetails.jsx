import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailReview } from "../../../reduxToolkit/actions/reviewAction";
import Sidebar from "../sidebar/UserSidebar";
import "./homeReviews.scss";
import Loading from "../../adminDashBoard/pages/loading/Loading";

// const reviewExample = {
//     id: 5,
//     date: "2023-03-03",
//     score: 3,
//     description: "Prueba",
//     status: "Done",
//     ProductId: "1e2c7c43-a7e9-4c9b-b40a-9f94a5c8561c",
// }

const ReviewDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const reviewsss = useSelector((state) => state.review.singleRevew);

  useEffect(() => {
    dispatch(fetchDetailReview({reviewId:id}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  
  // const info = () => {
  //   console.log("id", id);
  //   console.log("111", reviewsss)
  // };

  if(!reviewsss || !reviewsss.id){
    return <div className="homee">
    <Sidebar />
    <div className="homeContainerr">
      <Loading />
    </div>
  </div>
  }
  
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
             
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Review Info
              </h3>

              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Details and Information about this specific Review.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Review Id:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewsss.id}</b>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Review Date:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewsss.date}</b>
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Score:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewsss.score}</b>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Status:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewsss.status}</b>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Description:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewsss.description}</b>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">ProductId:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewsss.ProductId}</b>
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

export default ReviewDetails;
