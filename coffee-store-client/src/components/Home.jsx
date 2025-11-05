import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeesCard from './CoffeesCard';

const Home = () => {
    const coffeesdata = useLoaderData();
    console.log(coffeesdata)
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
            {
                coffeesdata.map(initialCoffees => <CoffeesCard key={initialCoffees._id} initialCoffees={initialCoffees}></CoffeesCard>)
            }
            </div> 
        </div>
    );
};

export default Home;