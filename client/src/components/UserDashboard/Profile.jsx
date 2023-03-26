import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getServiceUser } from "../../../redux/actions/usersActions";

export default function DashboardUser() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const id = useSelector((state) => state.users.userID);
  const { name, lastname, email, profilePic, address, contry, city } = useSelector(
    (state) => state.user
  );

  // useEffect(() => {
  //   dispatch(getServiceUser(id, token));
  // }, [dispatch, id, token]);

  return (
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
            Surname
            <br />
            <b>{lastname}</b>
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
  );
}