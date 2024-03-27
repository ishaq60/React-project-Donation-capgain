import { useParams } from "react-router-dom";
import UseDonationdata from "../../../Hooks/UseDonationdata";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
import { savetolocalStorage } from "../../../Utils/Localstroage";
   

const Donationdeatils = () => {
    const [singledata, setSingledata] = useState({});
    const { id } = useParams();
  
    const { data, loading } = UseDonationdata();
   
const handaledonate =()=>{
savetolocalStorage(singledata)
}






    useEffect(() => {
        if (data) {
            const singleItem = data.find(item => item.id ==id);
            setSingledata(singleItem);
        }
    }, [data, id]);
      const {title,image,category,price ,cardBg,textColor,
        description
        ,categoryBg}=singledata||{}
    return (
        <Card className="max-w-[24rem] mt-20 w-full rounded-md shadow-none overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none  relative"
      >
      <img className="w-full  rounded-sm h-[550px] " src={image} alt="" />
     <div className="absolute flex flex-col items-center  bottom-0 px-5 w-full bg-opacity-40 h-28 pl-8 bg-black shadow-sm">
     <div className="flex">
     
     <Button onClick={handaledonate} className="bg-green-500" >Donate ${price}</Button>
     </div>
     </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {
description
}
        </Typography>
      </CardBody>
  
    </Card>
    );
};

export default Donationdeatils;
