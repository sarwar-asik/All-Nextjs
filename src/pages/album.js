import Image from "next/image";
import React from "react";

import myImage from "../assets/images/carImage.jpg"

const Album = () => {
  return (
    <div>
      <h2> ALbum pages</h2>

      <img
        src="https://img.freepik.com/free-photo/white-modern-sport-car-parking-road_114579-4025.jpg?w=1060&t=st=1690001294~exp=1690001894~hmac=e86f56bfb955df46d26af4022bce53ee747488e5f206c81944798bdae0097e38"
        alt="imagetest"
        width={400}
      />

      <h2>By img tag</h2>

      <Image
        src="https://img.freepik.com/free-photo/white-modern-sport-car-parking-road_114579-4025.jpg?w=1060&t=st=1690001294~exp=1690001894~hmac=e86f56bfb955df46d26af4022bce53ee747488e5f206c81944798bdae0097e38"
        width={400}
        height={400}
        layout="responsive"
        alt="urlImage"
      />
      <span>By Image with url </span>

      <Image
         src={myImage}
        width={400}
        height={400}
        layout="responsive"
        alt="localImage"
      />

      <span>Image from Local</span>


    </div>
  );
};

export default Album;
