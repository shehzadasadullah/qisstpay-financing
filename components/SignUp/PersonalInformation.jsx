import React, { useState, useEffect } from "react";
import logo from "@/public/logo/logo_qp.png";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import step2 from "@/public/steps/step2.png";

function PersonalInformation() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = (password, confirmPassword) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const passwordIsValid = strongPasswordRegex.test(password);
    let errorMessage;

    if (!passwordIsValid) {
      if (!/[a-z]/.test(password)) {
        errorMessage =
          "Password must contain at least one lowercase letter (a-z).";
      } else if (!/[A-Z]/.test(password)) {
        errorMessage =
          "Password must contain at least one uppercase letter (A-Z).";
      } else if (!/[0-9]/.test(password)) {
        errorMessage = "Password must contain at least one digit (0-9).";
      } else if (!/[!@#$%^&*]/.test(password)) {
        errorMessage =
          "Password must contain at least one special character (!@#$%^&*).";
      } else {
        errorMessage = "Password must be at least 8 characters long.";
      }
    } else if (password !== confirmPassword) {
      errorMessage = "Passwords do not match.";
    }

    return {
      isValid: passwordIsValid && password === confirmPassword,
      errorMessage,
    };
  };

  const handleSubmitStep2 = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const validationResult = validatePassword(password, confirmPassword);

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email!");
    } else {
      if (validationResult.isValid) {
        router.push("/signup/verify-otp");
      } else {
        toast.error(validationResult.errorMessage);
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Head>
        <title>QISSTPAY - SignUp</title>
        {/* <meta
          name="description"
          content="Circle.ooo ❤️'s our customers! Events: beautiful, fast & simple for all."
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex justify-center items-center bg-white">
        <div className="w-full md:w-4/5 lg:w-3/5 flex justify-center flex-col p-5 mt-12 items-center bg-white">
          <div className="w-full text-center flex justify-center items-center">
            <img src={logo.src} alt="Logo" className="h-14" />
          </div>
          <p className="w-full text-center text-[#101828] text-3xl font-semibold mt-4">
            Welcome to QisstPay’s B2B Financing Portal
          </p>
          <p className="w-full text-center text-[#475467] mt-4">
            Please enter following information to start onboarding application
          </p>
          <div className="mb-3 mt-4 w-full flex justify-center items-center">
            <input
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
              className="w-full text-[#667085] bg-white md:w-3/5 border-opacity-80 focus:border-opacity-100 focus:border-[#E93A7D] border-[#D0D5DD] border-[1px] py-3 px-5 outline-none"
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="mb-3 w-full flex justify-center items-center">
            <input
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
              className="w-full text-[#667085] bg-white md:w-3/5 border-opacity-80 focus:border-opacity-100 focus:border-[#E93A7D] border-[#D0D5DD] border-[1px] py-3 px-5 outline-none"
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your Password"
              required
            />
          </div>

          <div className="mb-3 w-full flex justify-center items-center">
            <input
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
              className="w-full text-[#667085] bg-white md:w-3/5 border-opacity-80 focus:border-opacity-100 focus:border-[#E93A7D] border-[#D0D5DD] border-[1px] py-3 px-5 outline-none"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="Confirm your Password"
              required
            />
          </div>

          <div className="mb-3 mt-4 w-full md:w-4/5 lg:w-3/5 flex justify-between items-center">
            <button
              onClick={() => {
                router.push("/signup/account-type");
              }}
              className={`w-full py-3 px-5 rounded-xl font-semibold text-[#344054] bg-white border-[1px] border-[#D0D5DD]
                  `}
            >
              Back
            </button>
            <button
              onClick={() => {
                handleSubmitStep2();
              }}
              disabled={
                (email === "" || password === "" || confirmPassword === "") &&
                true
              }
              className={`ml-2 w-full py-3 px-5 rounded-xl font-semibold ${
                email === "" || password === "" || confirmPassword === ""
                  ? "text-[#98A2B3] bg-[#F2F4F7] border-[1px] border-[#EAECF0]"
                  : "text-[#fff] bg-[#E93A7D] border-[1px] border-[#E93A7D]"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
        <div className="fixed bottom-0 w-full bg-white hidden lg:flex justify-center items-center">
          <img
            src={step2.src}
            alt="Step 2"
            className="h-16 object-contain text-center"
          />
        </div>
      </div>
    </>
  );
}

export default PersonalInformation;
