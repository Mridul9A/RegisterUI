import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaGithub,
    FaTiktok,
    FaSnapchat,
    FaPinterest,
    FaWhatsapp,
    FaReddit,
    FaDribbble,
    FaBehance,
    FaMedium,
    FaSlack,
    FaDiscord,
} from "react-icons/fa";
import './styles/ClientAndMedia.css';

const ICONS = [
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaGithub,
    FaTiktok,
    FaSnapchat,
    FaPinterest,
    FaWhatsapp,
    FaReddit,
    FaDribbble,
    FaBehance,
    FaMedium,
    FaSlack,
    FaDiscord,
];

const ClientAndMedia = () => {
    const floatingIcons = Array.from({ length: 30 }, (_, i) => {
        const IconComponent = ICONS[i % ICONS.length];
        return (
            <IconComponent
                key={i}
                className="floating-icon"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${6 + Math.random() * 4}s`,
                }}
            />
        );
    });

    return (
        <>
            <div className="content-container">
                <h1 className="client-title">Our Happy Clients</h1>
                <p className="client-description">
                    We are proud to work with top-tier brands, offering innovative solutions tailored to their unique needs. Join us in making a difference!
                </p>
            </div>
            <section className="client-and-media">
                <div className="floating-icons-container">{floatingIcons}</div>
            </section>
            <div className="bottom3">
                <button>See All</button>
            </div>
        </>
    );
};

export default ClientAndMedia;
