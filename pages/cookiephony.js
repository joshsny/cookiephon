import React, { useState } from "react";
import CookiePhon from ".";

const Product = () => {
  const [red, setRed] = useState(false);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 13 pro
                </h2>
                <p className="mt-1">3 małe słodycze</p>
                <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                  Zamów
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/421x261"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 12 pro
                </h2>
                <p className="mt-1">3 małe słodycze</p>
                <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                  Zamów
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/422x262"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 11 pro
                </h2>
                <p className="mt-1">2 małe słodycze</p>
                <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                  Zamów
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/423x263"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 11t pro
                </h2>
                <p className="mt-1">3 małe słodycze</p>
                <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                  Zamów
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/424x264"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon Note 20 Pro{" "}
                </h2>
                <p className="mt-1">4 małe słodycze</p>
                <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                  Zamów
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/425x265"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon S21 Ultra
                </h2>
                <p className="mt-1">4 małe słodycze</p>
                <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                  Zamów
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/427x267"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon A32 5G
                </h2>
                <p className="mt-1">5 małych słodyczy</p>
                <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                  Zamów
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/428x268"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 4G
                </h2>
                <p className="mt-1">3 małe słodycze</p>
                <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                  Zamów
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
