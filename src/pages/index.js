import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Tab, Disclosure } from "@headlessui/react";
import { isMobile } from "mobile-device-detect";

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

export default function Home() {
  console.log(isMobile, "isMobile");
  const size = useWindowSize();
  function getMainBg() {
    if (size.width <= 480) {
      return { backgroundImage: `url(/images/main-bg-mobile.png)` };
    } else if (size.width <= 768) {
      return { backgroundImage: `url(/images/hero-v2.jpg)` };
    } else {
      return { backgroundImage: `url(/images/hero-v2.jpg)` };
    }
  }
  function getsection3bg() {
    if (size.width <= 480) {
      return { backgroundImage: `url(/images/section-3-mobile.jpg)` };
    } else if (size.width <= 768) {
      return {
        backgroundImage: "url(/images/section-3-tablet.jpg)",
      };
    } else {
      return {
        backgroundImage: "url(/images/section-3.jpg)",
      };
    }
  }
  function getFaqbg() {
    if (size.width <= 480) {
      return { backgroundImage: "url(/images/faq-image.png)" };
    } else {
      return {
        backgroundImage: "url(/images/wall_shadows.png)",
      };
    }
  }
  return (
    <>
      <Head>
        <title>MOOS | in the heart of venice</title>
      </Head>
      <div className="antialiased bg-black">
        <div className="mx-auto text-white bg-[#dbd4c2] text-opacity-90 max-w-[1427px]">
          <div className="bg-no-repeat bg-cover lg:bg-top " style={getMainBg()}>
            <div className="relative px-4 py-10 pt-24 text-center sm:py-32 md:py-48">
              <div className="relative z-[1]">
                <h1 className=" tracking-widest  text-8xl md:text-9xl lg:text-[15.313rem] lg:tracking-[0.2em] leading-1">
                  MOSS
                </h1>
                <h2 className="text-2xl font-light md:text-[2rem] ">
                  <span className="text-[2rem]"> in the heart of venice</span>{" "}
                  <br />
                  co-working by day | event space by night
                </h2>
                <p className="max-w-6xl mx-auto text-2xl mt-14 md:text-2xl ">
                  meet the first conscious co-working space in west la <br />
                  wellness offerings by day, a lush jungle ambiance, and
                  interactive event space by night. MOSS is venice's hub for
                  creators, builders and entrepreneurs to explore, create and
                  grow together.
                </p>
                <a
                  href="https://buy.stripe.com/test_7sIeW8g7t6VP17afYY"
                  className="inline-block px-8 py-5 tracking-tight text-white bg-beige-500 hover:bg-beige-700 mt-14 rounded-2xl"
                >
                  <p className="text-2xl drop-shadow-title">
                    become a founding member
                  </p>
                </a>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-72 bg-gradient-to-t from-[#B3AE96] to-transparent" />
            </div>
          </div>

          <div className="bg-[#B3AE96] py-16 text-[#393939] text-center xl:px-32 lg:px-16 px-4 tracking-wider">
            <h3 className="text-[2rem] md:text-4xl lg:text-[42px] mb-10 sm:mb-14 border-b-2 inline-block border-[#393939] ">
              OUR SPACE
            </h3>
            <div className="grid gap-10 mb-24 sm:grid-cols-3 md:gap-24">
              <div>
                <p className="text-[2rem] lg:text-[2rem]">Bio-architecture</p>
                <p className="text-[1.375rem] font-light tracking-wider">
                  live + work in communion with nature
                </p>
              </div>
              <div>
                <p className="text-[2rem] lg:text-[2rem]">Wabi Sabi</p>
                <p className="text-[1.375rem] font-light tracking-wider">
                  find beauty in the perfectly imperfect
                </p>
              </div>
              <div>
                <p className="text-[2rem] lg:text-[2rem]">Minimalism</p>
                <p className="text-[1.375rem] font-light tracking-wider">
                  clarity of mind + peace
                </p>
              </div>
            </div>
            <div className="border border-[#393939] grid sm:grid-cols-2 text-left p-8 sm:p-10 xl:p-20">
              <div>
                <h4 className="md:text-[8rem] text-[6rem] md:leading-[9.6rem] leading-[6rem] uppercase tracking-[0.5rem]">
                  WHY MOSS
                </h4>
              </div>
              <div>
                <p className="text-[1.375rem] md:text-2xl">
                  the intention behind MOSS is to connect with yourself and
                  others in an intimate setting through co-working + events.{" "}
                  <br />
                  <br />
                  we co-host events with our community to create unique
                  experiences that cultivate creativity, curiosity, and
                  compassion. <br />
                  <br />
                  founding members will have access to wellness offerings and
                  the ability to host events.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative px-4 py-16 text-center bg-white bg-cover xl:px-32 lg:px-16"
            style={{
              backgroundImage: `url(/images/dandelion-v2.png)`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#7D7A6A] bg-opacity-80"></div>
            <div className="relative z-[1]">
              <h3 className="text-[2rem] md:text-4xl lg:text-[42px] mb-6 sm:mb-14 ">
                COMMUNITY VALUES
              </h3>
              <div className="p-6 text-center border border-white sm:p-8 sm:pb-24 ">
                <div className="lg:max-w-[300px] max-w-xs text-[1.375rem] sm:text-2xl mx-auto">
                  <div className="mb-1 text-[2rem]">curiosity</div>
                  <p>exploring new depths of yourself with others + play</p>
                </div>
                <div className="my-5 text-center xl:my-8">
                  <img
                    src="/images/polygon.png"
                    className="inline-block w-full xl:max-w-xs max-w-[150px] sm:max-w-[250px]"
                    alt=""
                  />
                </div>
                <div className="grid justify-between grid-cols-2 gap-10 lg:flex lg:gap-0 lg:-mt-24">
                  <div className="lg:max-w-[350px] text-[1.375rem] sm:text-2xl  ">
                    <div className="mb-1 text-[2rem]">creativity</div>
                    <p>
                      connecting with something greater than yourself through
                      creation
                    </p>
                  </div>
                  <div className="lg:max-w-[350px] text-[1.375rem] sm:text-2xl  ">
                    <div className="mb-1 text-[2rem]">compassion</div>
                    <p>
                      being kind to yourself and allowing it to radiate outward
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-wrap text-white bg-center bg-cover lg:bg-center bg-tan font-size-0"
            style={{
              backgroundImage: "url(/images/member_background.jpg)",
            }}
          >
            <div className="w-full px-4 py-16 lg:px-20">
              <h1 className="text-[2rem] md:text-4xl  sm:text-left text-center  lg:text-[42px]">
                MOSS + MEMBER LED EVENTS
              </h1>

              <Tab.Group>
                <>
                  <div className="flex items-center mb-10 md:mb-0">
                    <Tab.List className="flex flex-col items-start justify-between w-full pl-1 mt-5 space-x-0 space-y-3 sm:space-y-0 sm:items-center sm:flex-row sm:justify-start sm:space-x-10 lg:space-x-20 ">
                      <Tab
                        className={({ selected }) =>
                          `category-button ${selected ? "active" : ""}`
                        }
                      >
                        connect
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          `category-button ${selected ? "active" : ""}`
                        }
                      >
                        learn
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          `category-button ${selected ? "active" : ""}`
                        }
                      >
                        grow
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          `category-button ${selected ? "active" : ""}`
                        }
                      >
                        embody
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels className="mt-6 text-[1.375rem] text-white md:text-2xl category-content ">
                    <Tab.Panel>
                      <ul className="pl-0 space-y-2 list-disc list-inside category-list connect active">
                        <li>live music jams</li>
                        <li>community dinners</li>
                        <li>art shows + gallery</li>
                        <li>late night tea + conversation</li>
                      </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="pl-0 space-y-2 list-disc list-inside category-list learn">
                        <li>creator jams</li>
                        <li>group focus flow</li>
                        <li>bookclubs + discussion</li>
                        <li>speaker series + workshops</li>
                      </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="pl-0 space-y-2 list-disc list-inside category-list grow">
                        <li>art + drawing</li>
                        <li>group journaling</li>
                        <li>creative writing club</li>
                        <li>women's / men's circles</li>
                      </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="pl-0 space-y-2 list-disc list-inside category-list embody">
                        <li>nap pod room</li>
                        <li>no-tech tea time</li>
                        <li>red light therapy</li>
                      </ul>
                    </Tab.Panel>
                  </Tab.Panels>
                </>
              </Tab.Group>
              <div className="grid gap-10 sm:grid-cols-2 md:gap-20 xl:gap-32 mt-14">
                <div className="bg-[#66544A] bg-opacity-60 p-10 mix-blend-luminosity">
                  <h3 className="text-[2rem] md:text-5xl lg:text-[42px]  mb-5">
                    WELLNESS OPTIONS
                  </h3>
                  <ul className="grid pl-0 text-[1.375rem] list-none sm:grid-cols-2 gap-x-10 embody">
                    <li>dance classes</li>
                    <li>meditation studio</li>
                    <li>group hikes + travel</li>
                    <li>sauna + cold plunge</li>
                    <li>sauna + ice bath cycles</li>
                    <li>breath-work + meditation</li>
                  </ul>
                </div>
                <div className="bg-[#66544A] bg-opacity-60 p-10 mix-blend-luminosity">
                  <h3 className="text-[2rem] md:text-5xl lg:text-[42px] mb-5">
                    AMENITIES
                  </h3>
                  <ul className="grid pl-0 text-[1.375rem] list-none sm:grid-cols-2 gap-x-10 embody">
                    <li>cozy lofts</li>
                    <li>recording studio</li>
                    <li>bicycle storage</li>
                    <li>rooftop garden + patio</li>
                    <li>tea + coffee bar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative text-white sm:bg-[#393939] md:bg-center bg-cover bg-top"
            style={getFaqbg()}
          >
            <div className="inset-0 bg-center bg-cover ">
              <div className="w-full px-4 pt-20 md:pt-28 lg:px-20">
                <h1 className="text-[2rem] md:text-5xl lg:text-[42px] mb-5 sm:text-left text-center">
                  FOUNDING MEMBERSHIP
                </h1>

                <div className="grid gap-10 mt-12 sm:grid-cols-2 ">
                  <div className="text-center sm:text-left">
                    <img
                      className="w-full max-w-xl"
                      src="/images/new_landing/map.png"
                    />
                    <h5 className="my-6 text-[2rem] sm:my-10">
                      63/65 spots left
                    </h5>
                    <a
                      href="https://buy.stripe.com/test_7sIeW8g7t6VP17afYY"
                      className="inline-block px-8 py-5 tracking-tight text-white bg-beige-500 hover:bg-beige-700 rounded-2xl"
                    >
                      <p className="text-2xl drop-shadow-title">
                        become a founding member
                      </p>
                    </a>
                  </div>
                  <div className="flex sm:justify-end">
                    <p className="text-2xl">
                      dear friends, <br />
                      <br />
                      we are inviting you to root the culture at MOSS. it is a
                      place where you are safe to work, play and be. here, you
                      are encouraged to start new conversations and plant new
                      seeds. <br />
                      <br />
                      founding memberships grant you annual access with two
                      months free, all-day private co-working rooms, and
                      wellness offerings (an amenity we are excited to offer, so
                      you do not have to leave your workspace to decompress in
                      another). <br />
                      <br />
                      you will be able to attend events, and also host. within
                      your 10 day/ month pass, you have unlimited guest passes.
                      $3,500 value. <br />
                      <br />
                      while our founding memberships are limited, we trust your
                      judgement for referrals. <br />
                      <br />
                      stay tuned for our launch party coming june 2023 🚀
                      <br />
                      <br /> xx
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-grow w-full pb-24 mt-10 sm:mt-16 lg:mt-44 md:pt-5">
                <div className="lg:container px-4 mx-auto  grid sm:grid-cols-3 text-lg xl:px-20 lg:px-14 sm:pb-24 pb-[25%]">
                  <div className="flex items-end col-span-1">
                    <h6 className="   font-normal md:text-[8rem] text-[7rem] traking-[0.2em] leading-none">
                      FAQ
                    </h6>
                  </div>
                  <div className="sm:col-span-2 accordion">
                    <div className="justify-between text-[2rem] md:text-[2rem] inline-block border-b-2 border-[#393939] mb-2 leading-tight">
                      <h3>Can I host an event at MOSS?</h3>
                    </div>

                    <p className="text-[1.375rem] lg:text-[1.375rem]">
                      Yes. MOSS is a place where members are allowed to host
                      events for free as an offering to the community. For
                      private events, please contact us separately about space
                      rentals.
                    </p>

                    <div className="justify-between text-[2rem] md:text-[2rem] inline-block border-b-2 border-[#393939] mt-10 mb-2 leading-tight">
                      <h3>What are your hours of operation?</h3>
                    </div>
                    <div className="text-[1.375rem] lg:text-[1.375rem]">
                      <h4>CO-WORKING</h4>
                      <p>8am - 7pm Monday to Friday</p>
                      <p>10am - 3pm Saturday to Sunday</p>
                      <h4 className="mt-4">EVENTS</h4>
                      <p>7pm - 11pm Monday to Sunday</p>
                    </div>

                    <div className="justify-between text-[2rem] md:text-[2rem] inline-block border-b-2 border-[#393939] mt-10 mb-2 leading-tight">
                      <h3>Can anyone join MOSS?</h3>
                    </div>

                    <div className="text-[1.375rem] lg:text-[1.375rem]">
                      <p>
                        While MOSS will have experiences open to the public,
                        memberships are granted by referral and application
                        only. Our intention is to cultivate a diverse community
                        that is compassionate, curious, and creative.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="text-[2rem] lg:text-5xl">
                    {" "}
                    thank you and we hope to see you soon at MOSS!
                  </h5>
                  <p className="mt-5 text-2xl">
                    {" "}
                    (240) 383 7928 | team@mosscollective.co
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
