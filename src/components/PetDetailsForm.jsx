"use client"
import React, { useState } from 'react'
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { authClient } from '@/lib/auth-client';

const PetDetailsForm = async({datas}) => {

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
//  const { data: session } = authClient.useSession();
//  const user = session?.user;
  const [loading, setLoading] = useState(false);
  // ADD THIS

   const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/adoptioninfo/check?userEmail=${user.email}&id=${_id}`
        );

    const data = await res.json();
    let submitted = data.exists

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
  
          const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptioninfo`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(adoptionInfo),
          });
    
          const data = await res.json();
    
          if (data) {
            toast.success("Adoption request submitted successfully!");
            setLoading(false);
        } 
      };
  

  return (
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

                <Link href="/my-requests">
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
  )
}

export default PetDetailsForm
