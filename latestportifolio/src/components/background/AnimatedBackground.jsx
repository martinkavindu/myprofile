
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedBackground = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <animated.div
      style={{
        ...props,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, from-teal-500 to-teal-300)',
        zIndex: -1,
      }}
      className="bg-gradient-to-r from-teal-500 to-teal-300 fixed inset-0"
    />
  );
};

export default AnimatedBackground;
