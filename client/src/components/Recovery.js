import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import profile from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";

export default function Recovery() {
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold text-center">
                Recover <br />
                Your Password.
              </h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Enter OTP to recover password.
              </span>
            </div>

            <form className="pt-20">
              <div className="textbox flex flex-col items-center gap-6">
                <div className="input text-center">
                  <span className="py-4 text-sm text-left text-gray-500">
                    Enter your 6 digit OTP sent to your email.
                  </span>
                <input
                  className={styles.textbox}
                  type="password"
                  placeholder="OTP"
                /> 
                </div>
                
                <button className={styles.btn} type="submit">
                  Recover
                </button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">
                  Can not get OTP?{" "}
                  <button className="text-red-400">Resend</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
