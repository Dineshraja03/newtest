import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import BookingPopup from './BookingPopup';
import photo3 from './images/bg.jpg';
import photo4 from './images/ab1.jpg';
import photo5 from './images/bg.jpg';
import photo6 from './images/ab1.jpg';

const galleryImages = [
    { src: photo3, alt: "A scenic landscape" },
    { src: photo4, alt: "A family portrait" },
    { src: photo5, alt: "A candid shot of friends" },
    { src: photo6, alt: "A beautiful sunset" },
    { src: photo6, alt: "A beautiful sunset" },
    { src: photo3, alt: "A scenic landscape" },
    { src: photo4, alt: "A family portrait" },
    { src: photo5, alt: "A candid shot of friends" },
    { src: photo6, alt: "A beautiful sunset" },
    { src: photo6, alt: "A beautiful sunset" },
];

const Gallery = () => {
    const [displayCount, setDisplayCount] = useState(galleryImages.length);
    const [isPopupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setDisplayCount(4);
            } else {
                setDisplayCount(galleryImages.length);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="gallery-section">
                <h2>Gallery</h2>
                <h3>Moments that speaks</h3>
                <div className="gallery-grid">
                    {galleryImages.slice(0, displayCount).map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} />
                    ))}
                </div>
                <Link to="/gallery" className="more-to-see-button">More to see</Link>
            </div>
            
            <BookingPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
            
            <div className="book-now-section">
                <h2>Book Your Photoshoot</h2>
                <p>Schedule your professional photography session with Marvel Snaps Studio</p>
                <button className="book-now-btn" onClick={() => setPopupOpen(true)}>Book Now</button>
            </div>
        </>
    );
};

export default Gallery; 