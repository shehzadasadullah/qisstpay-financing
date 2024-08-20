import React, { useState, useEffect } from "react";
import logo from "@/public/logo/logo_qp.png";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Radio from "@mui/material/Radio";
import buyerIcon from "@/public/buyer/buyer-icon.png";
import sellerIcon from "@/public/seller/seller-icon.png";
import step1 from "@/public/steps/step1.png";
import stripeLogo from "@/public/stripe-logo.png";
import quickBooksLogo from "@/public/quickBook-logo.png";

function SignUp() {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    router.push("/signup/personal-information");
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
            Choose your relevant account type
          </p>
          <div className="mb-3 mt-4 w-full flex justify-center items-center">
            <div
              className={`w-full md:w-4/5 lg:w-3/5 ${
                selectedValue === "seller"
                  ? "border-[2px] border-[#E93A7D]"
                  : "border-[1px] border-[#EAECF0]"
              } bg-white rounded-xl`}
            >
              <label className="w-full cursor-pointer">
                <div
                  className={`w-full ${
                    selectedValue === "seller"
                      ? "border-b-[2px] border-[#E93A7D]"
                      : "border-b-[1px] border-[#EAECF0]"
                  }`}
                >
                  <div className="w-full p-3 flex justify-between items-center flex-row">
                    <div className="w-full flex justify-start items-center flex-row">
                      <img
                        src={sellerIcon.src}
                        alt="Seller Image"
                        className="w-10 h-10"
                      />
                      <p className="ml-3 mr-3 font-semibold text-xl text-[#344054]">
                        Seller
                      </p>
                    </div>
                    <div className="w-full flex justify-end items-center">
                      <Radio
                        checked={selectedValue === "seller"}
                        onChange={handleChange}
                        sx={{
                          "& .MuiSvgIcon-root": {
                            color: "#E93A7D",
                          },
                        }}
                        value="seller"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "Seller" }}
                      />
                    </div>
                  </div>
                </div>
              </label>
              <div className="w-full p-5 flex justify-center items-center">
                <p className="w-full text-[#475467] font-normal">
                  Create and manage invoices, accept payments, and access
                  financing options for your business.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-3 mt-4 w-full flex justify-center items-center">
            <div
              className={`w-full md:w-4/5 lg:w-3/5 ${
                selectedValue === "buyer"
                  ? "border-[2px] border-[#E93A7D]"
                  : "border-[1px] border-[#EAECF0]"
              } bg-white rounded-xl`}
            >
              <label className="w-full cursor-pointer">
                <div
                  className={`w-full ${
                    selectedValue === "buyer"
                      ? "border-b-[2px] border-[#E93A7D]"
                      : "border-b-[1px] border-[#EAECF0]"
                  }`}
                >
                  <div className="w-full p-3 flex justify-between items-center flex-row">
                    <div className="w-full flex justify-start items-center flex-row">
                      <img
                        src={buyerIcon.src}
                        alt="Buyer Image"
                        className="w-10 h-10"
                      />
                      <p className="ml-3 mr-3 font-semibold text-xl text-[#344054]">
                        Buyer
                      </p>
                    </div>
                    <div className="w-full flex justify-end items-center">
                      <Radio
                        checked={selectedValue === "buyer"}
                        onChange={handleChange}
                        sx={{
                          "& .MuiSvgIcon-root": {
                            color: "#E93A7D",
                          },
                        }}
                        value="buyer"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "Buyer" }}
                      />
                    </div>
                  </div>
                </div>
              </label>
              <div className="w-full p-5 flex justify-center items-center">
                <p className="w-full text-[#475467] font-normal">
                  Pay your invoices on time and access financing options.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-3 mt-4 w-full flex justify-center items-center">
            <button
              onClick={handleSubmit}
              disabled={selectedValue === "" && true}
              className={`w-full md:w-4/5 lg:w-3/5 py-3 px-5 rounded-xl font-semibold ${
                selectedValue === ""
                  ? "text-[#98A2B3] bg-[#F2F4F7] border-[1px] border-[#EAECF0]"
                  : "text-[#fff] bg-[#E93A7D] border-[1px] border-[#E93A7D]"
              }`}
            >
              Continue
            </button>
          </div>

          <div className="mb-3 w-full md:w-4/5 lg:w-3/5 flex flex-row justify-center items-center">
            <hr className="h-[1px] w-full bg-[#EAECF0]" />
            <p className="text-[#475467] px-2 font-semibold">OR</p>
            <hr className="h-[1px] w-full bg-[#EAECF0]" />
          </div>

          <div className="mb-3 w-full flex justify-center items-center">
            <button
              //   onClick={handleSubmit}
              //   disabled={selectedValue === "" && true}
              className={`w-full flex justify-center items-center md:w-4/5 lg:w-3/5 py-3 px-5 rounded-xl font-semibold text-[#2CA01C] bg-white border-[1px] border-[#2CA01C]`}
            >
              <img
                src={quickBooksLogo.src}
                alt="QuickBooks Logo"
                className="h-5"
              />
              <div className="ml-2">Sign Up with QuickBooks</div>
            </button>
          </div>

          <div className="mb-3 w-full flex justify-center items-center">
            <button
              //   onClick={handleSubmit}
              //   disabled={selectedValue === "" && true}
              className={`w-full flex justify-center items-center md:w-4/5 lg:w-3/5 py-3 px-5 rounded-xl font-semibold text-[#635BFF] bg-white border-[1px] border-[#635BFF]`}
            >
              <img src={stripeLogo.src} alt="Stripe Logo" className="h-5" />
              <div className="ml-2">Sign Up with Stripe</div>
            </button>
          </div>

          <div className="mb-10 lg:mb-20 w-full flex justify-center items-center">
            <span className="text-[#475467] font-normal">
              Already have an account?
            </span>
            <span
              onClick={() => {
                router.push("/login");
              }}
              className="text-[#E93A7D] cursor-pointer ml-1 font-semibold"
            >
              Sign in
            </span>
          </div>
        </div>
        <div className="fixed bottom-0 w-full bg-white hidden lg:flex justify-center items-center">
          <img
            src={step1.src}
            alt="Step 1"
            className="h-16 object-contain text-center"
          />
        </div>
      </div>
    </>
  );
}

export default SignUp;
