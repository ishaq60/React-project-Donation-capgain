import React from 'react';

import UseDonationdata from '../../Hooks/UseDonationdata';
import Carddeafult from '../Card/Carddeafult';

const Categorylist = () => {
    const {data,loading}=UseDonationdata()
    // console.log(data);
    return (
        <div className='grid grid-cols-4 gap-8 max-w-7xl mx-auto py-6'>
            {
                data.map((item)=><Carddeafult key={item.id} item={item}></Carddeafult>)
            }
        </div>
    );
};

export default Categorylist;