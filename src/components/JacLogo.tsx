import React from 'react';

interface JacLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const JacLogo: React.FC<JacLogoProps> = ({ className = '', size = 56, showText = false }) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/nuevo simple.png"
        onError={(e) => {
          // Fallback if needed
          const target = e.currentTarget;
          if (target.src !== '/logo_jac.svg') {
            target.src = '/logo_jac.svg';
          }
        }}
        alt="Logo JAC Barrio Nuevo Achí"
        width={size}
        height={size}
        className="rounded-full bg-white shadow-sm border border-amber-400 p-0.5 object-contain flex-shrink-0"
      />
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-bold text-xs md:text-sm tracking-wide text-white uppercase font-['Montserrat',sans-serif]">
            JAC BARRIO NUEVO ACHÍ
          </span>
          <span className="text-[11px] text-amber-300 font-medium">
            Achí, Bolívar • Personería Res. 768 / 410
          </span>
        </div>
      )}
    </div>
  );
};
