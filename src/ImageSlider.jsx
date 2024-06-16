import React, { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';

const images = [
  'https://via.placeholder.com/600x400',
  'https://via.placeholder.com/600x400',
  'https://via.placeholder.com/600x400'
];

const ImageSlider = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-50 mx-auto"
              src={image}
              alt={`Slide ${index}`}
              onClick={() => handleShow(image)}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <img src={selectedImage} alt="Selected" className="w-100" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageSlider;
