import Link from "next/link";
import CookiePhonHeader from "../components/CookiePhonHeader";

export default function CookiePhon() {
  return (
    <>
      <CookiePhonHeader />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900"></h1>
            <p class="leading-relaxed mt-4">
              Wposz swoje imię i nazwisko hjsadfshfib
              uyabvabhfi`sglbgfl``ilufbi;fzod`
            </p>
          </div>
          <div className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
            <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">
              Dokonaj zakupu
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="text-sm leading-7 text-gray-600"
              >
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <button className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              Dokończ tranzakcje
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Literally you probably &apos; heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
