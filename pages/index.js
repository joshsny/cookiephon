import Link from "next/link";

export default function CookiePhon() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          <img
            className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
            alt="hero"
            src="https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
          />
          <div className="w-full text-center lg:w-2/3">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Cookiephon</h1>
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-2xl">
              Złóż zamówienie
            </h1>
            <p className="mb-8 leading-relaxed">Prezes: Maria Adamczyk</p>
            <div className="flex justify-center">
              <Link href="#zlozzamowienie">
                <a className="inline-flex px-6 py-2 text-lg text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600">
                  Złóż zamówienie
                </a>
              </Link>
              <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
                Dowiedz się więcej
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font" id="zlozzamowienie">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            <div className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div className="flex flex-row items-end">
                <div className="w-1/2 mt-4">
                  <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">🎧</h3>
                  <h2 className="text-lg font-medium text-gray-900 title-font">CookiePods</h2>
                  <p className="mt-1">Cena do negocjacji</p>
                </div>
                <div className="flex justify-center w-1/2 h-16">
                  <Link href="/product">
                    <button className="px-4 py-2 font-semibold text-yellow-700 bg-transparent border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white hover:border-transparent">
                      Zamów
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div className="flex flex-row items-end">
                <div className="w-1/2 mt-4">
                  <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">📱</h3>
                  <h2 className="text-lg font-medium text-gray-900 title-font">CookiePhon</h2>
                  <p className="mt-1">Cena do negocjacji</p>
                </div>
                <div className="flex justify-center w-1/2 h-16">
                  <button className="px-4 py-2 font-semibold text-yellow-700 bg-transparent border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white hover:border-transparent">
                    Zamów
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
