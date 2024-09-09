import React from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function PendingInvoicesSellerPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Pending Invoices Seller</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="font-semibold">Sales</h2>
          <p>$12,400</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="font-semibold">Visitors</h2>
          <p>3,456</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="font-semibold">Orders</h2>
          <p>278</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="font-semibold">Revenue</h2>
          <p>$45,200</p>
        </div>
      </div>
    </div>
  );
}

// Add this function to specify the layout for this page
PendingInvoicesSellerPage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout
      active={"pendingInvoicesSeller"}
      children={page}
    ></DashboardLayout>
  );
};
