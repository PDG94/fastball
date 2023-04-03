// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
// import { getServiceUser } from "../../../redux/actions/usersActions";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <br />
      <br />
      <br />
      <br />
      <div className="flex-1 flex flex-col px-4 sm:px-6 lg:flex-none mt-8">
        <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
          <div className="flex items-center">
            <div className="text-center lg:text-left">
              {/* <img src={ImgLogo} alt="LogoFastBall" className='bg-blue-700 h-12 w-auto m-auto lg:m-0' />                           */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
              <div className="">
                <div className="">
                  <img className="" src={profilePic} alt="" />
                </div>

                <div className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline">
                  <span className="">
                    <b>My Info</b>
                  </span>
                  <br />

                  <p className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline">
                    Name
                    <br />
                    <b>{name}</b>
                  </p>
                  <br />

                  <p className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline">
                    E-mail
                    <br />
                    <b>{email}</b>
                  </p>
                  <br />

                  <p className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline">
                    Adress
                    <br />
                    <b>{address}</b>
                  </p>
                  <br />

                  <p className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline">
                    Country
                    <br />
                    <b>{contry}</b>
                  </p>
                  <br />

                  <p className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline">
                    City
                    <br />
                    <b>{city}</b>
                  </p>
                  <br />
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
      </div>
    </div>
  );
}
