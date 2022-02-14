import Link from "next/link";
import React, { useState } from "react";
import CookiePhonHeader from "../components/CookiePhonHeader";
import Product from "./product";

const Product11tPro = () => {
  const [red, setRed] = useState(false);
  const [phoneColor, setPhoneColor] = useState("violet");
  console.log("phonecolor: ", phoneColor);
  return (
    <>
      <CookiePhonHeader />
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <div
              class={`mockup-phone ${
                phoneColor === "green"
                  ? "bg-green-200"
                  : phoneColor === "violet"
                  ? "bg-violet-400 "
                  : "bg-blue-400"
              } ${
                phoneColor === "green"
                  ? "border-green-200"
                  : phoneColor === "violet"
                  ? "border-violet-400"
                  : "border-blue-400"
              }`}
            >
              <div class="camera"></div>
              <div class="display">
                <div class="artboard phone-1 artboard-demo">
                  <img
                    className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
                    alt="hero"
                    src="https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                Cookiephon 12 Pro
              </h1>
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
                Lubisz duzy ekran i dobry aparat? Jeśli tak to Cookiephon Note
                20 Pro jest dla ciebie. Wspaniały i okazały, przejrzysty i
                ślniący do zdjęć wręcz idealny. A do wyboru do koloru cała
                tęcza. Zapraszamy do kupna!{" "}
              </p>
              <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
                <div className="flex">
                  <span className="mr-3">Kolor</span>
                  <button
                    className={`w-6 h-6 ml-1 bg-green-400 border-2 ${
                      phoneColor === "green"
                        ? "border-green-600"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPhoneColor("green")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-blue-400 border-2 ${
                      phoneColor === "darkblue"
                        ? "border-blue-600"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPhoneColor("darkblue")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-violet-400 border-2 ${
                      phoneColor === "violet"
                        ? "border-violet-600"
                        : "border-gray-300"
                    }  rounded-full focus:outline-none`}
                    onClick={() => setPhoneColor("violet")}
                  ></button>
                </div>
                <div className="flex items-center ml-6">
                  <div className="relative"></div>
                </div>
              </div>
              <div className="flex">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  4 słodycze
                </span>
                <Link
                  href={`/cookiephonkoszyk?model=product12pro&color=${phoneColor}`}
                >
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
    </>
  );
};

export default Product11tPro;
