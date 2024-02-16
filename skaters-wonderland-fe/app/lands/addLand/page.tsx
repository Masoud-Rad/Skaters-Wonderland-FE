"use client";
import React, { ChangeEvent, useState } from "react";
import { addNewLand } from "@/utils";
import { Console } from "console";

const AddLand = () => {


  const [landname, setLandname] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [username, setUsername] = useState("");

 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await addNewLand({
        "landname": landname,
        "city": city,
        "country": country,
        "postcode": postcode,
        "description": description,
        "land_img_url": imgUrl,
        "username": username,
      });
      console.log("in the addLand",response); 

      setLandname("");
      setCity("");
      setCountry("");
      setPostcode("");
      setDescription("");
      setImgUrl("");
      setUsername("");
    } catch (error) {
      console.error("Error submitting form:", error);
    
    }
  };
  
  

  return (
    <div className="container mx-auto mt-8">
      
      <form  id= "addLandForm" onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4 mx-auto">Add Land</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="landname"
          >
            Name
          </label>
          <input
            type="text"
            id="landname"
            name="landname"
            placeholder="please enter the land's name"
            value={landname}
            onChange={(event)=>{ setLandname(event.target.value)}}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="please enter the city"
            value={city}
            onChange={(event)=>{ setCity(event.target.value)}}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="please enter the country"
            value={country}
            onChange={(event)=>{ setCountry(event.target.value)}}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="postcode"
          >
            Postcode
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            placeholder="please enter the postcode"
            value={postcode}
            onChange={(event)=>{ setPostcode(event.target.value)}}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="please enter the description"
            value={description}
            onChange={(event)=>{ setDescription(event.target.value)}}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="land_img_url"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="land_img_url"
            name="land_img_url"
            placeholder="please enter the url"
            value={imgUrl}
            onChange={(event)=>{ setImgUrl(event.target.value)}}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="please enter the username"
            value={username}
            onChange={(event)=>{ setUsername(event.target.value)}}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLand;
