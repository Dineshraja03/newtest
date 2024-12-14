import React from 'react';
import BookNowButton from './BookNowButton';
import './ServicesPage.css';
import weddingImage from './images/service.jpg';

// Data for the services offered
const servicesData = [
    { 
        name: 'Wedding Photography', 
        description: 'Capture the magic of your special day with our comprehensive wedding photography packages.',
        image: weddingImage 
    },
    { 
        name: 'Event Videography', 
        description: 'Professional video coverage that tells the story of your most important moments.',
        image: weddingImage 
    },
    { 
        name: 'Portrait Sessions', 
        description: 'Personalized photo shoots that bring out your unique personality and style.',
        image: weddingImage 
    },
    { 
        name: 'Corporate Photography', 
        description: 'Professional imagery that represents your brand and corporate identity.',
        image: weddingImage 
    }
];

const ServicesPage = () => {
    return (
        <div className="services-page">
            <div className="services">
                <h2>Our Comprehensive Services</h2>
                <div className="services-detailed-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-detailed-block glass-effect">
                            <img src={service.image} alt={service.name} className="service-detailed-image" />
                            <div className="service-detailed-content">
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="booking-card">
                <h2>Book Your Photoshoot</h2>
                <p>Schedule your professional photography session with Marvel Snaps Studio</p>
                <BookNowButton />
            </div>
        </div>
    );
};

export default ServicesPage; 