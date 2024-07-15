/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
          Join Campus Hub today and become an active part of your campus community! Stay connected, stay informed, and make the most of your college years with Campus Hub.
          </p>
          <p>
            <span>Email:</span>sanjaykumar090902@hmail.com
          </p>
          <p>
            <span>Phone:</span>+91-8792792070
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Posts</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lost And Found</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Connect with Seniors</li>
            <li>Club Updates</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newsletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">CAMPUS <span>HUB</span></div>
        <div className="links">
          <Link to={"https://www.instagram.com/sanj_9922?igsh=MXRzNWZjdDVqaG9iNg=="} target="_blank">
            <AiFillInstagram />
          </Link>
          
          <Link to={"https://www.youtube.com/@Sanjaykumar-if6wm"} target="_blank">
            <AiFillYoutube />
          </Link>
          <Link to={"https://www.linkedin.com/in/sanjay-kumar-947911229/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;