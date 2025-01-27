import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: 'Shekhar Jain',
        client: 'Tax Management Client',
        description: 'It was a nice experience getting all my tax matters verified and handled through Divy. Certainly a man to trust with your financials!',
        rating: 5
    },
    {
        name: 'Ashish Gupta',
        client: 'Income Tax Client',
        description: "It's my pleasure to endorse Divy for his prompt services involving planning, managing and filing my Taxes.",
        rating: 5
    },
    {
        name: 'Shraddha Mobiles',
        client: 'Audit Client',
        description: 'Divy not only helped us with his Auditing services but also came up with queries and errors in previous reports, helping us to revise our returns and obtain refunds.',
        rating: 5
    }
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    };

    const cardStyle = {
        backgroundColor: '#f9f9f9',
        borderRadius: '20px',
        padding: '30px',
        textAlign: 'center',
        boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
        width: '100%',
        position: 'relative',
    };

    const starStyle = {
        color: '#FFD700',
        fontSize: '20px',
        marginBottom: '15px',
    };

    const arrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        padding: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        zIndex: 1,
    };

    const leftArrowStyle = {
        ...arrowStyle,
        left: '-40px',
    };

    const rightArrowStyle = {
        ...arrowStyle,
        right: '-40px',
    };

    const dotsContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        gap: '10px',
    };

    const dotStyle = (isActive) => ({
        width: '12px',
        height: '12px',
        backgroundColor: isActive ? '#007bff' : '#ccc',
        borderRadius: '50%',
        cursor: 'pointer',
    });

    const avatarStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#e0e0e0',
        margin: '0 auto 15px',
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Testimonials</h2>
            <span style={{ color: '#666', marginBottom: '20px' }}>Client Feedback</span>

            <div style={cardStyle}>
                <button onClick={prevSlide} style={leftArrowStyle}>
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} style={rightArrowStyle}>
                    <ChevronRight size={24} />
                </button>

                <div style={avatarStyle}></div>

                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{testimonials[currentIndex].name}</p>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>{testimonials[currentIndex].client}</p>
                </div>
                <div style={starStyle}>
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => '★')}
                </div>
                <p style={{ fontStyle: 'italic', fontSize: '1rem', marginBottom: '15px' }}>
                    "{testimonials[currentIndex].description}"
                </p>
            </div>

            <div style={dotsContainerStyle}>
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        style={dotStyle(currentIndex === index)}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
