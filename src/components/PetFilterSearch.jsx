"use client";

import { useEffect, useState } from "react";
import PetsCard from "./PetsCard";

const PetsFilterSearch = () => {
    const [pets, setPets] = useState([]);

    const [search, setSearch] = useState("");
    const [species, setSpecies] = useState("");

    // API query state
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchPets = async () => {
            const res = await fetch(
                `http://localhost:5001/petssearchfilter?species=${species}&search=${searchQuery}`
            );

            const data = await res.json();
            setPets(data);
        };

        fetchPets();
  
        
    }, [species, searchQuery]);

    const handleSearch = () => {
        setSearchQuery(search);
    };

    useEffect( ()=>{
       setTimeout(()=>{
            setPets([])
        }, 5000)
    },[pets])

    return (
        <div className="p-5">

            {/* Search */}
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Search pet..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-3 rounded w-full"
                />

                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 rounded"
                >
                    Search
                </button>
            </div>

            {/* Filter */}
            <div className="mb-5">
                <select
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                    className="border p-3 rounded"
                >
                    <option value="">All Species</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="fish">Fish</option>
                </select>
            </div>

            {/* Pets */}
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {pets.map((petdata) => (
                    <PetsCard
                        key={petdata._id}
                        petdata={petdata}
                    />
                ))}
            </div>

        </div>
    );
};

export default PetsFilterSearch;