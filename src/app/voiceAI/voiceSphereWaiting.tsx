import React, { useEffect } from 'react';

const SphereWaiting = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `


      @keyframes smoke {
        0% { opacity: 0.4; }
        50% { opacity: 0.8; }
        100% { opacity: 0.4; }
      }

      @keyframes wave {
        0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0.4; }
        50% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
        100% { transform: translate(-50%, -50%) scale(0.3); opacity: 0.4; }
      }

      .sphere {
        position: relative;
        width: 10rem;
        height: 10rem;
        background: radial-gradient(circle, rgba(177, 215, 237, 0.3) 50%, #AAD7DC 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        animation: move-up-down 3s infinite ease-in-out, bubble 3s infinite ease-in-out;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.5);
      }

      .smoke {
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%);
        animation: smoke 3s infinite ease-in-out;
      }

      .wave, .inner-wave {
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: transparent;
        border-radius: 50%;
      }

      .wave {
        animation: wave 1.5s infinite ease-in-out;
      }

      .inner-wave {
        animation: wave 2s infinite ease-in-out reverse;
      }

      .content {
        color: #fff;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const generateWaves = () =>
    [...Array(6)].map((_, i) => (
      <div
        key={i}
        className="wave"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random()}s`
        }}
      ></div>
    ));

  const generateInnerWaves = () =>
    [...Array(3)].map((_, i) => (
      <div
        key={i}
        className="inner-wave"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random()}s`
        }}
      ></div>
    ));

  return (
    <div className="sphere">
      <div className="smoke"></div>
      {generateWaves()}
      {generateInnerWaves()}
      <div className="flex absolute space-x-2 top-1/2 transform -translate-y-1/2">
              <div className="w-[20px] h-[20px] rounded-full bg-[#b2d7ed] animate-bounce-up-1"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-[#c0e3de] animate-bounce-up-2"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-[#cfeedf] animate-bounce-up-3"></div>
            </div>
      </div>
  );
};

export default SphereWaiting;
