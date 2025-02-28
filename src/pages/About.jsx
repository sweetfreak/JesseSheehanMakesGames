import React from "react";
import jessebeatles from '../assets/images/JesseBeatles.jpg';

function About() {
  return (
    <div className="about-container mt-5">
      <div className="about-content">
        <img src={jessebeatles} alt="Jesse looking quite tired" className="about-image" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>Hailing from the exotic suburbs of Connecticut, I now reside within a <strike>rent-stabilized apartment</strike> luxurious bungalow in Brooklyn, NY. After studying screenwriting and TV production at Emerson College, I flailed around a few voiceover and animation studioes before returning to the east coast, where I joined Nickelodeon's game department and directed 18 games for the (now defunct) Noggin app.
          <br></br><br></br>

          Outside of my professional work, I've completed a full-stack web development bootcamp, studied SwiftUI/iOS development, and learned to create video games using Unity and Godot. I love creating games as a form of social commentary – but sometimes I just make pixel art games about white collar frogs or surfing flamingos.
          <br></br><br></br>

          Most recently, I've become a part-time QA Tester for Moving Pieces Interactive, but I'm always working on a new project. Around Halloween 2024, I released a web-based visual novel about a ghost with unfinished business and in January 2025, I served as the lead programmer and game director for a Global Game Jam 2025 project, Point Beak. <br></br>What am I up to now? You'll have to ask me or wait for me to update this website!

          </p>
        </div>
      </div>
    </div>
  );
}

export default About;