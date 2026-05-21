"use client"
import { authClient } from "@/lib/auth-client";
import {
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
  Button,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const UpdatePet = ({datas}) => {
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
  } = datas;

   const { data: session } = authClient.useSession();
   const user = session?.user;
   
   const onSubmit = async(event)=>{
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const petInfo = Object.fromEntries(formData.entries())
      console.log(petInfo, 'from petInfo');

       const res = await fetch(`http://localhost:5001/petsinfo/${_id}`,{
          method:'PATCH',
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(petInfo)
         })
        const data = await res.json()
         console.log(data, 'form update page')
        if(data){
          toast.success('data update successfully!')
          redirect('/allpets')
        }
        if(!data){
          toast.error('somthing went wrong')
        }
   }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
          <h1 className="my-6 text-3xl font-bold text-center">
            Update <span className="text-teal-500">{petName}</span> Listing
          </h1>
    
          <form onSubmit={onSubmit} className="p-8 border rounded-2xl shadow-lg space-y-8">
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
              {/* Pet Name */}
              <TextField defaultValue={petName} name="petName" isRequired>
                <Label>Pet Name</Label>
                <Input
                  placeholder="Enter pet name"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
    
              {/* Species */}
              <div>
                <Label className="mb-2 block">Species</Label>
    
                <Select
                  defaultValue={species}
                  name="species"
                  placeholder="Select species"
                  className="w-full"
                >
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
    
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="dog" textValue="Dog">
                        Dog
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
    
                      <ListBox.Item id="cat" textValue="Cat">
                        Cat
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
    
                      <ListBox.Item id="bird" textValue="Bird">
                        Bird
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
    
                      <ListBox.Item id="tiger" textValue="Rabbit">
                        Tiger
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="fish" textValue="Fish">
                        Fish
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
    
              {/* Breed */}
              <TextField defaultValue={breed} name="breed" isRequired>
                <Label>Breed</Label>
                <Input
                  placeholder="Golden Retriever"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
    
              {/* Age */}
              <TextField defaultValue={age} name="age" type="number" isRequired>
                <Label>Age</Label>
                <Input
                  type="number"
                  placeholder="2"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
    
              {/* Gender */}
              <div>
                <Label defaultValue={gender} className="mb-2 block">Gender</Label>
    
                <Select
                 defaultValue={ gender}
                  name="gender"
                  placeholder="Select gender"
                  className="w-full"
                >
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
    
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="male" textValue="Male">
                        Male
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
    
                      <ListBox.Item id="female" textValue="Female">
                        Female
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
    
              {/* Image URL */}
              <div className="md:col-span-2">
                <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://i.ibb.co/example.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>
    
              {/* Health Status */}
              <TextField defaultValue={healthStatus} name="healthStatus" isRequired>
                <Label>Health Status</Label>
                <Input
                  placeholder="Healthy"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
    
              {/* Vaccination Status */}
              <TextField defaultValue={vaccinationStatus} name="vaccinationStatus" isRequired>
                <Label>Vaccination Status</Label>
                <Input
                  placeholder="Vaccinated"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
    
              {/* Location */}
              <TextField defaultValue={location} name="location" isRequired>
                <Label>Location</Label>
                <Input
                  placeholder="Dhaka, Bangladesh"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
    
              {/* Adoption Fee */}
              <TextField defaultValue={ adoptionFee} name="adoptionFee" type="number" isRequired>
                <Label>Adoption Fee</Label>
                <Input
                  type="number"
                  placeholder="100"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
    
              {/* Owner Email */}
              <TextField defaultValue={ownerEmail} name="ownerEmail">
                <Label>Owner Email</Label>
                <Input
                  value={user?.email}
                  readOnly
                  className="rounded-2xl"
                />
              </TextField>
    
              {/* Description */}
              <div className="md:col-span-2">
                <TextField defaultValue={description} name="description" isRequired>
                  <Label>Description</Label>
    
                  <TextArea
                    placeholder="Write pet details..."
                    className="rounded-2xl"
                  />
    
                  <FieldError />
                </TextField>
              </div>
            </div>
    
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-cyan-500 text-white rounded-xl"
            >
              Add Pet
            </Button>
          </form>
        </div>
  )
}

export default UpdatePet
