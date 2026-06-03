import MyRequest from "@/components/MyRequest";

const MyRequestPage = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptioninfo`,{ cache: 'no-store' })
  const petsAdoptionData = await res.json()
  console.log(petsAdoptionData);
  return (
    <div>
      <MyRequest petsAdoptionData={petsAdoptionData}></MyRequest> 
    </div>
  )
}

export default MyRequestPage
