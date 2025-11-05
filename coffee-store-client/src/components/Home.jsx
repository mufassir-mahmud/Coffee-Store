import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeesCard from './CoffeesCard';

const Home = () => {
    const initialCoffeesdata = useLoaderData();
    const [coffees,setCoffees] = useState(initialCoffeesdata)
    console.log(initialCoffeesdata)
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
            {
                coffees.map(initialCoffees => <CoffeesCard key={initialCoffees._id} coffees={coffees} setCoffees={setCoffees} initialCoffees={initialCoffees}></CoffeesCard>)
            }
            </div> 
        </div>
    );
};

export default Home;