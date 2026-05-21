import UpdatePet from '@/components/UpdatePet';
import React from 'react'

const PetUpdatePage = async({params}) => {
    const { id } = await params;
  const res = await fetch(`http://localhost:5001/petsinfo/${id}`, {
    cache: "no-store",
  });

  const datas = await res.json()
//   console.log(datas, 'form update page');

  return (
    <div>
      <UpdatePet datas={datas}></UpdatePet>
    </div>
  )
}

export default PetUpdatePage
