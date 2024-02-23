import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const navigation = [
    { title: "About", path: "/about" },
    { title: "Features", path: "/features" },
    { title: "Blog", path: "/blog" },
    { title: "Help", path: "/help" },
    { title: "Terms", path: "/terms" },
  ];

  return (
    <>
      <footer className="relative z-10 border-t  border-gray-200 bg-white/50 pb-8 backdrop-blur-lg">
        <div className="mt-6 mx-auto w-full max-w-screen-xl px-6 lg:px-20">
          <div className="flex flex-col justify-center items-center xs:gap-4 sm:gap-6 xl:gap-8">
            <div className=" flex flex-col justify-center items-center sm:gap-8 lg:gap-8 gap-4">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/assets/afwg-bg.png"
                  height={120}
                  width={120}
                  alt="logo"
                />
                <p className="max-w-xs text-sm text-gray-900 font-semibold">
                  "Cultivate Success with AgroFriend's Insight."
                </p>
              </div>
              <SocialMedia/>
            </div>
            <div class="flex flex-wrap items-center font-semibold justify-center gap-8 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
              {navigation.map((item, id) => {
                return (
                  <Link
                    key={id}
                    to={item.path}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>

            <div className="text-center text-xs pt-8">
              <span className="font-semibold">About this website:</span>{" "}
              <span className="font-bold">built with 💚 by Vikash Patel</span>{" "}
              using React.js, Express.js, Node.js, Tailwind CSS, Resend and Vercel hosting.
            </div>
          </div>
          <div className="mt-6 border-t border-gray-900/10 pt-6 sm:mt-12 lg:mt-16">
            <p className="text-sm leading-5 text-pink-900 font-semibold">
              © {new Date().getFullYear()} AgroFriend. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* <footer class="flex flex-col  bg-gradient-to-bl from-[#A7FC8F] via-[#59B2EA] to-[#E131F3]">
        <div class="flex flex-col mx-6">
          <div class="flex flex-col items-center justify-center w-full my-10">
            <div class="mb-6">
              <img
                src="/assets/afwg-bg.png"
                height={120}
                width={120}
                alt="logo"
              />
            </div>
            <div class="flex flex-col items-center gap-6 mb-8">
              <div class="flex flex-wrap items-center font-semibold justify-center gap-8 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                {navigation.map((item, id) => {
                  return (
                    <Link
                      key={id}
                      to={item.path}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
              <div class="flex items-center text-lg gap-8">
                {socialMediaLinks.map((item, index) => {
                  return (
                    <Link
                      to={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-grey-700 hover:text-grey-900"
                    >
                      {item.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div class="flex items-center pb-8">
              <p class="text-base font-normal leading-7 text-center text-grey-700">
                &copy; {year} AgroFriend. All rights reserved.
              </p>
            </div>
            <div className="text-center text-xs">
              <span className="font-semibold">About this website:</span>{" "}
              <span className="font-bold">built with 💚 by Vikash Patel</span>{" "}
              using React.js, JavaScript, Tailwind CSS, React Email & Resend,
              Vercel hosting.
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};
export default Footer;
