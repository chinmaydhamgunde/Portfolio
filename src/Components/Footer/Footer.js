import React from "react";

import Github from "./Profile_Icons/Github.png";
import Linkedin from "./Profile_Icons/Linkedin.png";
import Instagram from "./Profile_Icons/Instagram.png";
import Gmail from "./Profile_Icons/Gmail.png";

export default function Footer() {
  return (
    <footer>
      <div class="text1">Get in Touch</div>
      <div class="text2">Connect With Me</div>
      <div class="icons">
        <a
          href="https://github.com/chinmaydhamgunde"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={Github}
            class="Profile_Icons"
            style={{ height: "25px", width: "25px" }}
            alt=""
          />
        </a>
        <a
          href="https://in.linkedin.com/in/chinmay-dhamgunde-23617122a/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Linkedin} class="Profile_Icons" alt="" />
        </a>
        <a
          href="mailto:chinmaydhamgunde10@gmail.com?subject=Portfulio%20Inquiry"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Gmail} class="Profile_Icons" alt="" />
        </a>
        <a
          href="https://www.instagram.com/chinmaydhamgunde"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Instagram} class="Profile_Icons" alt="" />
        </a>
      </div>
      <span>
        Copyright <span class="far fa-copyright"></span>
        <a
          href="https://chinmaydhamgunde.netlify.app"
          rel="noreferrer"
          target="_blank"
        >
          Chinmay Dhamgunde
        </a>
        | 2023 All rights reserved.
      </span>
    </footer>
  );
}
