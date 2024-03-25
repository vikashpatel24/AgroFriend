import React from 'react'
import {
    FaGlobe,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaInstagram,
  } from "react-icons/fa";
  import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SocialMedia = () => {
    const socialMediaLinks = [
        { url: "https://www.vikashpatel.tech/", icon: <FaGlobe /> },
        { url: "https://www.facebook.com/vikashpatel24/", icon: <FaFacebook /> },
        { url: "https://twitter.com/vikashpatel24", icon: <FaXTwitter /> },
        { url: "https://github.com/vikashpatel24", icon: <FaGithub /> },
        { url: "https://linkedin.com/in/vikashpatel24", icon: <FaLinkedin /> },
        {
          url: "https://www.instagram.com/vikashpatel.tech",
          icon: <FaInstagram />,
        },
      ];
  return (
    <>
         <div className="flex items-center space-x-4 pb-4 lg:pb-8">
                {socialMediaLinks.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link
                        to={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center justify-center space-x-4 hover:scale-125  ">
                          {item.icon}
                          {index !== socialMediaLinks.length - 1 && (
                            <div className="h-8 border-l border-gray-200" />
                          )}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
    </>
  )
}

export default SocialMedia