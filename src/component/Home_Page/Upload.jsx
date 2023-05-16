import { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };
  const handleApi = () => {
    const url = "";
    const formData = new FormData();
    formData.append("image", image);
    axios.post(url, formData).then((res) => {
      console.log(res);
    });
  };

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    /*
    height: "300px",
    width: "300px",
    */
    height: "392px",
    width: "443px",
    border: "1px solid #ccc",
    borderRadius: "41px",
    background: "black",
    color: "#fff",
  };

  const inputStyle = {
    margin: "41px 21px",
    paddingLeft: "94px",
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "orange",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
  };
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
        background:`url('https://lh3.googleusercontent.com/DaJB7qT3gI31XzSrsYeO5PnW8v5xqlaIM00MkK-dn0085c6odb8pDJnlPCtPBx5EIUawL5cWCdBtxBqfapdjSK-I0WC4j_314PfuzU24')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={boxStyle}>
        <h2 style={{ fontWeight: "bold" }}>Upload your images</h2>
        <h2 style={{ fontWeight: "bold" }}>PNG JPG files are allowed</h2>
        <input type="file" onChange={handleChange} style={inputStyle} />
        <button onClick={handleApi} style={buttonStyle}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
