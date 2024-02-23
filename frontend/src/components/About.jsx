import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const About = () => {
  return (
    <>
      <div className="pt-24 mx-auto w-full max-w-screen-xl px-6  lg:px-20">
        {/* First  */}
        <div className=" text-center space-y-2">
          <h2 className="text-3xl font-bold pb-3 pr-1 tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
            About
          </h2>
        </div>

        {/* Header */}
        <header className=" p-4 pl-0 pb-0 text-green-500 text-left">
          <h1 className="text-4xl font-semibold pb-2">Our Vision</h1>
          <div className="h-[1px] bg-green-500 border-green-500"></div>
        </header>

        {/* Vision Content */}
        <section className="container py-8">
          <p className="text-lg text-justify text-gray-900">
            Our vision at Agrofriend is to revolutionize farming practices and
            promote sustainable growth. We believe that technology and
            innovation can help us achieve this vision, by providing
            personalized solutions that cater to individual farming needs. We
            are committed to promoting sustainable practices, reducing waste,
            and improving yields. We envision a future where farming is both
            environmentally and economically sustainable, and we strive to be at
            the forefront of this movement.
          </p>
        </section>

        <section className=" text-gray-900">
          <div className="container  text-left">
            <h2 className="text-3xl font-semibold mb-8">Let’s talk</h2>
            <p className="text-lg mb-8">
              If you have any questions or inquiries, feel free to reach out to
              us at{" "}
              <Link
                to={"mailto:agrofriend24x7@gmail.com"}
                className="text-orange-500 underline"
              >
                agrofriend24x7@gmail.com
              </Link>
            </p>
            <SocialMedia />
          </div>
        </section>

        <section className="py-4 lg:py-12">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-3">
              <header className=" p-4 pb-4 pl-0 text-green-500 text-left">
                <h1 className="text-4xl font-semibold pb-2">Team Story</h1>
          <div className="h-[1px] bg-green-500 border-green-500"></div>

              </header>

              <p className="max-w-[500px] text-justify  text-lg dark:text-gray-900">
                At Agrofriend, we are passionate about empowering farmers to
                achieve sustainable growth. Our team of experts, with diverse
                backgrounds in agriculture, technology, and consulting, works
                tirelessly to provide personalized solutions that cater to
                individual farming needs. We believe in a collaborative
                approach, working closely with farmers to understand their
                unique challenges and goals. Our commitment to excellence,
                innovation, and sustainability drives us to continuously improve
                and push the boundaries of what's possible in farming.
              </p>
            </div>
            <img
              src="/assets/img22.webp"
              alt="img"
              className="w-full rounded-md h-full md:h-96 object-cover"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
