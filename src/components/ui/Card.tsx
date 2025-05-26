import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'solid';
  hover?: boolean;
  onClick?: () => void;
}
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  onClick
}) => {
  const baseStyles = 'rounded-xl overflow-hidden';
  const variantStyles = {
    default: 'bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/5',
    glass: 'bg-white/5 backdrop-blur-md border border-white/20 shadow-xl shadow-black/5',
    solid: 'bg-dark-200 border border-dark-100 shadow-xl shadow-black/10'
  };
  const hoverStyles = hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl' : '';
  return <div className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${hoverStyles}
        ${className}
      `} onClick={onClick}>
      {children}
    </div>;
};
export default Card;