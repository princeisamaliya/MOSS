import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { Tab, Disclosure } from "@headlessui/react";
import { isMobile } from "mobile-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";

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

export default function Home() {
  console.log(isMobile, "isMobile");
  const size = useWindowSize();
  function getMainBg() {
    if (size.width <= 480) {
      return { backgroundImage: `url(/images/main-bg-mobile.png)` };
    } else if (size.width <= 768) {
      return { backgroundImage: `url(/images/hero-v3.png)` };
    } else {
      return { backgroundImage: `url(/images/hero-v3.png)` };
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
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <Head>
        <title>moss | co-working + wellness</title>
      </Head>
      <div className="antialiased bg-black">
        <div className="mx-auto text-white bg-[#dbd4c2] text-opacity-90 max-w-[1427px]">
          <div className="bg-no-repeat bg-cover lg:bg-top " style={getMainBg()}>
            <div className="relative px-4 py-10 pt-24 text-center sm:py-32 md:py-48">
              <div className="relative z-[1]">
                <h1 className=" tracking-widest text-8xl md:text-9xl lg:text-[15.313rem] lg:tracking-[0.2em] leading-1">
                  moss
                </h1>
                <h2 className="text-[20px] font-light md:text-[2rem] mt-6">
                  <br />
                  <span className="text-[2rem]">venice, california</span>{" "}
                  <br />
                  co-working by day | event space by night
                </h2>
                <p className="max-w-6xl mx-[25px] text-[20px] mt-14 md:text-[25px] md:mx-auto">
                  conscious co-working in west la{" "}
                  <br className="hidden md:visible" />
                  <br />
                  <br />
                  wellness offerings by day, a lush jungle ambiance, and
                  interactive event space by night. <br />
                </p>
                <a
                  href="#founding-membership-header"
                  className="inline-block px-8 py-5 tracking-tight text-white bg-beige-500 hover:bg-beige-700 mt-14 rounded-2xl"
                >
                  <p className="text-[18px] md:text-2xl drop-shadow-title">
                    become a founding member
                  </p>
                </a>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-72 bg-gradient-to-t from-[#B3AE96] to-transparent" />
            </div>
          </div>

          <div className="bg-[#B3AE96] py-16 text-[#393939] text-center xl:px-32 lg:px-16 px-4 tracking-wider">
            <h3 className="text-[2rem] md:text-4xl lg:text-[42px] mb-10 sm:mb-14 inline-block md:border-b-0 border-b border-[#393939] ">
              our space
            </h3>
            <div className="grid gap-10 mb-24 sm:grid-cols-3 md:gap-24">
              <div>
                <p className="text-[25px] lg:text-[2rem]">bio-architecture</p>
                <p className="text-[20px] lg:text-[1.375rem] font-light tracking-wider">
                  live + work in communion with nature
                </p>
              </div>
              <div>
                <p className="text-[25px] lg:text-[2rem]">wabi sabi</p>
                <p className="text-[20px] lg:text-[1.375rem] font-light tracking-wider">
                  find beauty in the perfectly imperfect
                </p>
              </div>
              <div>
                <p className="text-[25px] lg:text-[2rem]">minimalism</p>
                <p className="text-[20px] lg:text-[1.375rem] font-light tracking-wider">
                  clarity of mind + peace
                </p>
              </div>
            </div>
            <div className="border border-[#393939] grid sm:grid-cols-2 text-left p-8 sm:p-10 xl:p-20">
              <div className="flex items-center">
                <h4 className="md:text-[6rem] text-[3.75rem] md:leading-[8rem] leading-[72px] tracking-[0.5rem]">
                  why <br /> moss
                </h4>
              </div>
              <div>
                <p className="mt-5 text-xl md:text-2xl md:mt-0">
                  the intention behind moss is to connect with yourself and
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
                community values
              </h3>
              <div className="p-6 text-center border border-white sm:p-8 sm:pb-24 ">
                <div className="lg:max-w-[300px] max-w-xs text-[20px] leading-6 sm:text-2xl mx-auto">
                  <div className="mb-1  text-[25px] leading-[30px] md:text-[2rem]">
                    compassion
                  </div>
                  <p>
                    being kind to yourself and allowing it to radiate outward
                  </p>
                </div>
                <div className="my-5 text-center xl:my-8">
                  <img
                    src="/images/triangle.png"
                    className="inline-block w-full xl:max-w-[280px] max-w-[150px] sm:max-w-[250px]"
                    alt=""
                  />
                </div>
                <div className="grid justify-between grid-cols-2 gap-10 lg:flex lg:gap-0 lg:-mt-24">
                  <div className="lg:max-w-[350px] text-[20px] sm:text-2xl  leading-6">
                    <div className="mb-1 text-[25px] leading-[30px] md:text-[2rem]">
                      creativity
                    </div>
                    <p>
                      connecting with something greater than yourself through
                      creation
                    </p>
                  </div>
                  <div className="lg:max-w-[350px] text-[20px] sm:text-2xl leading-6  ">
                    <div className="mb-1 text-[25px] leading-[30px] md:text-[2rem]">
                      curiosity
                    </div>
                    <p>exploring new depths of yourself with others + play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/*<Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={4}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              breakpoints={{
                100: {
                  slidesPerView: 2.1,
                },
                568: {
                  slidesPerView: 2.2,
                },
                768: {
                  slidesPerView: 2.5,
                },
                1024: {
                  slidesPerView: 3.4,
                },
              }}
            >
              <SwiperSlide>
                <div className="relative group">
                  <img src="/images/image-50.jpg" className="w-full" alt="" />
                  <div className="absolute top-0 left-0 flex items-center w-full h-full p-5 transition-all opacity-0 bg-black/20 group-hover:opacity-100">
                    <p className="text-lg text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative group">
                  <img src="/images/image-51.jpg" alt="" className="w-full" />
                  <div className="absolute top-0 left-0 flex items-center w-full h-full p-5 transition-all opacity-0 bg-black/20 group-hover:opacity-100">
                    <p className="text-lg text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative group">
                  <img src="/images/image-51.jpg" alt="" className="w-full" />
                  <div className="absolute top-0 left-0 flex items-center w-full h-full p-5 transition-all opacity-0 bg-black/20 group-hover:opacity-100">
                    <p className="text-lg text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="relative group">
                  <img src="/images/image-52.jpg" alt="" className="w-full" />
                  <div className="absolute top-0 left-0 flex items-center w-full h-full p-5 transition-all opacity-0 bg-black/20 group-hover:opacity-100">
                    <p className="text-lg text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="relative group">
                  <img src="/images/image-51.jpg" alt="" className="w-full" />
                  <div className="absolute top-0 left-0 flex items-center w-full h-full p-5 transition-all opacity-0 bg-black/20 group-hover:opacity-100">
                    <p className="text-lg text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>*/}
            {/*          <div
              ref={navigationPrevRef}
              className="absolute transform -translate-y-1/2 top-1/2 left-3 z-[1] cursor-pointer"
            >
              <img src="/images/arrorw.png" alt="" className="w-8 md:w-auto" />
            </div>
            <div
              ref={navigationNextRef}
              className="transform rotate-180 absolute   -translate-y-1/2 top-1/2 right-3 z-[1] cursor-pointer"
            >
              <img src="/images/arrorw.png" alt="" className="w-8 md:w-auto" />
            </div>*/}
          </div>

          <div
            className="relative flex flex-wrap text-white bg-center bg-cover lg:bg-center bg-tan font-size-0"
            style={{
              backgroundImage: "url(/images/member_background.jpg)",
            }}
          >
            <div className="w-full px-4 py-16 lg:px-20">
              <h1 className="text-[2rem] md:text-4xl  sm:text-left text-center  lg:text-[42px]">
                moss + member led events
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
                        grow
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
                        embody
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          `category-button ${selected ? "active" : ""}`
                        }
                      >
                        connect
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels className="mt-6 text-[1.375rem] text-white md:text-2xl category-content ">
                    <Tab.Panel>
                      <ul className="pl-0 space-y-2 list-none list-inside category-list grow active">
                        <li>art classes</li>
                        <li>comedy + improv</li>
                        <li>skill-share seminars</li>
                        <li>women's / men's circles</li>
                      </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="pl-0 space-y-2 list-none list-inside category-list learn">
                        <li>creator circle </li>
                        <li>group focus co-work</li>
                        <li>bookclubs + discussion</li>
                        <li>speaker series + workshops</li>
                      </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="pl-0 space-y-2 list-none list-inside category-list embody">
                        <li>meditation</li>
                        <li>breathwork</li>
                        <li>wellness seminars</li>
                        <li>body work + reiki</li>
                      </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="pl-0 space-y-2 list-none list-inside category-list connect">
                        <li>live music jams</li>
                        <li>thinker dinners</li>
                        <li>art shows + gallery</li>
                        <li>late night tea + conversation</li>
                      </ul>
                    </Tab.Panel>
                  </Tab.Panels>
                </>
              </Tab.Group>
              <div className="grid gap-10 sm:grid-cols-2 md:gap-20 xl:gap-32 mt-14">
                <div className="bg-[#66544A] bg-opacity-60 p-10 mix-blend-luminosity">
                  <h3 className="text-[2rem] md:text-5xl lg:text-[42px]  mb-5">
                    wellness options
                  </h3>
                  <ul className="grid pl-0 text-[1.375rem] list-none sm:grid-cols-2 gap-x-10 embody">
                    <li>nap pod room</li>
                    <li>no-tech tea time</li>
                    <li>red light therapy</li>
                    <li>meditation studio</li>
                    <li>sauna + cold plunge</li>
                  </ul>
                </div>
                <div className="bg-[#66544A] bg-opacity-60 p-10 mix-blend-luminosity">
                  <h3 className="text-[2rem] md:text-5xl lg:text-[42px] mb-5">
                    amenities
                  </h3>
                  <ul className="grid pl-0 text-[1.375rem] list-none sm:grid-cols-2 gap-x-10 embody">
                    <li>cozy lofts</li>
                    <li>outdoor patio</li>
                    <li>recording studio</li>
                    <li>bicycle storage</li>
                    <li>tea + coffee bar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="px-4 py-10 lg:py-24 lg:px-20 bg-cover"
            style={{
              backgroundImage: `url(/images/welness-bg.jpg)`,
            }}
          >
            <div className="bg-[#66544A] text-white gap-3 bg-opacity-60 lg:px-16 md:px-10 px-5 lg:py-20 py-10 mix-blend-luminosity grid lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 class="text-[3rem] md:text-5xl lg:text-[6rem] mb-12 md:mb-8 text-left leading-none tracking-[0.2em] lg:leading-tight">
                  wellness at moss
                </h1>
                <p className="md:text-2xl text-[20px]">
                  moss is a space that aims to provide productivity and
                  relaxation in the same sphere. our nature room, meditation
                  studio and wellness center will be available for founding
                  members during the daytime and night hours. you do not have to
                  tap out of your flow or leave the workspace to tap into your
                  inner peace.
                  <br />
                  <br />a custom sauna, built in ice bath, and red light therapy
                  will be available on a free sign up basis with membership. our
                  meditation studio will be available for free use, and custom
                  events during the evenings. as a special feature our nature
                  room, is designed to fully immerse you in a new environment,
                  with colors and sounds and natural scents you can acclimate to
                  your desired mood.
                </p>
              </div>
              <div className="flex flex-col-reverse items-center lg:col-span-5 lg:pl-20 lg:block">
                <img src="/images/wellness-timeline.svg" alt="" />
                <h6 className="text-[2rem] mt-16 lg:text-[2rem] sm:text-left text-center lg:mb-0 leading-none mb-10">
                  a day in the life at moss
                </h6>
              </div>
            </div>
          </div>
          <div
            className="relative text-white sm:bg-[#393939] md:bg-center bg-cover bg-top"
            style={getFaqbg()}
          >
            <div className="inset-0 bg-center bg-cover ">
              <div className="w-full px-4 pt-20 md:pt-28 lg:px-20">
                <h1
                  id="founding-membership-header"
                  className="text-[2rem] md:text-5xl lg:text-[42px] mb-5 sm:text-left text-center"
                >
                  founding memberships
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
                      href="https://buy.stripe.com/bIY7vS2hw6cR8ggaEE"
                      // href="https://buy.stripe.com/5kA03qf4i8kZbsseUV"
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
                      we are inviting you to root the culture at moss. it is a
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
                      judgement for{" "}
                      <a className="underline" href="https://form.typeform.com/to/HkzCVbfl">
                        referrals
                      </a>
                      . <br />
                      <br />
                      stay tuned for our launch party coming august 2023 🚀
                      <br />
                      <br /> xx
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-grow w-full pb-24 mt-10 sm:mt-16 lg:mt-44 md:pt-5">
                <div className="lg:container px-4 mx-auto  grid sm:grid-cols-3 text-lg xl:px-20 lg:px-14 sm:pb-24 pb-[25%]">
                  <div className="flex items-end col-span-1">
                    <h6 className="   font-normal md:text-[8rem] text-[7rem] tracking-[0.2em] leading-none mb-20 md:mb-0">
                      faq
                    </h6>
                  </div>
                  <div className="sm:col-span-2 accordion">
                    <div className="justify-between text-[2rem] md:text-[2rem] inline-block border-b-2 border-[#393939] mb-2 leading-tight">
                      <h3>can I host an event at moss?</h3>
                    </div>

                    <p className="text-[1.375rem] lg:text-[1.375rem]">
                      yes. moss is a place where members are allowed to host
                      events for free as an offering to the community. for
                      private events, please contact us separately about space
                      rentals.
                    </p>

                    <div className="justify-between text-[2rem] md:text-[2rem] inline-block border-b-2 border-[#393939] mt-10 mb-2 leading-tight">
                      <h3>what are your hours of operation?</h3>
                    </div>
                    <div className="text-[1.375rem] lg:text-[1.375rem]">
                      <h4>co-working</h4>
                      <p>8am - 7pm monday to friday</p>
                      <p>10am - 3pm saturday to sunday</p>
                      <h4 className="mt-4">events</h4>
                      <p>7pm - 11pm monday to sunday</p>
                    </div>

                    <div className="justify-between text-[2rem] md:text-[2rem] inline-block border-b-2 border-[#393939] mt-10 mb-2 leading-tight">
                      <h3>can anyone join moss?</h3>
                    </div>

                    <div className="text-[1.375rem] lg:text-[1.375rem]">
                      <p>
                        while moss will have experiences open to the public,
                        memberships are granted by referral and application
                        only. our intention is to cultivate a diverse community
                        that is compassionate, curious, and creative.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 text-center">
                  <h5 className="text-[2rem] lg:text-5xl">
                    {" "}
                    thank you and we hope to see you soon at moss!
                  </h5>
                  <p className="mt-5 mb-8 text-xl md:text-2xl">
                    {" "}
                    (240) 383 7928 | team@mosscollective.co
                  </p>
                  <a
                    href="https://form.typeform.com/to/wZNSy6Fu"
                    className="inline-block px-16 py-5 tracking-tight text-white bg-beige-500 hover:bg-beige-700 rounded-2xl"
                  >
                    <p className="text-2xl drop-shadow-title">
                      ask us a question
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
