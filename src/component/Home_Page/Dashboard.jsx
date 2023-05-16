

import React, { useState, useEffect } from "react";

const Image = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/?client_id=8zkSPstt1cIVHrBRoCVx1dBWGhqryPF9Tl8WkvjI9pM")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImageUrl(data[0].urls.regular);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://your-backend-api.com/name")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setName(data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Dashboard_Image">
      <p className="Backend_Name">Hello {name}</p>
      <img src={imageUrl} alt="API" />
    </div>
  );
};

export default Image;
