"use client"
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const MyRequest = ({ petsAdoptionData = [] }) => {

  const safeData = Array.isArray(petsAdoptionData) ? petsAdoptionData : [];

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleDelete = async (id) => {
    const res = await fetch(
      `http://localhost:5001/adoptioninfo/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if(data){
      toast.success('item is cancelled')
      window.location.reload();
    }
    
};

  return (
    <div className="p-6">

      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">
        My Adoption Requests
      </h1>

      {/* EMPTY STATE */}
      {safeData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">

          {/* Icon */}
          <div className="text-6xl mb-4">🐾</div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-700">
            You have no adoption requests
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 mt-2 max-w-md">
            Start exploring pets and send adoption requests. Your future furry friend is waiting for you!
          </p>

        </div>
      ) : (
        <>
          {/* Status Summary Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <h2 className="text-lg font-semibold">Total</h2>
              <p>{safeData.length}</p>
            </div>

            <div className="p-4 bg-yellow-100 rounded-lg text-center">
              <h2 className="text-lg font-semibold">Pending</h2>
              <p>
                {safeData.filter(item => item.status === "pending").length}
              </p>
            </div>

            <div className="p-4 bg-green-100 rounded-lg text-center">
              <h2 className="text-lg font-semibold">Approved</h2>
              <p>
                {safeData.filter(item => item.status === "approved").length}
              </p>
            </div>

            <div className="p-4 bg-red-100 rounded-lg text-center">
              <h2 className="text-lg font-semibold">Rejected</h2>
              <p>
                {safeData.filter(item => item.status === "rejected").length}
              </p>
            </div>

          </div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">

              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Pet Name</th>
                  <th className="p-3 text-left">Request Date</th>
                  <th className="p-3 text-left">Pickup Date</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {safeData.map((item) => (
                  <tr key={item._id} className="border-t">

                    <td className="p-3">{item.petName}</td>
                    <td className="p-3">{formatDate(item.today)}</td>
                    <td className="p-3">{formatDate(item.pickupDate)}</td>

                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          item.status === "approved"
                            ? "text-green-500"
                            : item.status === "pending"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="p-3 flex gap-2">
                      <Link href={`/allpets/${item.id}`}>
                      <button className="px-3 py-1 bg-teal-500 text-white rounded">
                        View
                      </button>
                      </Link>

                      {
                        item.status === 'pending' && <button onClick={()=>handleDelete(item.id)} className="px-3 py-1 bg-red-500 text-white rounded">
                        Cancel
                      </button>
                      }
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </>
      )}

    </div>
  );
};

export default MyRequest;