import React, { useId } from "react"; // Importa React y el hook useId

// Componente funcional que recibe width, height, y otras props
const DobleCircleBackground = ({ width, height, ...props }) => {
  let id = useId(); // Genera un ID único para el componente usando useId
  return (
    // Aplica todas las props al div contenedor
    <div {...props}>
      <svg
        viewBox={`0 0 ${width} ${height}`} // Define el tamaño del SVG
        fill="none" // No rellena el SVG por defecto
        aria-hidden="true" // Oculta el SVG de tecnologías de accesibilidad
        className="absolute inset-0 h-full w-full animate-spin-slow" // Estilo del SVG, ocupando todo el contenedor y animándose lentamente
      >
        <path
          d={`M${width} ${height / 2}
          c0 ${0.275 * height} -${0.225 * width} ${0.5 * height} -${0.5 * width} ${0.5 * height}
          S1 ${0.775 * height} 1 ${height / 2}
          ${0.225 * width} 1 ${width / 2} 1
          s${0.5 * width} ${0.225 * height} ${0.5 * width} ${0.5 * height}
          Z`}
          stroke="#D4D4D4" // Color del trazo
          strokeOpacity="0.7" // Opacidad del trazo
        />
        <path
        
          d={`  M${width / 2} ${height}
          C${0.225 * width} ${height} 1 ${0.775 * height} 1 ${height / 2}`}
          stroke={`url(#${id}-gradient-1)`} // Aplica el gradiente usando el ID único
          strokeLinecap="round" // Define los extremos del trazo como redondeados
        />
        <defs>
          {/* Define un gradiente lineal */}
          <linearGradient
            id={`${id}-gradient-1`} // ID único para el gradiente
            x1="1" // Coordenada x inicial del gradiente
            y1={height * 0.5} // Coordenada y inicial del gradiente
            x2="1" // Coordenada x final del gradiente
            y2={height} // Coordenada y final del gradiente
            gradientUnits="userSpaceOnUse" // Unidades del gradiente
          >
            <stop stopColor="#06b6d4" /> 
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" /> 
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox={`0 0 ${width} ${height}`} // Define el tamaño del SVG
        fill="none" // No rellena el SVG por defecto
        aria-hidden="true" // Oculta el SVG de tecnologías de accesibilidad
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower" // Estilo del SVG, ocupando todo el contenedor y animándose en reversa lentamente
      >
        <path
          d={` M${0.9 * width} ${height / 2}
          c0 ${0.22 * height} -${0.18 * width} ${0.4 * height} -${0.4 * width} ${0.4 * height}
          S${0.1 * width} ${0.72 * height} ${0.1 * width} ${height / 2}
          s${0.18 * width} -${0.4 * height} ${0.4 * width} -${0.4 * height} ${0.4 * width} ${0.18 * height} ${0.4 * width} ${0.4 * height}
          Z`}
          stroke="#D4D4D4" // Color del trazo
          strokeOpacity="0.7" // Opacidad del trazo
        />
        <path
          d={` M${0.9 * width} ${height / 2}
          c0 ${0.22 * height} -${0.18 * width} ${0.4 * height} -${0.4 * width} ${0.4 * height}`}
          stroke={`url(#${id}-gradient-2)`} // Aplica el gradiente usando el ID único
          strokeLinecap="round" // Define los extremos del trazo como redondeados
        />
        <defs>
          {/* Define un gradiente lineal */}
          <linearGradient
            id={`${id}-gradient-2`} // ID único para el gradiente
            x1={width * 0.9} // Coordenada x inicial del gradiente
            y1={height * 0.5} // Coordenada y inicial del gradiente
            x2={width * 0.9} // Coordenada x final del gradiente
            y2={height * 0.9} // Coordenada y final del gradiente
            gradientUnits="userSpaceOnUse" // Unidades del gradiente
          >
            <stop stopColor="#06b6d4" /> 
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" /> 
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DobleCircleBackground; // Exporta el componente para su uso en otros archivos

