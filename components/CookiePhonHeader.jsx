import Link from "next/link";
import { useRouter } from "next/router";

const CookiePhonHeader = () => {
  const router = useRouter();
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-yellow-400 z-40">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            className="w-16 h-16 text-white p-2 rounded-full"
            alt="hero"
            src="/logo.png"
          />
          <span className="ml-3 text-xl">Cookiephon</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-black	flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <button>
              <a className="mr-5 hover:text-gray-900">DOM</a>
            </button>
          </Link>
          <Link href="/#zlozzamowienie">
            <button>
              <a className="mr-5 hover:text-gray-900">SKLEP</a>
            </button>
          </Link>
          <Link href="/#recenzje">
            <button>
              <a className="mr-5 hover:text-gray-900">RECENZJE</a>
            </button>
          </Link>
          <Link href="/#dowiedzsiewiecej">
            <button>
              <a className="mr-5 hover:text-gray-900">O NAS</a>
            </button>
          </Link>
        </nav>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          WRÓĆ
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default CookiePhonHeader;
