import React, { useState } from "react";


function SkillBadge({ skill }) {
  return <span style={{ margin: 5, padding: 5, border: "1px solid gray" }}>{skill}</span>;
}

function PortfolioCard() {
  const [theme, setTheme] = useState("light");
  const [likes, setLikes] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150/0000FF",
    "https://via.placeholder.com/150/FF0000"
  ];

  const skills = ["React", "JavaScript", "CSS", "HTML"];

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const nextPhoto = () => setPhotoIndex((photoIndex + 1) % photos.length);

  const showAlert = () => alert("Hello! Thanks for visiting my profile 😄");

  return (
    <div style={{
      padding: 20,
      margin: 20,
      background: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff"
    }}>
      <h2>My Portfolio</h2>
      <img src={photos[photoIndex]} alt="profile" />
      <h3>Karrr</h3>
      <p>Frontend Developer passionate about React 🚀</p>

      <div>
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>

      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={nextPhoto}>Change Photo</button>
      <button onClick={showAlert}>Say Hi</button>

      <div>
        <button onClick={() => setLikes(likes + 1)}>❤️ Like</button>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;