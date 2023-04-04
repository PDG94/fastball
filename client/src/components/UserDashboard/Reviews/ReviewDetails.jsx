import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOrderById } from "../../../reduxToolkit/actions/orderAction";
import Sidebar from "../sidebar/UserSidebar";
import "./home.scss";

const reviewExample = {
    id: 5,
    date: "2023-03-03",
    score: 3,
    description: "Prueba",
    status: "Done",
    ProductId: "1e2c7c43-a7e9-4c9b-b40a-9f94a5c8561c",
}

const ReviewDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const reviewNumber = "123"

  useEffect(() => {
    dispatch(fetchOrderById(reviewNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const info = () => {
    console.log("id", id);
  };
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div>
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <Link to="/profile/orders"> Back to my Review List</Link>
            </button>
          </div>

          <div>
            <button onClick={info}>info</button>
          </div>

          <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
             
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Review Info
              </h3>

              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Details and Information about this specific Review.
              </p>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Review Id:</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewExample.id}</b>
                  </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Review Date:</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewExample.date}</b>
                  </dd>
                </div>

                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Score:</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewExample.score}</b>
                  </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Status:</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewExample.status}</b>
                  </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Description:</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewExample.description}</b>
                  </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">ProductId:</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{reviewExample.ProductId}</b>
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
