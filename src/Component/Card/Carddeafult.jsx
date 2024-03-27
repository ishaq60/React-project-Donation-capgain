import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
   
const Carddeafult = ({item}) => {
    const {id,title,image,category, cardBg,textColor,categoryBg }=item ||{};
    return (
       
         

      <Link to={`/donation_details/${id}`}>
         <Card style={{backgroundColor:cardBg}} className="mt-6  grid ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
      <Button style={{backgroundColor:categoryBg}} size='sm' className='mb-4'>{category}</Button>
        <Typography style={{backgroundColor:categoryBg}} variant="h5" color="blue-gray" className="mb-2">
         {title}
        </Typography>
       
      </CardBody>
      <CardFooter className="pt-0">
      
      </CardFooter>
    </Card>


      </Link>

       
    );
};

export default Carddeafult;