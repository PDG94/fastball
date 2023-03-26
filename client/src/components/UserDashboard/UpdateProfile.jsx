// import { uploadFile } from "../../Firebase/config";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function UpdateInfoUser() {
  const navigate = useNavigate();
  const customerEmail = useSelector((state) => state.user.email);
  const customerName = useSelector((state) => state.user.name);
  const token = localStorage.getItem("token");
  const userID = useSelector((state) => state.user._id);

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    address: "",
    contry: "",
    city: "",
  });

//   const [file, setFile] = useState("");

  function handlerChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const updateValidator = async () => {
    const finalForm = {};
    if (form.name.length > 0) {
      finalForm.name = form.name;
    }
    if (form.lastName.length > 0) {
      finalForm.lastName = form.lastName;
    }
    if (form.address.length > 0) {
      finalForm.address = form.address;
    }
    if (form.contry.length > 0) {
        finalForm.contry = form.contry;
    }
    if (form.city.length > 0) {
        finalForm.city = form.city;
    }   

    // if (file && !isObjectEmpty(file)) {
    //   finalForm.profilepic = await uploadFile(file, userID);
    // }
    return finalForm;
  };

//   const isObjectEmpty = (objectName) => {
//     return (
//       objectName &&
//       Object.keys(objectName).length === 0 &&
//       objectName.constructor === Object
//     );
//   };

//   function changing(e) {
//     var pdrs = document.getElementById("file-up").files[0].name;
//     document.getElementById("infoUp").innerHTML = pdrs;
//     setFile(e.target.files[0]);
//     setForm({
//       ...form,
//       filename: e.target.files[0].name,
//     });
//   }

  const submitHandler = async (event) => {
    event.preventDefault();

    const info = await updateValidator();

    try{

      await axios.patch(
        `/users/${userID}`,
        info,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      await axios.post(
        "/dato",
        {
          name: customerName,
          email: customerEmail,
        }
      );

      toast.success("User update successfully!");
      navigate("/profile");

    } catch (error) {
      console.log(error);
    }    
  };

  return (
    <div className="">
      <form className="" onSubmit={submitHandler}>
        <Link to={"/profile"}>
          <button className="">Back</button>
        </Link>
        <div className="">
          <h1 className="">Update User</h1>

          <div className="">
            <span className="">Update Name</span>
            <label className="">
            </label>
            <input
              className=""
              type="text"
              placeholder="New Name"
              value={form.name}
              name="name"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="">
            <span className="">Update Surname</span>
            <label className="">
            </label>
            <input
              className=""
              type="text"
              placeholder="New Surname"
              value={form.lastName}
              name="lastName"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="">
            <span className="">Update Country</span>
            <label className="">
            </label>
          </div>

          <div className="">
            <span className="">Update City</span>
            <label className="">
            </label>
            <input
              className=""
              type="text"
              placeholder="New City"
              value={form.city}
              name="city"
              onChange={(e) => handlerChange(e)}
            />
          </div>         

          <div className="">
            <span className="">Update Address</span>
            <label className="">
            </label>
            <input
              className=""
              type="text"
              placeholder="New Address"
              value={form.address}
              name="address"
              onChange={(e) => handlerChange(e)}
            />
          </div>   



          <div className="">
            <span className="">Update profile image</span>
            {/* <input
              id="file-up"
              onChange={(e) => changing(e)}
              type="file"
              style={{ display: "none" }}
            />
            <div id="infoUp"></div> */}
          </div>

          <button type="submit" className="">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}