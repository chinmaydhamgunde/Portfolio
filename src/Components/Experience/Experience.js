import React from "react";

export default function Experience() {
  return (
    <div>
      <section className="experience" id="experience">
        <div data-aos="fade-up" className="max-width">
          <h2 className="title">My Experience</h2>
          <div className="serv-content">
            <div data-aos="fade-right" className="card">
              <div className="box">
                <div className="box1">
                  <div className="duration">Dec 2023 - Jan 2024</div>
                  <div className="location">India • Remote</div>
                </div>
                <div className="box2">
                  <div className="company">EduIntern.</div>
                  <div className="position">MERN Stack Developer</div>
                </div>
                <p>
                  <ul>
                    <li>
                      Executed end-to-end development of a blog application
                      during my internship, enabling users to create, save,
                      edit, and delete posts.
                    </li>
                    <li>
                      Developed a multi-layered authentication framework that
                      improved user data protection within the blog app.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div data-aos="fade-down" className="card">
              <div className="box">
                <div className="box1">
                  <div className="duration">Nov 2022 - April 2023</div>
                  <div className="location">India • Remote</div>
                </div>
                <div className="box2">
                  <div className="company">KGen (IndiGG)</div>
                  <div className="position">Community Manager</div>
                </div>
                <p>
                  <ul>
                    <li>
                      Contributed to the growth of an online gaming community to
                      5,000 active members, enhancing user interaction and
                      retention through engaging content and organized events.
                    </li>
                    <li>
                      Increased member engagement by 40% by implementing
                      targeted community management initiatives.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
