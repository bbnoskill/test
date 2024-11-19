import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/vitalij.jpg"} alt="Vitalij Bahurskij" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Vitalij Bahurskij</h2>
          <p style={styles.position}>Developer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/photo_2024-11-19_15-44-43.jpg"} alt="Andriievskyi Vladyslav" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Andriievskyi Vladyslav</h2>
          <p style={styles.position}>Scrum Master</p
        </div>
  
      </div>
  <div style={styles.card}>
        <img src={"/Evelina.png"} alt="Bashynska Evelina" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Bashynska Evelina</h2>
          <p style={styles.position}>Backend engineer</p>
        </div>
 </div>
  <div style={styles.card}>
        <img src={"/Avatar.png"} alt="Andreyko Max" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Andreyko Max</h2>
          <p style={styles.position}>Designer</p>
        </div>
    </div>
  <div style={styles.card}>
        <img src={"/photo_2024-11-19_15-14-57.jpg"} alt="Holub Yulia" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Holub Yulia</h2>
          <p style={styles.position}>QA</p>
        </div>
   </div>
    </main>
  );
};


const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
