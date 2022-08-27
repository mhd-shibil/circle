import React from 'react';
import { ButtonType } from './types';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  className?: string;
  children: React.ReactNode;
}

const ButtonStyles = {
  [ButtonType.BLUE]: 'bg-PRIMARY_BLUE text-white',
  [ButtonType.GREY]: 'bg-SECONDARY_GREY text-PRIMARY_BLUE',
  [ButtonType.TRANSPARENT_BLACK]: 'bg-transparent text-[#2D2D2D] border border-[#575757]',
  [ButtonType.TRANSPARENT_BLUE]: 'bg-transparent text-[##3E63E5] border border-[#3E63E5]',
  [ButtonType.CUSTOM]: ''
  // For Custom Color, BG and Border
};

const commonButtonStyles = 'py-2.5 px-4 rounded-full text-[15px] leading-5 flex justify-center';

const Button: React.FC<ButtonProps> = ({ className = '', type = ButtonType.CUSTOM, children, ...rest }) => (
  <button {...rest} type='button' className={`${commonButtonStyles} ${ButtonStyles[type]} ${className}`}>
    {children}
  </button>
);

export default Button;
