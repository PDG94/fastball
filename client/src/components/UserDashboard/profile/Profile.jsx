// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
// import { getServiceUser } from "../../../redux/actions/usersActions";
// import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
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
          <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <img
                className="object-cover h-11 w-11 rounded-full border-gray"
                src={profilePic}
                alt="Profile"
              />
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                My Info
              </h3>

              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Details and informations about user.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{name}</b>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">E-Mail</dt>
                  <dd claclassNamess="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{email}</b>
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{address}</b>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">City</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{city}</b>
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Country</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{contry}</b>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
