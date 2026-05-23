import MyRequest from "@/components/MyRequest";

const MyRequestPage = async() => {
  const res = await fetch('http://localhost:5001/adoptioninfo')
  const petsAdoptionData = await res.json()
  console.log(petsAdoptionData);
  return (
    <div>
      <MyRequest petsAdoptionData={petsAdoptionData}></MyRequest> 
    </div>
  )
}

export default MyRequestPage
