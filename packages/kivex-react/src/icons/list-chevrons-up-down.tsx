import { forwardRef } from 'react';
import { IconBase } from '../components/IconBase';
import type { IconProps } from '../types/IconProps';

export const ListChevronsUpDown = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="m14 8 3.25-2.9a.4.4 0 0 1 .5 0L21 8" /><path d="m14 16 3.25 2.9c.14.13.36.13.5 0L21 16" /><path d="M3 5h7" /><path d="M3 12h7" /><path d="M3 19h7" />
      </IconBase>
    );
  }
);

ListChevronsUpDown.displayName = 'ListChevronsUpDown';