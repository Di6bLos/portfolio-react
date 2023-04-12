import "./Hero.cmp.scss";

import Button from "../UI/Button.cmp";

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container section-width">
                <h1 className="hero-heading">Hi, <div className="second-line">I'm Carlos Prieto</div></h1>
                <p className="hero-text">Web developer with a focus on frontend engineering and user experience. </p>
                <div className="cta-container">
                    <Button buttonType={"primary"}>Project</Button>
                    <Button buttonType={"inverted"}>Contact</Button>
                </div>
            </div>

        </section>
    )
}
