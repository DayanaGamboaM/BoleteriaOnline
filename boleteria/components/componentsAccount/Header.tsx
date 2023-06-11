import React, { useState, useRef } from "react";
import Image from "next/image";
import UserProfile from "../../public/user.png";

const Header = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = () => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const renderImage = () => {
    if (selectedImage) {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image
              className="img-fluid"
              src={selectedImage}
              alt="Selected Image"
              width={100}
              height={100}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
          <button
                onClick={handleImageClick}
                style={{
                  border: "none",
                  background: "black",
                  color: "white",
                  cursor: "pointer",
                  padding: "8px 20px",
                  borderRadius:"1em",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  fontSize: "14px",
                  fontWeight: "900",
                  marginLeft: "-25px",
                  textTransform:"uppercase"
                }}
              >
                Buscar Imagen
              </button>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <label htmlFor="fileInput">
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                className="img-fluid"
                src={UserProfile}
                alt="Initial Image"
                width={100}
                height={100}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
            <button
                onClick={handleImageClick}
                style={{
                  border: "none",
                  background: "black",
                  color: "white",
                  cursor: "pointer",
                  padding: "8px 20px",
                  borderRadius:"1em",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  fontSize: "14px",
                  fontWeight: "900",
                  marginLeft: "-25px",
                  textTransform:"uppercase"
                }}
              >
                Buscar Imagen
              </button>
            </div>
          </label>
        </div>
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
              <div className="text-center mb-3 mb-md-0 mx-auto">
                {renderImage()}
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
