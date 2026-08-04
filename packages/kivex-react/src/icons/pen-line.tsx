import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const PenLine = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#a)"><path d="m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35a1 1 0 0 0-.19.28l-2.27 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .38-.26" /><path d="M12 21h9" /></g><defs><clipPath id="a"><rect width={24} height={24} /></clipPath></defs>
      </IconBase>
    );
  }
);

PenLine.displayName = 'PenLine';