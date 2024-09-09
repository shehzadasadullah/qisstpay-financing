import React, { useState } from "react";
import logo from "@/public/logo/logo_qp.png";
import Head from "next/head";
import Checkbox from "@mui/material/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoader, setLoginLoader] = useState(false);
  const [forgotLoader, setForgotLoader] = useState(false);
  const [showForgotPasswordScreen, setShowForgotPasswordScreen] =
    useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = () => {
    setLoginLoader(true);
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email!");
      setLoginLoader(false);
    } else {
      toast.success("Logged In Successfully!");
      setEmail("");
      setPassword("");
      setLoginLoader(false);
      router.push("/merchant/onboarding");
    }
  };
  const handleSubmitForgot = () => {
    setForgotLoader(true);
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(forgotEmail)) {
      toast.error("Please enter a valid email!");
      setForgotLoader(false);
    } else {
      toast.success("Email Sent Successfully!");
      setForgotEmail("");
      setForgotLoader(false);
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
        <title>Harvv Financing</title>
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
            Welcome to Harvv's B2B Financing Portal
          </p>
          {showForgotPasswordScreen === false && (
            <>
              <p className="w-[80%] text-center text-[#475467] mt-4">
                Please enter your email address and password to login
              </p>
              <div className="mb-3 mt-4 w-full flex justify-center items-center">
                <input
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                  }}
                  className="w-full bg-white md:w-3/5 border-opacity-80 focus:border-opacity-100 focus:border-[#E93A7D] border-[#D0D5DD] border-[1px] py-3 px-5 outline-none"
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
                  className="w-full bg-white md:w-3/5 border-opacity-80 focus:border-opacity-100 focus:border-[#E93A7D] border-[#D0D5DD] border-[1px] py-3 px-5 outline-none"
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
              <div className="mb-3 w-full md:w-3/5 flex justify-between items-center">
                <div className="w-full flex flex-row justify-start items-center">
                  <label className="flex flex-row justify-start items-center">
                    <Checkbox
                      checked={isChecked}
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          color: "#E93A7D",
                        },
                        marginLeft: "-5%",
                      }}
                      inputProps={{ "aria-label": "controlled checkbox" }}
                    />
                    <p className="text-[#344054] cursor-pointer font-normal">
                      Remember Me
                    </p>
                  </label>
                </div>
                <div className="w-full px-1 flex justify-end items-center">
                  <div
                    onClick={() => {
                      setShowForgotPasswordScreen(true);
                    }}
                    className="text-[#DC6803] font-semibold cursor-pointer"
                  >
                    Forgot Password?
                  </div>
                </div>
              </div>
              <div className="mb-4 w-full flex justify-center items-center">
                <button
                  onClick={handleSubmit}
                  disabled={
                    (email === "" || password === "" || loginLoader) && true
                  }
                  className={`w-full md:w-3/5 py-3 px-5 rounded-xl font-semibold ${
                    email === "" || password === ""
                      ? "text-[#98A2B3] bg-[#F2F4F7] border-[1px] border-[#EAECF0]"
                      : "text-[#fff] bg-[#E93A7D] border-[1px] border-[#E93A7D]"
                  }`}
                >
                  {loginLoader ? (
                    <>
                      <div className="flex justify-center items-center w-full">
                        <ThreeDots
                          height="25"
                          color="#fff"
                          width="50"
                          radius="9"
                          ariaLabel="three-dots-loading"
                          visible={true}
                        />
                      </div>
                    </>
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            </>
          )}
          {showForgotPasswordScreen && (
            <>
              <p className="w-[80%] text-center text-[#475467] mt-4">
                Please enter your email address in order to reset your password
              </p>
              <div className="mb-3 mt-4 w-full flex justify-center items-center">
                <input
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                  }}
                  className="w-full bg-white md:w-3/5 border-opacity-80 focus:border-opacity-100 focus:border-[#E93A7D] border-[#D0D5DD] border-[1px] py-3 px-5 outline-none"
                  id="email"
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => {
                    setForgotEmail(e.target.value);
                  }}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="mb-3 w-full md:w-3/5 flex justify-center items-center">
                <div className="w-full px-1 flex justify-end items-center">
                  <span className="text-[#475467] font-normal">
                    Remember Password?
                  </span>
                  <span
                    onClick={() => {
                      setShowForgotPasswordScreen(false);
                    }}
                    className="text-[#DC6803] ml-1 font-semibold cursor-pointer"
                  >
                    Sign in
                  </span>
                </div>
              </div>
              <div className="mb-4 w-full flex justify-center items-center">
                <button
                  onClick={handleSubmitForgot}
                  disabled={(forgotEmail === "" || forgotLoader) && true}
                  className={`w-full md:w-3/5 py-3 px-5 rounded-xl font-semibold ${
                    forgotEmail === ""
                      ? "text-[#98A2B3] bg-[#F2F4F7] border-[1px] border-[#EAECF0]"
                      : "text-[#fff] bg-[#E93A7D] border-[1px] border-[#E93A7D]"
                  }`}
                >
                  {forgotLoader ? (
                    <>
                      <div className="flex justify-center items-center w-full">
                        <ThreeDots
                          height="25"
                          color="#fff"
                          width="50"
                          radius="9"
                          ariaLabel="three-dots-loading"
                          visible={true}
                        />
                      </div>
                    </>
                  ) : (
                    "Send Email"
                  )}
                </button>
              </div>
            </>
          )}
          <div className="mb-3 w-full flex justify-center items-center">
            <span className="text-[#475467] font-normal">
              Don't have an account yet?
            </span>
            <span
              onClick={() => {
                router.push("/signup/account-type");
              }}
              className="text-[#E93A7D] cursor-pointer ml-1 font-semibold"
            >
              Register Now
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
