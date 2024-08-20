import React, { useState, Fragment, useEffect } from "react";
import logo from "@/public/logo/logo_qp.png";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import step4 from "@/public/steps/step4.png";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function BusinessInformation() {
  const router = useRouter();
  const [legalCompanyName, setLegalCompanyName] = useState("");
  const [einNumber, setEinNumber] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [averageMonthlySpent, setAverageMonthlySpent] = useState("");
  const [annualRevenue, setAnnualRevenue] = useState("");
  const [years, setYears] = useState([]);
  const businessType = [
    "LLC",
    "Sole Proprietor",
    "Partnership",
    "Corporation",
    "Cooperative",
    "Non-Profit",
    "Trust",
    "Unincorporated Association",
    "Not Registered",
    "None of the above (not sure)",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const years_temp = [];
    for (let year = 1947; year <= currentYear; year++) {
      years_temp.push(year);
    }
    setYears(years_temp.reverse());
  }, []);

  const handleSubmit = () => {
    if (legalCompanyName.length < 3) {
      toast.error(
        "The length of the company name must be at least 3 characters!"
      );
    } else if (einNumber.length < 9) {
      toast.error("The length of the EIN must be 9!");
    } else {
      toast.success(
        "Success: " +
          legalCompanyName +
          " " +
          einNumber +
          " " +
          selectedMonth +
          " " +
          selectedYear +
          " " +
          selectedBusinessType +
          " " +
          averageMonthlySpent +
          " " +
          annualRevenue
      );
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
            Thanks for verification ! Please provide the following business
            information
          </p>

          <div className="mb-3 mt-4 w-full flex justify-center items-center">
            <input
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
              className="w-full text-[#667085] bg-white md:w-3/5 border border-opacity-80 focus:border-opacity-100 focus:border-[#E93A7D] border-[#D0D5DD] border-[1px] py-3 px-5 outline-none"
              id="companyName"
              type="text"
              value={legalCompanyName}
              onChange={(e) => {
                setLegalCompanyName(e.target.value);
              }}
              placeholder="Legal Company Name"
              required
            />
          </div>

          <div className="mb-3 w-full flex justify-center items-center">
            <input
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
              className="w-full text-[#667085] bg-white md:w-3/5 border border-opacity-80 focus:border-opacity-100 focus:border-[#E93A7D] border-[#D0D5DD] border-[1px] py-3 px-5 outline-none"
              id="password"
              type="text"
              value={einNumber}
              onChange={(e) => {
                const newValue = e.target.value
                  .replace(/[^a-zA-Z0-9]/g, "")
                  .slice(0, 9);
                setEinNumber(newValue);
              }}
              placeholder="EIN (9 Digits)"
              required
            />
          </div>

          <div className="mb-3 w-full flex justify-center items-center">
            <Menu
              as="div"
              className="relative inline-block text-center w-full md:w-3/5"
            >
              <div>
                <Menu.Button
                  style={{
                    borderRadius: "8px",
                  }}
                  className="inline-flex shadow-sm justify-between ring-1 ring-inset ring-[#D0D5DD] ring-opacity-70 gap-x-1.5 w-full bg-white py-3 px-5"
                >
                  <div className="w-full flex text-[#667085] justify-start text-start items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 8.33317H2.5M13.3333 1.6665V4.99984M6.66667 1.6665V4.99984M6.5 18.3332H13.5C14.9001 18.3332 15.6002 18.3332 16.135 18.0607C16.6054 17.821 16.9878 17.4386 17.2275 16.9681C17.5 16.4334 17.5 15.7333 17.5 14.3332V7.33317C17.5 5.93304 17.5 5.23297 17.2275 4.69819C16.9878 4.22779 16.6054 3.84534 16.135 3.60565C15.6002 3.33317 14.9001 3.33317 13.5 3.33317H6.5C5.09987 3.33317 4.3998 3.33317 3.86502 3.60565C3.39462 3.84534 3.01217 4.22779 2.77248 4.69819C2.5 5.23297 2.5 5.93304 2.5 7.33317V14.3332C2.5 15.7333 2.5 16.4334 2.77248 16.9681C3.01217 17.4386 3.39462 17.821 3.86502 18.0607C4.3998 18.3332 5.09987 18.3332 6.5 18.3332Z"
                        stroke="#344054"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="ml-2">
                      {selectedMonth !== ""
                        ? selectedMonth
                        : "Business Start Month"}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#000"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute bg-white h-60 overflow-auto w-full left-0 z-50 mt-2 origin-top-right rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-2 px-2">
                    {months.map((item, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <>
                            <div
                              className={`${
                                selectedMonth !== "" && selectedMonth === item
                                  ? "bg-[#F9FAFB]"
                                  : "bg-transparent"
                              } flex w-full mt-1 justify-between hover:bg-[#F9FAFB] rounded-lg text-[#101828] items-center flex-row`}
                            >
                              <div
                                onClick={() => {
                                  setSelectedMonth(item);
                                }}
                                className={classNames(
                                  "block w-full px-4 flex justify-start items-center py-2 font-semibold text-sm cursor-pointer"
                                )}
                              >
                                {item}
                              </div>
                              {selectedMonth !== "" &&
                                selectedMonth === item && (
                                  <div className="flex justify-end items-center px-4 py-2 w-full">
                                    <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.6673 5L7.50065 14.1667L3.33398 10"
                                        stroke="#079455"
                                        stroke-width="1.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </div>
                                )}
                            </div>
                          </>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <div className="mb-3 w-full flex justify-center items-center">
            <Menu
              as="div"
              className="relative inline-block text-center w-full md:w-3/5"
            >
              <div>
                <Menu.Button
                  style={{
                    borderRadius: "8px",
                  }}
                  className="inline-flex shadow-sm justify-between ring-1 ring-inset ring-[#D0D5DD] ring-opacity-70 gap-x-1.5 w-full bg-white py-3 px-5"
                >
                  <div className="w-full flex text-[#667085] justify-start text-start items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 8.33317H2.5M13.3333 1.6665V4.99984M6.66667 1.6665V4.99984M6.5 18.3332H13.5C14.9001 18.3332 15.6002 18.3332 16.135 18.0607C16.6054 17.821 16.9878 17.4386 17.2275 16.9681C17.5 16.4334 17.5 15.7333 17.5 14.3332V7.33317C17.5 5.93304 17.5 5.23297 17.2275 4.69819C16.9878 4.22779 16.6054 3.84534 16.135 3.60565C15.6002 3.33317 14.9001 3.33317 13.5 3.33317H6.5C5.09987 3.33317 4.3998 3.33317 3.86502 3.60565C3.39462 3.84534 3.01217 4.22779 2.77248 4.69819C2.5 5.23297 2.5 5.93304 2.5 7.33317V14.3332C2.5 15.7333 2.5 16.4334 2.77248 16.9681C3.01217 17.4386 3.39462 17.821 3.86502 18.0607C4.3998 18.3332 5.09987 18.3332 6.5 18.3332Z"
                        stroke="#344054"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="ml-2">
                      {selectedYear !== ""
                        ? selectedYear
                        : "Business Start Year"}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#000"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute bg-white h-60 overflow-auto w-full left-0 z-50 mt-2 origin-top-right rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {years.length > 0 && (
                    <>
                      <div className="py-2 px-2">
                        {years.map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <>
                                <div
                                  className={`${
                                    selectedYear !== "" && selectedYear === item
                                      ? "bg-[#F9FAFB]"
                                      : "bg-transparent"
                                  } flex w-full mt-1 justify-between hover:bg-[#F9FAFB] rounded-lg text-[#101828] items-center flex-row`}
                                >
                                  <div
                                    onClick={() => {
                                      setSelectedYear(item);
                                    }}
                                    className={classNames(
                                      "block w-full px-4 flex justify-start items-center py-2 font-semibold text-sm cursor-pointer"
                                    )}
                                  >
                                    {item}
                                  </div>
                                  {selectedYear !== "" &&
                                    selectedYear === item && (
                                      <div className="flex justify-end items-center px-4 py-2 w-full">
                                        <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M16.6673 5L7.50065 14.1667L3.33398 10"
                                            stroke="#079455"
                                            stroke-width="1.66667"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </div>
                                    )}
                                </div>
                              </>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <div className="mb-3 w-full flex justify-center items-center">
            <Menu
              as="div"
              className="relative inline-block text-center w-full md:w-3/5"
            >
              <div>
                <Menu.Button
                  style={{
                    borderRadius: "8px",
                  }}
                  className="inline-flex shadow-sm justify-between ring-1 ring-inset ring-[#D0D5DD] ring-opacity-70 gap-x-1.5 w-full bg-white py-3 px-5"
                >
                  <div className="w-full flex text-[#667085] justify-start text-start items-center">
                    <span className="">
                      {selectedBusinessType !== ""
                        ? selectedBusinessType
                        : "Business Type"}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#000"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute bg-white h-60 overflow-auto w-full left-0 z-50 mt-2 origin-top-right rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {businessType.length > 0 && (
                    <>
                      <div className="py-2 px-2">
                        {businessType.map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <>
                                <div
                                  className={`${
                                    selectedBusinessType !== "" &&
                                    selectedBusinessType === item
                                      ? "bg-[#F9FAFB]"
                                      : "bg-transparent"
                                  } flex w-full mt-1 justify-between hover:bg-[#F9FAFB] rounded-lg text-[#101828] items-center flex-row`}
                                >
                                  <div
                                    onClick={() => {
                                      setSelectedBusinessType(item);
                                    }}
                                    className={classNames(
                                      "block w-full px-4 flex justify-start items-center py-2 font-semibold text-sm cursor-pointer"
                                    )}
                                  >
                                    {item}
                                  </div>
                                  {selectedBusinessType !== "" &&
                                    selectedBusinessType === item && (
                                      <div className="flex justify-end items-center px-4 py-2">
                                        <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M16.6673 5L7.50065 14.1667L3.33398 10"
                                            stroke="#079455"
                                            stroke-width="1.66667"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </div>
                                    )}
                                </div>
                              </>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <label class="mb-3 relative w-full md:w-3/5 flex justify-center items-center">
            <span className="text-[#344054] text-lg absolute cursor-text w-full inset-y-0 left-0 flex items-center pl-4">
              $
            </span>
            <input
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
              className="w-full text-[#667085] cursor-text bg-white border border-opacity-80 focus:border-opacity-100 focus:border-[#E93A7D] border-[#D0D5DD] border-[1px] py-3 px-9 outline-none"
              type="text"
              value={averageMonthlySpent}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[^0-9.]/g, "");
                setAverageMonthlySpent(newValue);
              }}
              placeholder="Average Monthly Spent"
              required
            />
          </label>

          <label class="mb-3 relative w-full md:w-3/5 flex justify-center cursor-text items-center">
            <span className="text-[#344054] text-lg absolute w-full inset-y-0 left-0 flex items-center pl-4">
              $
            </span>
            <input
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
              className="w-full text-[#667085] cursor-text bg-white border border-opacity-80 focus:border-opacity-100 focus:border-[#E93A7D] border-[#D0D5DD] border-[1px] py-3 px-9 outline-none"
              type="text"
              value={annualRevenue}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[^0-9.]/g, "");
                setAnnualRevenue(newValue);
              }}
              placeholder="Annual Revenue"
              required
            />
          </label>

          <div className="mb-10 lg:mb-20 mt-4 w-full md:w-4/5 lg:w-3/5 flex justify-between items-center">
            <button
              onClick={() => {
                router.push("/signup/personal-information");
              }}
              className={`w-full py-3 px-5 rounded-xl font-semibold text-[#344054] bg-white border-[1px] border-[#D0D5DD]
                  `}
            >
              Back
            </button>
            <button
              onClick={() => {
                handleSubmit();
              }}
              disabled={
                (legalCompanyName === "" ||
                  einNumber === "" ||
                  selectedMonth === "" ||
                  selectedYear === "" ||
                  selectedBusinessType === "" ||
                  averageMonthlySpent === "" ||
                  annualRevenue === "") &&
                true
              }
              className={`ml-2 w-full py-3 px-5 rounded-xl font-semibold ${
                legalCompanyName === "" ||
                einNumber === "" ||
                selectedMonth === "" ||
                selectedYear === "" ||
                selectedBusinessType === "" ||
                averageMonthlySpent === "" ||
                annualRevenue === ""
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
            src={step4.src}
            alt="Step 4"
            className="h-16 object-contain text-center"
          />
        </div>
      </div>
    </>
  );
}

export default BusinessInformation;
