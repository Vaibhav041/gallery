import React from "react";
import Navbar from "./Navbar";

const Gallery = ({objects}) => {
  return (
    <div>
      <Navbar/>
      <div className="mt-24 flex justify-center flex-wrap gap-16">
        {
          objects?.map(item => {
            return <img src={`https://testbucketfp.s3.ap-south-1.amazonaws.com/${item}`} className="w-56 h-56 shadow-2xl"/>
          })
        }
      </div>
    </div>
  );
};

export default Gallery;

{
  /* <img
              src={`https://testbucketfp.s3.ap-south-1.amazonaws.com/${item}`}
              className="w-44 h-44"
            /> */
}

//https://testbucketfp.s3.ap-south-1.amazonaws.com/
