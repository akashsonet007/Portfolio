import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            I have spent the last 12 years in the fire service working as a
            professional firefighter S. hni 1 t er. working MI, HIIAL & CSS la
            make some minor edits on a smell business website that! scinalletl
            xe.1,ow intricate programming can be 1.5 pu.aly drawn to learn more.
          </p>
          <p className="py-2 text-gray-600">
            I star. arn..9 lavascrint and was even mare enthused wilt1 making
            viebsiles interactive. I then stoned min Droiects .11 neact JS,
            Fire... end learning new technologies.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className=" rounded-xl"
            src="/../public/about.jpg"
            alt="about"
            height="50"
            width="400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
