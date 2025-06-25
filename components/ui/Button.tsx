import React, { ReactNode } from 'react';

interface Props {
  text?: string;
  link?: string;
  size?: 'small' | 'medium';
  hover?: boolean;
  children?: ReactNode;
}

const Button = ({ text, size = 'medium', children }: Props) => {
  const smallStyle = 'h-10 px-4 text-[13px]';
  const mediumStyle = 'h-12 px-8 md:text-base text-[13px] font-light';

  return (
    <button
      className={`bg-transparent text-primary border border-primary btn-hover-effect transition-all duration-150 ease-in rounded ${size === 'small' ? smallStyle : mediumStyle}`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
