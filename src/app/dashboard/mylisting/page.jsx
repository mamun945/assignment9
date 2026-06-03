
import MyListing from "@/components/MyListing";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyListingPage = async() => {
const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user = session?.user;
const {token}= await auth.api.getToken({
    headers: await headers()
  })
const res = await fetch(`http://localhost:5001/pets/${user?.id}`,{
    headers:{
      authorization:`Bearer ${token}`
    }
  }
)
const petsInfo = await res.json()

  
  return (
    <div>
       <MyListing petsInfo={petsInfo}></MyListing>
    </div>
  )
}

export default MyListingPage
