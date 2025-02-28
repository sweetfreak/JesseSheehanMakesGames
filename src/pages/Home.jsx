import React from "react";
import jessemario from '../assets/images/jessemario.jpg';

function Home() {
  return (
    <div className="about-container mt-5">
      <div className="about-content">
        <img src={jessemario} alt="Jesse looking quite tired" className="about-image" />
        {/* <figcaption>I was running on 3 hours of sleep in this picture, but it was worth it</figcaption> */}
        <div className="about-text text-center">
          <h1>Jesse Sheehan Makes Games</h1>
          <h4><i>and there's nothing you can do about it!</i></h4>
          <br></br>
          <p>You may have heard these RUMORS about me: saying I was born with a controller in my hand, that I couldn't make it in Hollywood so I pivoted to gaming, or that I am really bad at Elden Ring... They're NOT TRUE (okay, I am terrible at Elden Ring). <br></br><br></br>
          
          
         What IS true is that after nearly 30 years of playing games, I realized I wanted to make them, too. Once this realization hit, I did everything I could to make it a reality: I learned to code and use programs like Unity, I read books about game design, and I even made a few games of my own, while working as a game producer for Nickelodeon's (defunct, RIP) Noggin app.
          <br></br>
          <br></br>Now that I've got a few years of producing and designing under my belt, I'm looking to for my next adventure as a narrative and game designer.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;