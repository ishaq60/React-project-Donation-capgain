import React, { useEffect, useState } from 'react';

const UseDonationdata = () => {
    const [data,setdata]=useState([]);
    const [loading,setloading]=useState(true);
    useEffect(()=>{
        const fetchdata=async()=>{
            setloading(true);
            const res=await fetch ("/data.json")
            const data=await res.json();
            setdata(data)
            setloading(false);
        };
        fetchdata();
    },[]);
    return {data,loading}
};

export default UseDonationdata;