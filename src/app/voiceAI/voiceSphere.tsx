import React, { useEffect } from 'react';

const SphereAnimation = () => {

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
            <div className="content">

                <svg
                    width="72"
                    height="72"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.9998 25.3333V28M15.9998 25.3333C11.0955 25.3333 8.19552 22.3268 6.68555 20M15.9998 25.3333C20.9041 25.3333 23.804 22.3268 25.314 20M21.3331 9.33333V14.6667C21.3331 17.6122 18.9453 20 15.9998 20C13.0543 20 10.6664 17.6122 10.6664 14.6667V9.33333C10.6664 6.38781 13.0543 4 15.9998 4C18.9453 4 21.3331 6.38781 21.3331 9.33333Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="square"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default SphereAnimation;
