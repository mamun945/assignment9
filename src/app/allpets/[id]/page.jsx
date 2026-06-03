
import PetDetails from "@/components/PetDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token}= await auth.api.getToken({
    headers: await headers()
  })

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/petsinfo/${id}`,{
    headers:{
      authorization:`Bearer ${token}`
    }
  });

  const datas = await res.json()

  return (
    <div>
      <PetDetails datas={datas}></PetDetails>
    </div>
  );
};

export default PetDetailsPage;