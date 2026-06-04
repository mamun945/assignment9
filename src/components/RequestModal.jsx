"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { ClipboardList, Inbox } from "lucide-react";
import { useEffect, useState } from "react";

const RequestModal = ({ petInfoId }) => {
  const [adoptionInfo, setAdoptionInfo] = useState(null);

  // ---------------- FETCH DATA ----------------
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/adoptioninfo/${petInfoId}`
        );

        const data = await res.json();
        setAdoptionInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (petInfoId) {
      fetchData();
    }
  }, [petInfoId]);

  // ---------------- APPROVE ----------------
  const handleApprove = async (id) => {
    const {data:tokenData} = await authClient.token();
    // instant UI update
    setAdoptionInfo((prev) => ({
      ...prev,
      status: "approved",
    }));

    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptioninfo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    });

    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/petsinfo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization:`Bearer ${tokenData?.token}`
      },
      body: JSON.stringify({ status: "Adopted" }),
    });
    window.location.reload();


  };

  // ---------------- REJECT ----------------
  const handleReject = async (id) => {
    // instant UI update
    setAdoptionInfo((prev) => ({
      ...prev,
      status: "rejected",
    }));

    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptioninfo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "rejected" }),
    });
  };

  return (
    <Modal>
      {/* ---------------- BUTTON ---------------- */}
      <Modal.Trigger>
        <button className="btn btn-sm w-full bg-yellow-500 hover:bg-yellow-600 text-white border-none flex items-center justify-center gap-2">
          <ClipboardList size={16} />
          Request
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[450px] rounded-2xl">
            <Modal.CloseTrigger />

            {/* ---------------- HEADER ---------------- */}
            <Modal.Header>
              <Modal.Heading className="text-xl font-semibold">
                {adoptionInfo?.petName
                  ? `Adoption Request For ${adoptionInfo.petName}`
                  : "No Request Found"}
              </Modal.Heading>
            </Modal.Header>

            {/* ---------------- BODY ---------------- */}
            <Modal.Body>
              {adoptionInfo ? (
                <div className="space-y-4 text-sm text-gray-700">

                  <div className="flex justify-between">
                    <span className="font-medium">Pet Name:</span>
                    <span>{adoptionInfo.petName}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Requester Name:</span>
                    <span>{adoptionInfo.userName}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Requester Email:</span>
                    <span>{adoptionInfo.userEmail}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Pickup Date:</span>
                    <span>{adoptionInfo.pickupDate}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Request Date:</span>
                    <span>{adoptionInfo.today}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Status:</span>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          adoptionInfo.status === "approved"
                            ? "bg-green-100 text-green-600"
                            : adoptionInfo.status === "rejected"
                            ? "bg-red-100 text-red-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {adoptionInfo.status}
                    </span>
                  </div>

                  <div>
                    <p className="font-medium mb-2">Message:</p>

                    <div className="bg-gray-100 p-3 rounded-xl text-gray-600">
                      {adoptionInfo.message}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="bg-gray-100 p-5 rounded-full mb-4">
                    <Inbox size={40} className="text-gray-400" />
                  </div>

                  <h2 className="text-lg font-semibold text-gray-700">
                    No Request Found
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">
                    There is currently no adoption request available for this pet.
                  </p>
                </div>
              )}
            </Modal.Body>

            {/* ---------------- FOOTER ---------------- */}
            {adoptionInfo && adoptionInfo.status === "pending" && (
              <Modal.Footer className="flex gap-3">

                <Button
                  onClick={() =>
                    handleApprove(adoptionInfo.id)
                  }
                  className="w-full bg-green-500 text-white hover:bg-green-600"
                >
                  Approve
                </Button>

                <Button
                  onClick={() =>
                    handleReject(adoptionInfo.id)
                  }
                  className="w-full bg-red-500 text-white hover:bg-red-600"
                >
                  Reject
                </Button>

              </Modal.Footer>
            )}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default RequestModal;