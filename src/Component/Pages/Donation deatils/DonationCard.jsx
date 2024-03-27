import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
const DonationCard = ({data}) => {
   const {id,title,category,image,description,categoryBg,textColor}=data  
    return (
        <Card className="w-full mt-8 max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <button className='rounded-lg px-2' style={{backgroundColor:categoryBg,color:textColor}} >{category}</button>
          <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
          
          </Typography>
          <a href="#" className="inline-block">
            <Button  style={{backgroundColor:categoryBg,color:textColor}}  variant="text" className="flex items-center gap-2">
             Button
             
            </Button>
          </a>
        </CardBody>
      </Card>
    );
};

export default DonationCard;