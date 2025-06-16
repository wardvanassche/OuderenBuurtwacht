import React, {useEffect, useState} from "react";
import logo from "./assets/logo.png";
import {FaArrowUp} from "react-icons/fa";

export default function App() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="container">
            <header className="hero">
                <img src={logo} alt="Logo van OuderenBuurtwacht" className="logo"/>
                <h1>OuderenBuurtwacht</h1>
                <p className="tagline">Samen zorgen we voor een veilige buurt</p>
                <a href="#video" className="demo-button">Bekijk de demo</a>
            </header>

            <section className="section about">
                <h2>Over OuderenBuurtwacht</h2>
                <p className="about-text">
                    <strong>Wat is het?</strong> OuderenBuurtwacht is een gebruiksvriendelijke app voor
                    buurtpreventie, speciaal gericht op het ondersteunen van ouderen in onze samenleving.
                </p>
                <p className="about-text">
                    <strong>Het probleem:</strong> Veel ouderen wonen alleen, wat leidt tot kwetsbaarheid in
                    situaties zoals valpartijen, verwarring of sociaal isolement. Vaak zijn er te weinig structurele
                    contactmomenten vanuit de buurt.
                </p>
                <p className="about-text">
                    <strong>Onze oplossing:</strong> OuderenBuurtwacht maakt het mogelijk om eenvoudig met
                    buurtgenoten afspraken te maken, meldingen te sturen bij onregelmatigheden en de veiligheid van
                    ouderen op een laagdrempelige manier te verhogen.
                </p>
                <p className="about-text">
                    <strong>Voor wie?</strong> Bezorgde buren, familieleden en lokale initiatieven die actief willen
                    bijdragen aan de veiligheid van hun oudere medebewoners.
                </p>
            </section>

            <section className="section">
                <p className="description">
                    OuderenBuurtwacht helpt gemeenschappen om samen te zorgen voor hun kwetsbare leden. Met deze app
                    kunnen familieleden en buren makkelijk in contact blijven, signalen herkennen en direct reageren
                    op mogelijke noodsituaties. Het platform is bewust ontworpen met eenvoud en overzichtelijkheid
                    als uitgangspunt, zodat het voor iedereen – jong én oud – toegankelijk is. <br/><br/>
                    In de onderstaande video laten we stap voor stap zien hoe de app werkt en hoe jij direct een
                    verschil kunt maken in jouw buurt.
                </p>
                <div className="video-wrapper" id="video">
                    <iframe
                        src="https://www.youtube.com/embed/your-video-id"
                        title="Demonstratie van OuderenBuurtwacht"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section className="section screenshots">
                <h2>Bekijk de app</h2>
                <p className="screenshots-intro">
                    Hieronder ziet u hoe eenvoudig en overzichtelijk OuderenBuurtwacht werkt. Alles is ontworpen met
                    helderheid en veiligheid in gedachten.
                </p>
                <div className="screenshot-grid">
                    <div className="screenshot-card">
                        <img src="screenshot1.jpg" alt="Overzicht scherm"/>
                        <p className="caption">Overzicht van uw buurtcontacten</p>
                    </div>
                    <div className="screenshot-card">
                        <img src="screenshot2.jpg" alt="Melding scherm"/>
                        <p className="caption">Directe meldingen bij onregelmatigheden</p>
                    </div>
                    <div className="screenshot-card">
                        <img src="screenshot3.jpg" alt="Afspraak plannen"/>
                        <p className="caption">Plan makkelijk een check-in moment</p>
                    </div>
                </div>
            </section>

            <section className="section features">
                <h2>Belangrijkste functies</h2>
                <div className="features-grid">
                    <div className="feature-block">
                        <div className="icon">⚡</div>
                        <h3>Snel & Eenvoudig</h3>
                        <p>Installatie en gebruik binnen enkele minuten – ook voor minder digitaal vaardige
                            gebruikers.</p>
                    </div>
                    <div className="feature-block">
                        <div className="icon">🧭</div>
                        <h3>Duidelijke Navigatie</h3>
                        <p>Overzichtelijk ontwerp met grote knoppen en duidelijke tekst voor maximale
                            toegankelijkheid.</p>
                    </div>
                    <div className="feature-block">
                        <div className="icon">📱</div>
                        <h3>Overal Beschikbaar</h3>
                        <p>Gebruik de app op smartphone, tablet of computer – thuis of onderweg.</p>
                    </div>
                    <div className="feature-block">
                        <div className="icon">📱</div>
                        <h3>Overal Beschikbaar</h3>
                        <p>Gebruik de app op smartphone, tablet of computer – thuis of onderweg.</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>© 2025 OuderenBuurtwacht – Samen sterk in de buurt</p>
            </footer>

            {showTopBtn && (
                <button
                    className="back-to-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Terug naar boven"
                >
                    <FaArrowUp className="arrow-icon" />
                    <span>Terug naar boven</span>
                </button>
            )}
        </div>
    );
}