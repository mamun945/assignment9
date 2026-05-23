import { Button, Card} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const PetsCard = ({ petdata }) => {
  const {
    _id,
    adoptionFee,
    age,
    breed,
    description,
    gender,
    healthStatus,
    imageUrl,
    location,
    ownerEmail,
    petName,
    species,
    vaccinationStatus,
    status
  } = petdata;

  return (
    <Card className="rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition-all duration-300">

      {/* Image Section */}
      <div className="relative">

        <Image
          src={imageUrl}
          alt={petName}
          height={200}
          width={300}
          className="w-full h-[250px] object-cover"
        />

        {/* Species Badge */}
        <span className="absolute top-4 left-4 bg-green-500 text-white text-sm px-4 py-1 rounded-full shadow-md font-medium z-10">
          {species}
        </span>
        <span className="absolute top-4 right-4 bg-teal-500 text-white text-sm px-4 py-1 rounded-full shadow-md font-medium z-10">
        {status}
      </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold">{petName}</h2>

          <p className="text-gray-500 text-sm">
            {breed} • {gender} • {age} years old
          </p>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-3 text-sm">

          <div className="bg-base-200 rounded-xl p-3">
            <p className="font-semibold">Health</p>
            <p className="text-gray-500">{healthStatus}</p>
          </div>

          <div className="bg-base-200 rounded-xl p-3">
            <p className="font-semibold">Vaccination</p>
            <p className="text-gray-500">{vaccinationStatus}</p>
          </div>

          <div className="bg-base-200 rounded-xl p-3">
            <p className="font-semibold">Location</p>
            <p className="text-gray-500">{location}</p>
          </div>

          <div className="bg-base-200 rounded-xl p-3">
            <p className="font-semibold">Adoption Fee</p>
            <p className="text-cyan-600 font-bold">
              ${adoptionFee}
            </p>
          </div>
        </div>

        {/* Owner */}
        <div className="border-t pt-3">
          <p className="text-sm text-gray-500">
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">

          <Link href={`/allpets/${_id}`}>
             <Button
            variant="outline"
            className="flex-1 border-cyan-500 text-cyan-600 font-semibold"
          >
            View Details
          </Button>
          </Link>

           <Link href={`/allpets/${_id}`}>
             <Button
            className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold"
          >
            Adopt Now
          </Button>
          </Link>
          

        </div>
      </div>
    </Card>
  );
};

export default PetsCard;