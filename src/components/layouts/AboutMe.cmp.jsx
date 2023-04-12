import React from "react";
import "./AboutMe.cmp.scss"
import aboutImg from "../../assets/about-me-image.png";

export default function AboutMe() {
  return (
    <section>
      <h2 className="section-title">About Me</h2>
      <article className="about-me-section section-width">
        <div className="about-blurb">
          <p>
            I specialize in creating visually appealing and user-friendly
            websites that are tailored to my client’s specific needs. I am
            comfortable with designing and coding responsive websites, as well
            as working with WordPress and other CMS platforms. Always looking
            for new challenges and opportunities to grow my skills and expand my
            knowledge. I’m excited to continue my journey in web design and
            development creating beautiful, functional websites.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="carlos prieto" />
        </div>
      </article>
    </section>
  );
}
