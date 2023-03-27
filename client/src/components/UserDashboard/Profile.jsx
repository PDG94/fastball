import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getServiceUser } from "../../../redux/actions/usersActions";

export default function DashboardUser() {

  // const dispatch = useDispatch();
  // const token = localStorage.getItem("token");

  const { _id, name, lastname, email, profilePic, address, contry, city } = useSelector(
    (state) => state.user
  );

  // useEffect(() => {
    // dispatch(getServiceUser(_id, token));
  // }, [dispatch, id, token]);

  return (
    <div className='mx-auto min-height-full flex'>
            <div className='hidden lg:block relative flex-1 h-full'>
                <img src={'https://res.cloudinary.com/dviri5ov1/image/upload/c_fill,f_auto,h_570,q_auto,w_700/v1679507441/fastball/system/login_lcywpk.webp'} alt="loginImage" className='w-[99%] h-full' />
            </div>
            <div className='flex-1 flex flex-col px-4 sm:px-6 lg:flex-none mt-8'>
                <div className='mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
                    <div className='flex items-center'>
                        <div className='text-center lg:text-left'>
                            {/* <img src={ImgLogo} alt="LogoFastBall" className='bg-blue-700 h-12 w-auto m-auto lg:m-0' />                           */}
                        </div>
                        
                        <div className="">
                          <div className="">
                            <div className="">
                              <img
                                className=""
                                src={profilePic}
                                alt=""
                              />
                            </div>

                            <div className="">
                              <span className="">
                                <b>My Info</b>
                              </span>
                              <br />

                              <p className="">
                                Name
                                <br /> 
                                <b>{name}</b>            
                              </p>
                              <br />

                              <p className="">
                                E-mail
                                <br /> 
                                <b>{email}</b>
                              </p>
                              <br />

                              <p className="">
                                Adress
                                <br /> 
                                <b>{address}</b>
                              </p>
                              <br />

                              <p className="">
                                Country
                                <br /> 
                                <b>{contry}</b>
                              </p>
                              <br />

                              <p className="">
                                City
                                <br /> 
                                <b>{city}</b>
                              </p>
                              <br />
                              
                            </div>      
                          </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


  );
}