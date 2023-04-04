// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
// import { getServiceUser } from "../../../redux/actions/usersActions";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/UserSidebar";
import "./home.scss";

export default function DashboardUser() {
  // const dispatch = useDispatch();
  // const token = localStorage.getItem("token");

  const { name, email, profilePic, address, contry, city } = useSelector(
    (state) => state.user
  );

  // useEffect(() => {
  // dispatch(getServiceUser(_id, token));
  // }, [dispatch, id, token]);

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <img
                className="object-cover h-11 w-11 rounded-full border-gray"
                src={profilePic}
                alt="Profile"
              />
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                My Info
              </h3>

              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Details and informations about user.
              </p>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{name}</b>
                  </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">E-Mail</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{email}</b>
                  </dd>
                </div>

                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Address</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{address}</b>
                  </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">City</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{city}</b>
                  </dd>
                </div>

                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Country</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{contry}</b>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <Link to="/profile/orders"> {"---> My orders <---"}</Link>
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
