import React, { useEffect, useState } from "react";
import axios from "axios";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading to true while sending

      const response = await axios.post(
        "https://agro-friend.vercel.app/api/email",
        formData
      );

      if (response.status === 200) {
        console.log("Form data submitted:", formData);
        alert("Email Sent Successfully!");

        // Clear form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading back to false after sending
    }
  };

  return (
    <>
      <div className="pt-24 mx-auto w-full max-w-screen-xl px-6 lg:px-20">
        <section className="py-4 lg:py-12">
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-3">
              <header className="p-4 pb-4 pl-0 text-green-500 text-left">
                <h1 className="text-4xl font-semibold pb-2">Contact Us</h1>
                <div className="h-[1px] bg-green-500 border-green-500"></div>
              </header>

              <p className="max-w-[500px] text-justify text-lg dark:text-gray-900">
                We at AgroFriend are dedicated to providing you with the best
                services and support. Whether you have a question regarding our
                crop recommendation service, need advice on fertilizer usage, or
                want to know more about our disease detection feature, we are
                here to help. Please feel free to get in touch with us via
                email, phone, or by using the contact form on this page. Our
                team of experts will be happy to assist you with any inquiries
                you may have.
              </p>
              <SocialMedia />
            </div>

            <div className="flex items-center min-h-screen">
              <div className="container mx-auto">
                <div className="max-w-md mx-auto p-5 rounded-md ring-1 ring-emerald-500 shadow-2xl">
                  <div className="text-center">
                    <h1 className="my-3 text-3xl font-semibold ">Contact Us</h1>
                    <p className="text-orange-400">
                      Fill up the form below to send us a message.
                    </p>
                  </div>
                  <div className="m-7">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 ring-1 bg-transparent ring-orange-500 focus:ring-green-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="you@company.com"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 ring-1 bg-transparent ring-orange-500 focus:ring-green-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="phone" className="text-sm">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="+1 (555) 1234-567"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 ring-1 bg-transparent ring-orange-500 focus:ring-green-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm">
                          Your Message
                        </label>
                        <textarea
                          rows="5"
                          name="message"
                          id="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 ring-1 bg-transparent ring-orange-500 focus:ring-green-500"
                          required
                        ></textarea>
                      </div>
                      <div className="mb-6">
                        <button
                          type="submit"
                          className={`w-full px-3 py-4 font-semibold text-white bg-emerald-500 rounded-md hover:bg-white hover:text-black hover:border hover:border-emerald-500 focus:bg-emerald-500 focus:outline-none ${
                            loading ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          {loading ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
