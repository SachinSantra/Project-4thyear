
import React from 'react';

const About = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
    margin: "20px"
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px"
  };

  const textStyle = {
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "20px"
  };

  const imagesContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    marginTop: "20px"
  };

  const imageStyle = {
    width: "45%",
    maxWidth: "400px"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Parkinson</h1>
      <p style={textStyle}>Parkinson's disease is a neurodegenerative disorder that affects movement. It occurs when the brain cells that produce dopamine, a chemical that helps control movement, begin to die. The disease typically affects people over the age of 60, but it can also occur in younger people.</p>
      <ul style={textStyle}>
        <li>Our machine learning model, which utilizes the K-Nearest Neighbors (KNN) algorithm, takes into account multiple physical characteristics of patients, such as jerk, acceleration, pressure, and grip angle, as features for detection of Parkinson's disease.</li>
        <li>Additionally, by applying the Nearest Component Analysis (NCA) technique, we are able to improve the accuracy and robustness of our model.</li>
        <li>Through extensive experimentation and validation, we have observed that this approach is best possible approach</li>
      </ul>
      <div style={imagesContainerStyle}>
        <img src="https://www.medicoverhospitals.in/images/diseases/parkinsons-disease-symptoms.jpg" alt="Parkinson's Disease" style={imageStyle} />
        <img src="https://b2633864.smushcdn.com/2633864/wp-content/uploads/2019/04/detect_parkinsons_dataset.jpg?lossy=1&strip=1&webp=1" alt="Parkinson's Disease" style={imageStyle} />
      </div>
    </div>
  );
};

export default About;