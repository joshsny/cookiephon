import Link from "next/link";
import CookiePhonHeader from "../components/CookiePhonHeader";

export default function CookiePhon() {
  return (
    <>
      <CookiePhonHeader />
      <section class="text-gray-600 body-font">
        <div class="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          <img
            class="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
            alt="hero"
            src="https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
          />
          <div class="w-full text-center lg:w-2/3">
            <h1 class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Cookiephon
            </h1>
            <h1 class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-2xl">
              Witamy
            </h1>
            <div class="flex justify-center">
              <Link href="#zlozzamowienie">
                <a class="inline-flex px-6 py-2 text-lg text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600">
                  Złóż zamówienie
                </a>
              </Link>
              <Link href="#dowiedzsiewiecej">
                <a class="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
                  Dowiedz się więcej
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font" id="zlozzamowienie">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap justify-center -m-4">
            <div class="w-full p-4 lg:w-1/4 md:w-1/2">
              <a class="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  class="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="flex flex-row items-end">
                <div class="w-1/2 mt-4">
                  <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">
                    🎧
                  </h3>
                  <h2 class="text-lg font-medium text-gray-900 title-font">
                    CookiePods
                  </h2>
                  <p class="mt-1">2 słodycze</p>
                </div>
                <div class="flex justify-center w-1/2 h-16">
                  <Link href="/product">
                    <button class="px-4 py-2 font-semibold text-yellow-700 bg-transparent border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white hover:border-transparent">
                      Zamów
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="w-full p-4 lg:w-1/4 md:w-1/2">
              <a class="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  class="block object-cover object-center w-full h-full"
                  src="/cookiephony2.jpeg"
                />
              </a>
              <div class="flex flex-row items-end">
                <div class="w-1/2 mt-4">
                  <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">
                    📱
                  </h3>
                  <h2 class="text-lg font-medium text-gray-900 title-font">
                    CookiePhon
                  </h2>
                  <p class="mt-1"> 2 słodycze</p>
                </div>
                <div class="flex justify-center w-1/2 h-16">
                  <Link href="/cookiephony">
                    <button class="px-4 py-2 font-semibold text-yellow-700 bg-transparent border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white hover:border-transparent">
                      Zamów
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font" id="dowiedzsiewiecej">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Nasz Zespół
            </h1>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/Hania.jpeg"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Hania Snyder
                  </h2>
                  <p class="text-gray-500">Szef informatyków</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/josh.jpeg"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Josh Snyder
                  </h2>
                  <p class="text-gray-500">Informatyk</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Wkrótce będzie tu nasz pracownik
                  </h2>
                  <p class="text-gray-500"></p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Wkrótce będzie tu nasz pracownik
                  </h2>
                  <p class="text-gray-500"></p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Wkrótce będzie tu nasz pracownik
                  </h2>
                  <p class="text-gray-500"></p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Wkrótce będzie tu nasz pracownik
                  </h2>
                  <p class="text-gray-500"></p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Wkrótce będzie tu nasz pracownik
                  </h2>
                  <p class="text-gray-500"></p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Wkrótce będzie tu nasz pracownik
                  </h2>
                  <p class="text-gray-500"></p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/prezes.jpeg"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Marysia Adamczyk
                  </h2>
                  <p class="text-gray-500">Prezes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="text-gray-600 body-font" id="#recenzje">
          <div class="container px-5 py-24 mx-auto">
            <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              Recenzje
            </h1>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                    Synth chartreuse iPhone lomo cray raw denim brunch everyday
                    carry neutra before they sold out fixie 90's microdosing.
                    Tacos pinterest fanny pack venmo, post-ironic heirloom
                    try-hard pabst authentic iceland.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://dummyimage.com/106x106"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">
                        Maksymilian Olejnik
                      </span>
                      <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                    Synth chartreuse iPhone lomo cray raw denim brunch everyday
                    carry neutra before they sold out fixie 90's microdosing.
                    Tacos pinterest fanny pack venmo, post-ironic heirloom
                    try-hard pabst authentic iceland.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://dummyimage.com/107x107"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">
                        Wiktoria Kania
                      </span>
                      <span class="text-gray-500 text-sm">desvkhvghv</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
