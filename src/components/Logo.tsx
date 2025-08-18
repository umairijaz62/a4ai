import React from 'react';

interface A4AILogoProps {
  variant?: 'navbar' | 'footer';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const A4AILogo: React.FC<A4AILogoProps> = ({ 
  variant = 'navbar', 
  size = 'md',
  className = '' 
}) => {
  // Theme configurations
  const themes = {
    navbar: {
      container: 'bg-white',
      iconBg: 'bg-blue-50',
      iconBorder: 'border-blue-600',
      dots: 'bg-blue-600',
      decorative: 'border-blue-600',
      decorativeFill: 'bg-blue-600',
      text: 'text-blue-600',
      glow: 'bg-blue-600'
    },
    footer: {
      container: 'bg-transparent',
      iconBg: 'bg-white',
      iconBorder: 'border-white',
      dots: 'bg-blue-600',
      decorative: 'border-white',
      decorativeFill: 'bg-white',
      text: 'text-white',
      glow: 'bg-white'
    }
  };

  // Size configurations
  const sizes = {
    sm: {
      iconSize: 'w-8 h-8',
      iconBorder: 'border-2',
      centralDot: 'w-1.5 h-1.5',
      orbitalDots: 'w-0.5 h-0.5',
      decorativeRing: 'w-2 h-2 border',
      decorativeDot: 'w-1 h-1',
      textSize: 'text-2xl',
      spacing: 'space-x-2',
      decorativePos: '-top-0.5 -right-0.5',
      decorativePos2: '-bottom-1 -left-1'
    },
    md: {
      iconSize: 'w-10 h-10',
      iconBorder: 'border-2',
      centralDot: 'w-2 h-2',
      orbitalDots: 'w-1 h-1',
      decorativeRing: 'w-2.5 h-2.5 border',
      decorativeDot: 'w-1.5 h-1.5',
      textSize: 'text-3xl',
      spacing: 'space-x-2.5',
      decorativePos: '-top-0.5 -right-0.5',
      decorativePos2: '-bottom-1.5 -left-1.5'
    },
    lg: {
      iconSize: 'w-12 h-12',
      iconBorder: 'border-3',
      centralDot: 'w-2 h-2',
      orbitalDots: 'w-1 h-1',
      decorativeRing: 'w-3 h-3 border-2',
      decorativeDot: 'w-2 h-2',
      textSize: 'text-4xl',
      spacing: 'space-x-3',
      decorativePos: '-top-1 -right-1',
      decorativePos2: '-bottom-2 -left-2'
    }
  };

  const theme = themes[variant];
  const sizeConfig = sizes[size];

  return (
    <div className={`flex items-center justify-center h-10 p-8 ${theme.container} ${className}`}>
      <div className="relative">
        {/* Main logo container */}
        <div className={`flex items-center ${sizeConfig.spacing}`}>
          {/* Icon/Symbol */}
          <div className="relative">
            {/* Outer ring */}
            <div className={`${sizeConfig.iconSize} rounded-full ${sizeConfig.iconBorder} ${theme.iconBorder} flex items-center justify-center ${theme.iconBg}`}>
              {/* Inner elements representing AI/tech */}
              <div className="relative">
                {/* Central dot */}
                <div className={`${sizeConfig.centralDot} ${theme.dots} rounded-full`}></div>
                {/* Orbital dots */}
                <div className={`absolute -top-1 -left-1 ${sizeConfig.orbitalDots} ${theme.dots} rounded-full animate-pulse`}></div>
                <div className={`absolute -top-1 -right-1 ${sizeConfig.orbitalDots} ${theme.dots} rounded-full animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
                <div className={`absolute -bottom-1 -left-1 ${sizeConfig.orbitalDots} ${theme.dots} rounded-full animate-pulse`} style={{ animationDelay: '1s' }}></div>
                <div className={`absolute -bottom-1 -right-1 ${sizeConfig.orbitalDots} ${theme.dots} rounded-full animate-pulse`} style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className={`absolute ${sizeConfig.decorativePos} ${sizeConfig.decorativeRing} ${theme.decorative} rounded-full opacity-60`}></div>
            <div className={`absolute ${sizeConfig.decorativePos2} ${sizeConfig.decorativeDot} ${theme.decorativeFill} rounded-full opacity-40`}></div>
          </div>
          
          {/* Text */}
          <div className="flex flex-col">
            <h1 className={`${sizeConfig.textSize} font-bold ${theme.text} tracking-tight`}>
              A4AI
            </h1>
          </div>
        </div>
        
        {/* Subtle background glow effect */}
        <div className={`absolute inset-0 ${theme.glow} opacity-5 blur-xl rounded-full scale-150 -z-10`}></div>
      </div>
    </div>
  );
};

export default A4AILogo;