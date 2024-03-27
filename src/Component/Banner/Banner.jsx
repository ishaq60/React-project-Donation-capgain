import { Button, Input, Typography } from '@material-tailwind/react';
import React from 'react';

const Banner = ({setvalue,handaleSearch}) => {
    const [email, setEmail] = React.useState("");
  
    return (
        <div>
            <div className='h-[450px] relative border flex flex-col items-center justify-center border-green-500'>
            <div className="absolute insert-0 bg-[url('/image/bg-png')]">

            </div>
            <Typography className='mb-4' variant="h2">I Grow By Helping People In Need</Typography>
            <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
   
        value={email}
        onChange={(e)=>setvalue(e.target.value)}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button onClick={handaleSearch}
        size="sm"
        color="red"
       
        className="!absolute right-1 top-1 rounded"
      >
      Search
      </Button>
    </div>
        </div>
        </div>
    );
};

export default Banner;