import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { convertToBase64 } from "../helper/convert";

import { profileValidation } from "../helper/validate";
import profile from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";

export default function Profile() {
  const [file, setFile] = useState();

  // Form validation using Formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  // file uploading not supported by formik, creating a handler function.

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto">
      {/* Possition of the popup message from toaster */}
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div
          className={`${styles.glass} ${extend.glass}`}
          style={{ width: "45%", paddingTop: "5em" }}
        >
          <div>
            <div className="title flex flex-col items-center">
              {/* Headings for the form */}
              <h4 className="text-5xl font-bold">Your Profile Hub</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Personalize Your Experience: Customize your settings and
                preferences to suit your needs.
              </span>
            </div>

            {/* form start here */}
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                {/* Profile pic */}
                <label htmlFor="profile">
                  <img
                    src={file || profile}
                    className={`${styles.profile_img} ${extend.profile}`}
                    alt="avatar"
                  />
                </label>
                <input
                  onChange={onUpload}
                  type="file"
                  id="profile"
                  name="profile"
                />
              </div>
              {/* Form fields start here */}
              <div className="textbox flex flex-col items-center gap-6">
                <div className="name flex w-3/4 gap-10">
                  {/*  First name */}
                  <input
                    {...formik.getFieldProps("firstname")}
                    className={`${styles.textbox} ${extend.text}`}
                    type="text"
                    placeholder="Firstname*"
                  />
                  {/* last name */}
                  <input
                    {...formik.getFieldProps("lastname")}
                    className={`${styles.textbox} ${extend.text}`}
                    type="text"
                    placeholder="Lastname*"
                  />
                </div>
                {/* mobile number */}
                <div className="name flex w-3/4 gap-10">
                  <input
                    {...formik.getFieldProps("mobile")}
                    className={styles.textbox}
                    type="text"
                    placeholder="Mobile No."
                  />
                  {/* email */}
                  <input
                    {...formik.getFieldProps("email")}
                    className={`${styles.textbox} ${extend.text}`}
                    type="email"
                    placeholder="email*"
                  />
                </div>
                {/* Address */}
                <input
                  {...formik.getFieldProps("address")}
                  className={`${styles.textbox} ${extend.text}`}
                  type="text"
                  placeholder="Address*"
                />
                {/* Submit button */}
                <button className={styles.btn} type="submit">
                  Update
                </button>
              </div>
              {/* Logout option */}
              <div className="text-center py-4">
                <span className="text-gray-500">
                  End Session: <button className="text-blue-400">Logout</button>
                </span>
                {/* End */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
