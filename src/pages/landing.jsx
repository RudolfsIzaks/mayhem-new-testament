import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
import logo from "../assets/mayhem_logo.png"; // Correct way to import the image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBolt, faCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import Testimonials from "../components/showcases";

function LandingPage() {
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
      <div className="px-40 w-full">
        <div className="flex justify-between items-center w-full py-5 ">
          <img src={logo} alt="Mayhem Logo" width={75} />
          <button className="bg-yellow border-2 border-yellow px-5 h-12 rounded-sm font-black text-xl hover:bg-transparent hover:text-yellow hover:scale-110 duration-200" onClick={handleNavigation}>
            Book a call
          </button>
        </div>
        <hr className="radial-gradient-hr relative" />
      </div>
      <div
        className="flex flex-col gap-2 justify-center items-center h-screen px-40 hero"
        data-aos="fade-down"
      >
        <div>
          <h3 className="font-montserrat text-2xl mb-10 text-yellow font-bold italic text-center">
            ACCELERATE YOUR SAAS BUSINESS & GET:
          </h3>
          <h1 className="text-5xl font-black italic text-white text-center">
            MORE GROWTH, MORE TURNOVER, MORE CLIENTS, GUARANTEED.
          </h1>
          <p className="font-montserrat text-md mt-10 text-white text-center">
            WITHOUT You Doing Any Of The Work Yourself And On A Pay-On-Results
            Basis...
          </p>
        </div>
        <a href="#video">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-white mt-20 text-3xl hover:animate-pulse hover:cursor-pointer"
            data-aos="fade-down"
          />
        </a>
      </div>
      <div
        id="video"
        className="pt-20 flex w-full px-20 flex-col gap-5 items-center"
      >
        <h1
          className="font-montserrat font-black italic text-accent text-5xl text-center"
          data-aos="fade-left"
        >
          DON'T BELIEVE US JUST YET?
        </h1>
        <h2
          className=" text-white text-2xl font-bold font-montserrat italic "
          data-aos="fade-left"
        >
          NO WORRIES, HERE IS HOW IT WORKS...
        </h2>
        <iframe
          data-aos="fade-right"
          width="840"
          height="473"
          src="https://www.youtube.com/embed/2s8z--h688k?si=WRr8gJXapG1Q_kyj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <button className="bg-yellow border-2 border-yellow px-10 py-3 rounded-sm font-black text-xl mt-5 hover:bg-transparent hover:text-yellow hover:scale-110 duration-200" onClick={handleNavigation}>
          Claim Your Discovery Call
        </button>
        <p className="text-yellow font-montserrat font-semibold">
          (No pressure, just schedule a time you're available)
        </p>
      </div>
      <div className="mt-40">
        <h1 className="font-montserrat font-black italic grad-headline text-5xl text-center">
          OUR NO 'B.S.' APPROACH
        </h1>
      </div>
      <div className="flex gap-5 justify-center items-center mt-20">
        <div className="flex flex-col justify-center items-center gap-3 max-w-96 border px-5 py-10 custom_card rounded-md" data-aos="fade-right">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-white text-5xl bg-blue-500 check_icon w-12 h-12 p-3 mb-5"
            />
            <h2 className="font-montserrat font-black italic text-3xl text-white">
            Guaranteed Results
            </h2>
            <p className="text-white font-montserrat text-center">
            We offer big, bold guarantees. So if you don’t crush your customer and sales goals (highly unlikely), we don’t see a single cent.
            </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 max-w-96 border px-5 py-10 custom_card rounded-md" data-aos="fade-up">
            <FontAwesomeIcon
              icon={faUser}
              className="bg-yellow text-5xl check_icon h-12 w-12 p-4 mb-5"
            />
            <h2 className="font-montserrat font-black italic text-3xl text-white">
                100% Done For You
            </h2>
            <p className="text-white font-montserrat text-center">
            Sit back as we do all the heavy lifting for you! Let's reclaim your time and start focusing on what actually matters- building a groundbreaking business.
            </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 max-w-96 border px-5 py-10 custom_card rounded-md" data-aos="fade-left">
        <FontAwesomeIcon
              icon={faBolt}
              className="text-yellow text-5xl check_icon h-12 w-12 p-4 mb-5"
            />
            <h2 className="font-montserrat font-black italic text-3xl text-white">
                Lightning Fast
            </h2>
            <p className="text-white font-montserrat text-center">
            Who wants to wait years for results, all the while paying a monthly fee? Nobody.That’s why we'll build you a dedicated system that forces you to grow, FAST!
            </p>
        </div>
      </div>
      <div className="mt-40 flex flex-col gap-3 mx-20 relative h-screen" data-aos="fade-up">
        <h2 className="grad-headline font-montserrat font-bold italic text-3xl text-center">The POWER-7 Arsenal</h2>
        <h1 className="font-montserrat font-black text-5xl italic text-center text-white px-20">OUR UNIVERSAL ARSENAL FOR 7-FIGURE SaaS DOMINATION</h1>
        <div className="absolute bg-yellow rounded-lg px-5 py-2 p_1"><p className="font-montserrat font-bold text-lg">Viral Video Ads</p></div>
        <div className="absolute bg-accent text-white rounded-sm px-4 py-3 p_2"><p className="font-montserrat font-bold text-lg">Funnel CRO</p></div>
        <div className="absolute bg-yellow rounded-lg px-5 py-2 p_3"><p className="font-montserrat font-bold text-lg">Superior Websites</p></div>
        <div className="absolute bg-accent text-white px-5 py-2 p_4"><p className="font-montserrat font-bold text-lg">Killer CopyWriting</p></div>
        <div className="absolute bg-yellow rounded-lg px-5 py-2 p_5"><p className="font-montserrat font-bold text-lg">Strategic Marketing</p></div>
        <div className="absolute bg-yellow rounded-md px-5 py-2 p_6"><p className="font-montserrat font-bold text-lg">Automated Sales Systems</p></div>
        <div className="absolute bg-accent text-white rounded-lg px-5 py-2 p_7"><p className="font-montserrat font-bold text-lg">LTV Optimization</p></div>
      </div>
      <Testimonials/>
    </>
  );
}

export default LandingPage;
    