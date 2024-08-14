import React from 'react';

interface ButtonProps {
  content: string;
  className?: string; // Optionnel, permet d'ajouter des classes supplémentaires
}

const Button: React.FC<ButtonProps> = ({ content, className }) => {
  return (
    <button className={`button ${className || ''}`}>
      {content}
    </button>
  );
}

export default Button;
