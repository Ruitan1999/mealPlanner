import { Button } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import meal from '../assets/goal2.png'
import classes from './Card.module.css'



const Card = (props: any) => {
    return (
        <div className={classes.card}>
            <h1>{props.result}</h1>
            <Image src={meal} alt={"cover"}></Image>
            <div className={classes.recipe}>
            <h3>Cooking Time: 45 min</h3>
            <h3>Serving Size: 4 People</h3>
            </div>
            <Button variant="outlined" sx={{ color:"black", outlineColor: "black", width: "200px", height: "50px"}}>
          View Recipe
        </Button>
        </div>
    );
};

export default Card;