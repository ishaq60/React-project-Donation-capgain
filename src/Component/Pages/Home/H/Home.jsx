import React, { useState } from 'react';

import Banner from '../../../Banner/Banner';
import Categorylist from '../../../CategoryList/Categorylist';

const Home = () => {
    const [value,setvalue]=useState("")
    const handaleSearch =()=>{
 if(value.trim()! ""){
    
 }
    }
    return (
        <div>
           <Banner setvalue={setvalue} handaleSearch={handaleSearch}></Banner>
           <Categorylist></Categorylist>
        </div>
    );
};

export default Home;