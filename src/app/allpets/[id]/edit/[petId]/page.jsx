import UpdatePet from '@/components/UpdatePet';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react'

const PetUpdatePage = async({params}) => {
    const { id } = await params;
    const {token}= await auth.api.getToken({
        headers: await headers()
      })
  const res = await fetch(`http://localhost:5001/petsinfo/${id}`, {
    headers:{
      authorization:`Bearer ${token}`
    }
  });

  const datas = await res.json()
  console.log(datas, 'form update page');

  return (
    <div>
      <UpdatePet datas={datas}></UpdatePet>
    </div>
  )
}

export default PetUpdatePage
