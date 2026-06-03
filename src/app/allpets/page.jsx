
import PetsFilterSearch from '@/components/PetFilterSearch';
import PetsCard from '@/components/PetsCard';
import React from 'react'

const AllPetsPage = async() => {
    const res = await fetch('http://localhost:5001/petsinfo')
    const petsDatas = await res.json()
    console.log(petsDatas);
  return (
    <div className='container mx-auto'>
       <h1 className='my-4 text-xl font-bold text-center'>All Pets</h1>
        <div>
           <PetsFilterSearch></PetsFilterSearch>
        </div>
       <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
         {
        petsDatas.map((petdata, ind) =><PetsCard key={ind} petdata={petdata}></PetsCard>)
         }
       </div>
    </div>
  )
}

export default AllPetsPage;
