import Link from "next/link";
import CookiePhonHeader from "../components/CookiePhonHeader";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function CookiePhon() {
  const { width, height } = useWindowSize();
  let dataDostawy = new Date();
  dataDostawy.setDate(dataDostawy.getDate() + 7);
  return (
    <div className="w-full h-screen">
      <Confetti width={1300} height={800} gravity={0.05} />
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          <img
            className="object-cover object-center w-5/6 mb-2 rounded lg:w-2/6 md:w-3/6"
            alt="hero"
            src="/88.svg"
          />
          <div className="w-full text-center lg:w-2/3">
            <h1 className="mb-6 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Sukces! 🥳📱
            </h1>
            <h1 className="mb-4 text-xl font-medium text-gray-900">
              Twoje zamówienie zostało przyjęte.
              {}
            </h1>
            <h1 className="mb-4 text-xl font-medium text-gray-900">
              Będzie gotowe do odebrania osobiście od dostawcy od{" "}
              {dataDostawy.toLocaleDateString()}.
            </h1>
            <h1 className="mb-4 text-base font-medium text-gray-500">
              Normalnie byśmy odrzucili to zamówienie, ale dla Ciebie zrobimy
              wyjątek, bo jesteś{" "}
              <span className="text-yellow-500">
                <i>SUPER</i>
              </span>{" "}
              🏄‍♂️.
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
