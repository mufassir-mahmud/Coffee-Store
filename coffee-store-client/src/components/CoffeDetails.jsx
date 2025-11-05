import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeDetails = () => {
    const coffeesData = useLoaderData();
    const {coffee,price,taste,photo,chef,details} = coffeesData;

    return (
        <div className='min-h-screen mt-20'>
            <h2 className='text-center text-5xl my-10 font-semibold'>Coffee Detais </h2>
            <div className="bg-base-200 min-h-6xl">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={photo}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='flex flex-col gap-5'>
      <h1 className="text-4xl font-bold">{coffee}</h1>
      <p className="">
        Taset: {taste}
      </p>
      <p className=""> Price : 
        {price}
      </p>
      <p className=""> Chef :
        {chef}
      </p>
      <p className=""> Details : 
        {details}
      </p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeDetails;