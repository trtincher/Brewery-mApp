import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <h2>About</h2>
      <p>
        This app was inspired by a physical map that I used to keep on my wall.
        Whenever I would visit a new brewery I would put a pin in the map as a
        visual reminder of the great experiences.
      </p>
      <p>
        However, there were two problems with that map. One, craft brewing is
        gaining popularity and new breweries seem to pop up every day. This
        meant that my physical printed map was almost immediately out of date.
        Two, It got destroyed during a move because it’s ultimately a fragile
        piece of paper.
      </p>

      <p>
        These defaults of a physical brewery map combined with my nostalgic
        desire for the map I once had led me to create this digital version. I
        hope you enjoy it as much as I do, and share with your friends.
      </p>
    </div>
  );
}

export default About;
