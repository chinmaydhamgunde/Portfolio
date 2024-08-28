import React from 'react'
import Profile_Photo from "./Profile_Photo.jpg"

export default function About() {
  return (
    <section data-aos="fade-up" className="about" id="about">
    <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
            <div data-aos="fade-right" className="column left">
                      <img src={Profile_Photo} alt="" />
                      
            </div>
            <div data-aos="fade-left" className="column right">
                <div className="text">I'm Chinmay & I'm <span className="typing-2"></span></div>
                <p>Greetings! I'm Chinmay Dhamgunde, currently pursuing B.Tech in Information Technology at Pimpri
                    Chichwad College Of Engineering (PCCOE),Pune. A Blockchain Enthisiast with passionate and dedicated Software Developer &
                    Full Stack Developer
                    with a flair for crafting innovative and user-centric sulutions. Throughout my career, I've been
                    driven by the desire to create seamless and robust web applications that make a positive impact
                    on users and businesses alike.</p>
                <a href="https://docs.google.com/document/d/1rUkVfpCnU47E3JhnYY2ptlIMiKQprNsjiX-ppbTIat0/edit?usp=sharing"  rel="noreferrer"
                    target="_blank">Download Resume</a>
            </div>
        </div>
    </div>
</section>
  )
}
