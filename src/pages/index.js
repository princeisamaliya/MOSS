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
      return { backgroundImage: `url(/images/main-bg-mobile.jpg)` };
    } else if (size.width <= 768) {
      return { backgroundImage: `url(/images/main-bg-tablet.jpg)` };
    } else {
      return { backgroundImage: `url(/images/main-top-bg.png)` };
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
      return { backgroundImage: "url(/images/faq-image.jpg)" };
    } else {
      return {
        backgroundImage: "url(/images/new_landing/wall_shadows.webp)",
      };
    }
  }
  return (
    <>
      <div className="antialiased bg-black">
        <div className="mx-auto text-white bg-[#dbd4c2] text-opacity-90 max-w-[1427px]">
          <div
            className="bg-no-repeat bg-cover sm:bg-cover lg:bg-top lg:bg-cover "
            style={getMainBg()}
          >
            <div className="px-4 py-10 text-center sm:py-32 lg:py-10 ">
              <h1 className="mt-32 text-6xl tracking-widest sm:text-7xl sm:mt-24 lg:mt-36 md:mt-16 md:text-9xl leading-1">
                MOSS
              </h1>
              <p className="pb-10 text-xl font-light md:-mt-2">
                co-working + events
              </p>
              <h1 className="mb-40 text-2xl tracking-widest sm:mb-60 lg:mb-64 lg:pb-24 md:text-3xl">
                in the heart of venice
              </h1>

              <div className="grid md:grid-cols-2">
                <div className="hidden max-w-[220px] text-left space-y-10 lg:space-y-24 md:block lg:max-w-none">
                  <div>
                    <h1 className="text-3xl lg:text-4xl ">OUR SPACE</h1>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl">Bio-architecture</p>
                    <p className="text-xl font-light ">
                      live + work in communion with nature
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl">Wabi Sabi</p>
                    <p className="text-xl font-light">
                      find beauty in the perfectly imperfect
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl">Minimalism</p>
                    <p className="text-xl font-light">
                      clarity of mind + peace
                    </p>
                  </div>
                </div>
                <div className="flex lg:justify-end">
                  <div className="max-w-2xl text-left ">
                    <h1 className="text-2xl md:text-4xl">YOU ARE INVITED ⋆</h1>
                    <div>
                      <h1 className="mt-3 text-xl md:text-3xl lg:text-4xl drop-shadow-title">
                        co-working by day | event space by night
                      </h1>
                    </div>
                    <div>
                      <p className="mt-10 text-xl font-light leading-normal md:text-2xl md:mb-24 md:mt-16 lg:text-3xl">
                        MOSS is a place for leaders, technologists, creators,
                        artists, writers, and healers to explore, create, and
                        grow together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-10 md:mt-[-3.6rem]">
                <a
                  href="https://buy.stripe.com/test_7sIeW8g7t6VP17afYY"
                  className="bg-beige-500 hover:bg-beige-700 text-white py-5 px-8 rounded-3.5xl tracking-tight"
                >
                  <p className="text-2xl drop-shadow-title">
                    Become a Founding Member
                  </p>
                </a>
              </div>
            </div>
            <img
              src="/images/section-2.png"
              className="hidden w-full opacity-0 md:block"
            />
            <div className="px-4 py-32 bg-top bg-cover sm:py-16 lg:min-h-min md:py-0 lg:px-0">
              <div className="space-y-8 text-left md:hidden lg:py-0 md:py-[16%] py-[20%]">
                <div>
                  <h1 className="text-3xl font-semibold">OUR SPACE</h1>
                </div>
                <div>
                  <p className="text-2xl">Bio-architecture</p>
                  <p className="text-xl font-light ">
                    live + work in communion with nature
                  </p>
                </div>
                <div>
                  <p className="text-2xl">Wabi Sabi</p>
                  <p className="text-xl font-light">
                    find beauty in the perfectly imperfect
                  </p>
                </div>
                <div>
                  <p className="text-2xl">Minimalism</p>
                  <p className="text-xl font-light">clarity of mind + peace</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-top bg-no-repeat bg-cover "
            style={getsection3bg()}
          >
            <div className="px-4 sm:py-40  py-20 md:py-24  bg-cover lg:py-[6.2rem] bg-top lg:px-0 relative z-[2] shadow-md ">
              <div className="block max-w-5xl mx-auto lg:px-10 lg:py-20 lg:bg-brown lg:bg-opacity-70">
                <div className="grid gap-10 sm:grid-cols-2 md:gap-0">
                  <div className="w-full max-w-md p-8 mx-auto text-center md:text-left md:max-w-none lg:bg-transparent bg-brown bg-opacity-70 lg:bg-opacity-0 lg:p-0">
                    <h2 className="mb-5 text-xl leading-normal md:text-2xl lg:text-4xl drop-shadow-title">
                      MOSS WELLNESS OPTIONS
                    </h2>
                    <ul className="space-y-1 text-xl leading-normal list-none lg:space-y-3 md:text-2xl lg:text-3xl drop-shadow-title">
                      <li>cozy lofts</li>
                      <li>bicycle storage</li>
                      <li>tea + coffee bar</li>
                      <li>recording studio</li>
                      <li>rooftop garden + patio</li>
                    </ul>
                  </div>
                  <div className="w-full max-w-md p-8 mx-auto text-center md:text-left md:max-w-none lg:bg-transparent bg-brown bg-opacity-70 lg:p-0">
                    <h2 className="mb-5 text-xl leading-normal md:text-2xl lg:text-4xl drop-shadow-title">
                      MOSS OFFERINGS
                    </h2>
                    <ul className="space-y-1 text-xl leading-normal list-none lg:space-y-3 md:text-2xl lg:text-3xl drop-shadow-title">
                      <li>nap pod room</li>
                      <li>no-tech tea time</li>
                      <li>red light therapy</li>
                      <li>meditation studio</li>
                      <li>sauna + cold plunge</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-16 text-xl text-center md:p-12 md:text-2xl text-offwhite bg-green ">
            <p>
              Without value-aligned spaces to regularly gather, individuals are
              left to create community by themselves.
            </p>
            <p>
              Moss is Venice’s hub to connect over curated events and
              co-working.
            </p>
          </div>
          <div
            className="relative flex flex-wrap pb-40 text-white bg-bottom md:pb-60 bg-tan font-size-0"
            style={{
              backgroundImage:
                "url(/images/new_landing/member_background.webp)",
            }}
          >
            <div className="w-full px-4 pt-20 md:px-20">
              <h1 className="text-2xl md:text-5xl drop-shadow-title">
                MOSS + MEMBER LED EVENTS
              </h1>

              <Tab.Group>
                <>
                  <div className="flex items-center mb-10 md:mb-0">
                    <Tab.List className="flex items-center justify-between w-full pl-1 mt-5 space-x-0 md:justify-start md:space-x-10 drop-shadow-title">
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
                  <Tab.Panels className="mt-6 text-2xl text-white md:text-3xl category-content ">
                    <Tab.Panel>
                      <ul className="pl-0 space-y-5 list-disc list-inside category-list connect active">
                        <li>live music jams</li>
                        <li>community dinners</li>
                        <li>art shows + gallery</li>
                        <li>late night tea + conversation</li>
                      </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="pl-0 space-y-5 list-disc list-inside category-list learn">
                        <li>creator jams</li>
                        <li>group focus flow</li>
                        <li>bookclubs + discussion</li>
                        <li>speaker series + workshops</li>
                      </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="pl-0 space-y-5 list-disc list-inside category-list grow">
                        <li>art + drawing</li>
                        <li>group journaling</li>
                        <li>creative writing club</li>
                        <li>women's / men's circles</li>
                      </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="pl-0 space-y-5 list-disc list-inside category-list embody">
                        <li>dance classes</li>
                        <li>group hikes + travel</li>
                        <li>sauna + ice bath cycles</li>
                        <li>breath-work + meditation</li>
                      </ul>
                    </Tab.Panel>
                  </Tab.Panels>
                </>
              </Tab.Group>
            </div>
          </div>
          <div
            className="relative text-white bg-center bg-top bg-tan"
            style={getFaqbg()}
          >
            <div className="inset-0 bg-center bg-cover ">
              <div className="w-full">
                <div className="grid px-4 space-y-4 sm:grid-cols-2 lg:px-20 sm:space-y-0 pt-28">
                  <h1 className="text-3xl">FOUNDING MEMBERSHIP</h1>
                  <div className="pt-10 text-xl sm:text-2xl sm:pt-0">
                    <p>We are inviting YOU to root the culture at MOSS.</p>
                    <p className="mt-3">
                      As a founding member, you will receive exclusive benefits
                    </p>
                    <p className="mt-3 text-sm">
                      we kindly ask you do not share this link with others ⋆
                    </p>
                  </div>
                </div>

                <div className="grid px-4 mt-12 sm:grid-cols-2 lg:px-20">
                  <div>
                    <img
                      className="w-full max-w-sm"
                      src="/images/new_landing/map.png"
                    />
                  </div>
                  <div className="flex sm:justify-end">
                    <ul className="pt-2 pl-5 mt-20 space-y-1 text-xl leading-relaxed list-disc md:text-3xl lg:text-4xl sm:mt-0">
                      <li>$3500</li>
                      <li>2 months free</li>
                      <li>private rooms</li>
                      <li>full wellness access</li>
                      <li>1 year of membership</li>
                      <li>MOSS opening launch</li>
                      <li>unlimited event access</li>
                      <li>10 day access per month</li>
                      <li>unlimited +1 guest passes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex-grow w-full mt-10 sm:mt-72 md:pt-5">
                <div className="flex flex-row justify-center w-full">
                  <button className="px-16 py-5 mt-6 text-base text-white bg-brown-500 rounded-3xl drop-shadow-title">
                    <a href="https://buy.stripe.com/test_7sIeW8g7t6VP17afYY">
                      <p className="text-lg tracking-wider">
                        RESERVE YOUR SPOT
                      </p>
                    </a>
                  </button>
                </div>
                <div className="container px-4 mx-auto mt-16 text-lg md:px-20 sm:pb-[38%] pb-[100%]">
                  <h1 className="mb-4 text-4xl font-semibold drop-shadow-title">
                    FAQ
                  </h1>
                  <div className="accordion">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className={"w-full"}>
                            <div className="flex justify-between text-xl md:text-3xl accordion-title">
                              <h3>Can I host an event at MOSS?</h3>
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className={`w-6 h-6 transform transition-all ${
                                    open ? "rotate-180" : ""
                                  }`}
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <p>
                              Yes. MOSS is a place where members are allowed to
                              host events for free as an offering to the
                              community. For private events, please contact us
                              separately about space rentals.
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className={"w-full"}>
                            <div className="flex justify-between text-xl md:text-3xl accordion-title">
                              <h3>What are your hours of operation?</h3>
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className={`w-6 h-6 transform transition-all ${
                                    open ? "rotate-180" : ""
                                  }`}
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <h4>CO-WORKING</h4>
                            <p>8am - 7pm Monday to Friday</p>
                            <p>10am - 3pm Saturday to Sunday</p>
                            <h4 className="mt-4">EVENTS</h4>
                            <p>7pm - 11pm Monday to Sunday</p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className={"w-full"}>
                            <div className="flex justify-between text-xl md:text-3xl accordion-title">
                              <h3>Can anyone join MOSS?</h3>
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className={`w-6 h-6 transform transition-all ${
                                    open ? "rotate-180" : ""
                                  }`}
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <p>
                              While MOSS will have experiences open to the
                              public, memberships are granted by referral and
                              application only. Our intention is to cultivate a
                              diverse community that is compassionate, curious,
                              and creative.
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
