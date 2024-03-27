import React, { useEffect, useState } from 'react';
import { getFromLocalstorage } from '../Utils/Localstroage';

const UselocalStorage = () => {
    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        const dataFromLocalStorage = getFromLocalstorage();
        setLocalData(dataFromLocalStorage);
    }, []);

    return (
     {localData}
            
    );
};

export default UselocalStorage;
