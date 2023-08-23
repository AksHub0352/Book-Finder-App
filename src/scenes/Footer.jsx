import React from 'react'
// import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    < footer className="h-30 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        {/* <SocialMediaIcons /> */}
        <div className="md:flex justify-center md:justify-between text-center mx-3 ">
          <p className="font-playfair font-semibold text-2xl text-yellow mb-10">
            AYUSH KUMAR
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 AK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
