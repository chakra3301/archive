import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent';
  children: React.ReactNode;
}

const badgeVariants = {
  default: 'bg-light-gray text-dark-gray border-neutral-gray/30',
  accent: 'bg-warm-gray text-charcoal border-neutral-gray/50',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium rounded-full border transition-colors hover:scale-105',
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
