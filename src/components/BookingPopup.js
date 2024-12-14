import React, { useState } from 'react';
import './BookingPopup.css';
import ab1 from './images/ab1.jpg';
import photo2 from './images/bg.jpg';
import PhotoSelectionPopup from './PhotoSelectionPopup';

const BookingPopup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        serviceType: 'Wedding Photography',
        selectedPhotos: [],
        message: ''
    });

    const [showPhotoSelection, setShowPhotoSelection] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Construct WhatsApp message
        const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ADate: ${formData.date}%0AService Type: ${formData.serviceType}%0ASelected Photos: ${formData.selectedPhotos.join(', ')}%0AMessage: ${formData.message}`;
        
        // Replace with your WhatsApp number
        const phoneNumber = '9344913761'; // Example: '1234567890' (without +)
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // Open WhatsApp
        window.open(whatsappLink, '_blank');
        onClose(); // Close the booking popup after sending
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const togglePhotoSelection = (photo) => {
        setFormData(prevState => {
            const selectedPhotos = prevState.selectedPhotos.includes(photo)
                ? prevState.selectedPhotos.filter(p => p !== photo)
                : [...prevState.selectedPhotos, photo].slice(0, 3);
            return { ...prevState, selectedPhotos };
        });
    };

    if (!isOpen) return null;

    const photoPaths = {
        ab1: ab1,
        photo2: photo2
    };

    return (
        <div className="booking-popup-overlay">
            <div className="booking-popup">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Book Your Photoshoot</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Preferred Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceType">Service Type:</label>
                        <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                        >
                            <option value="Wedding Photography">Wedding Photography</option>
                            <option value="Event Videography">Event Videography</option>
                            <option value="Portrait Sessions">Portrait Sessions</option>
                            <option value="Corporate Photography">Corporate Photography</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="selectedPhoto">Select Photos from Gallery:</label>
                        <div className="custom-dropdown">
                            <div className="selected-photo" onClick={() => setShowPhotoSelection(true)}>
                                {formData.selectedPhotos.length > 0 ? (
                                    formData.selectedPhotos.join(', ')
                                ) : (
                                    <span>--Select Photos--</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Additional Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send to WhatsApp</button>
                </form>
            </div>
            <PhotoSelectionPopup 
                isOpen={showPhotoSelection} 
                onClose={() => setShowPhotoSelection(false)} 
                photoPaths={photoPaths} 
                selectedPhotos={formData.selectedPhotos} 
                togglePhotoSelection={togglePhotoSelection} 
            />
        </div>
    );
};

export default BookingPopup; 