import React from "react";

const AddCoffee = () => {
   const handleAddCoffee = e =>{
    e.preventDefault();
    const form = e.target;
    const coffee = form.coffee.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value; 
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {coffee,chef,supplier,taste,category,details,photo};
    console.log(newCoffee)
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
                  className="input w-full"
                  placeholder="Coffee Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Chef</label>
                <input
                  type="text"
                  name="chef"
                  className="input w-full"
                  placeholder="Chef Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  className="input w-full"
                  placeholder="Supplier Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Taste</label>
                <input
                  type="text"
                  name="taste"
                  className="input w-full"
                  placeholder="Taste Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Category</label>
                <input
                  type="text"
                  name="category"
                  className="input w-full"
                  placeholder="Category Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Details</label>
                <input
                  type="text"
                  name="details"
                  className="input w-full"
                  placeholder="Details Name"
                />
              </fieldset>
            </div>
            <div className="p-4 flex flex-col gap-5 w-full">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Photo</label>
              <input type="text" className="input w-full" name="photo" placeholder="Photo url" />
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
