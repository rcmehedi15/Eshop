import React from "react";
import { useLoaderData } from "react-router-dom";
import FixedBrandName from "./Products/FixedBrandName";

const Home = () => {
  const allBrand = useLoaderData();
  
  return (
    <>
      <div>
        <h1 className="text-3xl text-red-500 text-center mt-10 font-serif">
          Our Brands Here ..
        </h1>

        {/*for card show in home page */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {allBrand?.map((singleBrand) => (
          <FixedBrandName key={singleBrand.id} singleBrand={singleBrand}>
            
          </FixedBrandName>
        ))}
      </div>
      </div>
    </>
  );
};

export default Home;
