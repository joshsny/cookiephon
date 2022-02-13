import Link from "next/link";
import React, { useState } from "react";
import CookiePhonHeader from "../components/CookiePhonHeader";

const Product = () => {
  const [red, setRed] = useState(false);
  return (
    <>
      <CookiePhonHeader />
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
                  iPhone 13 pro
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 13 pro
                </h2>
                <p className="mt-1">3 słodycze</p>
                <Link href="/cookiephonyproduct">
                  <a className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </a>
                </Link>
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
                  iPhone 12 pro
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 12 pro
                </h2>
                <p className="mt-1">3 słodycze</p>
                <Link href="/product12pro">
                  <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </button>
                </Link>
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
                  iPhone 11 Pro
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 11 Pro
                </h2>
                <p className="mt-1">2 słodycze</p>
                <Link href="/product11pro">
                  <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </button>
                </Link>
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
                  Xiaomi 11t
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 11t pro
                </h2>
                <p className="mt-1">3 słodycze</p>
                <Link href="/product11tpro">
                  <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </button>
                </Link>
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
                  Samsung Note 20 Pro
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Cookiephon Note 20 Pro
                </h2>
                <p className="mt-1">4 słodycze</p>
                <Link href="/productnote20pro">
                  <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </button>
                </Link>
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
                  Samsung S21 Ultra
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon S21 Ultra
                </h2>
                <p className="mt-1">4 słodycze</p>
                <Link href="/products21ultra">
                  <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </button>
                </Link>
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
                  Samsung A32 5G
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon A32 5G
                </h2>
                <p className="mt-1">5 słodyczy</p>
                <Link href="/producta325g">
                  <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </button>
                </Link>
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
                  Samsung 4G
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 4G
                </h2>
                <p className="mt-1">3 słodycze</p>
                <Link href="/product4g">
                  <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
