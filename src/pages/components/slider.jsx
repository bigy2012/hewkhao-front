import React, { useState } from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function slider() {
  return (
    <div className="my-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full h-full">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
          className="md:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={1}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6  gap-2 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/1.jpg"
                          width={100}
                          height={100}
                          alt="black chair and white table"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/2.jpg"
                          width={100}
                          height={100}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/3.jpg"
                          width={250}
                          height={250}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/1.jpg"
                          width={250}
                          height={250}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/2.jpg"
                          width={250}
                          height={250}
                          alt="black chair and white table"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/3.jpg"
                          width={250}
                          height={250}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
            </div>
          </CarouselProvider>
          
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
          className="block  md:hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={3}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6  gap-2 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/1.jpg"
                          width={100}
                          height={100}
                          alt="black chair and white table"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/2.jpg"
                          width={100}
                          height={100}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/3.jpg"
                          width={250}
                          height={250}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/1.jpg"
                          width={250}
                          height={250}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/2.jpg"
                          width={250}
                          height={250}
                          alt="black chair and white table"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Image
                          src="/3.jpg"
                          width={250}
                          height={250}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[150px]"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full">
                          <div className="flex h-full items-end ">
                            <h3 className="text-sm font-semibold leading-5 lg:leading-6 bg-gray-50 w-full text-black p-1">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
