import Link from "next/link";
import React, { useState } from "react";
import CookiePhonHeader from "../components/CookiePhonHeader";
import { TbChristmasTree } from "react-icons/tb";
import { GiEasterEgg } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import { FaCookieBite } from "react-icons/fa";

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
      <section class="text-gray-600 bg-gradient-to-t from-red-700 to-white body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <TbChristmasTree className="text-lime-600 w-56 h-56"></TbChristmasTree>
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Czy to już wyczekiwane święta?
            </h1>
            <p class="mb-8 leading-relaxed text-indigo-50">
              Zastanawiasz się co podarować na święta siostrze, bratu lub
              chociaż by kumplowi? Święta coraz bliżej, a Ty nadal nie masz
              prezentu? Tak się składa, że idealnie trafiłeś. Cookiephon M23 z
              świąteczną okładką to idealny prezent dla każdego. Słynny M23 to
              jeden z giga limitowanych edycji. Pzez to, iż jest ten magiczny
              czas cudownym trafem cena tego telefonu spadła o 25%.
            </p>
            <div class="flex justify-center">
              <button class="ml-4 inline-flex text-gray-700 bg-lime-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">
                Dowiedz się więcej
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;
