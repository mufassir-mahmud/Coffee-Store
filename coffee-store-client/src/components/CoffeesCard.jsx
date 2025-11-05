// import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from 'react-router';
const CoffeesCard = ({initialCoffees,setCoffees,coffees}) => {
    const {_id,coffee,price,taste,photo} = initialCoffees;
    // const [coffees, setCoffees] = useState(initialCoffees);
    // console.log(coffees)
    const handleDelete = (_id) =>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3001/coffees/${_id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    const remainingCoffees = coffees.filter(cof => cof._id !== _id);
    setCoffees(remainingCoffees)
        }
    })
    
  }
});
    }
    return (
        <div className='p-4'>
            <div className="card card-side bg-base-100 shadow-sm">
  <figure className='w-[146px] h-[181px]'>
    <img className='w-full'
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex justify-center items-center gap-5 w-full">
    <div className="flex text-left flex-col gap-3">
       <h2 className="card-title">Name : {coffee}</h2>
    <h2 className="card-title">Price : {price}</h2>
    <h2 className="card-title">Taste : {taste}</h2> 
    </div>
    
    
    <div className="flex flex-col gap-3">
        
      <Link to={`/coffees-details/${_id}`}><button className="btn btn-sm btn-primary"><FaEye /></button></Link>
      <Link to={`/updateCoffee/${_id}`}><button className="btn btn-sm btn-neutral"><MdEdit /></button></Link>
      
      <button className="btn btn-sm btn-error" onClick={() => handleDelete(_id)}> <RiDeleteBin2Fill /></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeesCard;