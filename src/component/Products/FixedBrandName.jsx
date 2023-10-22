import React from "react";
import { Link } from "react-router-dom";

const FixedBrandName = ({ singleBrand }) => {
  const { brand_img, brand_name, id } = singleBrand || {};
  return (
    <>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl mx-10 mt-10 border ml-[100px]">
          {/* for brand card to another card page */}
          <div className="card-body h-[350px]">
            <div>
              <img className="h-[250px]" src={brand_img} alt="" />
            </div>
            <h2 className="card-title text-center justify-center text-2xl hover:text-blue-300 cursor-pointer">
              {brand_name}
            </h2>
          </div>
          <div className="card-actions justify-center mb-4">
            {/* <Link
              to={`brandDetails/${brandname}`} // Use the correct URL to match your route
              className="btn btn-outline hover:bg-[#332FD0] mt-4"
            >
              View Details
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedBrandName;
