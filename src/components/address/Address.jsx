import { useEffect, useState } from 'react';
import axios from 'axios';

import AddAddress from './AddAddress'
import GetAddressList from './GetAddressList';
import ProgressBar from '../progress bar/ProgressBar';

const Address = () => {
  let [show,setShow]=useState(false)

  const [addresses, setAddresses] = useState([]);
  const [editedAddress, setEditedAddress] = useState(null); // State for the address being edited
  const API_URL = "https://my-json-server.typicode.com/priyankauppada/address-json-server/addresses";
    // Fetch Addresses
    useEffect(() => {
      try{
        axios.get(API_URL).then(response => {
          setAddresses(response.data);
        });
      }catch(err){
        console.log(err)
      }
     
    }, []);
 
  // adding new address
  const addNewAddress=async (data)=>{
    try{
      const res=await axios.post(API_URL,data)
      setAddresses([...addresses,res.data])
      
    }catch(err){
      console.log(err)
    }
    
    
  }

  //delete address
  const deleteAddress = async (id) => {
    try{
      let res= await axios.delete(`${API_URL}/${id}`)
      //console.log(res.data)
      setAddresses(addresses.filter((address) => address.id !== id));
    }catch(err){
      console.log(err)
    }
  };
  //Edit address
  const editAddress = async (updatedAddress) => {
    let res= await axios.put(`${API_URL}/${updatedAddress.id}`, updatedAddress)
    //console.log(res)
    setAddresses(addresses.map(i=>i.id===updatedAddress.id? res.data:i))
    setEditedAddress(null);
  }
  
  
  return (
    <div className='container mx-auto '>
        <ProgressBar currentStep={1} />
        <div className=' grid md:grid-cols-2 '>
     
      <GetAddressList addresses={addresses} deleteAddress={deleteAddress} editedAddress={setEditedAddress}/>

      <div className='flex flex-col items-center w-96  mx-auto p-5  '>
          <button className="bg-[#2e9a66] text-white py-2 px-6 rounded  hover:bg-gray-800" 
                  onClick={e=>setShow(!show)}>  {editedAddress ? "Update Address" : "+ Add New Address"}
          </button>
          { (show) && (  <div> 
            {editedAddress ? (<AddAddress editedAddress={editedAddress} addAddress={editAddress} />) : 
            <AddAddress addAddress={addNewAddress}/> } </div> ) }
      
     
      </div>
    </div>
    

    </div>
    
  )
}

export default Address