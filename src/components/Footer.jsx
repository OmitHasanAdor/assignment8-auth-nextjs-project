import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
         <div className=' bg-black py-10 text-white'>
          <div className="mb-5 max-w-[95%] md:max-w-[70%]  mx-auto space-y-5">
            <h2 className=' text-4xl font-bold text-center'>
            SunCart
            </h2>
            <p className=" opacity-80 text-center">Elevating your summer adventures with premium quality gear. From UV protection to eco-friendly skincare, we bring you the essentials you need to beat the heat in style.</p>
          </div>
          <div className=" flex flex-col sm:flex-row  justify-around items-center gap-5">
          <div className=" flex flex-col items-center gap-5">
              <p className=" text-center text-xl font-semibold ">Social Links</p>
           <div className="cont flex gap-5">
             <div className=""><FaFacebook /></div>
            <div className=""><FaSquareInstagram /></div>
            <div className=""><FaSquareXTwitter /></div>
           </div>
          </div>
           <div className="text-center sm:text-start">
            <h2 className=' text-xl font-semibold'>Contact info</h2>
          <ul className="  ">
            <li className=" opacity-80">Email: info@suncart.com</li>
            <li className=" opacity-80">Phone: +8801987654321</li>
            <li className=" opacity-80">Address: Kamrangir Char ,Dhaka</li>
          </ul>
           </div>
           
          </div>
          <div className="copy-right flex justify-around mt-10 flex-col-reverse text-center md:flex-row ">
            <div className=" copy">
                <p className=" opacity-80">© 2026 SunCart. All rights reserved.</p>
            </div>
            <div className="opacity-80 flex gap-5 justify-center  mb-5 md:mb-0">
                <p className="">Privacy Policy</p>
                <p className="">Cookies</p>
                <p className="">Terms of Service</p>
            </div>
          </div>
        </div>
    );
};

export default Footer;