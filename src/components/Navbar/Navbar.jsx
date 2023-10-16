import React from "react";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Navbar = () => {
  const texts = ["HOME", "ABOUT", "CONTACT"];

  return (
    <div className="mt-8">
      <div className="flex justify-around items-center">
        <img className="h-[50px]" src={image} alt="" />
        <div className="flex gap-8">
            {
                texts?.map((text,index) => (  
                    <div key={index}>
                       <Link to={`/${text}`}>{text}</Link>
                         </div>
                )
              )
            }
        </div>
        <div className="flex justify-center items-center gap-3">
          <Icon icon="iconamoon:search-fill" />
           <div className="bg-[rgb(255,69,0)] border hover:bg-white w-40 rounded p-2 text-center ">
           <button className="text-white font-semibold hover:text-black">GET STARTED</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
