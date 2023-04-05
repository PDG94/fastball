import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { getServiceUser } from "../../../redux/actions/usersActions";
// import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Sidebar from "../sidebar/UserSidebar";
import "./homeProfile.scss";
import {getUserById} from "../../../reduxToolkit/actions/userActions";
import Loading from "../../adminDashBoard/pages/loading/Loading";

export default function DashboardUser() {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.user._id);


  const { name, lastName, email, profilePic, address, contry, city } = useSelector(
    (state) => state.user.singleUser

  );

  useEffect(()=>{
    dispatch(getUserById(userID))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    if(!name){
      return <div className="homee">
      <Sidebar />
      <div className="homeContainerr">
        <Loading />
      </div>
    </div>
    }
  return (
    <div>
      <div className="homee">
        <Sidebar />
        <div className="homeContainerr">



          <div className="flex justify-center min-h-screen bg-gray-100 pt-10 bg-white">
            <div className="bg-white w-full max-w-5xl h-full p-8 border border-gray-200 rounded-lg shadow-lg">
              <div className="flex items-center">
                <img
                  className="w-25 h-25 object-cover rounded-full border-gray-500"
                  src={profilePic}
                  alt="Profile"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">My Info</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Details and Information about this user.
                  </p>

                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <dl>
                  <div className="flex items-start justify-between">
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 text-sm text-gray-900 ml-8">
                      <b>{name}</b>
                    </dd>
                  </div>
                  <div className="flex items-start justify-between mt-4">
                    <dt className="text-sm font-medium text-gray-500">Last name</dt>
                    <dd className="mt-1 text-sm text-gray-900 ml-8">
                      <b>{lastName}</b>
                    </dd>
                  </div>
                  <div className="flex items-start justify-between mt-4">
                    <dt className="text-sm font-medium text-gray-500">E-Mail</dt>
                    <dd className="mt-1 text-sm text-gray-900 ml-8">
                      <b>{email}</b>
                    </dd>
                  </div>
                  <div className="flex items-start justify-between mt-4">
                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                    <dd className="mt-1 text-sm text-gray-900 ml-8">
                      <b>{address}</b>
                    </dd>
                  </div>
                  <div className="flex items-start justify-between mt-4">
                    <dt className="text-sm font-medium text-gray-500">City</dt>
                    <dd className="mt-1 text-sm text-gray-900 ml-8">
                      <b>{city}</b>
                    </dd>
                  </div>
                  <div className="flex items-start justify-between mt-4">
                    <dt className="text-sm font-medium text-gray-500">Country</dt>
                    <dd className="mt-1 text-sm text-gray-900 ml-8">
                      <b>{contry}</b>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
