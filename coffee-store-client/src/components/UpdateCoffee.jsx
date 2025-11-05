import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
const UpdateCoffee = () => {
    const {coffee,price,taste,photo,chef,category,details,_id} = useLoaderData();
    
    
    console.log(coffee)
    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData);
        console.log(updateCoffee)
        fetch(`http://localhost:3001/coffees/${_id}`,{
            method: 'PUT',
            headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.matchedCount){
                Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Update Data has been saved",
  showConfirmButton: false,
  timer: 1500
});
            }
        })
    }
    return (
        <div className="p-24 ">
      <div className="p-12 text-center space-y-4 bg-[#703be7] rounded">
        <h2 className="text-3xl font-semi-bold">Update COFFEE</h2>
        
        <div>
          <form action="" onSubmit={handleUpdateCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="coffee"
                  defaultValue={coffee}
                  required
                  className="input w-full"
                  placeholder="Coffee Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Chef</label>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  required
                  className="input w-full"
                  placeholder="Chef Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  required
                  className="input w-full"
                  placeholder="Category Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Taste</label>
                <input
                  type="text"
                  defaultValue={taste}
                  name="taste"
                  required
                  className="input w-full"
                  placeholder="Taste Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Price</label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  required
                  className="input w-full"
                  placeholder="Price"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Details</label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  required
                  className="input w-full"
                  placeholder="Details Name"
                />
              </fieldset>
            </div>
            <div className="p-4 flex flex-col gap-5 w-full">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Photo</label>
              <input type="text" className="input w-full" name="photo" defaultValue={photo} required placeholder="Photo url" />
            </fieldset>
                   
                
                <button type="submit" className="input w-full btn btn-accent pointer-coarse:" placeholder="Name"  >Add Coffee</button>
                
            </div>
            
          </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateCoffee;