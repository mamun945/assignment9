"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { toast } from "react-toastify";

const PetDetails = ({ datas }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ADD THIS
  const [alreadyRequested, setAlreadyRequested] = useState(false);

  const isOwner = user?.email === datas.ownerEmail;

  const {
    _id,
    adoptionFee,
    age,
    breed,
    description,
    gender,
    healthStatus,
    imageUrl,
    location,
    petName,
    species,
    vaccinationStatus,
    status,
  } = datas;

 useEffect(()=>{
 if(user){
   fetch(
          `http://localhost:5001/adoptioninfoCheck/check?userEmail=${user?.email}&id=${_id}`
        ).then(res=> res.json()).then(data => setSubmitted(data.exists))

 }
 },[user, _id])

  // ADD THIS WHOLE useEffect
    
// console.log(checkRequest, 'form petDtails theke');

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // ADD THIS
    if (alreadyRequested) {
      toast.error("You already requested this pet");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget);

    const adoptionInfo = Object.fromEntries(formData.entries());

    adoptionInfo.status = "pending";
    adoptionInfo.id = _id;
    adoptionInfo.today = new Date().toISOString().split("T")[0];

    const {data: tokenData} = await authClient.token();

    try {
      const res = await fetch("http://localhost:5001/adoptioninfo", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization:`Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(adoptionInfo),
      });

      const data = await res.json();

      console.log(data, "form details page");

      if (data) {
        toast.success("Adoption request submitted successfully!");

        // ADD THESE
        setSubmitted(true);
        setAlreadyRequested(true);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="relative w-full h-[400px]">
            <Image
              src={imageUrl}
              alt={petName}
              fill
              className="object-cover"
            />

            <span className="absolute top-4 left-4 bg-green-500 text-white text-sm px-4 py-1 rounded-full shadow-md font-medium z-10">
              {species}
            </span>

            <span className="absolute top-4 right-4 bg-teal-500 text-white text-sm px-4 py-1 rounded-full shadow-md font-medium z-10">
              {status}
            </span>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {petName}
              </h1>

              <p className="text-gray-500 mt-2">
                {breed} • {species}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Age</p>
                <h3 className="font-semibold">{age}</h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Gender</p>
                <h3 className="font-semibold">{gender}</h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Health</p>
                <h3 className="font-semibold">{healthStatus}</h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Vaccination</p>
                <h3 className="font-semibold">
                  {vaccinationStatus}
                </h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Location</p>
                <h3 className="font-semibold">{location}</h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Adoption Fee</p>
                <h3 className="font-semibold">${adoptionFee}</h3>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                About {petName}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {isOwner ? (
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-teal-700">
              This is your listing
            </h2>

            <p className="text-gray-600 mt-2">
              You own this pet listing.
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-2xl p-6 h-fit sticky top-10">

            {/* SUCCESS UI */}
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10">

                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle className="w-14 h-14 text-green-600" />
                </div>

                <h2 className="text-3xl font-bold text-green-600">
                  Your request submitted
                </h2>

                <p className="text-gray-500 mt-3 mb-6">
                  Your adoption request has been sent successfully.
                </p>

                <Link href="/dashboard">
                  <Button className="bg-green-500 hover:bg-green-600 text-white rounded-2xl px-8 py-6 text-lg">
                    View My Requests
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Adopt {petName}
                </h2>

                <form onSubmit={onSubmit} className="space-y-5">

                  <TextField name="petName" isRequired>
                    <Label>Pet Name</Label>
                    <Input
                      value={petName}
                      readOnly
                      className="rounded-2xl bg-gray-100"
                    />
                    <FieldError />
                  </TextField>

                  <TextField name="userName" isRequired>
                    <Label>User Name</Label>
                    <Input
                      value={user?.name || ""}
                      readOnly
                      className="rounded-2xl bg-gray-100"
                    />
                    <FieldError />
                  </TextField>

                  <TextField name="userEmail" isRequired>
                    <Label>User Email</Label>
                    <Input
                      type="email"
                      value={user?.email || ""}
                      readOnly
                      className="rounded-2xl bg-gray-100"
                    />
                    <FieldError />
                  </TextField>

                  <TextField name="pickupDate" isRequired>
                    <Label>Pickup Date</Label>
                    <Input
                      type="date"
                      className="rounded-2xl"
                    />
                    <FieldError />
                  </TextField>

                  <TextField name="message" isRequired>
                    <Label>Message</Label>
                    <TextArea
                      placeholder="Why do you want to adopt this pet?"
                      className="rounded-2xl min-h-[120px]"
                    />
                    <FieldError />
                  </TextField>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-2xl bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-semibold"
                  >
                    {loading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Loading...
                      </div>
                    ) : (
                      "Adopt Now"
                    )}
                  </Button>

                </form>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PetDetails;