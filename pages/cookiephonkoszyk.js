import Link from "next/link";
import CookiePhonHeader from "../components/CookiePhonHeader";
import { send } from "emailjs-com";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Cookiephon() {
  const router = useRouter();

  const [toSend, setToSend] = useState({
    from_ncame: "",
    from_email: "",
    color: "",
    model: "",
    reply_to: "",
    date: new Date().toLocaleString(),
  });

  useEffect(() => {
    setToSend({
      ...toSend,
      color: router.query.color,
      model: router.query.model,
    });
  }, [router.query]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("toSend: ", toSend);

    send("service_f778y27", "template_r2qutk8", toSend, "rpvVRCoi2_Z7WxU_i")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        router.push("/success");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert(
          "Something went wrong with your order! Check the console for an error."
        );
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <CookiePhonHeader />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
          <div className="flex flex-col p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:mt-0">
            <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">
              Dokonaj zakupu
            </h2>
            <form onSubmit={onSubmit}>
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
                  name="from_name"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  onChange={handleChange}
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
                  name="from_email"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
              >
                Dokończ tranzakcję
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
