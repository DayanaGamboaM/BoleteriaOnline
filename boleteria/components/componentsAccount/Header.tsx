import React, { useState } from "react";
import Image from "next/image";
import UserProfile from "../../public/usuario.png";

const Header = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const renderImage = () => {
    if (selectedImage) {
      return (
        <Image
          className="img-fluid"
          src={selectedImage}
          alt="Selected Image"
          width={100}
          height={100}
          onClick={handleImageClick}
        />
      );
    } else {
      return (
        <label htmlFor="fileInput">
          <Image
            className="img-fluid"
            src={UserProfile}
            alt="Initial Image"
            width={100}
            height={100}
          />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </label>
      );
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card-section">
          <div className="container">
            <div
              className="card-block bg-white mb-3 d-flex flex-row flex-wrap align-items-center justify-content-between"
              style={{ width: "1400px", maxWidth: "100%" }}
            >
              <div className="text-center mb-3 mb-md-0 mx-auto ">
                {renderImage()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;








