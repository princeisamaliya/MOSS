import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { Tab, Disclosure } from "@headlessui/react";
import { isMobile } from "mobile-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Link from 'next/link';

// Import Swiper styles
import "swiper/css";

import styles from "@/styles/Home.module.css";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function checkoutPage() {
  console.log(isMobile, "isMobile");
  const size = useWindowSize();
  function getMainBg() {
    if (size.width <= 480) {
      return { backgroundImage: `url(/images/checkout_background.png)` };
    } else if (size.width <= 768) {
      return { backgroundImage: `url(/images/checkout_background.png)` };
    } else {
      return { backgroundImage: `url(/images/checkout_background.png)` };
    }
  }

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <Head>
        <title>moss | co-working + wellness</title>
      </Head>
      <div className="antialiased bg-black">
        <div className="mx-auto text-white bg-[#dbd4c2] text-opacity-90">
          <div className="bg-no-repeat bg-cover lg:bg-top min-h-screen" style={getMainBg()}>
            <div className="relative px-3 sm:px-4 py-16 sm:py-24 text-center">
              <div className="relative z-[1]">
                <h1 className=" tracking-widest lg:tracking-[0.2em] leading-1 text-[2rem] md:text-2xl text-center lg:text-3xl mb-10 sm:mb-20">
                  you are invited to root the culture at moss
                </h1>
                <div className="relative bg-[#66544A] bg-opacity-60 p-10 mix-blend-luminosity mb-16 mx-auto w-11/12 sm:w-7/12">
                  <ul className="grid pl-0 text-[1.375rem] list-none gap-x-10 embody text-left mb-8">
                    <li>guest passes</li>
                    <li>event hosting</li>
                    <li>tea + elixir bar</li>
                    <li>meditation studio</li>
                    <li>sauna + cold plunge</li>
                    <li>unlimited events access</li>
                    <li>launch party in fall 2023</li>
                    <li>10 day passes per month</li>
                    <li>annual access with two months free</li>
                  </ul>
                  <p className="absolute bottom-0 right-0 text-white pr-5 pb-5 text-xl md:text-2xl">$3500 per year</p>
                </div>
                <Link 
                  href="https://na3.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=149b1e18-7bab-4745-afcb-dfb749a24369&env=na3&acct=7fe08daa-b9e2-4ff5-a222-73283cb198dc&v=2" 
                  className="max-w-6xl mx-[25px] text-[20px] mt-14 md:text-[25px] md:mx-auto underline text-white hover:text-[#f5f5f5]">
                  view + sign our membership policy <br/>
                </Link>
                <a
                  href="https://buy.stripe.com/bIY7vS2hw6cR8ggaEE"
                  className="inline-block px-8 py-5 tracking-tight text-white bg-beige-500 hover:bg-beige-700 mt-7 rounded-2xl mb-16"
                >
                  <p className="text-[18px] md:text-2xl drop-shadow-title">
                    proceed to payment portal
                  </p>
                </a>
              </div>
            </div>
            </div> 
        </div>
      </div>
    </>
  );
}
