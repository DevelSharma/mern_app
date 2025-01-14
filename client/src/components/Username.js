import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import profile from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate";

export default function Username() {
  const formik = useFormik({
    initialValues: {
      username: "username123",
    },
    validate: usernameValidate,
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
        <div className={styles.glass}>

          <div>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">hello! User!</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Explore more by connecting with us.
              </span>
            </div>

            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                <img
                  src={profile}
                  className={styles.profile_img}
                  alt="avatar"
                />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps("username")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Username"
                />
                <button className={styles.btn} type="submit">
                  Let's Go
                </button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">
                  Not a member{" "}
                  <Link className="text-blue-500" to="/register">
                    Register now!
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
