import React from 'react';

import UselocalStorage from '../../../Hooks/UselocalStorage';
import DonationCard from './DonationCard';

const Donation = () => {
    const {localData}=UselocalStorage()
    console.log(localData);
    return (
        <div className='grid grid-cols-2 gap-8'>
        {localData.map((data) => <DonationCard key={data.id} data={data} />)}
    </div>
    
    );
};

export default Donation;