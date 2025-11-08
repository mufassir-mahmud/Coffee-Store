import React, { useState } from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);
    const handleDelete =(_id) =>{
     console.log(_id)
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
    fetch(`http://localhost:3001/users/${_id}`,{
      method: 'DELETE',
      
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount){
        const remainingUser = users.filter(user => user._id !== _id);
        setUsers(remainingUser)
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
      }
    })
  }
});
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          No
        </th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,index) => <tr>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.address}</div>
            </div>
          </div>
        </td>
        <td>
         {user.phone}
          
          
        </td>
        <td>{user.email}</td>
        <th>
          <button className="btn btn-sm btn-error" onClick={() => handleDelete(user._id)}> <RiDeleteBin2Fill /></button>
        </th>
      </tr>)
      }
     
    </tbody>
    {/* foot */}
   
  </table>
</div>
        </div>
    );
};

export default Users;