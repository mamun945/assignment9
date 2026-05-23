"use client";

import Link from "next/link";
import { Card} from "@heroui/react";
import {
  Eye,
  Pencil,
  Trash2,
  ClipboardList,
  CheckCircle,
  Package,
} from "lucide-react";
import RequestModal from "./RequestModal";
import DeleteModal from "./DeleteModal";

const MyListing = ({ petsInfo }) => {
  const totalListings = petsInfo.length;

  const availablePets = petsInfo.filter(
      (pet) => pet.status?.toLowerCase() === "available"
       ).length;

  const adoptedPets = petsInfo.filter(
    (pet) => pet.status === "Adopted"
  ).length;

  return (
    <div className="p-4 md:p-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        
        {/* Total Listing */}
        <Card className="shadow-md border">
          <div className="flex flex-row items-center justify-between p-5">
            <div>
              <p className="text-gray-500 text-sm">Total Listings</p>
              <h2 className="text-3xl font-bold">{totalListings}</h2>
            </div>

            <div className="bg-teal-100 p-3 rounded-full">
              <ClipboardList className="text-teal-600" size={28} />
            </div>
          </div>
        </Card>

        {/* Available */}
        <Card className="shadow-md border">
          <div className="flex flex-row items-center justify-between p-5">
            <div>
              <p className="text-gray-500 text-sm">Available</p>
              <h2 className="text-3xl font-bold">{availablePets}</h2>
            </div>

            <div className="bg-green-100 p-3 rounded-full">
              <Package className="text-green-600" size={28} />
            </div>
          </div>
        </Card>

        {/* Adopted */}
        <Card className="shadow-md border">
          <div className="flex flex-row items-center justify-between p-5">
            <div>
              <p className="text-gray-500 text-sm">Adopted</p>
              <h2 className="text-3xl font-bold">{adoptedPets}</h2>
            </div>

            <div className="bg-blue-100 p-3 rounded-full">
              <CheckCircle className="text-blue-600" size={28} />
            </div>
          </div>
        </Card>
      </div>

      {/* Pets Listing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {petsInfo.map((petInfo) => (
          <Card
            key={petInfo._id}
            className="overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
            
            <img
                src={petInfo.imageUrl}
                alt={petInfo.petName}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />

            {/* Status Badge */}
            <div
                className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
                petInfo.status === "Available"
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
            >
                {petInfo.status}
            </div>
            </div>

            <div className="p-5 space-y-4">
              {/* Name + Price */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  {petInfo.petName}
                </h2>

                <span className="bg-teal-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                  ${petInfo.adoptionFee}
                </span>
              </div>

              {/* Breed */}
              <div className="text-sm text-gray-500">
                {petInfo.breed} • {petInfo.age} years
              </div>

              {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-3">
            
            {/* View */}
            <Link href={`/allpets/${petInfo._id}`}>
                <button className="btn btn-sm w-full bg-teal-500 hover:bg-teal-600 text-white border-none">
                <Eye size={16} />
                View
                </button>
            </Link>

            {/* Request */}
            <RequestModal petInfoId={petInfo._id} petName={petInfo.petName}></RequestModal>

            {/* Edit */}
            <Link href={`/allpets/${petInfo._id}/edit/${petInfo._id}`}>
                <button className="btn btn-sm w-full bg-blue-500 hover:bg-blue-600 text-white border-none">
                <Pencil size={16} />
                Edit
                </button>
            </Link>

            {/* Delete */}
            <DeleteModal petInfoId={petInfo._id}></DeleteModal>
            </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyListing;