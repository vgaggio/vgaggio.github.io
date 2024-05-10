import { useId } from "react";
import React from "react";

const LineBackground = ({ color1, color2, width = 558, height = 558, ...props }) => {
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
          stroke-width: 8; /* Ajusta el ancho de la línea según sea necesario */
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
          x1="0"
          y1="0"
          x2={width}
          y2={height}
          gradientUnits="userSpaceOnUse"
        >
          {/* Define dos paradas de color */}
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
      <path
        d={`M0 ${height / 3} H${width}`} // Ajusta la coordenada y del inicio de la línea para hacerla más ancha en relación con el eje y
        stroke={`url(#${id})`}
        strokeLinecap="round"
        className="line-background" // Agrega una clase para aplicar el estilo de la línea
      />
    </svg>
  );
};

export default LineBackground;





