import React, { useState, useRef } from 'react';
import './Slider.css';

const Slider = ({ images }) => {
    const [selectedImg, setSelectedImg] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0); // Yeni eklenen state
    const thumbContainerRef = useRef(null);

    const nextImage = () => {
        const nextIndex = currentIndex + 1 < images.length ? currentIndex + 1 : 0;
        setCurrentIndex(nextIndex);
        setSelectedImg(images[nextIndex]);
        thumbContainerRef.current.children[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    const prevImage = () => {
        const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : images.length - 1;
        setCurrentIndex(prevIndex);
        setSelectedImg(images[prevIndex]);
        thumbContainerRef.current.children[prevIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    const selectImage = (img, index) => {
        setSelectedImg(img);
        setCurrentIndex(index);
    };

    const renderThumbnails = () => {
        return images.map((img, index) => (
            <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => selectImage(img, index)}
                className={`thumb ${img === selectedImg ? 'active' : ''}`}
            />
        ));
    };

    return (
        <div className="slider">
            <div className="main-img">
                <img src={selectedImg} alt="Selected" className="fade-in" />
            </div>  
            <div className="thumb-container" ref={thumbContainerRef}>
                {renderThumbnails()}
            </div>
        </div>
    );
};

export default Slider;