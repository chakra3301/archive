import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const buttonVariants = {
  primary:
    'bg-charcoal text-white hover:bg-dark-gray transition-colors shadow-subtle hover:shadow-soft',
  secondary:
    'bg-light-gray text-charcoal hover:bg-warm-gray border border-neutral-gray/20 transition-colors',
  ghost:
    'bg-transparent text-dark-gray hover:text-charcoal hover:bg-light-gray/50 transition-colors',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
