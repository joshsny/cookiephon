import Link from "next/link";

const CookiePhonHeader = () => {
  return (
    <header class="text-gray-600 body-font sticky top-0 bg-yellow-400 z-40">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            class="w-16 h-16 text-white p-2 rounded-full"
            alt="hero"
            src="https://www.gorzkow.eu/images/grafika/glowne/cookies.jpg"
          />
          <span class="ml-3 text-xl">Cookiephon</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-black	flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <button>
              <a class="mr-5 hover:text-gray-900">DOM</a>
            </button>
          </Link>
          <Link href="/#zlozzamowienie">
            <button>
              <a class="mr-5 hover:text-gray-900">SKLEP</a>
            </button>
          </Link>
          <Link href="/#dowiedzsiewiecej">
            <button>
              <a class="mr-5 hover:text-gray-900">NASZ ZESPÓŁ</a>
            </button>
          </Link>
          <Link href="#recenzje">
            <button>
              <a class="mr-5 hover:text-gray-900">RECENZJE</a>
            </button>
          </Link>
        </nav>
        <Link href="/">
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            WRÓĆ
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default CookiePhonHeader;
