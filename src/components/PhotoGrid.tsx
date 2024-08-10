import React, { useEffect, useState } from 'react';

const PhotoGrid = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [secondsLeft, setSecondsLeft] = useState<number>(10); // Countdown starts from 10 seconds

  useEffect(() => {
    const fetchPhotos = () => {
      const newPhotos = Array.from({ length: 9 }, () =>
        `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`
      );
      setPhotos(newPhotos);
      setSecondsLeft(10); // Reset countdown when photos are refreshed
    };

    fetchPhotos();
    const intervalId = setInterval(fetchPhotos, 10000); // Refresh photos every 10 seconds

    // Interval to update the countdown every second
    const countdownInterval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(countdownInterval); // Clear the countdown interval on component unmount
    };
  }, []);

  return (
    <div>
      <h2>Photo Gallery (seconds left: {secondsLeft})</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {photos.map((photo, index) => (
          <img style={{ borderRadius: '20px', height: '100px' }} key={index} src={photo} alt="Random Picsum Pic" />
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
