import React, { useState, useEffect } from "react";
import logo from "@/public/logo/logo_qp.png";
import Head from "next/head";
import Checkbox from "@mui/material/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/router";
import Radio from "@mui/material/Radio";
import buyerIcon from "@/public/buyer/buyer-icon.png";
import sellerIcon from "@/public/seller/seller-icon.png";
import infoIcon from "@/public/info-circle.png";
import step1 from "@/public/steps/step1.png";
import step2 from "@/public/steps/step2.png";
import step3 from "@/public/steps/step3.png";
import step4 from "@/public/steps/step4.png";
import stripeLogo from "@/public/stripe-logo.png";
import quickBooksLogo from "@/public/quickBook-logo.png";
import OtpInput from "react-otp-input";
import { useMediaQuery } from "react-responsive";

function VerifyOTP() {
  const router = useRouter();
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [selectedValue, setSelectedValue] = useState("");
  const [step, setStep] = useState("1");
  const [email, setEmail] = useState("test@test.com");
  const [otp, setOtp] = useState("");
  const [resendDisabled, setResendDisabled] = useState(true);
  const [remainingTime, setRemainingTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        setResendDisabled(false);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [remainingTime]);

  useEffect(() => {
    if (otp.length === 4) {
      setOtp("");
      router.push("/signup/business-information");
    }
  }, [otp]);

  const handleResendOtp = () => {
    setRemainingTime(10);
    setResendDisabled(true);
    toast.success("OPT Resent Successfully, Please check you email!");
  };

  const formattedTime = `${Math.floor(remainingTime / 60)}:${
    remainingTime % 60 < 10 ? "0" : ""
  }${remainingTime % 60}`;

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
            Let's Verify Your Email
          </p>
          <p className="w-full md:w-3/5 lg:w-2/5 text-center text-[#475467] mt-4">
            Before we proceed further, please verify your email by entering the
            code sent to <span className="underline">{email}</span>
          </p>

          <div className="mb-3 mt-4 w-full flex justify-center items-center">
            <OtpInput
              disabled={true}
              containerStyle={
                "flex object-contain w-full justify-center items-center gap-2"
              }
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="text-[#fff]">-</span>}
              skipDefaultStyles={true}
              shouldAutoFocus
              renderInput={(props) => (
                <input
                  {...props}
                  style={{
                    width: isTablet || isMobile ? "15%" : "10%",
                  }}
                  className="w-[100px]bg-white opacity-100 text-[#E93A7D] outline-none text-3xl font-semibold rounded-xl text-center p-2 border-2 border-[#E93A7D]"
                />
              )}
            />
          </div>

          <div
            className={`mb-3 mt-4 w-full ${
              remainingTime !== 0 ? "md:w-3/5 px-10" : "md:w-4/5"
            } flex justify-between items-center`}
          >
            <button
              className={`w-full flex ${
                remainingTime !== 0 ? "justify-start" : "justify-center"
              } items-center flex-row`}
              disabled={resendDisabled}
              onClick={handleResendOtp}
            >
              <div
                className={`font-normal ${
                  remainingTime !== 0
                    ? "text-[#475467]"
                    : "text-[#E93A7D] underline"
                }`}
              >
                Resend Code
              </div>
              {remainingTime !== 0 && (
                <>
                  <div className="text-[#475467] font-semibold ml-1">
                    {formattedTime}
                  </div>
                </>
              )}
            </button>

            {remainingTime === 0 && (
              <>
                <div
                  onClick={() => {
                    setOtp("");
                    router.push("/signup/personal-information");
                  }}
                  className={`w-full cursor-pointer text-center font-normal text-[#E93A7D] underline`}
                >
                  Change Email
                </div>
              </>
            )}
          </div>
        </div>
        <div className="fixed bottom-0 w-full bg-white hidden lg:flex justify-center items-center">
          <img
            src={step3.src}
            alt="Step 3"
            className="h-16 object-contain text-center"
          />
        </div>
      </div>
    </>
  );
}

export default VerifyOTP;
