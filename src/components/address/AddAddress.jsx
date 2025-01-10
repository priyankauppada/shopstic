import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PiGpsFixFill } from "react-icons/pi";

const AddAddress = ({addAddress, editedAddress=null}) => {
  
  const [address, setAddress]=useState({
    name:"",
    mobile:"",
    flat:"",
    city:"",
    state:"",
    country:"",
    pincode:"",
    latLong:"",

  })
   // Populate the form with the address being edited
   useEffect(() => {
    if (editedAddress) {
      setAddress(editedAddress);
    }
  }, [editedAddress]);

  

  const getLocationData=async (lat,long)=>{
    //MYKEY=AIzaSyBy-Wzkmnz4XelTIv5oMJNEQ4fTsiQOvrI
    let api_key="AIzaSyAY1cLZkQ8z18FMknelsZKAUMoLhMBUXEA"
    let res= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${api_key}`)
    let addressComponents=res.data.results[0].address_components
    //console.log(addressComponents)
    let city=''
    let state=''
    let country=""
    let pincode=""
    let flat=""

    city = addressComponents.find(component =>
      component.types.includes("locality")
    )?.long_name;

    state = addressComponents.find(component =>
      component.types.includes("administrative_area_level_1")
    )?.long_name;

    country = addressComponents.find(component =>
      component.types.includes("country")
    )?.long_name;
   
    pincode = addressComponents.find(component =>
      component.types.includes("postal_code")
    )?.long_name;
    
    flat = addressComponents.find(component =>
      component.types.includes("political")
    )?.long_name;
    console.log(flat,city,state,country,pincode)
   
    setAddress({...address,city:city, state:state, pincode:pincode,country:country, flat:flat})
    
  }
  const getUserLatLong=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
            //console.log(position, position.coords.latitude, position.coords.longitude)
            setAddress({...address,latLong:position.coords.latitude+","+position.coords.longitude})
            getLocationData(position.coords.latitude, position.coords.longitude)
        },()=>{
          alert("Permission denied")
        }
      )
    }else{
      alert("Geolocation not supported")
    }
  }
  const handleAddAddress=async(e)=>{
    //console.log(address)
    e.preventDefault();
    addAddress(address)
    setAddress({name: "", mobile: "", flat: "", city:"",state: "", country: "",latLong:"",pincode:""});
    
    

  }
  return (
    <div className='text-sm border-2  border-slate-300 shadow-md px-10  py-5 mt-5'>
        <form onSubmit={handleAddAddress}>
        <div>
         <button className='flex bg-slate-200 py-2 px-4 rounded-md ' onClick={e=>getUserLatLong()}>   
          <PiGpsFixFill className='mr-2 text-lg'/> use my location</button>
        </div>
        <div className='flex flex-col text-sm mt-5 '>
          <label className=''>Name</label>
          <input type="text" value={address.name} className='mt-1 rounded-lg border-2 px-4 border-gray-300 shadow-black w-64 h-10' 
            onChange={e=>setAddress({...address,name:e.target.value})} required/>
        </div>
        <div className='flex flex-col text-sm mt-5 '>
          <label className=''>Mobile</label>
          <input type="text" value={address.mobile} className='mt-1 rounded-lg border-2 px-4 border-gray-300 shadow-black w-64 h-10'
            onChange={e=>setAddress({...address,mobile:e.target.value})} required/>
        </div>
        <div className='flex flex-col text-sm mt-5 '>
          <label className=''>Flat, Building No.</label>
          <input type="text" value={address.flat} className='mt-1 rounded-lg border-2 px-4 border-gray-300 shadow-black w-64 h-10' 
            onChange={e=>setAddress({...address,flat:e.target.value})} required/>
        </div>
        <div className='flex flex-col text-sm mt-5 '>
          <label className=''>City</label>
          <input type="text" value={address.city} className='mt-1 rounded-lg border-2 px-4 border-gray-300 shadow-black w-64 h-10'
            onChange={e=>setAddress({...address,city:e.target.value})} required/>
        </div>
        <div className='flex flex-col text-sm mt-5 '>
          <label className=''>State</label>
          <input type="text" value={address.state} className='mt-1 rounded-lg border-2 px-4 border-gray-300 shadow-black w-64 h-10'
            onChange={e=>setAddress({...address,state:e.target.value})} required/>
        </div>
        <div className='flex flex-col text-sm mt-5 '>
          <label className=''>Pincode</label>
          <input type="text" value={address.pincode} className='mt-1 rounded-lg border-2 px-4 border-gray-300 shadow-black w-64 h-10'
            onChange={e=>setAddress({...address,pincode:e.target.value})} required/>
        </div>
        <button className='bg-slate-700 mt-5 text-white text-sm rounded-lg p-2' type="submit">
              {editedAddress ? "Update Address" : "Add Address"}</button>
          
        
       </form>
    </div>
  )
}

export default AddAddress