import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Title from "../Title";
import Address from "./Address";


const GetAddressList = ({addresses,deleteAddress,editedAddress}) => {
  const navigate = useNavigate();

  const handleAddress = () => {
    navigate("/payment"); // Navigate to the Address page
  };
  
  return (
    <div>
        <div className=''>
        <Title text1={"Manage"} text2={"Address"} />
        
        <ul>
        {addresses.map(address => (
          <li key={address.id} className='border border-slate-300 shadow-lg p-5 mt-5'>
            <h5 className=''> {address.name}</h5>
            <p className='text-sm text-slate-600 mt-2'>{address.flat}, {address.city}, {address.state}, {address.pincode}</p> 
            <p className='text-sm text-slate-700'>+91 {address.mobile}</p>
            <div>
                <button onClick={e=>editedAddress(address)}
                    className='text-lg  text-[#2e9a66] mt-1' ><FaEdit/></button>
                <button onClick={e=>deleteAddress(address.id)}
                    className='text-lg  text-[#2e9a66] mt-1 ml-3' > <RiDeleteBin5Fill/> </button> 
            </div>
            <div>
              <button className='bg-[#2e9a66] text-white text-sm py-2 px-4 rounded-md mt-2 font-semibold'
                     onClick={handleAddress}>Delivery to this Address</button>
            </div>
          
          </li>
          
        ))}
      </ul>
      </div>
      
    </div>
  )
}

export default GetAddressList