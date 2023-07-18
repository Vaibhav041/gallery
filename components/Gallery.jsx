import React from "react";

const Gallery = ({objects, base}) => {
  return (
    <div>      <div className="mt-10 flex justify-center flex-wrap gap-16">
        {
          objects?.map(item => {
            return <img src={`${base}${item}`} className="w-56 h-56" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}/>
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
