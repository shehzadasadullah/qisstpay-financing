import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/public/logo/logo_qp.png";
import Head from "next/head";

export default function DashboardLayout({ children, active }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpenInvoice, setIsOpenInvoices] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenIntegrations, setIsOpenIntegrations] = useState(false);
  const [isOpenInvitations, setIsOpenInvitations] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
    setIsOpenInvoices(false);
    setIsOpenSettings(false);
    setIsOpenIntegrations(false);
    setIsOpenInvitations(false);
  }, [children]);

  return (
    <>
      <Head>
        <title>Harvv Financing</title>
        {/* <meta
          name="description"
          content="Circle.ooo ❤️'s our customers! Events: beautiful, fast & simple for all."
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen bg-white">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white overflow-auto h-full justify-between items-center p-3 w-80 border-r-[1px] border-[#EAECF0] transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 flex flex-col`}
        >
          <div className="w-full flex justify-center items-center">
            <div className="md:p-2 text-2xl w-full font-bold flex justify-between items-center">
              <img src={logo.src} alt="" className="h-12" />
              <button
                onClick={() => setSidebarOpen(false)}
                className="focus:outline-none sm:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#182230"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <nav className="w-full h-full mt-4 md:mt-2 flex justify-start items-center flex-col gap-2">
            <Link href="/merchant/onboarding" className="w-full">
              <div
                className={`flex justify-start items-center ${
                  active === "onboarding" ? "nav-item-active" : "nav-item"
                }`}
              >
                <div className="w-full flex justify-start items-center gap-2 flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M16 13H8M16 17H8M10 9H8M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>Onboarding</div>
                </div>
              </div>
            </Link>
            <Link href="/merchant/customer" className="w-full">
              <div
                className={`flex justify-start items-center ${
                  active === "customer" ? "nav-item-active" : "nav-item"
                }`}
              >
                <div className="w-full flex justify-start items-center gap-2 flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>Customers</div>
                </div>
              </div>
            </Link>
            <div className="w-full">
              <div className="relative w-full nav-dropdown">
                <div className="w-full">
                  <button
                    type="button"
                    onClick={() => setIsOpenInvoices(!isOpenInvoice)}
                    className="flex justify-between items-center w-full focus:outline-none"
                  >
                    <div className="w-full gap-2 flex justify-start items-center flex-row">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 10.5L11 12.5L15.5 8M20 21V7.8C20 6.11984 20 5.27976 19.673 4.63803C19.3854 4.07354 18.9265 3.6146 18.362 3.32698C17.7202 3 16.8802 3 15.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V21L6.75 19L9.25 21L12 19L14.75 21L17.25 19L20 21Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>Invoices</div>
                    </div>
                    <svg
                      className={`transform transition-transform duration-1000 ${
                        isOpenInvoice ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-1000 ease-in-out transform ${
                    isOpenInvoice ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="w-full mt-2 bg-transparent">
                    <div
                      className="py-1 px-2 w-full flex justify-center items-center flex-col gap-y-2"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="/merchant/invoices/add"
                        className={`flex w-full ${
                          active === "addInvoice"
                            ? "nav-item-dropdown-active"
                            : "nav-item-dropdown"
                        }`}
                        role="menuitem"
                      >
                        Add Invoice
                      </Link>
                      <Link
                        href="/merchant/invoices/invoices"
                        className={`flex w-full ${
                          active === "invoices"
                            ? "nav-item-dropdown-active"
                            : "nav-item-dropdown"
                        }`}
                        role="menuitem"
                      >
                        Invoices
                      </Link>
                      <Link
                        href="/merchant/invoices/pending-invoices/buyers"
                        className={`flex w-full ${
                          active === "pendingInvoicesBuyers"
                            ? "nav-item-dropdown-active"
                            : "nav-item-dropdown"
                        }`}
                        role="menuitem"
                      >
                        <div>
                          Pending Invoices
                          <span className="ms-1 italic">(Buyers)</span>
                        </div>
                      </Link>
                      <Link
                        href="/merchant/invoices/pending-invoices/seller"
                        className={`flex w-full ${
                          active === "pendingInvoicesSeller"
                            ? "nav-item-dropdown-active"
                            : "nav-item-dropdown"
                        }`}
                        role="menuitem"
                      >
                        <div>
                          Pending Invoices
                          <span className="ms-1 italic">(Seller)</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/merchant/subscription" className="w-full">
              <div
                className={`flex justify-start items-center ${
                  active === "subscription" ? "nav-item-active" : "nav-item"
                }`}
              >
                <div className="w-full flex justify-start items-center gap-2 flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 10H2M11 14H6M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>View Subscription</div>
                </div>
              </div>
            </Link>
            <div className="w-full">
              <div className="relative w-full nav-dropdown">
                <div className="w-full">
                  <button
                    type="button"
                    onClick={() => setIsOpenSettings(!isOpenSettings)}
                    className="flex justify-between items-center w-full focus:outline-none"
                  >
                    <div className="w-full gap-2 flex justify-start items-center flex-row">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>Settings</div>
                    </div>
                    <svg
                      className={`transform transition-transform duration-1000 ${
                        isOpenSettings ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-1000 ease-in-out transform ${
                    isOpenSettings
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="w-full mt-2 bg-transparent">
                    <div
                      className="py-1 px-2"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        Users
                      </a>
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        Business Onboarding
                      </a>
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        Referral Link
                      </a>
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        White Label
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="relative w-full nav-dropdown">
                <div className="w-full">
                  <button
                    type="button"
                    onClick={() => setIsOpenIntegrations(!isOpenIntegrations)}
                    className="flex justify-between items-center w-full focus:outline-none"
                  >
                    <div className="w-full gap-2 flex justify-start items-center flex-row">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 9H2M14 17.5L16.5 15L14 12.5M10 12.5L7.5 15L10 17.5M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>Integrations</div>
                    </div>
                    <svg
                      className={`transform transition-transform duration-1000 ${
                        isOpenIntegrations ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-1000 ease-in-out transform ${
                    isOpenIntegrations
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="w-full mt-2 bg-transparent">
                    <div
                      className="py-1 px-2"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        Plaid
                      </a>
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        Account Information
                      </a>
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        QuickBooks
                      </a>
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        Odoo
                      </a>
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        Payment Method
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="relative w-full nav-dropdown">
                <div className="w-full">
                  <button
                    type="button"
                    onClick={() => setIsOpenInvitations(!isOpenInvitations)}
                    className="flex justify-between items-center w-full focus:outline-none"
                  >
                    <div className="w-full gap-2 flex justify-start items-center flex-row">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>Invitations</div>
                    </div>
                    <svg
                      className={`transform transition-transform duration-1000 ${
                        isOpenInvitations ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-1000 ease-in-out transform ${
                    isOpenInvitations
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="w-full mt-2 bg-transparent">
                    <div
                      className="py-1 px-2"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        Invited Buyers
                      </a>
                      <a
                        href="#"
                        className="flex nav-item-dropdown"
                        role="menuitem"
                      >
                        <div>Invitation from Buyers</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="w-full text-center border-2">
            Navbar Bottom (TODO)
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navbar */}
          <header className="flex items-center bg-white h-16 px-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-[#182230] focus:outline-none sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </header>

          {/* Overlay for Mobile Drawer */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}

          {/* Content */}
          <main className="flex-1 p-6 h-screen overflow-auto bg-white">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
