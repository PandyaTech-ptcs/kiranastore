import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const reviews = [
  {
    imageUrl: 'url1',
    title: 'Title 1',
    content: 'Content 1',
    author: 'Author 1'
  },
  {
    imageUrl: 'url2',
    title: 'Title 2',
    content: 'Content 2',
    author: 'Author 2'
  },
  {
    imageUrl: 'url3',
    title: 'Title 3',
    content: 'Content 3',
    author: 'Author 3'
  },
  {
    imageUrl: 'url4',
    title: 'Title 4',
    content: 'Content 4',
    author: 'Author 4'
  }
];

const ReviewCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 10000); // 10 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={reviews[index].imageUrl}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title style={{ marginBottom: '0.5rem' }}>{reviews[index].title}</Card.Title>
        <Card.Text>{reviews[index].content}</Card.Text>
        <Card.Text>
          <small className="text-muted">{reviews[index].author}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
