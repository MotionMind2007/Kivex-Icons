import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const Heart = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#a)"><path d="m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16c.1.1.27.1.38 0l8.1-7.16a5.07 5.07 0 1 0-7.06-7.25L12.04 7.7z" /></g><defs><clipPath id="a"><rect width={24} height={24} /></clipPath></defs>
      </IconBase>
    );
  }
);

Heart.displayName = 'Heart';