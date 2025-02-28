import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
//images
import BFrogLogo from "../assets/images/BFrogLogo.png"
import BFrogGameplay from "../assets/images/BFrogBG.png"
import EntropyLogo from "../assets/images/EntropyLogo.png"
import EntropyGame from "../assets/images/EntropyGame.png"
import ghostLogo from "../assets/images/ghoststoryLogo.png"
import ghostGame from "../assets/images/ghoststoryScreens.png"

function Projects() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  
  const projects = [
    {
      title: "Business Frog",
      role: "Creator, Game Designer, Developer",
      completionDate: "July 2023",
      description: "Spent ~6 months of non-working time to hand-craft this hardcore 2D platformer about a frog who needs to get to work on time.",
      image: BFrogLogo,
      link: "https://sweetfreak.itch.io/business-frog",
      backgroundImage: BFrogGameplay
    },
    {
      title: "Entropy Survivors",
      role: "QA Tester",
      completionDate: "Fall 2024",
      description: "QA Tester for Entropy Survivors, a bullet hell roguelike by Moving Pieces Interactive.",
      image: EntropyLogo,
      link: "https://store.steampowered.com/app/2602030/Entropy_Survivors/",
      backgroundImage: EntropyGame
    },
    {
      title: "A Terrifying Ghost Story",
      role: "dddddd",
      completionDate: "October 2024",
      description: "text here",
      image: ghostLogo,
      link: "https://sweetfreak.github.io/ghoststoryboo/",
      backgroundImage: ghostGame
    },
    {
      title: "Racing Evolution",
      role: "Physics Programmer",
      completionDate: "November 2022",
      description: "A realistic racing simulator with advanced vehicle physics and dynamic weather systems. Implemented the vehicle physics engine and weather effects.",
      image: "/images/racing-evolution.jpg",
      link: "https://racing-evolution.com",
      backgroundImage: "/images/racing-evolution-bg.jpg"
    },
    {
      title: "Zombie Survival",
      role: "AI Programmer",
      completionDate: "July 2022",
      description: "A survival horror game with sophisticated AI behavior systems. Developed the zombie AI pathfinding and behavior trees.",
      image: "/images/zombie-survival.jpg",
      link: "https://zombie-survival.com",
      backgroundImage: "/images/zombie-survival-bg.jpg"
    },
    {
      title: "Platform Adventure",
      role: "Solo Developer",
      completionDate: "March 2022",
      description: "A challenging platformer with unique mechanics and hand-crafted levels. Designed and implemented all game systems and created original artwork.",
      image: "/images/platform-adventure.jpg",
      link: "https://platform-adventure.com",
      backgroundImage: "/images/platform-adventure-bg.jpg"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });

    // Scroll handling
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Check if at bottom
      const bottomThreshold = 100; // pixels from bottom
      const isAtBottom = 
        window.innerHeight + window.pageYOffset >= 
        document.documentElement.scrollHeight - bottomThreshold;
      
      setIsBottom(isAtBottom);

      // Clear previous timeout
      clearTimeout(scrollTimeout);
      
      // Set new timeout
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
        />
      ))}
      <div className={`scroll-indicator ${(isScrolling || isBottom) ? 'hidden' : ''}`}>
        <p className="scroll-text">Scroll to see more</p>
        <div className="scroll-arrows">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
