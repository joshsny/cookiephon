import Link from "next/link";
import React, { useState } from "react";
import CookiePhonHeader from "../components/CookiePhonHeader";

const fillColors = {
  red: "fill-red-600",
  orange: "fill-orange-500",
  yellow: "fill-yellow-400",
  green: "fill-green-500",
  blue: "fill-blue-500",
  violet: "fill-violet-300",
  black: "fill-black",
  gray: "fill-gray-300",
};

const Product = () => {
  const [red, setRed] = useState(false);
  const [podsColor, setPodsColor] = useState("yellow");
  console.log("podscolor: ", podsColor, fillColors[podsColor]);
  return (
    <>
      <CookiePhonHeader />
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <div className="w-1/2">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enableBackground="new 0 0 1000 1000"
                className={`object-cover ${fillColors[podsColor]} object-center rounded lg:h-auto`}
              >
                <div />
                <div />
                <div />
                <g>
                  <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                    <path d="M3217.9,4977.7c-320.4-69.3-741.3-339.5-1090.4-700.6l-186.5-191.3v-456.7v-456.7l160.2-167.4c330-351.5,1030.6-717.3,1374.9-717.3h66.9V745.4V-796.8h71.7h71.7v-466.3v-466.3h71.7h71.7v-1530.3V-4790h155.4h155.4v1527.9v1530.3l78.9,7.2l76.5,7.2l7.2,461.5l4.8,459.1h71.7h71.7v1812.5v1810.1l83.7,167.4c107.6,217.6,155.4,408.9,155.4,633.7c-2.4,636-418.4,1200.3-997.1,1351C3531.2,5020.8,3414,5020.8,3217.9,4977.7z M2213.7,4100.2c31.1-43,38.3-133.9,38.3-478.2c0-399.3-2.4-428-50.2-475.8c-43-43-55-45.4-100.4-14.4c-50.2,33.5-52.6,52.6-59.8,490.2c-4.8,389.8,0,459.1,33.5,492.6C2125.2,4167.1,2170.6,4162.3,2213.7,4100.2z M4193.5,3815.6c26.3-14.4,62.2-62.2,81.3-105.2c40.6-100.4,16.7-174.6-78.9-251.1c-59.8-47.8-88.5-50.2-298.9-43c-205.6,7.2-236.7,14.3-291.7,64.6c-83.7,78.9-86.1,220-2.4,301.3c52.6,55,74.1,59.8,298.9,59.8C4035.7,3841.9,4164.8,3830,4193.5,3815.6z" />
                    <path d="M6395.7,4980.1c-640.8-148.3-1083.2-698.2-1083.2-1353.4c0-526,330-989.9,839.3-1174l141.1-52.6V802.8V-796.8h71.7h71.7v-466.3v-466.3h83.7h83.7v-1530.3V-4790h143.5h143.5v1530.3v1530.3h83.7h83.7v466.3v466.3h71.7h71.7V812.4v1606.8l184.1,95.6c451.9,231.9,707.8,688.6,669.5,1202.7c-40.7,569.1-406.5,1042.5-944.5,1221.9C6917,5006.4,6589.4,5023.2,6395.7,4980.1z M6797.4,4616.7c21.5-93.2,23.9-284.5,7.2-330c-7.2-21.5-33.5-38.3-57.4-38.3c-23.9,0-50.2,16.7-57.4,38.3c-26.3,69.3-14.3,358.7,14.4,387.4C6747.2,4717.1,6780.7,4695.6,6797.4,4616.7z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                CookiePods
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
                CookiePods to wspaniałe urządzenie dla słuchaczów muzyki i
                audiobooków. Posiadają automatyczną funkcje wykrywania idealnej
                głośności, do tego są w wszystkich kolorach tęczy. Cookiepods są
                małe i przenośne oraz czasami (jak na loterii) zdarza się wygrać
                kupon na estetyczne pudełko. Nasze słuchawki są najbardziej
                ekologiczne i zaawansowane na światowym rynku.
              </p>
              <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
                <div className="flex">
                  <span className="mr-3">Kolor</span>
                  <button
                    className={`w-6 h-6 ml-1 bg-red-600 border-2 ${
                      podsColor === "red" ? "border-red-800" : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPodsColor("red")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-orange-500 border-2 ${
                      podsColor === "orange"
                        ? "border-orange-700"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPodsColor("orange")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-yellow-400 border-2 ${
                      podsColor === "yellow"
                        ? "border-yellow-500"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPodsColor("yellow")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-green-500 border-2 ${
                      podsColor === "green"
                        ? "border-green-700"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPodsColor("green")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-blue-500 border-2 ${
                      podsColor === "blue"
                        ? "border-blue-700"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPodsColor("blue")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-violet-400 border-2 ${
                      podsColor === "violet"
                        ? "border-violet-600"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPodsColor("violet")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-black border-2 ${
                      podsColor === "black"
                        ? "border-gray-500"
                        : "border-gray-300"
                    } border-gray-300 rounded-full focus:outline-none`}
                    onClick={() => setPodsColor("black")}
                  ></button>
                  <button
                    className={`w-6 h-6 ml-1 bg-gray-300 border-2 ${
                      podsColor === "gray" ? "border-black" : "border-gray-300"
                    } border-gray-500 rounded-full focus:outline-none`}
                    onClick={() => setPodsColor("gray")}
                  ></button>
                </div>
              </div>
              <div className="flex">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  2 słodycze
                </span>
                <Link
                  href={`/cookiephonkoszyk?model=cookiepods&color=${podsColor}`}
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
    </>
  );
};

export default Product;
