import "./Hero.cmp.scss";

import Button from "../UI/Button.cmp";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <h1 className="hero-heading">Hi, I'm Carlos Prieto</h1>
                <p className="hero-text">Web developer with a focus on frontend engineering and user experience. </p>
                <div className="cta-container">
                    <Button buttonType={"primary"}>Project</Button>
                    <Button buttonType={"inverted"}>Contact</Button>
                </div>
            </div>

        </section>
    )
}

export default Hero;