import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import profile from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordVaidate } from "../helper/validate";
import  { convertToBase64 }  from "../helper/convert";
import { registerValidation } from '../helper/validate';

export default function Register() {

  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async (values) => {
      values = await Object.assign(values, {profile: file || ""})
      console.log(values);
    },
  });

  // file uploading not supported by formik, creating a handler function.

  const onUpload = async e =>{
    const base64 = await convertToBase64 (e.target.files[0])
    setFile(base64)
  };


  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{width: "45%", paddingTop: "5em"}}>
          <div>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Welcome!</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Ready to get started? Register your account in seconds.
              </span>
            </div>
            {/* form start here */}
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                {/* Profile pic */}
                <label htmlFor="profile">
                  <img
                    src={file || profile}
                    className={styles.profile_img}
                    alt="avatar"
                  />
                </label>
                <input onChange={onUpload} type="file" id="profile" name="profile" />
              </div>
              {/* Input box email */}
              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps("email")}
                  className={styles.textbox}
                  type="email"
                  placeholder="email*"
                />
              {/* Input box username */}

                <input
                  {...formik.getFieldProps("username")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Username*"
                />
              {/* Input box password */}

                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="password"
                  placeholder="Password*"
                />
                <button className={styles.btn} type="submit">
                  Register
                </button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">
                  Already a user?{" "}
                  <Link className="text-blue-400" to="/">
                    SignIn Now.
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
