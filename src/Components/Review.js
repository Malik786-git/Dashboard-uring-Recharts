import React, { useState } from "react";
import people from '../data'
const Review = () => {

    const [index, setIndex] = useState(0);
    const [more, setMore] = useState(false);
    const {name, desc} = people[index];
    console.log(people);

    
   const checkNumber = (number)=>{
     if (number > people.length-1) {
        return 0;
     }
     if(number < 0){
        return people.length-1
     }
      return number;
   }

   const prev = ()=>{
    setIndex(checkNumber(index-1));
   }
   const next = ()=>{
    setIndex(checkNumber(index-1));
   }


  return (
    <>
      <div className="review-box">
        <h1>{name}</h1>
        <p>
          {
            more ? desc : desc.substring(0, 50)
          }
          <span className="showmore"
            onClick={()=>setMore(!more)}
          >{more? ' show less' : ' show more'}</span>
        </p>
        <div className="next-btns">
        <i className="fa fa-chevron-circle-left" onClick={prev} aria-hidden="true"></i>
        <i className="fa fa-chevron-circle-right" onClick={next} aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};


export default Review;
