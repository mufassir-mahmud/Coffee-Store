import React from "react";
import Swal from 'sweetalert2';


const AddCoffee = () => {
   const handleAddCoffee = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData);
    console.log(newCoffee);
    fetch('http://localhost:3001/coffees',{
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
  Swal.fire({
      title: "Coffee Added!",
      text: "Your coffee has been added successfully.",
      icon: "success",
      confirmButtonText: "OK"
    });
      form.reset()
    })
   }
    return (
    <div className="p-24 ">
      <div className="p-12 text-center space-y-4 bg-[#703be7] rounded">
        <h2 className="text-3xl font-semi-bold">ADD COFFEE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          voluptatibus ipsum itaque sapiente esse atque fugit recusandae ut,
          quia animi quo tempore saepe ex, modi molestiae sit voluptates enim
          quaerat?
        </p>
        <div>
          <form action="" onSubmit={handleAddCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="coffee"
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
                  required
                  className="input w-full"
                  placeholder="Chef Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  required
                  className="input w-full"
                  placeholder="Supplier Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Taste</label>
                <input
                  type="text"
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
                  required
                  className="input w-full"
                  placeholder="Details Name"
                />
              </fieldset>
            </div>
            <div className="p-4 flex flex-col gap-5 w-full">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Photo</label>
              <input type="text" className="input w-full" name="photo" required placeholder="Photo url" />
            </fieldset>
                   
                
                <button type="submit" className="input w-full btn btn-accent pointer-coarse:" placeholder="Name"  >Add Coffee</button>
                
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
