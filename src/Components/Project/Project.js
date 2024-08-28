import React from "react";

import NFTMarketplace from "./Project_Images/NFTMarketplace.jpeg";
import Faucet from "./Project_Images/Faucet.jpeg";
import Whitelist from "./Project_Images/Whitelist.png";
import Link from "./Project_Images/Link.png";

export default function Project() {
  return (
    <section className="projects" id="projects">
      <div data-aos="fade-up" className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="carousel owl-carousel">
          <div className="card">
            <div className="box">
              <img src={Whitelist} alt="" />
              <div className="text">
                <a
                  className="projectTitle"
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Whitelist Dapp
                </a>
              </div>
              <div className="project_buttons">
                <div className="buttons">
                  <button className="btn">React JS</button>
                  <button className="btn">Solidity</button>
                </div>
                <div className="project_links">
                  <a
                    href="https://github.com/chinmaydhamgunde/Whitelist-Dapp"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="project_github_link fab fa-lg fa-github "></i>
                  </a>
                  <a href="/" rel="noreferrer" target="_blank">
                    <img
                      src={Link}
                      alt=""
                      style={{ height: "25px", width: "25px", margin: "5px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={Faucet} alt="" />
              <div className="text">
                <a
                  className="projectTitle"
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Musicfy Faucet
                </a>
              </div>
              <div className="project_buttons">
                <div className="buttons">
                  <button className="btn">React JS</button>
                  <button className="btn">Solidity</button>
                </div>
                <div className="project_links">
                  <a
                    href="https://github.com/chinmaydhamgunde/BLOCKCON_MuscifyFaucet"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="project_github_link fab fa-lg fa-github "></i>
                  </a>
                  <a href="/" rel="noreferrer" target="_blank">
                    <img
                      src={Link}
                      alt=""
                      style={{ height: "25px", width: "25px", margin: "5px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={NFTMarketplace} alt="" />
              <div className="text">
                <a
                  className="projectTitle"
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                >
                  NFT Marketplace
                </a>
              </div>
              <div className="project_buttons">
                <div className="buttons">
                  <button className="btn">React JS</button>
                  <button className="btn">Solidity</button>
                  <button className="btn">NodeJS</button>
                  <button className="btn">Express JS</button>
                </div>
                <div className="project_links">
                  <a
                    href="https://github.com/chinmaydhamgunde/NFTMarketPlace_frontend"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="project_github_link fab fa-lg fa-github "></i>
                  </a>
                  <a href="/" rel="noreferrer" target="_blank">
                    <img
                      src={Link}
                      alt=""
                      style={{ height: "25px", width: "25px", margin: "5px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
