import { useState, useEffect, SetStateAction } from 'react';

const CircleMove = () => {
  const [mouseX, setMouseX] = useState(window.innerWidth / 2);
  const [mouseY, setMouseY] = useState(window.innerHeight / 2);
  const [circle, setCircle] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    w: 48,
    h: 48
  });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: SetStateAction<number>; clientY: SetStateAction<number>; }) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(move, 1000 / 60);
    return () => clearInterval(intervalId);
  }, []);

  const move = () => {
    setCircle(prevCircle => ({
      ...prevCircle,
      x: lerp(prevCircle.x, mouseX, 0.1),
      y: lerp(prevCircle.y, mouseY, 0.1)
    }));
  };

  const lerp = (start: number, end: number, amt: number) => {
    return (1 - amt) * start + amt * end;
  };

  const circleStyle = {
    position: 'absolute',
    width: `${circle.w}px`,
    height: `${circle.h}px`,
    transform: `translate3d(${circle.x - circle.w / 2}px, ${circle.y - circle.h / 2}px, 0)`
  };

  return (
    <div id="circle">
      {/* Your circle component */}
    </div>
  );
};

export default CircleMove;
