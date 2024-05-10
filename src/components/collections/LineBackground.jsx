import React from "react";
import { useId } from "react";

const LineBackground = ({ color1, color2, width, height, ...props }) => {
  let id = useId();

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <style>
        {`
        .line-background {
          stroke-width: 2; /* Ajusta el ancho de la línea según sea necesario */
        }

        /* Define la animación del gradiente */
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%; /* Posición inicial del gradiente */
          }
          100% {
            background-position: 100% 50%; /* Posición final del gradiente */
          }
        }

        /* Aplica la animación al gradiente */
        linearGradient {
          animation: moveGradient 5s infinite linear;
        }
        `}
      </style>
      <defs>
        <linearGradient
          id={id}
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          gradientUnits="userSpaceOnUse"
        >
          {/* Define dos paradas de color */}
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
      <path
        d={`M${width / 4} ${height / 2} H${(width * 3) / 4}`} // Mueve la línea desde el cuarto izquierdo hasta el cuarto derecho del ancho
        stroke={`url(#${id})`}
        strokeLinecap="round"
        className="line-background" // Agrega una clase para aplicar el estilo de la línea
      />
    </svg>
  );
};

export default LineBackground;






