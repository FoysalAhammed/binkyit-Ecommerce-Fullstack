import React from 'react'
import { FaTruck, FaDollarSign, FaTag, FaHeadset } from "react-icons/fa";
const PolicyBaner = () => {
  return (
    <div className="mt-10 mb-10 bg-white py-8">
    <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex rounded-lg items-center justify-center space-x-4 bg-slate-100 h-20">
        <FaTruck className="text-4xl text-[#4CAF50]" />
        <div className="text-center">
          <p className="font-bold text-lg">Free Delivery</p>
          <p className="text-sm text-gray-600">Orders from all items</p>
        </div>
      </div>
      <div className="flex rounded-lg items-center justify-center space-x-4 bg-slate-100 h-20">
        <FaDollarSign className="text-4xl text-red-500" />
        <div className="text-center">
          <p className="font-bold text-lg">Return & Refund</p>
          <p className="text-sm text-gray-600">Money-back guarantee</p>
        </div>
      </div>
      <div className="flex rounded-lg items-center justify-center space-x-4 bg-slate-100 h-20">
        <FaTag className="text-4xl text-yellow-500" />
        <div className="text-center">
          <p className="font-bold text-lg">Member Discount</p>
          <p className="text-sm text-gray-600">Every order over $140.00</p>
        </div>
      </div>
      <div className="flex rounded-lg items-center justify-center space-x-4 bg-slate-100 h-20">
        <FaHeadset className="text-4xl text-blue-500" />
        <div className="text-center">
          <p className="font-bold text-lg">Support 24/7</p>
          <p className="text-sm text-gray-600">Contact us 24 hours a day</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PolicyBaner