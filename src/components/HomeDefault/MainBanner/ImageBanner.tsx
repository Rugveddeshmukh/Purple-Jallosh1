import React from "react";
import Image from "next/image";

const ImageBanner = () => {
  return (
    <div style={bannerContainerStyle}>
      <Image
        src="/images/Bannerimage.jpg" // Correct reference from the public folder
        alt="Banner Image"
        width={1200} // Original width
        height={500} // Original height
        layout="intrinsic" //
        style={bannerImageStyle}
      />
    </div>
  );
};

// Banner container style
const bannerContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "auto", // Set to auto to allow the height to adjust based on the image's aspect ratio
  overflow: "hidden", // Ensures the image stays within the bounds
  position: "relative",
  marginTop: "0px",
};

// Banner image style (responsive image)
const bannerImageStyle: React.CSSProperties = {
  width: "100%",
  height: "auto", // Ensure the image's height adjusts to its width
  objectFit: "contain", // Ensures the entire image is shown without cropping
};

export default ImageBanner;
