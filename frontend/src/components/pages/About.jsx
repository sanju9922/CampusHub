/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Welcome to Campus Hub, your one-stop platform for everything happening on campus! Designed with the dynamic life of college students in mind, Campus Hub aims to keep you connected, informed, and engaged with all aspects of campus life. Here is a glimpse of what you can do on Campus Hub:
        </p>
        <p>
        <b>Post Found Items</b>
        Lost something valuable? Found someone’s misplaced item? Use our Lost & Found feature to post items you have found or look for items you’ve lost. Help fellow students recover their belongings quickly and easily.
        </p>
        <p>
        <b>Update Club Events</b>
        Stay up-to-date with the latest happenings in your favorite clubs. Club leaders can post updates and announce events, ensuring that members are always in the loop. Never miss a club event again!
        </p>
        <p>
          <b>Post Blogs</b>
        
        Share your thoughts, experiences, and stories with the campus community. Whether it is an insightful article, a personal experience, or creative writing, the Blogs section is your space to express yourself and connect with like-minded individuals.
        </p>
        <p>
          <b>More College-Related Activities</b>
        
          Campus Hub is packed with numerous other features to enhance your college experience. From academic resources and study groups to campus news and social events, there is something for everyone. Explore the platform to discover all the ways Campus Hub can make your college life more organized and fun.
        </p>
      </div>
    </article>
  );
};

export default About;