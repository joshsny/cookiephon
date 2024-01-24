import Link from "next/link";
import React, { useState } from "react";
import CookiePhonHeader from "../components/CookiePhonHeader";
import { TbChristmasTree } from "react-icons/tb";
import { GiEasterEgg } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import { FaCookieBite } from "react-icons/fa";
import { GiBanknote } from "react-icons/gi";
import { FaMoneyBillAlt } from "react-icons/fa";

const Product = () => {
  const [red, setRed] = useState(false);
  const [image, setImage] = useState();
  const [phoneColor, setPhoneColor] = useState("white");
  console.log("phonecolor: ", phoneColor);
  const onImageChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };
  return (
    <>
      <CookiePhonHeader />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Link href="/cookiephonyproduct">
                  <img
                    alt="ecommerce"
                    className="block object-cover object-center w-full h-full border-yellow-300 border-[6px] hover:border-yellow-400"
                    src="/iphone13pro3.png"
                  />
                </Link>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  iPhone 13 pro
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 13 pro
                </h2>
                <p className="mt-1">7 słodyczy</p>
                <Link href="/cookiephonyproduct">
                  <a className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </a>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Link href="/product12pro">
                  <img
                    alt="ecommerce"
                    className="block object-cover object-center w-full h-full border-yellow-300 border-[6px] hover:border-yellow-400"
                    src="/iphone12cookie3.png"
                  />
                </Link>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  iPhone 12 pro
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 12 pro
                </h2>
                <p className="mt-1">7 słodyczy</p>
                <Link href="/product12pro">
                  <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Link href="/product11pro">
                  <img
                    alt="ecommerce"
                    className="block object-cover object-center w-full h-full border-yellow-300 border-[6px] hover:border-yellow-400"
                    src="/iphone11cookie4.png"
                  />
                </Link>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  iPhone 11 Pro
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 11 Pro
                </h2>
                <p className="mt-1">6 słodyczy</p>
                <Link href="/product11pro">
                  <button className="btn btn-outline btn-xs mt-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500">
                    Zamów
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Link href="/product11tpro">
                  <img
                    alt="ecommerce"
                    className="block object-cover object-center w-full h-full border-yellow-300 border-[6px] hover:border-yellow-400"
                    src="/xiaomi11tcookie.png"
                  />
                </Link>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Xiaomi 11t
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  CookiePhon 11t pro
                </h2>
                <p className="mt-1">7 słodyczy</p>
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
                  src="https://dummyimage.com/423x263"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Samsung Note 20 Pro
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Cookiephon Note 20 Pro
                </h2>
                <p className="mt-1">8 słodyczy</p>
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
                <p className="mt-1">8 słodyczy</p>
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
                <p className="mt-1">10 słodyczy</p>
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
                <p className="mt-1">6 słodyczy</p>
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
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <div
              className={`mockup-phone ${
                phoneColor === "blue"
                  ? "bg-blue-500"
                  : phoneColor === "yellow"
                  ? "bg-yellow-300"
                  : "bg-black"
              } ${
                phoneColor === "blue"
                  ? "border-blue-500"
                  : phoneColor === "yellow"
                  ? "border-yellow-300"
                  : "border-black"
              }`}
            >
              <div className="camera"></div>
              <div className="display">
                <div className="artboard phone-1 artboard-demo">
                  <img
                    className="object-cover object-center h-full rounded"
                    alt="hero"
                    src={
                      image
                        ? URL.createObjectURL(image)
                        : "https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                Cookiephon POCO
              </h1>
              <h3 className="mb-1 text-xs font-medium text-gray-400 title-font">
                Xiaomi POCO
              </h3>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill={red ? "currentColor" : "none"}
                    stroke="currentColor"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">
                    {red ? 5 : 4} {red ? "Gwiazdek" : "Gwiazdki"}
                  </span>
                </span>
                <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Pod opisem jest umieszczony przycisk WYBIERZ PLIK kliknij w
                niego a ukaże Ci się przeglądarka plików. Tak jak nazwa wskazuje
                wybierz plik czyli zdjęcie z swojej przeglądarki plików a
                zdjęcie pokaże się na okładce telefonu który wyświetla ci się na
                ekranie. POCO M3 przy cenie około 10 słodyczy może pochwalić się
                wyjątkowym aparatem Full HD+, a także błyskawiczną szybkością i
                niezwykłym wykonaniu z najwyższej jakości surowców co zapewnia
                mu odpowiednią wydajność.{" "}
              </p>
              <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
                <div className="flex">
                  <span className="mr-3">Kolor</span>
                  <button
                    className={`w-6 h-6 ml-1 bg-blue-500 border-2 ${
                      phoneColor === "blue"
                        ? "border-blue-800"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPhoneColor("blue")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-black border-2 ${
                      phoneColor === "black"
                        ? "border-gray-400"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPhoneColor("black")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-yellow-300 border-2 ${
                      phoneColor === "yellow"
                        ? "border-yellow-500"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPhoneColor("yellow")}
                  ></button>
                </div>
                <div className="flex items-center ml-6">
                  <div className="relative"></div>
                </div>
                <input type="file" accept="image/*" onChange={onImageChange} />
              </div>
              <div className="flex">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  18 słodyczy
                </span>
                <Link href="/cookiephonkoszyk">
                  <button className="flex px-6 py-2 ml-auto text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600">
                    Kup
                  </button>
                </Link>
                <button
                  onClick={() => setRed(!red)}
                  className={`inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-red-700 bg-gray-200 ${
                    red && "bg-red-500"
                  } border-0 rounded-full`}
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 bg-gradient-to-t from-yellow-400 to-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <FaCookieBite className="text-amber-700 w-56 h-56"></FaCookieBite>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Cookiephony obchodzą 1 urodziny 🥳🎉!
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              Zastanawiasz się co podarować na święta siostrze, bratu lub
              chociaż by kumplowi? Święta co raz bliżej a ty nadal nie masz
              prezentu? Tak się składa, że idealnie trafiłeś. Cookiephon M23 z
              świąteczną okładką to idealny prezent dla każdego.
            </p>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex text-black bg-amber-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">
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
