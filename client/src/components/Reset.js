import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import profile from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPwdValidation } from "../helper/validate";

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: ""
    },
    validate: resetPwdValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">

      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{width: "50%"}}>

          <div>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Reset</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Eenter new password.
              </span>
            </div>

            <form className="pt-20" onSubmit={formik.handleSubmit}>
            

              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="password"
                  placeholder="Password"
                />
                <input
                  {...formik.getFieldProps("confirm_pwd")}
                  className={styles.textbox}
                  type="password"
                  placeholder="Renter Password"
                />
                <button className={styles.btn} type="submit">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
