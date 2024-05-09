import React, { useState, useRef } from 'react';
import './Slider.css'


const Slider = ({ images }) => {
    const [selectedImg, setSelectedImg] = useState(images[0]);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const thumbContainerRef = useRef(null);

    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - thumbContainerRef.current.offsetLeft); // Fare konumunu ayarlar
    };

    const onMouseMove = (e) => {
        if (isDragging) {
            e.preventDefault(); // Varsayılan olayı engeller
            const x = e.pageX - thumbContainerRef.current.offsetLeft;
            const walk = (x - startX) * 0.1; // Scroll hızını ayarlamak için çarpanı değiştirebilirsiniz
            thumbContainerRef.current.scrollLeft -= walk;
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const renderThumbnails = () => {
        return images.map((img, index) => (
            <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => setSelectedImg(img)}
                className={`thumb ${img === selectedImg ? 'active' : ''}`}
            />
        ));
    };

    return (
        <div className="slider">
            <div className="main-img">
                <img src={selectedImg} alt="Selected" className="fade-in" />
            </div>
            <div className="thumb-container" ref={thumbContainerRef}
                 onMouseDown={onMouseDown}
                 onMouseMove={onMouseMove}
                 onMouseUp={onMouseUp}
                 onMouseLeave={onMouseUp} // Fare konteynerdan çıkarsa kaydırmayı durdurur
            >
                {renderThumbnails()}
            </div>
        </div>
    );
};

export default Slider;