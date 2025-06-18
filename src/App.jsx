import React, {useEffect, useState} from "react";
import logo from "./assets/logo.png";
import {FaArrowUp} from "react-icons/fa";
import screenshot1 from './assets/screenshot1.png';
import screenshot2 from './assets/screenshot2.png';
import screenshot3 from './assets/screenshot3.png';

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
                <p className="tagline">Veilig zelfstandig, samen waakzaam.</p>
                <a href="#video" className="demo-button">Bekijk de demo</a>
            </header>

            <section className="section about">
                <h2>Over OuderenBuurtwacht</h2>
                <p className="about-text">
                    Veel ouderen wonen zelfstandig en zijn daardoor kwetsbaarder voor ongelukken, oplichting of sociaal
                    isolement. Zonder directe burenhulp of regelmatige check-ins blijven signalen vaak onopgemerkt.
                    OuderenBuurtwacht is er speciaal voor deze groep – ouderen die zelfstandig wonen, maar zich net iets
                    veiliger willen voelen dankzij betrokkenheid uit de buurt.
                </p>
            </section>

            <section className="section">
                <h2>Wat is OuderenBuurtwacht?</h2>
                <p className="description">
                    OuderenBuurtwacht is een eenvoudige en toegankelijke app die ouderen helpt zich veiliger te voelen
                    in hun eigen woonomgeving. De app maakt het mogelijk om ervaringen en
                    signalen te delen – bijvoorbeeld over oplichters aan de deur, onbekende personen in de straat of
                    andere onprettige situaties – en om meldingen van buurtgenoten te bekijken.

                    <br/><br/>
                    De app is speciaal ontworpen voor én samen met ouderen. De interface is bewust simpel gehouden, met
                    grote knoppen, herkenbare termen en een rustige vormgeving. Dit maakt het gebruik intuïtief, ook
                    voor mensen met weinig digitale ervaring.
                    <br/><br/>
                    Met OuderenBuurtwacht maken we alertheid eenvoudiger en zelfstandig
                    wonen een stukje veiliger. Samen waakzaam, gewoon via een druk op de knop.
                </p>
                <div className="video-wrapper" id="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BSSJq59iJXM?si=Zgup3yrb_u7kaMvh"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
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
                        <img src={screenshot1} alt="Overzicht scherm"/>
                        <p className="caption">Duidelijk startscherm</p>
                    </div>
                    <div className="screenshot-card">
                        <img src={screenshot2} alt="Melding scherm"/>
                        <p className="caption">Meldingen in uw buurt in een lijst</p>
                    </div>
                    <div className="screenshot-card">
                        <img src={screenshot3} alt="Afspraak plannen"/>
                        <p className="caption">Maak gemakkelijk een melding</p>
                    </div>
                </div>
            </section>

            <section className="section features">
                <h2>Belangrijkste functies</h2>
                <div className="features-grid">

                    <div className="feature-block">
                        <div className="icon">⚡</div>
                        <h3>Snel & Eenvoudig</h3>
                        <p>De app is binnen enkele minuten te begrijpen en gebruiken – ook voor mensen met weinig
                            digitale ervaring.</p>
                    </div>

                    <div className="feature-block">
                        <div className="icon">🧭</div>
                        <h3>Duidelijke Navigatie</h3>
                        <p>Grote knoppen, duidelijke termen en een rustig ontwerp maken alles makkelijk vindbaar en
                            bruikbaar.</p>
                    </div>

                    <div className="feature-block">
                        <div className="icon">🗺️</div>
                        <h3>Kaart & Lijstweergave</h3>
                        <p>Bekijk meldingen van uzelf en anderen in een overzichtelijke lijst of op een interactieve
                            kaart.</p>
                    </div>

                    <div className="feature-block">
                        <div className="icon">📖</div>
                        <h3>Altijd Hulp Bij de Hand</h3>
                        <p>Twijfelt u? In de app vindt u altijd een heldere uitleg terug over hoe alles werkt.</p>
                    </div>

                </div>
            </section>


            <footer className="footer">
                <p>© 2025 OuderenBuurtwacht – Veilig zelfstandig, samen waakzaam.</p>
            </footer>

            {showTopBtn && (
                <button
                    className="back-to-top"
                    onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                    aria-label="Terug naar boven"
                >
                    <FaArrowUp className="arrow-icon"/>
                    <span>Terug naar boven</span>
                </button>
            )}
        </div>
    );
}