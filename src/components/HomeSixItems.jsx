import React from 'react'
import PetsCard from './PetsCard';

const HomeSixItems = async() => {
    const res = await fetch('http://localhost:5001/petsinfosix')
    const petsDatas = await res.json();
    // console.log(data, 'form home')
  return (
    <div className='my-8 container mx-auto'>
        <h1 className='text-2xl font-bold text-center my-4 '>Pets Available for Adoption</h1>
        <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {
             petsDatas.map((petdata, ind)=> <PetsCard key={ind} petdata={petdata}></PetsCard>)    
            }
        </div>
    </div>
  )
}

export default HomeSixItems
