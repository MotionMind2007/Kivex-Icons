import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const CreditCard = forwardRef<SVGSVGElement, IconProps>(
  (
    { 
  
        size = 24, 
        color = 'currentColor', 
        strokeWidth = 2,
        ...props
        },
        ref
  ) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        {...props}
      >
        <path d="M2 10v7c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-7M2 10V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3M2 10h20" />
      </IconBase>
    );
  }
);

CreditCard.displayName = 'CreditCard';