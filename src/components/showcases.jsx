import React, { useEffect } from "react";
import praksis from "../assets/Praksis_logo.png"; // Correct way to import the image
import praksisS from '../assets/praksis_showcase.png';
import infernusS from '../assets/Infernus_showcase.png';
import infernus from '../assets/INFERNUS.png';
import ACT from '../assets/ACT_logo.png';
import ACTs from '../assets/act_showcase.png';
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
    const navigate = useNavigate();
  
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
      });
    }, []);
  
    const handleNavigation = () => {
      navigate('/booking');
  };
  

  return (
    <>
      <h1 className="text-3xl md:text-4xl text-white italic font-montserrat font-black text-center mt-10 mb-10">
        YOU NAME IT, WE CONQUER.
      </h1>
      <div className="flex flex-col gap-5 px-4 md:px-20">
        <div className="custom_card rounded-md w-full flex flex-col md:flex-row gap-5 md:gap-10 p-5 md:p-10">
          <div>
            <div>
              <img src={praksis} className="w-48 md:w-60" alt="Praksis Logo" />
              <h2 className="italic font-black font-montserrat text-xl md:text-3xl grad-headline md:px-5 pt-5">Project: Praksis</h2>
              <p className="text-white font-montserrat font-semibold md:px-5 pb-5">AKA - PROJECT LEAD FLOOD... </p>
            </div>
            <p className="md:px-5 text-white font-montserrat">Generated 100's signups for Praksis (Biggest legal software in the Balkans) with hyper-targeted FB ads which lead to a "dollar-store" price per lead of 0.88 EUR (the average is between 5-7 eur)!</p>
            <button className="bg-yellow border-2 border-yellow px-5 my-5 md:mx-5 h-10 md:h-12 rounded-sm font-black text-lg md:text-xl hover:bg-transparent hover:text-yellow hover:scale-110 duration-200" onClick={handleNavigation}>Start Your SaaS Success</button>
          </div>
          <div>
            <img src={praksisS} alt="Praksis Showcase" className="rounded-md"/>
            <p className="text-end text-white italic font-montserrat text-xs md:text-sm">Powered By Mayhem</p>
          </div>
        </div>
        <div className="custom_card rounded-md w-full flex flex-col-reverse md:flex-row gap-5 md:gap-10 p-5 md:p-10 h-auto">
          <div className="w-full md:w-1/3">
            <img src={infernusS} alt="" className="rounded-md"/>
            <p className="text-start text-white italic font-montserrat text-xs md:text-sm">Powered By Mayhem</p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex flex-col items-start">
              <img src={infernus} alt="infernus logo" className=" w-24 md:w-32"/>
              <h2 className="italic font-black font-montserrat text-xl md:text-3xl grad-headline md:px-5 pt-5 text-start">Project: Infernus</h2>
              <p className="text-white font-montserrat font-semibold md:px-5 pb-5 text-start">AKA - PROJECT ZERO to ONE...</p>
            </div>
            <p className="md:px-5 text-white font-montserrat text-start text-sm md:text-base">By crafting powerful video ads and optimizing Infernus' website we pushed the brand out to hundreds of thousands of consumers going from a 0% website conversion rate, catapulting all the way past average, and to a 13.44% initiate checkout rate.</p>
            <button className="bg-yellow border-2 border-yellow px-5 my-5 md:mx-5 h-10 md:h-12 rounded-sm font-black text-lg md:text-xl hover:bg-transparent hover:text-yellow hover:scale-110 duration-200" onClick={handleNavigation}>Start Your E-Com Success</button>
          </div>
        </div>
        <div className="custom_card rounded-md w-full flex flex-col md:flex-row gap-5 md:gap-10 p-5 md:p-10">
          <div className="w-full md:w-1/2">
            <div>
              <img src={ACT} alt="" className="w-20 md:w-28 md:px-5" />
              <h2 className="italic font-black font-montserrat text-xl md:text-3xl grad-headline pt-5 md:px-5">Project: ACT!</h2>
              <p className="text-white font-montserrat font-semibold pb-5 md:px-5">AKA - PROJECT ZERO to ONE...</p>
            </div>
            <p className="md:px-5 text-white font-montserrat text-sm md:text-base">Act was diverting from their usual online activity and wanted to finally do something different- An in-person event. So, we couldn't say "no". But we only had 3 weeks! Luckily, in just 10 days we started generating tickets priced at 100 EUR each at 5.8X ROAS. Crazy, right?!</p>
            <button className="bg-yellow border-2 border-yellow px-5 my-5 md:mx-5 h-10 md:h-12 rounded-sm font-black text-lg md:text-xl hover:bg-transparent hover:text-yellow hover:scale-110 duration-200" onClick={handleNavigation}>Start Your E-Learning Success</button>
          </div>
          <div className="w-full md:w-1/2">
            <img src={ACTs} alt="act showcase" className="rounded-md" />
            <p className="text-end text-white italic font-montserrat text-xs md:text-sm">Powered By Mayhem</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
