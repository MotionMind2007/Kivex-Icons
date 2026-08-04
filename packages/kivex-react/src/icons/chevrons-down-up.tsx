import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ChevronsDownUp = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m7 4 4.7 4.87a.4.4 0 0 0 .6 0L17 4" /><path d="m7 20 4.65-4.65c.2-.2.5-.2.7 0L17 20" />
      </IconBase>
    );
  }
);

ChevronsDownUp.displayName = 'ChevronsDownUp';