import React from 'react';
import BookNowButton from './BookNowButton';
import './GalleryPage.css';
import photo3 from './images/bg.jpg';
import photo4 from './images/ab1.jpg';
import photo5 from './images/bg.jpg';
import photo6 from './images/ab1.jpg';

const GalleryPage = () => {
    const images = [
        { src: photo3, alt: 'Scenic landscape' },
        { src: photo4, alt: 'Portrait session' },
        { src: photo5, alt: 'Candid moment' },
        { src: photo6, alt: 'Sunset scene' },
        { src: photo3, alt: 'Another landscape' },
        { src: photo4, alt: 'Another portrait' },
        { src: photo5, alt: 'Another candid moment' },
        { src: photo6, alt: 'Another sunset' }
    ];

    return (
        <div className="gallery-page">
            <div className="gallery-section">
                <h2>Extensive Gallery</h2>
                <h3>A Collection of Memorable Moments</h3>
                <div className="gallery-detailed-grid">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-detailed-item glass-effect">
                            <div className="gallery-image-container">
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="booking-section">
                <h2>Book Your Photoshoot</h2>
                <p>Schedule your professional photography session with Marvel Snaps Studio</p>
                <BookNowButton />
            </div>
        </div>
    );
};

export default GalleryPage; 