import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './components/Home';
import About from './components/About';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import Gallery from './components/Gallery';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import './App.css';
import AdminPanel from './components/AdminPanel';

function HomePage() {
    return (
        <>
            <Home />
            <About />
            <Services />
            <Gallery />
        </>
    );
}

function App() {
    return (
        <Router>
            <ErrorBoundary>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/services" component={ServicesPage} />
                        <Route path="/gallery" component={GalleryPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/admin" component={AdminPanel} />
                    </Switch>
                    <Footer />
                    
                    {/* Floating Icons */}
                    <div className="floating-icons">
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
                            <FaWhatsapp size={30} />
                        </a>
                        <a href="tel:+1234567890" className="icon phone">
                            <FaPhone size={30} />
                        </a>
                    </div>
                </div>
            </ErrorBoundary>
        </Router>
    );
}


export default App; 