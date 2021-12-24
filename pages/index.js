import Link from "next/link";

export default function CookiePhon() {
  return (
    <>
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
              Złóż zamówienie
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
                  <p class="mt-1">Cena do negocjacji</p>
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
                  <p class="mt-1">Cena do negocjacji</p>
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
                  src="https://dummyimage.com/88x88"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Oskar Blinde
                  </h2>
                  <p class="text-gray-500">Founder</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/90x90"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
                  <p class="text-gray-500">DevOps</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/94x94"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Martin Eden
                  </h2>
                  <p class="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/98x98"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p class="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/100x90"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Atticus Finch
                  </h2>
                  <p class="text-gray-500">QA Engineer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/informator01.jpeg"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Sebastian Grzebieniowski
                  </h2>
                  <p class="text-gray-500">Administrator</p>
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
      </section>
    </>
  );
}
